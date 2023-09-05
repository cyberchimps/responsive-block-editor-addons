/**
 * Internal dependencies
 */
import classnames from "classnames";

/**
 * WordPress dependencies
 */
const { Component, Fragment } = wp.element;
const { RichText, InnerBlocks } = wp.blockEditor;

export default class Save extends Component {
    constructor() {
        super(...arguments);
    }

    render() {
        const {
            block_id,
            headingTag,
            mainHeadingText,
            mainImage,
            overallAlignment,
            //Time Attributes
            showEstimatedTime,
            years,
            months,
            days,
            hours,
            minutes,
            timeHeading,
            //Cost Attributes
            showEstimatedCost,
            cost,
            currency,
            costHeading,
            //Tools Attributes
            showTools,
            tools,
            toolsHeading,
            //Materials Attributes
            showMaterials,
            materials,
            materialsHeading,
            //Steps Attributes
            stepsHeading,
        } = this.props.attributes;

        const yearLabel = years > 1 ? " years " : " year ";
        const monthLabel = months > 1 ? " months " : " month ";
        const dayLabel = days > 1 ? " days " : " day ";
        const hourLabel = hours > 1 ? " hours " : " hour ";
        const minuteLabel = minutes > 1 ? " minutes" : " minute";

        return [
            <div
                className={classnames(
                    "responsive-block-editor-addons-block-how-to",
                    `block-${block_id}`
                )}
            >
                <RichText.Content
                    tagName={headingTag}
                    value={mainHeadingText}
                    className="responsive-block-editor-addons-block-how-to-main-heading"
                />
                {(mainImage && mainImage.url) &&
                    <img className="responsive-block-editor-addons-block-how-to-main-image" src={mainImage.url} />
                }
                <div className="responsive-block-editor-addons-block-how-to-time-area">
                    {showEstimatedTime && (
                        <RichText.Content
                            tagName="h4"
                            value={timeHeading}
                            className="responsive-block-editor-addons-block-how-to-sub-heading-time"
                        />

                    )}
                    {
                        showEstimatedTime && (
                            <Fragment>
                                {years && <span className="responsive-block-editor-addons-block-how-to-time-value">{years}{yearLabel}</span>}
                                {months && <span className="responsive-block-editor-addons-block-how-to-time-value">{months}{monthLabel}</span>}
                                {days && <span className="responsive-block-editor-addons-block-how-to-time-value">{days}{dayLabel}</span>}
                                {hours && <span className="responsive-block-editor-addons-block-how-to-time-value">{hours}{hourLabel}</span>}
                                {minutes && <span className="responsive-block-editor-addons-block-how-to-time-value">{minutes}{minuteLabel}</span>}
                            </Fragment>
                        )
                    }
                </div>
                <div className="responsive-block-editor-addons-block-how-to-cost-area">
                    {showEstimatedCost && (
                        <RichText.Content
                            tagName="h4"
                            value={costHeading}
                            className="responsive-block-editor-addons-block-how-to-sub-heading-cost"
                        />
                    )}
                    {showEstimatedCost && (
                        <RichText.Content
                            tagName="p"
                            value={cost}
                            className="responsive-block-editor-addons-block-how-to-cost-value"
                        />
                    )}
                    {showEstimatedCost && (
                        <RichText.Content
                            tagName="p"
                            value={currency}
                            className="responsive-block-editor-addons-block-how-to-cost-value"
                        />
                    )}
                </div>
                <div className="responsive-block-editor-addons-block-how-to-tools-area">
                    {showTools && (
                        <RichText.Content
                            tagName="h4"
                            value={toolsHeading}
                            className="responsive-block-editor-addons-block-how-to-sub-heading-tools"
                        />
                    )}
                    {
                        showTools && (
                            <ul className="responsive-block-editor-addons-block-how-to-tools-list">
                                {tools.map((tool, index) => {
                                    return (<li className="responsive-block-editor-addons-block-how-to-tools-list-item" key={index}>
                                        <RichText.Content
                                            tagName="p"
                                            value={tool.add_required_tools}
                                            className="responsive-block-editor-addons-block-how-to-tools-list-item-value"
                                        />
                                    </li>)
                                })}
                            </ul>
                        )
                    }
                </div>
                <div className="responsive-block-editor-addons-block-how-to-materials-area">
                    {showMaterials && (
                        <RichText.Content
                            tagName="h4"
                            value={materialsHeading}
                            className="responsive-block-editor-addons-block-how-to-sub-heading-materials"
                        />
                    )}
                    {
                        showMaterials && (
                            <ul className="responsive-block-editor-addons-block-how-to-materials-list">
                                {materials.map((material, index) => {
                                    return (
                                        <li className="responsive-block-editor-addons-block-how-to-materials-list-item" key={index}>
                                            <RichText.Content
                                                tagName="p"
                                                value={material.add_required_materials}
                                                className="responsive-block-editor-addons-block-how-to-materials-list-item-value"
                                            />
                                        </li>
                                    )
                                })}
                            </ul>
                        )
                    }
                </div>
                <div className="responsive-block-editor-addons-block-how-to-steps-area">
                    <RichText.Content
                        tagName="h4"
                        value={stepsHeading}
                        className="responsive-block-editor-addons-block-how-to-sub-heading-steps"
                    />
                    <div className="responsive-block-editor-addons-block-how-to-steps">
                        <InnerBlocks.Content />
                    </div>
                </div>
            </div>,
        ];
    }
}
