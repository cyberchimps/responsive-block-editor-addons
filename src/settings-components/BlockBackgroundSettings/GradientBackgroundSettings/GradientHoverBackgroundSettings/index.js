/**
 * Box-Shadow reusable component.
 *
 */
 const { __ } = wp.i18n;

 const { ColorPalette } = wp.blockEditor;
 
 const { SelectControl, RangeControl } = wp.components;
 
 // Extend component
 const { Component, Fragment } = wp.element;
 
 class GradientHoverBackgroundControl extends Component {
   constructor() {
     super(...arguments);
   }
 
   render() {
       const {
           attributes: {
               hoverbackgroundColor1,
               hoverbackgroundColor2,
               hovercolorLocation1,
               hovercolorLocation2,
               hovergradientDirection,
           },
           setAttributes,
       } = this.props;
 
     var advancedControls;
       advancedControls = (
           <Fragment>
           <p className="responsive-setting-label">
           {__("Color 1", "responsive-block-editor-addons")}
   <span className="components-base-control__label">
           <span
       className="component-color-indicator"
       style={{ backgroundColor: hoverbackgroundColor1 }}
   ></span>
       </span>
       </p>
       <ColorPalette
       value={hoverbackgroundColor1}
       onChange={(colorValue) =>
       setAttributes({ hoverbackgroundColor1: colorValue })
   }
       allowReset
       />
 
       <p className="responsive-setting-label">
           {__("Color 2", "responsive-block-editor-addons")}
   <span className="components-base-control__label">
           <span
       className="component-color-indicator"
       style={{ backgroundColor: hoverbackgroundColor2 }}
   ></span>
       </span>
       </p>
       <ColorPalette
       value={hoverbackgroundColor2}
       onChange={(colorValue) =>
       setAttributes({ hoverbackgroundColor2: colorValue })
   }
       allowReset
       />
       <RangeControl
       label={__("Color Location 1", "responsive-block-editor-addons")}
       value={hovercolorLocation1}
       min={0}
       max={100}
       onChange={(value) =>
       setAttributes({
           hovercolorLocation1: value !== undefined ? value : 0,
       })
   }
       />
       <RangeControl
       label={__("Color Location 2", "responsive-block-editor-addons")}
       value={hovercolorLocation2}
       min={0}
       max={100}
       onChange={(value) =>
       setAttributes({
           hovercolorLocation2: value !== undefined ? value : 100,
       })
   }
       />
       <RangeControl
       label={__(
           "Gradient Direction",
           "responsive-block-editor-addons"
   )}
       value={hovergradientDirection}
       min={0}
       max={360}
       onChange={(value) =>
       setAttributes({
           hovergradientDirection: value !== undefined ? value : 90,
       })
   }
       />
       </Fragment>
       );
 
 
     return (
       <div className="responsive-block-editor-addons-gradient-background-settings">
         {advancedControls}
       </div>
     );
   }
 }
 
 export default GradientHoverBackgroundControl;
 