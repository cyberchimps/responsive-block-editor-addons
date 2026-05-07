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
		
		setAttributes( { block_id: this.props.clientId } );
		
		// Set activeTab from parent immediately
		if (rootBlockAttrs) {
			const parentActiveTab = typeof rootBlockAttrs.activeTab !== 'undefined' 
				? rootBlockAttrs.activeTab 
				: 0;
			setAttributes( { activeTab: parentActiveTab } );
			
			// Apply parent style if newly inserted
			if (rootBlockAttrs.needUpdate !== false) {
				Object.keys(rootBlockAttrs).forEach((attribute) => {
					if (attributes.hasOwnProperty(attribute)) {
						attributes[attribute] = rootBlockAttrs[attribute];
					}
				});
			}
		}
	}
	
	componentDidUpdate(prevProps) {
		// Sync activeTab when it changes from parent
		if (prevProps.attributes.activeTab !== this.props.attributes.activeTab) {
			// ActiveTab updated, component will re-render automatically
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
     
     // Handle undefined id (before resetTabOrder runs)
     const tabId = typeof id !== 'undefined' ? id : -1;
     const shouldDisplay = tabId === activeTab;

     return [
       <div 
         key={'tabs_child'} 
         className={`responsive-block-editor-addons-tabs__body-container responsive-block-editor-addons-tabs__inner-tab responsive-block-editor-addons-inner-tab-${tabId}`} 
         style={{ display: shouldDisplay ? 'block' : 'none'}}
       >
         <div
           className={classnames(
            this.props.className,
             "responsive-block-editor-addons-block-tabs-child",
             `block-${block_id}`,
             'responsive-block-editor-addons-tabs__body'
           )}
           aria-labelledby={`responsive-block-editor-addons-tabs__tab${tabId}`}
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