import classnames from "classnames";

const BoxContainer = ({ wrapperStyle,  children, block_id, className }) => (
	<div className={classnames(
		className,
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

export default BoxContainer;
