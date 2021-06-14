/**
 * WordPress dependencies
 */
 import { Component } from "@wordpress/element";

 /**
  * Internal dependencies
  */
 import Box from "./box";
 import BoxContainer from "./box-container";
 import Inspector from "./inspector";
 import uuid from "../../../utils/uuid";
 import { Fragment } from "react";
 import EditorStyles from "./editor-styles";
 
 class Edit extends Component {
	 componentWillUnmount() {
		 const { id } = this.props.attributes;
 
		 // Remove interval from window object
		 if (window[id]) {
			 clearInterval(window[id]);
			 delete window[id];
		 }
	 }

	 componentDidUpdate(prevProps, prevState) {
		var element = document.getElementById(
		  "responsive-block-editor-addons-count-down-style-" + this.props.clientId
		);
	
		if (null !== element && undefined !== element) {
		  element.innerHTML = EditorStyles(this.props);
		}
	  }
	
	  componentDidMount() {
		// Generate unique id
		let id = this.props.attributes.id || uuid().substr(0, 5);
		this.props.setAttributes({ id });
		// Assigning block_id in the attribute.
		this.props.setAttributes({ block_id: this.props.clientId });
		this.props.setAttributes({ classMigrate: true });
	
		// Pushing Style tag for this block css.
		const $style = document.createElement("style");
		$style.setAttribute(
		  "id",
		  "responsive-block-editor-addons-count-down-style-" + this.props.clientId
		);
		document.head.appendChild($style);
	  }
 
	 render() {
		 const { isSelected, attributes, setAttributes } = this.props;
 
		 const {
			 block_id,
			 date,
			 days,
			 hours,
			 minutes,
			 seconds,
			 digitDaysLabel,
			 digitHoursLabel,
			 digitMinutesLabel,
			 digitSecondsLabel,
		 } = attributes;
 
		 return [
			 isSelected && (
				 <Inspector attributes={attributes} setAttributes={setAttributes} />
			 ),
			<Fragment>
			 <BoxContainer
				 block_id={block_id}
			 >
				 <Box
					 boxName="days"
					 label={digitDaysLabel}
					 digit={days}
				 />
 
				 <Box
					 boxName="hours"
					 digit={hours}
					 label={digitHoursLabel}
				 />
 
				 <Box
					 boxName="minutes"
					 label={digitMinutesLabel}
					 digit={minutes}
				 />
 
				 <Box
					 boxName="seconds"
					 label={digitSecondsLabel}
					 digit={seconds}
				 />
			 </BoxContainer>,
			</Fragment>
		 ];
	 }
 }
 
 export default Edit;