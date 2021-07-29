/**
 * Inspector Controls
 */

 import times from "lodash/times";
 import TypographyHelperControl from "../../../settings-components/Typography Settings";
 
 // Setup the block
 const { __ } = wp.i18n;
 const { Component, Fragment } = wp.element;
 
 // Import block components
 const { InspectorControls, PanelColorSettings, MediaUpload } = wp.editor;
 
 // Import Inspector components
 const {
   PanelBody,
   RangeControl,
   SelectControl,
   TextControl,
   BaseControl,
   Button,
   ToggleControl,
 } = wp.components;
 import BoxShadowControl from "../../../utils/components/box-shadow";
 import fontOptions from "../../../utils/googlefonts";
 import { loadGoogleFont } from "../../../utils/font";
 import ColorBackgroundControl from "../../../settings-components/Block Background Settings/Color Background Settings";
 import GradientBackgroundControl from "../../../settings-components/Block Background Settings/Gradient Background Settings";
 
 import ImageSettingsControl from "../../../settings-components/Image Settings";
 import ImageBackgroundControl from "../../../settings-components/Block Background Settings/Image Background Settings/index";
 import ResponsiveSpacingControl from "../../../settings-components/Responsive Spacing Settings";
 import InspectorTab from "../../../components/InspectorTab";
 import InspectorTabs from "../../../components/InspectorTabs";
 
 /**
  * Create an Inspector Controls wrapper Component
  */
 export default class Inspector extends Component {
   constructor(props) {
     super(...arguments);
     this.onRemoveImage = this.onRemoveImage.bind(this);
     this.onSelectImage = this.onSelectImage.bind(this);
   }
 
   /*
    * Event to set Image as null while removing.
    */
   onRemoveImage() {
     const { setAttributes } = this.props;
 
     setAttributes({ backgroundImage: null });
   }
 
   /*
    * Event to set Image as while adding.
    */
   onSelectImage(media) {
     const { setAttributes } = this.props;
     const { backgroundImage } = this.props.attributes;
 
     if (!media || !media.url) {
       setAttributes({ backgroundImage: null });
       return;
     }
 
     if (!media.type || "image" != media.type) {
       return;
     }
 
     setAttributes({ backgroundImage: media.url });
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
 
     const gutterOptions = [
       {
         value: "no",
         label: __("None", "responsive-block-editor-addons"),
         shortName: __("None", "responsive-block-editor-addons"),
       },
       {
         value: "small",
         /* translators: abbreviation for small size */
         label: __("S", "responsive-block-editor-addons"),
         tooltip: __("Small", "responsive-block-editor-addons"),
       },
       {
         value: "medium",
         /* translators: abbreviation for medium size */
         label: __("M", "responsive-block-editor-addons"),
         tooltip: __("Medium", "responsive-block-editor-addons"),
       },
       {
         value: "large",
         /* translators: abbreviation for large size */
         label: __("L", "responsive-block-editor-addons"),
         tooltip: __("Large", "responsive-block-editor-addons"),
       },
       {
         value: "huge",
         /* translators: abbreviation for largest size */
         label: __("XL", "responsive-block-editor-addons"),
         tooltip: __("Huge", "responsive-block-editor-addons"),
       },
     ];
 
     // Setup the attributes
     const {
       attributes: {
         count,
         gutter,
         teamBlock,
         designationColor,
         descriptionColor,
         socialIconColor,
         titleFontSize,
         titleFontSizeMobile,
         titleFontSizeTablet,
         titleFontFamily,
         descriptionFontFamily,
         designationFontFamily,
         designationFontSize,
         designationFontSizeMobile,
         designationFontSizeTablet,
         descriptionFontSize,
         descriptionFontSizeMobile,
         descriptionFontSizeTablet,
         titleFontWeight,
         designationFontWeight,
         descriptionFontWeight,
         titleLineHeight,
         designationLineHeight,
         descriptionLineHeight,
         titleSpacing,
         titleSpacingMobile,
         titleSpacingTablet,
         designationSpacing,
         designationSpacingMobile,
         designationSpacingTablet,
         descriptionSpacing,
         descriptionSpacingMobile,
         descriptionSpacingTablet,
         socialIconSpacing,
         socialIconSpacingMobile,
         socialIconSpacingTablet,
         imageMarginTop,
         imageMarginTopMobile,
         imageMarginTopTablet,
         imageMarginBottom,
         imageMarginBottomMobile,
         imageMarginBottomTablet,
         titleColor,
         backgroundColor,
         borderColor,
         borderWidth,
         borderRadius,
         padding,
         boxShadowColor,
         boxShadowHOffset,
         boxShadowVOffset,
         boxShadowBlur,
         boxShadowSpread,
         boxShadowPosition,
         opacity,
         backgroundColor2,
         gradientDirection,
         colorLocation1,
         colorLocation2,
         bgGradient,
         backgroundImage,
         backgroundImagePosition,
         backgroundImageRepeat,
         backgroundImageSize,
         backgroundAttachment,
         stack,
         facebook,
         twitter,
         linkedin,
         instagram,
         email,
         youtube,
         pinterest,
         iconSize,
         showImage,
         showName,
         showDesignation,
         showDescription,
         showSocialIcons,
       },
       setAttributes,
     } = this.props;
 
     // Update color values
     const onChangeDesignationColor = (value) =>
       setAttributes({ designationColor: value });
     const onChangeDescriptionColor = (value) =>
       setAttributes({ descriptionColor: value });
     const onChangeSocialIconColor = (value) =>
       setAttributes({ socialIconColor: value });
     const onChangetitleColor = (value) => setAttributes({ titleColor: value });
     const onChangeBackgroundColor = (value) =>
       setAttributes({ backgroundColor: value });
     const onChangeBorderColor = (value) =>
       setAttributes({ borderColor: value });
     const onChangeSecondaryBackgroundColor = (value) =>
       setAttributes({ backgroundColor2: value });
 
     const imageShapeOptions = [
       {
         value: "default",
         label: __("Default", "responsive-block-editor-addons"),
         shortName: __("Default", "responsive-block-editor-addons"),
       },
       {
         value: "circle",
         label: __("Circle", "responsive-block-editor-addons"),
         shortName: __("Circle", "responsive-block-editor-addons"),
       },
       {
         value: "square",
         label: __("Square", "responsive-block-editor-addons"),
         shortName: __("Square", "responsive-block-editor-addons"),
       },
       {
         value: "blob",
         label: __("Blob", "responsive-block-editor-addons"),
         shortName: __("Blob", "responsive-block-editor-addons"),
       },
     ];
 
     return (
       <InspectorControls key="inspector">
         <InspectorTabs>
           <InspectorTab key={"content"}>
             <PanelBody
               title={__("General", "responsive-block-editor-addons")}
               initialOpen={false}
             >
               <RangeControl
                 label={__(
                   "Number of Team Member Boxes",
                   "responsive-block-editor-addons"
                 )}
                 value={count}
                 onChange={(newCount) => {
                   let cloneTest_block = [...teamBlock];
                   if (cloneTest_block.length < newCount) {
                     const incAmount = Math.abs(
                       newCount - cloneTest_block.length
                     );
 
                     {
                       times(incAmount, (n) => {
                         cloneTest_block.push({
                           title: "Team Title " + newCount,
                           descriptions: "",
                         });
                       });
                     }
                     setAttributes({ teamBlock: cloneTest_block });
                   } else {
                     const incAmount = Math.abs(
                       newCount - cloneTest_block.length
                     );
                     let data_new = cloneTest_block;
                     for (var i = 0; i < incAmount; i++) {
                       data_new.pop();
                     }
                     setAttributes({ teamBlock: data_new });
                   }
                   setAttributes({ count: newCount });
                 }}
                 min={1}
                 max={4}
                 step={1}
               />
               <SelectControl
                label={__("Stack on", "responsive-block-editor-addons")}
                value={stack}
                options={[
                  {
                    value: "none",
                    label: __("None", "responsive-block-editor-addons"),
                  },
                  {
                    value: "tablet",
                    label: __("Tablet", "responsive-block-editor-addons"),
                  },
                  {
                    value: "mobile",
                    label: __("Mobile", "responsive-block-editor-addons"),
                  },
                ]}
                onChange={(value) => setAttributes({ stack: value })}
                help={__(
                  "Note: Choose on what breakpoint the team cards will stack.",
                  "responsive-block-editor-addons"
                )}
              />
               {count > 1 && (
                 <SelectControl
                   label={__("Gutter", "responsive-block-editor-addons")}
                   value={gutter}
                   options={gutterOptions}
                   onChange={(newGutter) => setAttributes({ gutter: newGutter })}
                 />
               )}
               <BoxShadowControl
                 setAttributes={setAttributes}
                 label={__("Box Shadow", "responsive-block-editor-addons")}
                 boxShadowColor={{ value: boxShadowColor, label: __("Color") }}
                 boxShadowHOffset={{
                   value: boxShadowHOffset,
                   label: __("Horizontal", "responsive-block-editor-addons"),
                 }}
                 boxShadowVOffset={{
                   value: boxShadowVOffset,
                   label: __("Vertical", "responsive-block-editor-addons"),
                 }}
                 boxShadowBlur={{
                   value: boxShadowBlur,
                   label: __("Blur", "responsive-block-editor-addons"),
                 }}
                 boxShadowSpread={{
                   value: boxShadowSpread,
                   label: __("Spread", "responsive-block-editor-addons"),
                 }}
                 boxShadowPosition={{
                   value: boxShadowPosition,
                   label: __("Position", "responsive-block-editor-addons"),
                 }}
               />
               <RangeControl
                 label={__("Border Width", "responsive-block-editor-addons")}
                 value={borderWidth}
                 onChange={(value) =>
                   this.props.setAttributes({
                     borderWidth: value,
                   })
                 }
                 min={0}
                 max={50}
                 step={1}
               />
               <RangeControl
                 label={__("Border Radius", "responsive-block-editor-addons")}
                 value={borderRadius}
                 onChange={(value) =>
                   this.props.setAttributes({
                     borderRadius: value,
                   })
                 }
                 min={0}
                 max={50}
                 step={1}
               />
               <RangeControl
                 label={__("Padding", "responsive-block-editor-addons")}
                 value={padding}
                 onChange={(value) =>
                   this.props.setAttributes({
                     padding: value,
                   })
                 }
                 min={0}
                 max={50}
                 step={1}
               />
               <PanelBody
                 title={__(
                   "Column Background",
                   "responsive-block-editor-addons"
                 )}
                 initialOpen={false}
               >
                 <Fragment>
                   <ColorBackgroundControl {...this.props} />
                 </Fragment>
                 <RangeControl
                   label={__(
                     "Background Color Opacity",
                     "responsive-block-editor-addons"
                   )}
                   value={opacity}
                   onChange={(value) =>
                     this.props.setAttributes({
                       opacity: value !== undefined ? value : 50,
                     })
                   }
                   min={0}
                   max={100}
                   allowReset
                 />
                 <ToggleControl
                   label="Gradient Background"
                   checked={bgGradient}
                   onChange={() =>
                     this.props.setAttributes({
                       bgGradient: !bgGradient,
                     })
                   }
                 />
                 {bgGradient && (
                   <Fragment>
                     <GradientBackgroundControl
                       {...this.props}
                       showHoverGradient={false}
                       showColorOne={false}
                     />
                   </Fragment>
                 )}
                 <ImageBackgroundControl
                   {...this.props}
                   showSomeImageOptions={true}
                   showMoreImageOptions={true}
                   showOverlayOptions={false}
                 />
               </PanelBody>
             </PanelBody>
 
             <PanelBody
               title={__("Content", "responsive-block-editor-addons")}
               initialOpen={false}
             >
               <ToggleControl
                 label="Image"
                 checked={showImage}
                 onChange={() =>
                   this.props.setAttributes({
                     showImage: !showImage,
                   })
                 }
               />
               <ToggleControl
                 label="Name"
                 checked={showName}
                 onChange={() =>
                   this.props.setAttributes({
                     showName: !showName,
                   })
                 }
               />
               <ToggleControl
                 label="Designation"
                 checked={showDesignation}
                 onChange={() =>
                   this.props.setAttributes({
                     showDesignation: !showDesignation,
                   })
                 }
               />
               <ToggleControl
                 label="Description"
                 checked={showDescription}
                 onChange={() =>
                   this.props.setAttributes({
                     showDescription: !showDescription,
                   })
                 }
               />
               <ToggleControl
                 label="Social Icons"
                 checked={showSocialIcons}
                 onChange={() =>
                   this.props.setAttributes({
                     showSocialIcons: !showSocialIcons,
                   })
                 }
               />
             </PanelBody>
             <PanelBody
               title={__("Image", "responsive-block-editor-addons")}
               initialOpen={false}
             >
               <ImageSettingsControl {...this.props} />
             </PanelBody>
             <PanelBody
               title={__("Social", "responsive-block-editor-addons")}
               initialOpen={false}
             >
               <PanelBody
                 title={__(
                   "Hide Social Icons",
                   "responsive-block-editor-addons"
                 )}
                 initialOpen={true}
               >
                 <ToggleControl
                   label="Twitter"
                   checked={twitter}
                   onChange={() =>
                     this.props.setAttributes({
                       twitter: !twitter,
                     })
                   }
                 />
                 <ToggleControl
                   label="Facebook"
                   checked={facebook}
                   onChange={() =>
                     this.props.setAttributes({
                       facebook: !facebook,
                     })
                   }
                 />
                 <ToggleControl
                   label="Linkedin"
                   checked={linkedin}
                   onChange={() =>
                     this.props.setAttributes({
                       linkedin: !linkedin,
                     })
                   }
                 />
                 <ToggleControl
                   label="Instagram"
                   checked={instagram}
                   onChange={() =>
                     this.props.setAttributes({
                       instagram: !instagram,
                     })
                   }
                 />
                 <ToggleControl
                   label="Email"
                   checked={email}
                   onChange={() =>
                     this.props.setAttributes({
                       email: !email,
                     })
                   }
                 />
                 <ToggleControl
                   label="Youtube"
                   checked={youtube}
                   onChange={() =>
                     this.props.setAttributes({
                       youtube: !youtube,
                     })
                   }
                 />
                 <ToggleControl
                   label="Pinterest"
                   checked={pinterest}
                   onChange={() =>
                     this.props.setAttributes({
                       pinterest: !pinterest,
                     })
                   }
                 />
               </PanelBody>
               <PanelColorSettings
                 title={__("Colors", "responsive-block-editor-addons")}
                 initialOpen={true}
                 colorSettings={[
                   {
                     value: socialIconColor,
                     onChange: onChangeSocialIconColor,
                     label: __(
                       "Social Icon Color",
                       "responsive-block-editor-addons"
                     ),
                   },
                 ]}
               ></PanelColorSettings>
               <RangeControl
                 label={__("Icon Size", "responsive-block-editor-addons")}
                 value={iconSize}
                 onChange={(value) =>
                   this.props.setAttributes({
                     iconSize: value,
                   })
                 }
                 min={0}
                 max={100}
                 step={1}
               />
             </PanelBody>
           </InspectorTab>
           <InspectorTab key={"style"}>
             <PanelBody
               title={__("Typography", "responsive-block-editor-addons")}
               initialOpen={false}
             >
               <TypographyHelperControl
                 title={__("Title Typography", "responsive-block-editor-addons")}
                 attrNameTemplate="title%s"
                 values={{
                   family: titleFontFamily,
                   size: titleFontSize,
                   sizeMobile: titleFontSizeMobile,
                   sizeTablet: titleFontSizeTablet,
                   weight: titleFontWeight,
                   height: titleLineHeight,
                 }}
                 showLetterSpacing={false}
                 showTextTransform={false}
                 setAttributes={setAttributes}
                 {...this.props}
               />
               <TypographyHelperControl
                 title={__(
                   "Designation Typography",
                   "responsive-block-editor-addons"
                 )}
                 attrNameTemplate="designation%s"
                 values={{
                   family: designationFontFamily,
                   size: designationFontSize,
                   sizeMobile: designationFontSizeMobile,
                   sizeTablet: designationFontSizeTablet,
                   weight: designationFontWeight,
                   height: designationLineHeight,
                 }}
                 showLetterSpacing={false}
                 showTextTransform={false}
                 setAttributes={setAttributes}
                 {...this.props}
               />
               <TypographyHelperControl
                 title={__(
                   "Description Typography",
                   "responsive-block-editor-addons"
                 )}
                 attrNameTemplate="description%s"
                 values={{
                   family: descriptionFontFamily,
                   size: descriptionFontSize,
                   sizeMobile: descriptionFontSizeMobile,
                   sizeTablet: descriptionFontSizeTablet,
                   weight: descriptionFontWeight,
                   height: descriptionLineHeight,
                 }}
                 showLetterSpacing={false}
                 showTextTransform={false}
                 setAttributes={setAttributes}
                 {...this.props}
               />
             </PanelBody>
 
             <PanelBody
               title={__("Spacing", "responsive-block-editor-addons")}
               initialOpen={false}
             >
               <ResponsiveSpacingControl
                 title={"Title Bottom Spacing"}
                 attrNameTemplate="titleSpacing%s"
                 values={{
                   desktop: titleSpacing,
                   tablet: titleSpacingTablet,
                   mobile: titleSpacingMobile,
                 }}
                 setAttributes={setAttributes}
                 {...this.props}
               />
               <ResponsiveSpacingControl
                 title={"Designation Bottom Spacing"}
                 attrNameTemplate="designationSpacing%s"
                 values={{
                   desktop: designationSpacing,
                   tablet: designationSpacingTablet,
                   mobile: designationSpacingMobile,
                 }}
                 setAttributes={setAttributes}
                 {...this.props}
               />
               <ResponsiveSpacingControl
                 title={"Description Bottom Spacing"}
                 attrNameTemplate="descriptionSpacing%s"
                 values={{
                   desktop: descriptionSpacing,
                   tablet: descriptionSpacingTablet,
                   mobile: descriptionSpacingMobile,
                 }}
                 setAttributes={setAttributes}
                 {...this.props}
               />
               <ResponsiveSpacingControl
                 title={"Inter Social Icon Spacing"}
                 attrNameTemplate="socialIconSpacing%s"
                 values={{
                   desktop: socialIconSpacing,
                   tablet: socialIconSpacingTablet,
                   mobile: socialIconSpacingMobile,
                 }}
                 setAttributes={setAttributes}
                 {...this.props}
               />
               <ResponsiveSpacingControl
                 title={"Image Margin Top"}
                 attrNameTemplate="imageMarginTop%s"
                 values={{
                   desktop: imageMarginTop,
                   tablet: imageMarginTopTablet,
                   mobile: imageMarginTopMobile,
                 }}
                 setAttributes={setAttributes}
                 {...this.props}
               />
               <ResponsiveSpacingControl
                 title={"Image Margin Bottom"}
                 attrNameTemplate="imageMarginBottom%s"
                 values={{
                   desktop: imageMarginBottom,
                   tablet: imageMarginBottomTablet,
                   mobile: imageMarginBottomMobile,
                 }}
                 setAttributes={setAttributes}
                 {...this.props}
               />
             </PanelBody>
 
             <PanelColorSettings
               title={__("Color Settings", "responsive-block-editor-addons")}
               initialOpen={false}
               colorSettings={[
                 {
                   value: borderColor,
                   onChange: onChangeBorderColor,
                   label: __("Border Color", "responsive-block-editor-addons"),
                 },
                 {
                   value: titleColor,
                   onChange: onChangetitleColor,
                   label: __("Title Color", "responsive-block-editor-addons"),
                 },
                 {
                   value: designationColor,
                   onChange: onChangeDesignationColor,
                   label: __(
                     "Designation Color",
                     "responsive-block-editor-addons"
                   ),
                 },
                 {
                   value: descriptionColor,
                   onChange: onChangeDescriptionColor,
                   label: __(
                     "Description Color",
                     "responsive-block-editor-addons"
                   ),
                 },
               ]}
             ></PanelColorSettings>
           </InspectorTab>
           <InspectorTab key={"advance"}></InspectorTab>
         </InspectorTabs>
       </InspectorControls>
     );
   }
 }
 

