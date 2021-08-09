/**
 * Internal dependencies
 */
 import classnames from "classnames";
 import Inspector from "./inspector";
 import { loadGoogleFont } from "../../../utils/font";
 import EditorStyles from "./editor-styles";
 
import icons from "../../../utils/components/icons";
import renderSVG from "../../../renderIcon";
 /**
  * WordPress dependencies
  */
 const { __ } = wp.i18n;
 const { Component, Fragment } = wp.element;
 const { RichText, AlignmentToolbar, BlockControls } = wp.editor;
 export default class Edit extends Component {
   constructor() {
     super(...arguments);
   }
   componentDidUpdate(prevProps, prevState) {
     var element = document.getElementById(
       "responsive-block-editor-addons-anchor-style-" +
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
       "responsive-block-editor-addons-anchor-style-" +
         this.props.clientId
     );
     document.head.appendChild($style);
   }
   render() {
     // Setup the attributes
     const {
       attributes: {
         block_id,
         anchor,
       },
       setAttributes,
       mergeBlocks,
       insertBlocksAfter,
       onReplace,
     } = this.props;
     return [
       <BlockControls key="controls">
       </BlockControls>,
       // Show the block controls on focus
       <Inspector {...{ setAttributes, ...this.props }} />,
 
       // Show the block markup in the editor
       <div
         className={classnames(
           "responsive-block-editor-addons-block-anchor",
           `block-${block_id}`
         )}
       >
          <div
            id={anchor}
            className="responsive-block-editor-addons-anchor-edit"
          >
            <span className="responsive-block-editor-addons-anchor-border-left"></span>
            {renderSVG("fa fa-anchor")}
            <span className="responsive-block-editor-addons-anchor-border-right"></span>
          </div>
       </div>,
     ];
   }
 }
 