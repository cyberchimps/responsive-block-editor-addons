/**
 * Internal dependencies
 */
 import classnames from "classnames";
 import Style from "style-it";
 
 /**
  * WordPress dependencies
  */
 const { __ } = wp.i18n;
 const { Component, Fragment } = wp.element;
 const { RichText } = wp.editor;
 
 export default class Save extends Component {
  constructor() {
    super(...arguments);
  } 


 
   render() {
     const {
      SelectControl,
      formTitle,
       formTitleId,
       formDescription,
       seperatorStyle,
       seperatorPosition,
       formTitleTag,
       showFormTitle,
       showFormDescription,
       showSeparator,
       isHtml,
       formJson,
       block_id,
       anchor,      
       formId,
                 
     } = this.props.attributes;
 
     return [
       <div
         id={anchor}
         className={classnames(
           this.props.className,
           "responsive-block-editor-addons-block-contact-form-7-styler",
           `block-${block_id}`
         )}
       >
        <div className={classnames("form-container")}>
        <div className={classnames("form")}>
        {showFormTitle && (
          <RichText.Content
            tagName={formTitleTag}
            value={formTitle}
            className="responsive-form-title-text"
            id={formTitleId}
          />
        )}
        {showFormDescription && (
          <RichText.Content
            tagName="h4"
            value={formDescription}
            className="responsive-form-desc-text"
          />
        )}
         <div dangerouslySetInnerHTML={ { __html: formJson } } />
         </div>
         </div>
       </div>
     ];
   }
 }
 