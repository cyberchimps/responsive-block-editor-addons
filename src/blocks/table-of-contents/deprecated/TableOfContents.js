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
            const allBlocks = select('core/block-editor').getBlocks();
            allBlocks.forEach(block => {
                if (block.name === 'responsive-block-editor-addons/advanced-heading' || block.name === 'core/heading') {
                    targetBlocks.push(block);
                } else if (block.innerBlocks.length > 0) {
                    let childHeadingBlocks = getAllChildHeadingBlocks(block);
                    if (childHeadingBlocks.length > 0) {
                        targetBlocks.push(...childHeadingBlocks);
                    }
                }
            })
            return targetBlocks;
        };
        const setHeaders = () => {
            let headings = getsHeadingBlocks().map(header => header.attributes);
            headings.forEach((heading, key) => {
                if (!heading.anchor) {
                    heading.anchor =
                        `${key + 1}-` +
                        heading.headingTitle
                            ?.toString()
                            .toLowerCase()
                            ?.replace(/( |<.+?>|&nbsp;)/g, "-")
                        || heading.content
                        ?.toString()
                        .toLowerCase()
                        ?.replace(/( |<.+?>|&nbsp;)/g, "-");
                    heading.anchor = encodeURIComponent(
                        heading.anchor?.replace(
                            /[^\w\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s-]/g,
                            ""
                        )
                    );
                }

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
        if (JSON.stringify(prevProps.headers) !== JSON.stringify(prevState.headers)) {
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

        const createHierarchy = (formattedHeaders, currentHeader) => {
            let lastIndex = formattedHeaders.length - 1;
            if (formattedHeaders.length === 0 || formattedHeaders[0].level === currentHeader.level) {
                formattedHeaders.push(Object.assign({}, currentHeader));
            } else if (formattedHeaders[lastIndex].level < currentHeader.level) {
                if (!formattedHeaders[lastIndex].children) {
                    formattedHeaders[lastIndex].children = [Object.assign({}, currentHeader)];
                } else createHierarchy(formattedHeaders[lastIndex].children, currentHeader);
            }
        };

        const formatHeaders = allHeaders => {
            let formattedHeaders2 = [];
            allHeaders.filter(header => mappingHeaders[`h${header.level}`]).forEach(header => createHierarchy(formattedHeaders2, header));
            return formattedHeaders2;
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
