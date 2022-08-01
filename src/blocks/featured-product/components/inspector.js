/**
 * Inspector Controls
 */

 // Setup the block
 const { __ } = wp.i18n;
 const { Component, Fragment } = wp.element;
 import InspectorTab from "../../../components/InspectorTab";
 import InspectorTabs from "../../../components/InspectorTabs";
 
 // Import block components
 const {
   InspectorControls,
 } = wp.blockEditor;
 
 // Import Inspector components
 const {
   PanelBody,
   RangeControl,
   SelectControl,
   ButtonGroup,
   Button,
   ToggleControl,
   TabPanel,
   Dashicon,
   BaseControl,
   FocalPointPicker,
   ColorPicker,
 } = wp.components;

 const dimensions = {
  width: 400,
  height: 100,
};
 
 /**
  * Create an Inspector Controls wrapper Component
  */
 export default class Inspector extends Component {
   constructor(props) {
     super(...arguments);
   }
 
   /*
    * Heading Tag Change
    */
   onTagChange(value) {
     const { setAttributes } = this.props;
 
     let level_val = parseInt(value.replace("h", ""));
 
     setAttributes({ level: level_val });
     setAttributes({ headingTag: value });
   }
   render() {
     // Font Weight Options
     const fontWeightOptions = [
       {
         value: "100",
         label: __("100", "responsive-block-editor-addons"),
       },
       {
         value: "200",
         label: __("200", "responsive-block-editor-addons"),
       },
       {
         value: "300",
         label: __("300", "responsive-block-editor-addons"),
       },
       {
         value: "400",
         label: __("400", "responsive-block-editor-addons"),
       },
       {
         value: "500",
         label: __("500", "responsive-block-editor-addons"),
       },
       {
         value: "600",
         label: __("600", "responsive-block-editor-addons"),
       },
       {
         value: "700",
         label: __("700", "responsive-block-editor-addons"),
       },
       {
         value: "800",
         label: __("800", "responsive-block-editor-addons"),
       },
       {
         value: "900",
         label: __("900", "responsive-block-editor-addons"),
       },
     ];
 
     // Text Decoration Options
     const textDecorationOptions = [
       {
         value: "none",
         label: __("Default", "responsive-block-editor-addons"),
       },
       {
         value: "underline",
         label: __("Underline", "responsive-block-editor-addons"),
       },
       {
         value: "overline",
         label: __("Overline", "responsive-block-editor-addons"),
       },
       {
         value: "line-through",
         label: __("Line Through", "responsive-block-editor-addons"),
       },
     ];
 
     // Setup the attributes
     const {
       attributes: {
         headSpacing,
         separatorSpacing,
         seperatorPosition,
         seperatorStyle,
         separatorHeight,
         separatorWidth,
         separatorWidthType,
         separatorColor,
         headingTitleFontFamily,
         headingTitleFontSize,
         headingTitleFontSizeTablet,
         headingTitleFontSizeMobile,
         headingTitleFontWeight,
         headingTitleLineHeight,
         headingTitleLetterSpacing,
         headingTitleColor,
         subHeadingTitleFontFamily,
         subHeadingTitleFontSize,
         subHeadingTitleFontSizeMobile,
         subHeadingTitleFontSizeTablet,
         subHeadingTitleFontWeight,
         subHeadingTitleLineHeight,
         subHeadingTitleLetterSpacing,
         subHeadingTitleColor,
         headingTag,
         level,
         showHeading,
         showSubHeading,
         showSeparator,
         headingAlignment,
         headingAlignmentTablet,
         headingAlignmentMobile,
         subheadSpacing,
         headSpacingTablet,
         subheadSpacingTablet,
         separatorSpacingTablet,
         headSpacingMobile,
         subheadSpacingMobile,
         separatorSpacingMobile,
         textDecoration,
         textDecorationSubHeading,
         url,
         setFpBackgroundImage,
         focalPoint,
         colorPick,
         textColor,
         showdescription,
         showprice,
         checkFixedBackgroundImage,
         checkRepeatedBackground,
         checkBackgroundCover,
         backgroundCover,
         repeatedBackgroundImage,
         fixedBackgroundImage,
         fixedBackgroundImagePosition         
       },
       setAttributes,
     } = this.props;
 
     return (
      <InspectorControls key="inspector">  
      <InspectorTabs>
           <InspectorTab key={"content"}>
             <PanelBody
             > 
               <ToggleControl
                 label={__("Show Description", "responsive-block-editor-addons")}
                 checked={showdescription}
                 onChange={() =>{
                  this.props.setAttributes({
                    showdescription: !showdescription,
                  })
                 }
                 }
               />
               <ToggleControl
                 label={__("Show Price", "responsive-block-editor-addons")}
                 checked={showprice}
                 onChange={() =>{
                  this.props.setAttributes({
                    showprice: !showprice,
                  })
                 }
                 }
               /> 
             </PanelBody>
           </InspectorTab> 
           <InspectorTab key={"style"}>
             <PanelBody
               title={__("Media settings", "responsive-block-editor-addons")}
               initialOpen={false}
             >
               <ToggleControl
                 label={__("Fixed Background Image", "responsive-block-editor-addons")}
                 checked={checkFixedBackgroundImage}
                 onChange={( value ) => {
                   setAttributes({ checkFixedBackgroundImage: !checkFixedBackgroundImage });
                   if( value ) {
                     setAttributes({ fixedBackgroundImage: 'fixed', fixedBackgroundImagePosition: '39% 51%' })
                   } else {
                     setAttributes({ fixedBackgroundImage: 'scroll', fixedBackgroundImagePosition: '' })
                   }
                 }
                 }
               />
               <ToggleControl
                 label={__("Repeated background", "responsive-block-editor-addons")}
                 checked={checkRepeatedBackground}
                 onChange={(value) =>{
                  setAttributes({ checkRepeatedBackground: !checkRepeatedBackground });
                  if( value ) {
                    setAttributes({ repeatedBackgroundImage: 'no-repeat' })
                  } else {
                    setAttributes({ repeatedBackgroundImage: 'repeat' })
                  }
                 }
                 }
               />
               <p>{__("Image fit","responsive-block-editor-addons")}</p>
               <ToggleControl
                 label={__("Cover", "responsive-block-editor-addons")}
                 checked={checkBackgroundCover}
                 onChange={(value) =>{
                  setAttributes({ checkBackgroundCover: !checkBackgroundCover });
                  if( value ) {
                    setAttributes({ backgroundCover: 'cover' })
                  } else {
                    setAttributes({ backgroundCover: 'auto' })
                  }
                 }
                 }
               />
               <p style={{color:"#757575"}}>{__("Choose “Cover” if you want the image to scale automatically to always fit its container.","responsive-block-editor-addons")}</p>
               <p style={{color:"#757575"}}>{__("Note: by choosing “Cover” you will lose the ability to freely move the focal point precisely.","responsive-block-editor-addons")}</p>
               <p>Focal point picker</p>
               <FocalPointPicker
                url={ setFpBackgroundImage }
                dimensions={ dimensions }
                value={ focalPoint }
                onChange={
                  (focalPoint) => {setAttributes({
                    focalPoint: focalPoint
                })
                }}
              />
              <p>Alt text (alternative text)</p>
              <input type/>      
             </PanelBody>
             <PanelBody
               title={__(
                 "Overlay",
                 "responsive-block-editor-addons"
               )}
               initialOpen={false}
             >
              <p>color</p>
               <ColorPicker
                  color={colorPick}
                  onChange={
                    (color) =>{
                      {setAttributes({
                        colorPick:color
                      })
                    } 
                  }}
                  enableAlpha
                  defaultValue="#000"
                />
             </PanelBody>
             <PanelBody
               title={__("Colors", "responsive-block-editor-addons")}
               initialOpen={false}  
             >
              <p>Text</p>
              <ColorPicker
                  color={textColor}
                  onChange={
                    (color) => {setAttributes({
                      textColor:color
                    })
                  }}
                  enableAlpha
                  defaultValue="#000"
                />
             </PanelBody>
           </InspectorTab>
           <InspectorTab key={"advance"}></InspectorTab> 
         </InspectorTabs>       
      </InspectorControls>
     );
   }
 }
 