/**
 * Internal dependencies
 */
 import classnames from "classnames";
 import Style from "style-it";
 
 /**
  * WordPress dependencies
  */
 const { Component, Fragment } = wp.element;
 const { InnerBlocks, RichText } = wp.blockEditor;
 export default class Save extends Component {
   constructor() {
     super(...arguments);
   }
 
   render() {
     const {attributes, className} = this.props;
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
 
    
     return [
       <div
         className={classnames(
           this.props.className,
           "responsive-block-editor-addons-block-tabs",
           `block-${block_id}`,
           `responsive-block-editor-addons-tabs__wrap`,
           `responsive-block-editor-addons-tabs__${tabsStyleD}-desktop`,
           `responsive-block-editor-addons-${tabsStyleD}-${alignTabsVertical}`,
         )}
         data-tab-active={tabActiveFrontend}
       >
            <ul className={`responsive-block-editor-addons-tabs__panel responsive-block-editor-addons-tabs__align-${alignTabs}`}>
                {tabHeaderOptions.map( ( header, index ) => (
                    <li key={ index } className={`responsive-block-editor-addons-tab ${(tabActiveFrontend === index ? 'responsive-block-editor-addons-tabs__active' : '')}`}>
                        <a href={`#responsive-block-editor-addons-tabs__tab${index}`} className={`responsive-block-editor-addons-tabs-list`} data-tab={index}>
                            <RichText.Content
                                tagName={ 'span' }
                                value={ header }					
                            />
                        </a>
                    </li>
                ) ) }
            </ul>
            <div className="responsive-block-editor-addons-tabs__body-wrap">
                <InnerBlocks.Content />
            </div>
        </div>
     ];
   }
 }
