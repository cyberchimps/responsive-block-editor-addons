/**
 * Internal dependencies
 */
 import classnames from "classnames";
 import Style from "style-it";
 import renderSVG from "../../../renderIcon";
 
 /**
  * WordPress dependencies
  */
 const { Component, Fragment } = wp.element;
 const { RichText } = wp.editor;
 
 export default class Save extends Component {
   constructor() {
	 super(...arguments);
   }
 
   render() {
	 const {
	   block_id,
	   callText,
	   mailText,
	   phone,
	   mail,
	   buttonToShow,
	   buttonSize,
	   icon,
	   iconPosition,
	 } = this.props.attributes;
	 return [
	   <div
		 className={classnames(
		   "responsive-block-editor-addons-block-call-mail-button",
		   `block-${block_id}`
		 )}
	   >
		<div className={classnames(
			"responsive-block-editor-addons-call-mail-button-button-container",
			buttonSize
		)}>
			{
				"" !== icon && "left" == iconPosition && (
					<span
						className={classnames(
							`responsive-block-editor-addons-call-mail-button-icon`,
							`responsive-block-editor-addons-call-mail-button-icon-iconPosition-${iconPosition}`
						)}
					>
						{renderSVG(icon)}
					</span>
				)
			}
			{
				"call" === buttonToShow && (
					<a className="responsive-block-editor-addons-call-mail-button-link" href={`tel:${phone}`}>
					<RichText.Content
						tagName="span"
						value={callText}
						className="responsive-block-editor-addons-call-mail-button-text"
					/>
					</a>
				)
			}
			{
				"mail" === buttonToShow && (
					<a className="responsive-block-editor-addons-call-mail-button-link" href={`mailto: ${mail}`}>
					<RichText.Content
						tagName="span"
						value={mailText}
						className="responsive-block-editor-addons-call-mail-button-text"
					/>
					</a>
				)
			}
			{
				"" !== icon && "right" == iconPosition && (
					<span
						className={classnames(
							`responsive-block-editor-addons-call-mail-button-icon`,
							`responsive-block-editor-addons-call-mail-button-icon-iconPosition-${iconPosition}`
						)}
					>
						{renderSVG(icon)}
					</span>
				)
			}
		</div>
	   </div>,
	 ];
   }
 }
 