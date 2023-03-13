/**
 * Internal dependencies
 */
 import classnames from "classnames";

 /**
  * WordPress dependencies
  */ 
  const { __ } = wp.i18n

  const {
    Component,
  } = wp.element
  
  const {
    InnerBlocks
  } = wp.blockEditor
  
  const { select } = wp.data;
  
 
 export default class Edit extends Component {
   constructor() {
     super(...arguments);
   }
 
   componentDidMount() {
		const { attributes, setAttributes, clientId  } = this.props;
		const { getBlockRootClientId, getBlockAttributes } = !wp.blockEditor ? select( 'core/editor' ) : select( 'core/block-editor' );
		const rootBlockId = getBlockRootClientId( clientId );
		const rootBlockAttrs = getBlockAttributes( rootBlockId );
		setAttributes( { block_id: this.props.clientId } )
		setAttributes( { activeTab: rootBlockAttrs?.tabActiveFrontend} )
		
		// Apply parent style if newly inserted
		if (rootBlockAttrs !== null && rootBlockAttrs.needUpdate !== false) {
			Object.keys(rootBlockAttrs).map((attribute) => {
				attributes[attribute] = rootBlockAttrs[attribute];
			});
		}
	}	

   render() {
     // Setup the attributes
     const {
       attributes: {
        block_id,
        id,
        activeTab,
       },
       className,
       setAttributes,
     } = this.props;

     return [
       <div key={'tabs_child'} className={`responsive-block-editor-addons-tabs__body-container responsive-block-editor-addons-tabs__inner-tab responsive-block-editor-addons-inner-tab-${id}`} style={{ display: id === activeTab ? 'block' : 'none'}}>
       <div
         className={classnames(
          this.props.className,
           "responsive-block-editor-addons-block-tabs-child",
           `block-${block_id}`,
           'responsive-block-editor-addons-tabs__body'
         )}
         aria-labelledby={`responsive-block-editor-addons-tabs__tab${id}`}
       >
					<InnerBlocks
						template={[ [ 'core/paragraph' ] ]}
						templateLock={false}
					/>
				</div>
			</div>
     ];
   }
 }
