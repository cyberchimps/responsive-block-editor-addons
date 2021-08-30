/**
 * Returns Dynamic Generated CSS
 */

 import generateCSS from "../../../generateCSS";
 import generateCSSUnit from "../../../generateCSSUnit";
 
 function EditorStyles(props) {
   const {
     block_id,
     layout,
     inputWidth,
     inputWidthType,
     inputTextColor,
     inputBackgroundColor,
     blockBorderColor,
     blockBorderRadius,
     blockBorderStyle,
     blockBorderWidth,
     inputTopPadding,
     inputRightPadding,
     inputBottomPadding,
     inputLeftPadding,
     inputTopPaddingMobile,
     inputRightPaddingMobile,
     inputBottomPaddingMobile,
     inputLeftPaddingMobile,
     inputTopPaddingTablet,
     inputRightPaddingTablet,
     inputBottomPaddingTablet,
     inputLeftPaddingTablet,
     inputFontFamily,
     inputFontSize,
     inputFontSizeMobile,
     inputFontSizeTablet,
     inputFontWeight,
     inputLineHeight,
     boxShadowColor,
     boxShadowHOffset,
     boxShadowVOffset,
     boxShadowBlur,
     boxShadowSpread,
     boxShadowPosition,
     iconSize,
     iconColor,
     iconHoverColor,
     buttonType,
     buttonWidth,
     buttonBackgroundColor,
     buttonBackgroundHoverColor,
     buttonTextColor,
     buttonTextHoverColor,
     buttonFontFamily,
     buttonFontSize,
     buttonFontSizeMobile,
     buttonFontSizeTablet,
     buttonFontWeight,
     buttonLineHeight,
   } = props.attributes;

   let width;
   width = inputWidthType === "px" ? generateCSSUnit(inputWidth, "px") : `${inputWidth}%`;

   var boxShadowPositionCSS = boxShadowPosition;
   if ("outset" === boxShadowPosition) {
     boxShadowPositionCSS = "";
   }
   let boxShadow = `${generateCSSUnit(boxShadowHOffset, "px")} ${generateCSSUnit(boxShadowVOffset, "px")} ${generateCSSUnit(boxShadowBlur, "px")} ${generateCSSUnit(boxShadowSpread, "px")} ${boxShadowColor} ${boxShadowPositionCSS}`;

   let bgColor;
   bgColor = "minimal" === layout ? inputBackgroundColor : "";

   let buttonSize = buttonWidth === 0 ? buttonType === 'button' ? 50 : 110 : buttonWidth;

   let iconCol = iconColor === "" ? "classic" === layout ? "#ffffff" : "#1e1e1e" : iconColor; 

   let inputBoxPadding = `${generateCSSUnit(inputTopPadding, "px")} ${generateCSSUnit(inputRightPadding, "px")} ${generateCSSUnit(inputBottomPadding, "px")} ${generateCSSUnit(inputLeftPadding, "px")}`;
   let buttonPadding = "classic" === layout ? inputBoxPadding : 0;
   let iconAndTextPadding = "minimal" === layout ? inputBoxPadding : 0;

   let inputBoxPaddingMobile = `${generateCSSUnit(inputTopPaddingMobile, "px")} ${generateCSSUnit(inputRightPaddingMobile, "px")} ${generateCSSUnit(inputBottomPaddingMobile, "px")} ${generateCSSUnit(inputLeftPaddingMobile, "px")}`;
   let buttonPaddingMobile = "classic" === layout ? inputBoxPaddingMobile : 0;
   let iconAndTextPaddingMobile = "minimal" === layout ? inputBoxPaddingMobile : 0;

   let inputBoxPaddingTablet = `${generateCSSUnit(inputTopPaddingTablet, "px")} ${generateCSSUnit(inputRightPaddingTablet, "px")} ${generateCSSUnit(inputBottomPaddingTablet, "px")} ${generateCSSUnit(inputLeftPaddingTablet, "px")}`;
   let buttonPaddingTablet = "classic" === layout ? inputBoxPaddingTablet : 0;
   let iconAndTextPaddingTablet= "minimal" === layout ? inputBoxPaddingTablet: 0;

   let border = `0 ${blockBorderStyle} ${blockBorderColor}`;
   if(blockBorderStyle !== '') {
    border = `${generateCSSUnit(blockBorderWidth, "px")} ${blockBorderStyle} ${blockBorderColor}`;
   }
   let inputBorderTop = border;
   let inputBorderBottom = border;
   let inputBorderLeft = "classic" === layout ? border : 0;
   let inputBorderRight = "classic" === layout ? 0 : border;

   let iconBorderTop = "minimal" === layout ? border : 0;
   let iconBorderBottom = "minimal" === layout ? border : 0;
   let iconBorderLeft = "minimal" === layout ? border : 0;
   let iconBorderRight =  0;
 
   let borderRadius = generateCSSUnit(blockBorderRadius, "px");
   let inputBorderRadius = "classic" === layout ? `${borderRadius} 0 0 ${borderRadius}` : `0 ${borderRadius} ${borderRadius} 0`;
   let iconBorderRadius = "minimal" === layout ? `${borderRadius} 0 0 ${borderRadius}` : 0;
   let buttonBorderRadius = `0 ${borderRadius} ${borderRadius} 0`;

   var selectors = {
    " ": {
      "width": width,
      "border-radius": borderRadius,
      "padding": 0,
      "max-width": "100%",
    },
    " .responsive-block-editor-addons-search-form__input": {
     "border-top" : inputBorderTop + ' !important',
     "border-right": inputBorderRight + ' !important',
     "border-bottom": inputBorderBottom + ' !important',
     "border-left": inputBorderLeft + ' !important',
     "border-radius": inputBorderRadius,
     "color": inputTextColor,
     "background-color": inputBackgroundColor,
     "margin": 0,
     "font-family": inputFontFamily,
     "font-size": generateCSSUnit(inputFontSize, "px"),
     "font-weight": inputFontWeight,
     "line-height": inputLineHeight,
     "padding": inputBoxPadding,
    },
    " .responsive-block-editor-addons-search-form__input::placeholder": {
      "color": inputTextColor,
      "opacity": 0.6,
     },
    " .responsive-block-editor-addons-search-submit": {
      "border-top": border + ' !important',
      "border-bottom": border + ' !important',
      "border-left": 0 + ' !important',
      "border-right": border + ' !important',
      "border-radius": buttonBorderRadius,
      "padding": buttonPadding,
      "display": "flex",
      "align-items": "center",
      "justify-content": "center",
      "width": generateCSSUnit(buttonSize, "px"),
      "background-color": buttonBackgroundColor,
    },
    " .responsive-block-editor-addons-search-submit:hover": {
      "background-color": buttonBackgroundHoverColor,
    },
    " .responsive-block-editor-addons-search-icon-wrap": {
      "border-top": iconBorderTop + ' !important',
      "border-bottom": iconBorderBottom + ' !important',
      "border-left": iconBorderLeft + ' !important',
      "border-right": iconBorderRight + ' !important',
      "border-radius": iconBorderRadius + ' !important',
      "display": "flex",
      "align-items": "center",
      "justify-content": "center",
      "background-color": bgColor,
      "width": "fit-content",
      "padding": iconAndTextPadding,
    },
    " .responsive-block-editor-addons-search-icon-wrap svg" : {
      "width" : generateCSSUnit(iconSize, "px"),
      "height" : generateCSSUnit(iconSize, "px"),
      "fill": iconCol,
    },
    "  .responsive-block-editor-addons-search-submit:hover .responsive-block-editor-addons-search-icon-wrap svg" : {
      "fill": iconHoverColor,
    },
    " .responsive-block-editor-addons-search-button-text": {
      "color": buttonTextColor,
      "font-family": buttonFontFamily,
      "font-size": generateCSSUnit(buttonFontSize, "px"),
      "font-weight": buttonFontWeight,
      "line-height": buttonLineHeight,
      "padding": iconAndTextPadding,
    },
    " .responsive-block-editor-addons-search-button-text:hover": {
      "color": buttonTextHoverColor,
    },
   };

   if("outset" === boxShadowPosition){
    selectors[" "]["box-shadow"] = boxShadow;
   }
   else{
    selectors[" .responsive-block-editor-addons-search-form__input"]["box-shadow"] = boxShadow;
   }
 
   var mobile_selectors = {
    " .responsive-block-editor-addons-search-form__input": {
      "font-size": generateCSSUnit(inputFontSizeMobile, "px"),
     "padding": inputBoxPaddingMobile
    },
    " .responsive-block-editor-addons-search-icon-wrap": {
      "padding": iconAndTextPaddingMobile,
    },
    " .responsive-block-editor-addons-search-button-text": {
      "font-size": generateCSSUnit(buttonFontSizeMobile, "px"),
      "padding": iconAndTextPaddingMobile,
    },
    " .responsive-block-editor-addons-search-submit": {
      "padding": buttonPaddingMobile,
    },
   };
 
   var tablet_selectors = {
    " .responsive-block-editor-addons-search-form__input": {
      "font-size": generateCSSUnit(inputFontSizeTablet, "px"),
      "padding": inputBoxPaddingTablet,
     },
    " .responsive-block-editor-addons-search-icon-wrap": {
     "padding": iconAndTextPaddingTablet,
    },
    " .responsive-block-editor-addons-search-button-text": {
      "font-size": generateCSSUnit(buttonFontSizeTablet, "px"),
      "padding": iconAndTextPaddingTablet,
    },
    " .responsive-block-editor-addons-search-submit": {
      "padding": buttonPaddingTablet,
    },
   };
 
   var styling_css = "";
   var id = `.responsive-block-editor-addons-block-wp-search.block-${block_id}`;
 
   styling_css = generateCSS(selectors, id);
   styling_css += generateCSS(tablet_selectors, id, true, "tablet");
   styling_css += generateCSS(mobile_selectors, id, true, "mobile");
 
   return styling_css;
 }
 
 export default EditorStyles;
 