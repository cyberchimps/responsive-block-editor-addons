const { __ } = wp.i18n;

const {
    Fragment,
    Component
} = wp.element;
const { select, subscribe } = wp.data;

class TableOfContents extends React.Component {

	constructor(props) {
        super(props);
        this.state = {
            headers: props.headers,
            unsubscribe: null
        };
    }

	componentDidMount() {

        // ---------- Responsive conditions (editor preview) ----------
        // In editor, blocks hidden via responsive conditions are shown with low opacity.
        // For TOC, we exclude such headings for the current preview device (Desktop/Tablet/Mobile),
        // and also respect hidden parents (e.g. core/heading inside a container hidden on mobile).
        const normalizeDeviceType = (deviceType) => {
            const device = String(deviceType || '').toLowerCase();
            if (device === 'tablet') return 'tablet';
            if (device === 'mobile') return 'mobile';
            return 'desktop';
        };

        const getPreviewDeviceType = () => {
            try {
                const editorStore = select('core/editor');
                const deviceType = editorStore?.getDeviceType?.();
                if (deviceType) return normalizeDeviceType(deviceType);
            } catch (e) {}

            try {
                const editPostStore = select('core/edit-post');
                const deviceType = editPostStore?.__experimentalGetPreviewDeviceType?.();
                if (deviceType) return normalizeDeviceType(deviceType);
            } catch (e) {}

            return 'desktop';
        };

        const isHiddenByResponsiveConditions = (attributes, deviceType) => {
            const isOn = responsive_globals?.is_responsive_conditions_on ?? 1;
            if (!isOn || !attributes) return false;
            if (deviceType === 'mobile') return !!attributes.hideWidgetMobile;
            if (deviceType === 'tablet') return !!attributes.hideWidgetTablet;
            return !!attributes.hideWidget;
        };

        const isBlockHiddenOnDevice = (block, deviceType) => {
            if (!block) return false;

            if (isHiddenByResponsiveConditions(block.attributes, deviceType)) return true;

            try {
                const blockEditorStore = select('core/block-editor');
                const parentClientIds = blockEditorStore.getBlockParents?.(block.clientId) || [];
                for (const parentClientId of parentClientIds) {
                    const parentBlock = blockEditorStore.getBlock?.(parentClientId);
                    if (parentBlock && isHiddenByResponsiveConditions(parentBlock.attributes, deviceType)) {
                        return true;
                    }
                }
            } catch (e) {}

            return false;
        };

        const getAllChildHeadingBlocks = parentBlock => {
            let childs = [];
            parentBlock.innerBlocks.forEach(childBlock => {
                if (childBlock.name === 'responsive-block-editor-addons/advanced-heading' || childBlock.name === 'core/heading') {
                    childs.push(childBlock);
                }
                if (childBlock.innerBlocks.length > 0) {
                    childs.push(...getAllChildHeadingBlocks(childBlock));
                }
            });
            return childs;
        };
        const getsHeadingBlocks = () => {
    let targetBlocks = [];
    const deviceType = getPreviewDeviceType();
    const allBlocks = select('core/block-editor').getBlocks();

    // helper: push this block if it's a heading; otherwise pull any descendants via your existing recursion
    const pushIfHeadingOrDesc = (blk) => {
        if (isBlockHiddenOnDevice(blk, deviceType)) {
            return false;
        }
        if (
            blk.name === 'responsive-block-editor-addons/advanced-heading' ||
            blk.name === 'core/heading'
        ) {
            targetBlocks.push(blk);
            return true;
        }
        if (blk.innerBlocks && blk.innerBlocks.length > 0) {
            const childHeadingBlocks = getAllChildHeadingBlocks(blk);
            if (childHeadingBlocks.length > 0) {
                targetBlocks.push(...childHeadingBlocks.filter((child) => !isBlockHiddenOnDevice(child, deviceType)));
                return true;
            }
        }
        return false;
    };

    // 1) existing: scan current root blocks
    allBlocks.forEach(pushIfHeadingOrDesc);

    // 2) NEW: if nothing found, go ONE LEVEL deeper for the FIRST root block only (widget editor case)
    if (targetBlocks.length === 0 && allBlocks.length) {
        const firstRoot = allBlocks[0];
        // Ask the store for its immediate children (don’t rely on firstRoot.innerBlocks)
        const firstChildren = select('core/block-editor').getBlocks(firstRoot.clientId) || [];
        firstChildren.forEach(pushIfHeadingOrDesc);
    }

    return targetBlocks;
};

        const setHeaders = () => {
            let headings = getsHeadingBlocks().map(header => header.attributes);
            headings.forEach((heading, key) => {
                if(heading.headingTitle !== undefined) {
                    heading.anchor =
                    `${key + 1}-` +
                    heading.headingTitle
                        ?.toString()
                        .toLowerCase()
                        ?.replace(/( |<.+?>|&nbsp;)/g, "-")
                }else {
                    heading.anchor =
                    `${key + 1}-` +
                    heading.content
                    ?.toString()
                    .toLowerCase()
                    ?.replace(/( |<.+?>|&nbsp;)/g, "-");
                }
                heading.anchor = encodeURIComponent(
                    heading.anchor?.replace(
                        /[^\w\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s-]/g,
                        ""
                    )
                );
            });
            if (JSON.stringify(headings) !== JSON.stringify(this.state.headers)) {
                this.setState({ headers: headings });
            }
        };
        setHeaders();

        const unsubscribe = subscribe(_ => setHeaders());
        this.setState({ unsubscribe });
    }

