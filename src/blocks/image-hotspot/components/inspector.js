 import InspectorTab from "../../../components/InspectorTab";
 import InspectorTabs from "../../../components/InspectorTabs";
 import ResponsivePaddingControl from "../../../settings-components/Responsive Spacing Settings/Responsive Padding Control";
 import ResponsiveMarginControl from "../../../settings-components/Responsive Spacing Settings/Responsive Margin Control";
 
 const { __ } = wp.i18n;
 const { Component, Fragment } = wp.element;
 
 const { InspectorControls } = wp.editor;
 
 const {
   PanelBody,
   ToggleControl,
   TextareaControl,
   RangeControl,
   TabPanel,
   Dashicon,
 } = wp.components;
 
 export default class Inspector extends Component {
   constructor(props) {
     super(...arguments);
   }
 
   render() {
     const {
       attributes: {
       },
       setAttributes,
     } = this.props;
 
     return (
       <InspectorControls key="inspector">
         <InspectorTabs>
           <InspectorTab key={"content"}></InspectorTab>
           <InspectorTab key={"style"}></InspectorTab>
           <InspectorTab key={"advance"}></InspectorTab>
         </InspectorTabs>
       </InspectorControls>
     );
   }
 }
 