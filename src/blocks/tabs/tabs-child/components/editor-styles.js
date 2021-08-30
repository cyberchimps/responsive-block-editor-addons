/**
 * Returns Dynamic Generated CSS
 */

 import generateCSS from "../../../../generateCSS";
 import generateCSSUnit from "../../../../generateCSSUnit";
 
 function EditorStyles(props) {
   const {
   
   } = props.attributes;
 
   var selectors = {
   };
 
   var mobile_selectors = {
   };
 
   var tablet_selectors = {
   };
 
   var styling_css = "";
   var id = `.responsive-block-editor-addons-block-tabs-child.block-${props.clientId}`;
 
   styling_css = generateCSS(selectors, id);
   styling_css += generateCSS(tablet_selectors, id, true, "tablet");
   styling_css += generateCSS(mobile_selectors, id, true, "mobile");
 
   return styling_css;
 }
 
 export default EditorStyles;
 