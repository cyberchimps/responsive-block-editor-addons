import classnames from "classnames";

const DeprecatedBoxContainer = ({ wrapperStyle,  children, block_id }) => (
	<div className={classnames(
		"responsive-block-editor-addons-countdown-wrapper",
		"responsive-block-editor-addons-block-count-down",
		`block-${block_id}`,
	  )} 
	>
		<div className="responsive-block-editor-addons-countdown-container">
			<ul className="responsive-block-editor-addons-countdown-items">
				{children}
			</ul>
		</div>
	</div>
);

export default DeprecatedBoxContainer;
