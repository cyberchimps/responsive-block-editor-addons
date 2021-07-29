/**
 * Internal dependencies
 */
 import classnames from "classnames";
 import renderSVG from "../../../renderIcon";
 
 /**
  * WordPress dependencies
  */
 const { Component, Fragment } = wp.element;
 const { RichText } = wp.editor;
 
 export default class Save extends Component {
   constructor() {
     super(...arguments);
   }
 
   render() {
     const {
       block_id,
       headingTag,
       icon,
       noticeContent,
       noticeDismiss,
       noticeTitle
     } = this.props.attributes;
 
     return [
       <div
         className={classnames(
           "responsive-block-editor-addons-block-inline-notice",
           `block-${block_id}`
         )}
       >
        <div className="responsive-block-editor-addons-block-inline-notice-title-area">
          <RichText.Content 
          value = {noticeTitle}
          tagName = {headingTag}
          className = "responsive-block-editor-addons-block-inline-notice-title"
          />
          {noticeDismiss && 
            <span className="responsive-block-editor-addons-block-inline-notice-svg">{renderSVG(icon)}</span>
          }
        </div>
        <div className="responsive-block-editor-addons-block-inline-notice-content-area">
          <RichText.Content 
          value = {noticeContent}
          tagName = "div"
          className = "responsive-block-editor-addons-block-inline-notice-content"
          />
        </div>
       </div>,
     ];
   }
 }
 