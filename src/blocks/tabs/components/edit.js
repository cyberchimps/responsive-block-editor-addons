/**
 * Internal dependencies
 */
 import classnames from "classnames";
 import Inspector from "./inspector";
 import { loadGoogleFont } from "../../../utils/font";
 import EditorStyles from "./editor-styles";
 import times from "lodash/times"

 /**
  * WordPress dependencies
  */ 
 const { __ } = wp.i18n;
 const { Component, Fragment } = wp.element;

 const {
	BlockAlignmentToolbar,
	InspectorControls,
	InnerBlocks,
	PanelColorSettings,
	RichText,
	ColorPalette
} = wp.blockEditor

 const {
	PanelBody,
	TabPanel,
	SelectControl,
	RangeControl,
	ToggleControl,
	BaseControl,
	Tooltip,
	Button,
	Dashicon
} = wp.components

const {
	createBlock
} = wp.blocks

const {
	compose,
} = wp.compose

const { withDispatch, select, dispatch, withSelect } = wp.data;
 
 class Edit extends Component {
   constructor() {
     super(...arguments);
     this.onMoveForward = this.onMoveForward.bind( this );
	 this.onMoveBack = this.onMoveBack.bind( this );
   }

   componentDidUpdate(prevProps, prevState) {
     var element = document.getElementById(
       "responsive-block-editor-addons-tabs-style-" +
         this.props.clientId
     );
 
     if (null !== element && undefined !== element) {
       element.innerHTML = EditorStyles(this.props);
     }
   }
 
   componentDidMount() {
     // Assigning block_id in the attribute.
     this.props.setAttributes({ block_id: this.props.clientId });
 
     this.props.setAttributes({ classMigrate: true });
 
     // Pushing Style tag for this block css.
     const $style = document.createElement("style");
     $style.setAttribute(
       "id",
       "responsive-block-editor-addons-tabs-style-" +
         this.props.clientId
     );
     document.head.appendChild($style);
     this.updateTabTitle();
     this.props.resetTabOrder();
   }

   updateTabsTitle(header, index) {
        const { attributes, setAttributes, clientId } = this.props;
        const { tabHeaderOptions } = attributes;
        const { updateBlockAttributes } = !wp.blockEditor ? dispatch( 'core/editor' ) : dispatch( 'core/block-editor' );
        const { getBlockOrder } = !wp.blockEditor ? select( 'core/editor' ) : select( 'core/block-editor' );
        const childBlocks = getBlockOrder(clientId);

        let newHeaders = tabHeaderOptions.map( ( item, idx ) => {
            if ( index === idx ) {
                item = header;
            }
            return item;
        } );
        
        setAttributes( { tabHeaderOptions: newHeaders} );
        updateBlockAttributes(childBlocks[index], {header: header});
        this.updateTabTitle();
    }
    updateTabTitle() {
        const { attributes, clientId } = this.props;
        const { tabHeaderOptions } = attributes;
        const { updateBlockAttributes } = !wp.blockEditor ? dispatch( 'core/editor' ) : dispatch( 'core/block-editor' );
        const { getBlockOrder } = !wp.blockEditor ? select( 'core/editor' ) : select( 'core/block-editor' );
        const childBlocks = getBlockOrder(clientId);

        childBlocks.forEach( childBlockId => updateBlockAttributes( childBlockId, {tabHeaderOptions: tabHeaderOptions} ) );
    }

   onMove( oldIndex, newIndex ) {
        const { attributes, setAttributes, clientId } = this.props;
        const { tabHeaderOptions, tabActiveFrontend } = attributes;

        const { getBlock } = !wp.blockEditor ? select( 'core/editor' ) : select( 'core/block-editor' );
        const tabsBlock = getBlock(clientId);

        const titles = [ ...tabHeaderOptions ];
        titles.splice( newIndex, 1, tabHeaderOptions[ oldIndex ] );
        titles.splice( oldIndex, 1, tabHeaderOptions[ newIndex ] );
        setAttributes( { tabHeaderOptions: titles} );
        if ( tabActiveFrontend === ( oldIndex + 1 ) ) {
            setAttributes( { tabActiveFrontend: ( newIndex + 1 ) } );
        } else if ( tabActiveFrontend === ( newIndex + 1 ) ) {
            setAttributes( { tabActiveFrontend: ( oldIndex + 1 ) } );
        }
        this.props.moveTab( tabsBlock.innerBlocks[ oldIndex ].clientId, newIndex );
        this.props.resetTabOrder();
    }

    onMoveForward( oldIndex , realTabsCount ) {
        return () => {
            if ( oldIndex === realTabsCount - 1 ) {
                return;
            }
            this.onMove( oldIndex, oldIndex + 1 );
        };
    }

    onMoveBack( oldIndex ) {
        return () => {
            if ( oldIndex < 0 ) {
                return;
            }
            this.onMove( oldIndex, oldIndex - 1 );
        };
    }

    addTab() {
		const { attributes, setAttributes, clientId } = this.props;
		const { insertBlock } = !wp.blockEditor ? dispatch( 'core/editor' ) : dispatch( 'core/block-editor' );
		const tabItemBlock = createBlock('responsive-block-editor-addons/tabs-child');

		insertBlock(tabItemBlock, attributes.tabHeaderOptions.length, clientId);
		setAttributes( {
			tabHeaderOptions: [
				...attributes.tabHeaderOptions,
				'New Tab'
			]
		} );
		this.props.resetTabOrder();
	}

    removeTab(index) {
		const { attributes, setAttributes, clientId } = this.props;
		const { removeBlock } = !wp.blockEditor ? dispatch( 'core/editor' ) : dispatch( 'core/block-editor' );
		const { getBlockOrder } = !wp.blockEditor ? select( 'core/editor' ) : select( 'core/block-editor' );
		const childBlocks = getBlockOrder(clientId);

		removeBlock(childBlocks[index], false);
		setAttributes( {
			tabHeaderOptions: attributes.tabHeaderOptions.filter( (vl, idx) => idx !== index )
		} );
		this.updateTabsAttr({activeTab: 0});
		this.props.resetTabOrder();
	}

    updateTabsAttr( attrs ) {
		const { setAttributes, clientId } = this.props;
		const { updateBlockAttributes } = !wp.blockEditor ? dispatch( 'core/editor' ) : dispatch( 'core/block-editor' );
		const { getBlockOrder } = !wp.blockEditor ? select( 'core/editor' ) : select( 'core/block-editor' );
		const childBlocks = getBlockOrder(clientId);

		setAttributes( attrs );
		childBlocks.forEach( childBlockId => updateBlockAttributes( childBlockId, attrs ) );
		this.props.resetTabOrder();
	}

   render() {
     // Setup the attributes
     const {
       attributes: {
        block_id,
        tabHeaderOptions,
        activeTab,
        tabActiveFrontend,
        alignTabs,
        tabsStyleD,
        tabsStyleM,
        tabsStyleT,
        tabTitleFontFamily,
        tabContentFontFamily,
        alignTabsVertical,
       },
       setAttributes,
       className,
       deviceType,
     } = this.props;

     return [
        <style id={`responsive-block-editor-addons-tabs-style-${this.props.clientId}-inner`}>{EditorStyles(this.props)}</style>,
       <Inspector key={'tabs_inspector'} {...{ setAttributes, ...this.props }} />,
 
       <div
         key={'tabs_body'}
         className={classnames(
            this.props.className,
           `responsive-block-editor-addons-editor-preview-mode-${ deviceType.toLowerCase() }`,
           "responsive-block-editor-addons-block-tabs",
           `block-${block_id}`,
           `responsive-block-editor-addons-tabs__wrap`,
           `responsive-block-editor-addons-tabs__${tabsStyleD}-desktop`,
           `responsive-block-editor-addons-${tabsStyleD}-${alignTabsVertical}`,
         )}
       >
            {tabTitleFontFamily && loadGoogleFont(tabTitleFontFamily)}
            {tabContentFontFamily && loadGoogleFont(tabContentFontFamily)}
            <ul className={`responsive-block-editor-addons-tabs__panel responsive-block-editor-addons-tabs__align-${alignTabs}`}>
                {tabHeaderOptions.map( ( header, index ) => (
                    <li key={ index } className={`responsive-block-editor-addons-tab ${activeTab === index ? 'responsive-block-editor-addons-tabs__active' : ''} ` }
                        id={`responsive-block-editor-addons-tabs__tab${index}`}
                    >
						{tabHeaderOptions.length > 0 && (
							<div className="responsive-block-editor-addons-tabs-editor-controls">
								{ index !== 0 && (	
                                    <Tooltip text={ __( 'Move Item Back'  , 'responsive-block-editor-addons' ) }>
                                        <span className="responsive-block-editor-addons-tab-item__move-back"
                                            onClick={ index === 0 ? ' ' : this.onMoveBack( index , tabHeaderOptions.length) }
                                            aria-disabled={ ( index ) === tabHeaderOptions.length }
                                                disabled={ ( index ) === tabHeaderOptions.length }
                                        >
                                            <Dashicon icon="arrow-left"/>
                                        </span>
                                    </Tooltip>
								)}
								{ ( index + 1 ) !== tabHeaderOptions.length && (
                                    <Tooltip text={ __( 'Move Item Forward'  , 'responsive-block-editor-addons' ) }>
                                        <span className="responsive-block-editor-addons-tab-item__move-forward"
                                            onClick={ ( index ) === tabHeaderOptions.length ? ' ' : this.onMoveForward( index , tabHeaderOptions.length) }
                                            aria-disabled={ ( index ) === tabHeaderOptions.length }
                                            disabled={ ( index ) === tabHeaderOptions.length }
                                        >
                                            <Dashicon icon="arrow-right"/>
                                        </span>
                                    </Tooltip>
								)}
                                <Tooltip text={ __( 'Remove tab'  , 'responsive-block-editor-addons' ) }>
                                    <span className="responsive-block-editor-addons-tabs__remove"
                                        onClick={ () => this.removeTab(index) }
                                    >
                                        <Dashicon icon="no"/>
                                    </span>
                                </Tooltip>
							</div>
                        )}
                        <a className={`responsive-block-editor-addons-tabs-list`}
                           onClick={ () => {
                            this.props.updateActiveTab( index );
                           }}
                           data-tab={index}
                        >
                            <RichText
                                tagName="p"
                                value={ header }
                                onChange={ ( value ) => this.updateTabsTitle(value, index) }
                                onSplit={ () => null }
                                placeholder={ __( 'Title…' , 'responsive-block-editor-addons' ) }
                            />
                        </a>
                    </li>
                ))}
                <li className="responsive-block-editor-addons-tab responsive-block-editor-addons-tabs__add-tab">
                    <Tooltip text={ __( 'Add tab'  , 'responsive-block-editor-addons' ) }>
                        <span onClick={ () => this.addTab() }>
                            <Dashicon icon="plus"/>
                        </span>
                    </Tooltip>
                </li>
		    </ul>
            <div className="responsive-block-editor-addons-tabs__body-wrap">
                <InnerBlocks
                    template={ [ ['responsive-block-editor-addons/tabs-child'], ['responsive-block-editor-addons/tabs-child'], ['responsive-block-editor-addons/tabs-child']] }
                    templateLock={false}
                    allowedBlocks={ [ 'responsive-block-editor-addons/tabs-child' ] }
                />
            </div>
        </div>,
     ];
   }
 }

 export default compose(
	withSelect( ( select, props ) => {
		const { __experimentalGetPreviewDeviceType = null } = select( 'core/edit-post' );
		let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null;
		return {
			deviceType: deviceType,
		}
	}),
	withDispatch( (dispatch, { clientId }, { select }) => {
		const {
			getBlock,
		} = select( 'core/block-editor' );
		const {
			updateBlockAttributes,
			moveBlockToPosition
		} = dispatch( 'core/block-editor' );
		const block = getBlock( clientId );
		
		return {
			resetTabOrder() {
				times( block.innerBlocks.length, n => {
					updateBlockAttributes( block.innerBlocks[ n ].clientId, {
						id: n,
					} );
				} );
			},
			updateActiveTab(activeTab) {
				updateBlockAttributes( block.clientId, {
					activeTab: activeTab,
				} );
				times( block.innerBlocks.length, n => {
					updateBlockAttributes( block.innerBlocks[ n ].clientId, {
						activeTab: activeTab,
					} );
				} );
				this.resetTabOrder();
			},
			moveTab( tabId, newIndex ) {
				moveBlockToPosition( tabId, clientId, clientId, parseInt( newIndex ) );
			},
		};

	}),
)( Edit )