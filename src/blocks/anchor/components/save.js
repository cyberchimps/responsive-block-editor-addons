/**
 * Internal dependencies
 */
 import classnames from "classnames";
 import Style from "style-it";
 
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
       anchor
     } = this.props.attributes;
 
     return [
       <div
         id={anchor}
         className={classnames(
           "responsive-block-editor-addons-block-anchor",
           `block-${block_id}`
         )}
       >
       </div>,
     ];
   }
 }
 