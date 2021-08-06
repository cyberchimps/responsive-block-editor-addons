const { __ } = wp.i18n

const attributes = {
    block_id :{
		type : "string"
	},
	id: {
		type: 'number',
		default: 0
	},
	header: {
		type: 'html',
	},
	activeTab: {
			type: 'number',
	},
	tabHeaderOptions: {
		type: 'array',
		default: [__('Tab 1' , 'responsive-block-editor-addons' ),__('Tab 2','responsive-block-editor-addons'),__('Tab 3','responsive-block-editor-addons')]
	}
}
  
export default attributes