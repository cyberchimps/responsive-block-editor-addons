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
  width: 200,
  height: 100,
};
 
 /**
  * Create an Inspector Controls wrapper Component
  */
 export default class Inspector extends Component {
   constructor(props) {
     super(...arguments);
   }
 
   render() {
    
     // Setup the attributes
     const {
       attributes: {
         setFpBackgroundImage,
         focalPoint,
         colorPick,
         textColor,
         showdescription,
         showprice,
         checkFixedBackgroundImage,
         checkRepeatedBackground,
         checkBackgroundCover,
         focalAttr,
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
                     
                     setAttributes({ fixedBackgroundImage: 'fixed', fixedBackgroundImagePosition:  focalAttr})
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
                    setAttributes({ repeatedBackgroundImage: 'repeat' })
                  } else {
                    setAttributes({ repeatedBackgroundImage: 'no-repeat' })
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
                  (focalPoint) => {
                    let {x, y} = focalPoint
                    let temp = parseInt(x*100)+'% '+parseInt(y*100)+'%'
                    setAttributes({focalAttr: temp})
                    setAttributes({
                    focalPoint: focalPoint
                })
                }}
              />
              <p>Alt text (alternative text)</p>
              <input type="text"/>      
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
 