/**
 * Box-Shadow reusable component.
 *
 */
 const { __ } = wp.i18n;

 const { ColorPalette } = wp.blockEditor;
 
 const { SelectControl, RangeControl } = wp.components;

import RbeaRangeControl from "../../../../utils/components/rbea-range-control";
import RbeaAngleRangeControl from "../../../../utils/components/rbea-angle-range-control";
import RbeaColorControl from "../../../../utils/components/rbea-color-control";
import { GradientPicker } from "@wordpress/components";
import { hexToRgba } from "../../../../utils/index.js";
 
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
               opacity,
               gradientHover,
           },
           setAttributes,
       } = this.props;
     
       // Gradient options for WordPress GradientPicker (same as container)
      const gradientOptions = [
          {
          name: 'JShine',
          gradient:
              'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)',
          slug: 'jshine',
          },
          {
          name: 'Moonlit Asteroid',
          gradient:
              'linear-gradient(135deg,#0F2027 0%, #203A43 0%, #2c5364 100%)',
          slug: 'moonlit-asteroid',
          },
          {
          name: 'Rastafarie',
          gradient:
              'linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)',
          slug: 'rastafari',
          },
      ];
  
      // Convert old gradient attributes to WordPress gradient format if needed
      const getGradientHValue = () => {
          // If gradient already exists (WordPress format), use it
          if (gradientHover) {
            return gradientHover;
          }
          
          // Otherwise, convert from old attributes to WordPress format
          if (hoverbackgroundColor1 || hoverbackgroundColor2) {
          const imgopacity = opacity ? opacity / 100 : 1;
          const color1 = hexToRgba(hoverbackgroundColor1 || "#fff", imgopacity);
          const color2 = hexToRgba(hoverbackgroundColor2 || "#fff", imgopacity);
          const location1 = hovercolorLocation1 !== undefined ? hovercolorLocation1 : 0;
          const location2 = hovercolorLocation2 !== undefined ? hovercolorLocation2 : 100;
          const direction = hovergradientDirection !== undefined ? hovergradientDirection : 90;
          
          return `linear-gradient(${direction}deg, ${color1} ${location1}%, ${color2} ${location2}%)`;
          }
          
          return undefined;
      };
  
      // Handle gradient change - save to new format
      const onGradientHChange = (value) => {
          setAttributes({ gradientHover: value });
      };

     var advancedControls;
       advancedControls = (
          <Fragment>
            <GradientPicker
              value={getGradientHValue()}
              onChange={onGradientHChange}
              gradients={gradientOptions}
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
 