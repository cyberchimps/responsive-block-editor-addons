/**
 * Dependencies
 */
 import InspectorTabs from "../../../../components/InspectorTabs";
 import InspectorTab from "../../../../components/InspectorTab";
 
 // Setup the block
 const { __ } = wp.i18n;
 const { Component, Fragment } = wp.element;
 
 // Import block components
 const {
     InspectorControls,
     ColorPalette,
     AlignmentToolbar,
   } = wp.blockEditor;
  
 // Import Inspector components
 const {
     PanelBody,
     BaseControl,
     TextControl,
     ToggleControl,
     SelectControl,
     RangeControl,
     TabPanel,
     Dashicon,
   } = wp.components;
 
  export default class Inspector extends Component {
     constructor(props) {
         super(...arguments)
     }	
 
     render() {
      const {
         attributes:{
          },
          setAttributes,
     } = this.props;
 
      return (
          <InspectorControls key="controls">
             <InspectorTabs>
                 <InspectorTab key={'content'}>
 
                 </InspectorTab>
                 <InspectorTab key={'style'}>
                     
                 </InspectorTab>
                 <InspectorTab key={'advance'}>
                     
                 </InspectorTab>
             </InspectorTabs>
          </InspectorControls>
      );
  };
 } 