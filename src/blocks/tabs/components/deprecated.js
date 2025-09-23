import DeprecatedTabsSave from "../deprecated/DeprecatedTabsSave";
import { __ } from "@wordpress/i18n";

const oldAttributes = {
	block_id: { type: "string" },
	tabHeaderOptions: {
		type: "array",
		default: [
			__("Tab 1", "responsive-block-editor-addons"),
			__("Tab 2", "responsive-block-editor-addons"),
			__("Tab 3", "responsive-block-editor-addons"),
		],
	},
	tabActiveFrontend: { type: "number", default: 0 },
	tabsStyleD: { type: "string", default: "hstyle3" },
	tabsStyleT: { type: "string", default: "hstyle3" },
	tabsStyleM: { type: "string", default: "hstyle3" },
	alignTabs: { type: "string", default: "left" },
	alignTabsVertical: { type: "string", default: "left" },
};

const deprecated = [
	{
		attributes: oldAttributes,
		save({ attributes }) {
			return <DeprecatedTabsSave attributes={attributes} />;
		},
	},
];

export default deprecated;