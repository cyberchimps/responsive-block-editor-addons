import classnames from "classnames";

const Box = ({
	boxName,
	boxStyle,
	label,
	digit,
}) => (
	<li 
	className={classnames(
		"responsive-block-editor-addons-countdown-item",
		"responsive-block-editor-addons-countdown-box-stylings",
		`responsive-block-editor-addons-countdown-item-${boxName}`
	)}>
		<div className={`responsive-block-editor-addons-countdown-${boxName} responsive-block-editor-addons-countdown-box-margins`}>
			<span
				className={`responsive-block-editor-addons-countdown-digits responsive-block-editor-addons-countdown-digits-${boxName}`}
			>
				{digit}
			</span>
			<span className="responsive-block-editor-addons-countdown-label">
				{label}
			</span>
		</div>
	</li>
);

export default Box;
