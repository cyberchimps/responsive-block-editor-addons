/**
 * Internal dependencies
 */
import classnames from "classnames";
import Inspector from "./inspector";
import { loadGoogleFont } from "../../../utils/font";
import EditorStyles from "./editor-styles";
import SchemaNotices from "./schema-notice";
/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { RichText, AlignmentToolbar, BlockControls, InnerBlocks } = wp.blockEditor;
const { compose } = wp.compose;
const { select, withSelect } = wp.data;

const ALLOWED_BLOCKS = ["responsive-block-editor-addons/info-block"];

export default class Edit extends Component {
    constructor() {
        super(...arguments);
    }
    componentDidUpdate(prevProps, prevState) {
        var element = document.getElementById(
            "responsive-block-editor-addons-how-to-style-" +
            this.props.clientId
        );

        if (null !== element && undefined !== element) {
            element.innerHTML = EditorStyles(this.props);
        }
    }

    componentDidMount() {
        // Assigning block_id in the attribute.
        this.props.setAttributes({ block_id: this.props.clientId });

        this.props.setAttributes({ classMigrate: true });

        // Pushing Style tag for this block css.
        const $style = document.createElement("style");
        $style.setAttribute(
            "id",
            "responsive-block-editor-addons-how-to-style-" +
            this.props.clientId
        );
        document.head.appendChild($style);
    }

    saveTools(value, index) {
        const { attributes, setAttributes } = this.props;
        const { tools } = attributes;
        const newItems = tools.map((item, thisIndex) => {
            if (index === thisIndex) {
                item = { ...item, ...value }
            }
            return item;
        })
        setAttributes({ tools: newItems })
    }

    saveMaterials(value, index) {
        const { attributes, setAttribute } = this.props;
        const { materials } = attributes;
        const newItems = materials.map((item, thisIndex) => {
            if (index === thisIndex) {
                item = { ...item, ...value }
            }
            return item;
        })
        setAttributes({ materials: newItems })
    }