    componentDidUpdate(prevProps, prevState) {
        if (JSON.stringify(this.state.headers) !== JSON.stringify(prevState.headers)) {
            this.props.blockProp.setAttributes && this.props.blockProp.setAttributes({
                headerLinks: JSON.stringify(this.state.headers)
            });
        }
    }
    componentWillUnmount() {
        if(typeof this.state.unsubscribe==='function'){
            this.state.unsubscribe();
        }
    }
    render() {
        const { headers } = this.state;
        const { tableType, mappingHeaders, orderListType } = this.props;
        let ListTag = 'ul';
        if (tableType === 'ordered') {
            ListTag = 'ol'
        }
        if (headers.length === 0) {
            return (
                <p className="responsive-block-editor-addons_table-of-contents-placeholder">
					{__(
						'No header found', "responsive-block-editor-addons"
					)}
				</p>
            );
        }

        // Build hierarchy using a stack (same idea as frontend.js).
        // This correctly handles headings that go "back up" in level
        const formatHeaders = (allHeaders) => {
            const root = [];
            const stack = [{ level: 0, list: root }];

            allHeaders
                .filter((header) => mappingHeaders[`h${header.level}`])
                .forEach((header) => {
                    const level = Number(header.level) || 2;

                    // Pop until parent level < current level
                    while (stack.length > 1 && level <= stack[stack.length - 1].level) {
                        stack.pop();
                    }

                    const parentList = stack[stack.length - 1].list;
                    const node = Object.assign({}, header);
                    parentList.push(node);

                    node.children = [];
                    stack.push({ level, list: node.children });
                });

            // Remove empty children arrays so render logic stays unchanged.
            const prune = (items) =>
                items.map((it) => {
                    const children = it.children;
                    if (children && children.length) {
                        return Object.assign({}, it, { children: prune(children) });
                    }
                    const copy = Object.assign({}, it);
                    delete copy.children;
                    return copy;
                });

            return prune(root);
        };

        const parseList = list =>
            list.map((item) => (
                <li key={item.anchor}>
                    <a
                        href={`#${item.anchor}`}
                        dangerouslySetInnerHTML={{
                            __html: item.headingTitle?.replace(/(<.+?>)/g, "") || item.content?.replace(/(<.+?>)/g, "")
                        }}
                    />
                    {
                        item.children && <ListTag className={`child-list rbea-${orderListType}`}>{parseList(item.children)}</ListTag>
                    }
                </li>
            ));
        return (
			<div className="responsive-block-editor-addons-toc__list-wrap">
				<ListTag className={`responsive-block-editor-addons-toc__list rbea-${orderListType}`}>
					{parseList(formatHeaders(headers))}
				</ListTag>
			</div>
        );
    }
}

export default TableOfContents;
