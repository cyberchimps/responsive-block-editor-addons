import classnames from "classnames";
import { InnerBlocks, RichText } from "@wordpress/block-editor";

const DeprecatedTabsSave = ({ attributes }) => {
	const {
		block_id,
		tabHeaderOptions,
		tabActiveFrontend,
		tabsStyleD,
		tabsStyleT,
		tabsStyleM,
		alignTabs,
		alignTabsVertical,
	} = attributes;

	return (
		<div
			className={classnames(
				"responsive-block-editor-addons-block-tabs",
				`block-${block_id}`,
				`responsive-block-editor-addons-tabs__wrap`,
				`responsive-block-editor-addons-tabs__${tabsStyleD}-desktop`,
				`responsive-block-editor-addons-tabs__${tabsStyleT}-tablet`,
				`responsive-block-editor-addons-tabs__${tabsStyleM}-mobile`,
				`responsive-block-editor-addons-tabs-align-${tabsStyleD}-${alignTabsVertical}-desktop`
			)}
			data-tab-active={tabActiveFrontend}
		>
			<ul
				className={classnames(
					"responsive-block-editor-addons-tabs__panel",
					`responsive-block-editor-addons-tabs-align-${alignTabs}-desktop`
				)}
			>
				{tabHeaderOptions.map((header, index) => (
					<li
						key={index}
						className={`responsive-block-editor-addons-tab ${
							tabActiveFrontend === index
								? "responsive-block-editor-addons-tabs__active"
								: ""
						}`}
					>
						<a
							href={`#responsive-block-editor-addons-tabs__tab${index}`}
							className="responsive-block-editor-addons-tabs-list"
							data-tab={index}
						>
							<RichText.Content tagName="span" value={header} />
						</a>
					</li>
				))}
			</ul>
			<div className="responsive-block-editor-addons-tabs__body-wrap">
				<InnerBlocks.Content />
			</div>
		</div>
	);
};

export default DeprecatedTabsSave;
