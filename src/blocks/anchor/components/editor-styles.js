/**
 * Returns Dynamic Generated CSS
 */

 import generateCSS from "../../../generateCSS";
 import generateCSSUnit from "../../../generateCSSUnit";
 
 function EditorStyles(props) {
   const {
     block_id,
   } = props.attributes;
 
   var selectors = {
     " .responsive-block-editor-addons-anchor-edit": {
       "display": "grid",
       "grid-template-columns": '49% 2% 49%',
     },
    " .responsive-block-editor-addons-anchor-border-left": {
      "border-top": `${generateCSSUnit(1, "px")} solid black `,
      "margin": "8px 6px 0 0",
    },
    " .responsive-block-editor-addons-anchor-border-right": {
      "border-top": `${generateCSSUnit(1, "px")} solid black `,
      "margin": "8px 0 0 6px",
    },
    " svg": {
      "height": generateCSSUnit(20, "px"),
      "margin": "0",
      "padding": "0",
    }
   };
 
   var mobile_selectors = {
   };
 
   var tablet_selectors = {
   };
 
   var styling_css = "";
   var id = `.responsive-block-editor-addons-block-anchor.block-${block_id}`;
 
   styling_css = generateCSS(selectors, id);
   styling_css += generateCSS(tablet_selectors, id, true, "tablet");
   styling_css += generateCSS(mobile_selectors, id, true, "mobile");
 
   return styling_css;
 }
 
 export default EditorStyles;
 