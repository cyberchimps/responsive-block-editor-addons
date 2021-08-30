/**
 * Internal dependencies
 */
 import classnames from "classnames";
 import Style from "style-it";
 
 /**
  * WordPress dependencies
  */
 const { Component, Fragment } = wp.element;
 const { RichText, InnerBlocks } = wp.blockEditor;
 
 export default class Save extends Component {
   constructor() {
     super(...arguments);
   }
 
   render() {
     const {attributes, className} = this.props;
     const {
       id,
       block_id,
     } = attributes;
 
    
     return [
      <div className={`responsive-block-editor-addons-tabs__body-container responsive-block-editor-addons-tabs__inner-tab responsive-block-editor-addons-inner-tab-${id}`}>
        <div className={ classnames(
          className,
          "responsive-block-editor-addons-block-tabs-child",
          `block-${block_id}`,
          'responsive-block-editor-addons-tabs__body'
        )} 
        aria-labelledby={`responsive-block-editor-addons-tabs__tab${id}`}
        >
            <InnerBlocks.Content />
          </div>
      </div>
     ];
   }
 }
 