    render() {
        // Setup the attributes
        const {
            attributes: {
                block_id,
                headingTag,
                mainHeadingText,
                mainImage,
                overallAlignment,
                mainHeadingFontFamily,
                subHeadingFontFamily,
                descriptionFontFamily,
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
                //Notice Attributes
                headingDesc
            },
            setAttributes,
            mergeBlocks,
            insertBlocksAfter,
            onReplace,
        } = this.props;
        

        const yearLabel = years > 1 ? " years " : " year ";
        const monthLabel = months > 1 ? " months " : " month ";
        const dayLabel = days > 1 ? " days " : " day ";
        const hourLabel = hours > 1 ? " hours " : " hour ";
        const minuteLabel = minutes > 1 ? " minutes" : " minute";

        const getInfoBlockAsChild = [
            ["responsive-block-editor-addons/info-block",
                {
                    resheadingAlign: "left",
                    source_type: "none",
                    resseperatorStyle: "none",
                    resshowPrefix: false,
                    resheadingTag: "h4",
                    resinfoBlockTitle: "Step 1"
                }
            ],
            ["responsive-block-editor-addons/info-block",
                {
                    resheadingAlign: "left",
                    source_type: "none",
                    resseperatorStyle: "none",
                    resshowPrefix: false,
                    resheadingTag: "h4",
                    resinfoBlockTitle: "Step 2"
                }
            ],
            ["responsive-block-editor-addons/info-block",
                {
                    resheadingAlign: "left",
                    source_type: "none",
                    resseperatorStyle: "none",
                    resshowPrefix: false,
                    resheadingTag: "h4",
                    resinfoBlockTitle: "Step 3"
                }
            ],
        ];

        return [
            <style id={`responsive-block-editor-addons-how-to-style-${this.props.clientId}-inner`}>{EditorStyles(this.props)}</style>,
            <SchemaNotices
                headingTitle={mainHeadingText}
                headingDesc={headingDesc}
                mainimage={mainImage}
                showTotaltime={showEstimatedTime}
                timeNeeded={timeHeading}
                minsValue={minutes}
                timeInHours={hours}
                timeInDays={days}
                timeInMonths={months}
                timeInYears={years}
                showEstcost={showEstimatedCost}
                estCost={costHeading}
                cost={cost}
                currencyType={currency}
                tools={tools}
                materials={materials}
                clientId={this.props.clientId}
            />,
            <BlockControls key="controls">
                <AlignmentToolbar
                    value={overallAlignment}
                    onChange={(value) => setAttributes({ overallAlignment: value })}
                />
            </BlockControls>,
            <Inspector {...{ setAttributes, ...this.props }} />,

            // Show the block markup in the editor
            <div
                className={classnames(
                    "responsive-block-editor-addons-block-how-to",
                    `block-${block_id}`
                )}
            >
                {mainHeadingFontFamily && loadGoogleFont(mainHeadingFontFamily)}
                {subHeadingFontFamily && loadGoogleFont(subHeadingFontFamily)}
                {descriptionFontFamily && loadGoogleFont(descriptionFontFamily)}
                <RichText
                    tagName={headingTag}
                    placeholder={__("How-To Schema", "responsive-block-editor-addons")}
                    value={mainHeadingText}
                    onChange={(value) => setAttributes({ mainHeadingText: value })}
                    className="responsive-block-editor-addons-block-how-to-main-heading"
                />
                {(mainImage && mainImage.url) &&
                    <img className="responsive-block-editor-addons-block-how-to-main-image" src={mainImage.url} />
                }
                <div className="responsive-block-editor-addons-block-how-to-time-area">
                    {showEstimatedTime && (
                        <RichText
                            tagName="h4"
                            placeholder={__("Total Time Needed", "responsive-block-editor-addons")}
                            value={timeHeading}
                            onChange={(value) => setAttributes({ timeHeading: value })}
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
                        <RichText
                            tagName="h4"
                            placeholder={__("Total Cost", "responsive-block-editor-addons")}
                            value={costHeading}
                            onChange={(value) => setAttributes({ costHeading: value })}
                            className="responsive-block-editor-addons-block-how-to-sub-heading-cost"
                        />
                    )}
                    {showEstimatedCost && (
                        <RichText
                            tagName="p"
                            placeholder={__("10", "responsive-block-editor-addons")}
                            value={cost}
                            onChange={(value) => setAttributes({ cost: value })}
                            className="responsive-block-editor-addons-block-how-to-cost-value"
                        />
                    )}
                    {showEstimatedCost && (
                        <RichText
                            tagName="p"
                            placeholder={__("currency", "responsive-block-editor-addons")}
                            value={currency}
                            onChange={(value) => setAttributes({ currency: value })}
                            className="responsive-block-editor-addons-block-how-to-cost-value"
                        />
                    )}
                </div>
                <div className="responsive-block-editor-addons-block-how-to-tools-area">
                    {showTools && (
                        <RichText
                            tagName="h4"
                            placeholder={__("Tools Required", "responsive-block-editor-addons")}
                            value={toolsHeading}
                            onChange={(value) => setAttributes({ toolsHeading: value })}
                            className="responsive-block-editor-addons-block-how-to-sub-heading-tools"
                        />
                    )}
                    {
                        showTools && (
                            <ul className="responsive-block-editor-addons-block-how-to-tools-list">
                                {tools.map((tool, index) => {
                                    return (<li className="responsive-block-editor-addons-block-how-to-tools-list-item" key={index}>
                                        <RichText
                                            tagName="p"
                                            placeholder={__("Tool", "responsive-block-editor-addons")}
                                            value={tool.add_required_tools}
                                            className="responsive-block-editor-addons-block-how-to-tools-list-item-value"
                                            onChange={(value) => {
                                                this.saveTools({ add_required_tools: value }, index)
                                            }}
                                        />
                                    </li>)
                                })}
                            </ul>
                        )
                    }
                </div>
                <div className="responsive-block-editor-addons-block-how-to-materials-area">
                    {showMaterials && (
                        <RichText
                            tagName="h4"
                            placeholder={__("Materials Required", "responsive-block-editor-addons")}
                            value={materialsHeading}
                            onChange={(value) => setAttributes({ materialsHeading: value })}
                            className="responsive-block-editor-addons-block-how-to-sub-heading-materials"
                        />
                    )}
                    {
                        showMaterials && (
                            <ul className="responsive-block-editor-addons-block-how-to-materials-list">
                                {materials.map((material, index) => {
                                    return (
                                        <li className="responsive-block-editor-addons-block-how-to-materials-list-item" key={index}>
                                            <RichText
                                                tagName="p"
                                                placeholder={__("Material", "responsive-block-editor-addons")}
                                                value={material.add_required_materials}
                                                className="responsive-block-editor-addons-block-how-to-materials-list-item-value"
                                                onChange={(value) => {
                                                    this.saveMaterials({ add_required_materials: value }, index)
                                                }}
                                            />
                                        </li>
                                    )
                                })}
                            </ul>
                        )
                    }
                </div>
                <div className="responsive-block-editor-addons-block-how-to-steps-area">
                    <RichText
                        tagName="h4"
                        placeholder={__("Steps Required", "responsive-block-editor-addons")}
                        value={stepsHeading}
                        onChange={(value) => setAttributes({ stepsHeading: value })}
                        className="responsive-block-editor-addons-block-how-to-sub-heading-steps"
                    />
                    <div className="responsive-block-editor-addons-block-how-to-steps">
                        <InnerBlocks
                            template={getInfoBlockAsChild}
                            allowedBlocks={ALLOWED_BLOCKS}
                        />
                    </div>
                </div>
            </div>,
        ];
    }
}

