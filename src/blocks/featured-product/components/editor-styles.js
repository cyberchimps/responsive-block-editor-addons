/**
 * Returns Dynamic Generated CSS
 */

 import generateCSS from "../../../generateCSS";
 import generateCSSUnit from "../../../generateCSSUnit";
 
 function EditorStyles(props) {
   const {
     block_id,
     fixedBackgroundImage,
     fixedBackgroundImagePosition,
     setFpBackgroundImage,
     repeatedBackgroundImage,
     backgroundCover,
     colorPick,
     textColor
   } = props.attributes;
   
   var selectors = {
     " .background-dim__overlay": {
        "background-color": colorPick,
      },
     " .featured-product__background-image": {
        "background-image": `url(${setFpBackgroundImage})`,
        "background-attachment": fixedBackgroundImage,
        "background-repeat": repeatedBackgroundImage,
        "background-position": fixedBackgroundImagePosition,
        "background-size": backgroundCover,
     },
     " .block-featured-product": {
      "color": textColor,
    },
   };
 
   var styling_css = "";
   var id = `.responsive-block-editor-addons-block-featured-product.block-${block_id}`;
 
   styling_css = generateCSS(selectors, id);
 
   return styling_css;
 }
 
 export default EditorStyles;
 