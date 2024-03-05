/**
 * Inspector Controls
 */

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
import fontOptions from "../../../utils/googlefonts";
import { loadGoogleFont } from "../../../utils/font";
import { number } from "prop-types";

import ResponsiveSpacingControl from "../../../settings-components/ResponsiveSpacingSettings";
import TypographyHelperControl from "../../../settings-components/TypographySettings";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";

// Import block components
const {
    InspectorControls,
    PanelColorSettings,
    ColorPalette,
    AlignmentToolbar,
    MediaUpload
} = wp.blockEditor;

// Import Inspector components
const {
    PanelBody,
    RangeControl,
    SelectControl,
    ButtonGroup,
    Button,
    ToggleControl,
    TabPanel,
    Dashicon,
    BaseControl,
    ExternalLink
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
    constructor(props) {
        super(...arguments);
    }

    render() {
        // Font Weight Options
        const fontWeightOptions = [
            {
                value: "100",
                label: __("100", "responsive-block-editor-addons"),
            },
            {
                value: "200",
                label: __("200", "responsive-block-editor-addons"),
            },
            {
                value: "300",
                label: __("300", "responsive-block-editor-addons"),
            },
            {
                value: "400",
                label: __("400", "responsive-block-editor-addons"),
            },
            {
                value: "500",
                label: __("500", "responsive-block-editor-addons"),
            },
            {
                value: "600",
                label: __("600", "responsive-block-editor-addons"),
            },
            {
                value: "700",
                label: __("700", "responsive-block-editor-addons"),
            },
            {
                value: "800",
                label: __("800", "responsive-block-editor-addons"),
            },
            {
                value: "900",
                label: __("900", "responsive-block-editor-addons"),
            },
        ];

        // Setup the attributes
        const {
            attributes: {
                //Header Attributes
                block_id,
                headingTag,
                mainImage,
                //Time Attributes
                showEstimatedTime,
                years,
                months,
                days,
                hours,
                minutes,
                //Cost Attributes
                showEstimatedCost,
                //Tools Attributes
                showTools,
                numberOfTools,
                tools,
                //Materials Attributes
                showMaterials,
                numberOfMaterials,
                materials,
                //Color Attributes
                mainHeadingColor,
                secondaryHeadingColor,
                descriptionColor,
                //Typography Attributes
                mainHeadingFontFamily,
                mainHeadingFontSize,
                mainHeadingFontSizeMobile,
                mainHeadingFontSizeTablet,
                mainHeadingFontWeight,
                mainHeadingLineHeight,
                mainHeadingLineHeightMobile,
                mainHeadingLineHeightTablet,
                mainHeadingLetterSpacing,
                subHeadingFontFamily,
                subHeadingFontSize,
                subHeadingFontSizeMobile,
                subHeadingFontSizeTablet,
                subHeadingFontWeight,
                subHeadingLineHeight,
                subHeadingLineHeightMobile,
                subHeadingLineHeightTablet,
                subHeadingLetterSpacing,
                descriptionFontFamily,
                descriptionFontSize,
                descriptionFontSizeMobile,
                descriptionFontSizeTablet,
                descriptionFontWeight,
                descriptionLineHeight,
                descriptionLineHeightMobile,
                descriptionLineHeightTablet,
                descriptionLetterSpacing,
                //Spacing Attributes
                timeMargin,
                costMargin,
                rowGap,
                timeMarginMobile,
                costMarginMobile,
                rowGapMobile,
                timeMarginTablet,
                costMarginTablet,
                rowGapTablet,
                //List Style Attributes
                toolsListStyle,
                materialsListStyle,
                //Image Styles
                borderStyle,
                borderRadius,
                borderWidth,
                borderColor,
                //Steps Attributes
                stepsMargin,
                stepsMarginMobile,
                stepsMarginTablet,

                hideWidget,
                hideWidgetTablet,
                hideWidgetMobile,
            },
            setAttributes,
        } = this.props;


        return (
            <InspectorControls key="inspector">
                <InspectorTabs>
                    <InspectorTab key={'content'}>
                        <PanelBody
                            title={__("General", "responsive-block-editor-addons")}
                            initialOpen={true}
                        >
                            <SelectControl
                                label={__("Primary Heading", "reponsive-block-editor-addons")}
                                value={headingTag}
                                onChange={(value) => setAttributes({ headingTag: value })}
                                options={[
                                    { value: "h1", label: __("H1", "responsive-block-editor-addons") },
                                    { value: "h2", label: __("H2", "responsive-block-editor-addons") },
                                    { value: "h3", label: __("H3", "responsive-block-editor-addons") },
                                    { value: "h4", label: __("H4", "responsive-block-editor-addons") },
                                    { value: "h5", label: __("H5", "responsive-block-editor-addons") },
                                    { value: "h6", label: __("H6", "responsive-block-editor-addons") }
                                ]}
                            />
                            <ToggleControl
                                label={__("Show Estimated Time", "responsive-block-editor-addons")}
                                checked={showEstimatedTime}
                                onChange={(value) => setAttributes({ showEstimatedTime: !showEstimatedTime })}
                                help={__("It is recommended to show estimated time required for your steps.", "responsive-block-editor-addons")}
                            />
                            {
                                showEstimatedTime && (
                                    <PanelBody
                                        title={__("Time", "responsive-block-editor-addons")}
                                        initialOpen={true}
                                    >
                                        <Fragment>
                                            <RangeControl
                                                label={__("Years", "responsive-block-editor-addons")}
                                                value={years}
                                                onChange={(value) => setAttributes({ years: value })}
                                                min={1}
                                                max={15}
                                                allowReset
                                            />
                                            <RangeControl
                                                label={__("Months", "responsive-block-editor-addons")}
                                                value={months}
                                                onChange={(value) => setAttributes({ months: value })}
                                                min={1}
                                                max={11}
                                                allowReset
                                            />
                                            <RangeControl
                                                label={__("Days", "responsive-block-editor-addons")}
                                                value={days}
                                                onChange={(value) => setAttributes({ days: value })}
                                                min={1}
                                                max={29}
                                                allowReset
                                            />
                                            <RangeControl
                                                label={__("Hours", "responsive-block-editor-addons")}
                                                value={hours}
                                                onChange={(value) => setAttributes({ hours: value })}
                                                min={1}
                                                max={23}
                                                allowReset
                                            />
                                            <RangeControl
                                                label={__("Minutes", "responsive-block-editor-addons")}
                                                value={minutes}
                                                onChange={(value) => setAttributes({ minutes: value })}
                                                min={1}
                                                max={59}
                                                allowReset
                                            />
                                        </Fragment>
                                    </PanelBody>
                                )
                            }
                            <ToggleControl
                                label={__("Estimated Cost", "responsive-block-editor-addons")}
                                checked={showEstimatedCost}
                                onChange={(value) => setAttributes({ showEstimatedCost: !showEstimatedCost })}
                                help={__("It is recommended to show estimated time required for your steps.", "responsive-block-editor-addons")}
                            />
                            <ExternalLink href={"https://en.wikipedia.org/wiki/List_of_circulating_currencies"}>
                                {__("Click here to find your countrys ISO code.", "responsive-block-editor-addons")}
                            </ExternalLink>
                            <ToggleControl
                                label={__("Show Tools", "responsive-block-editor-addons")}
                                checked={showTools}
                                onChange={(value) => setAttributes({ showTools: !showTools })}
                            />
                            {
                                showTools && (
                                    <RangeControl
                                        label={__("Number of tools", "responsive-block-editor-addons")}
                                        value={numberOfTools}
                                        onChange={(newCount) => {
                                            let cloneTools = [...tools]
                                            if (newCount > numberOfTools) {
                                                for (let i = 0; i < newCount - numberOfTools; i++) {
                                                    cloneTools.push({ "add_required_tools": __("A computer", "responsive-block-editor-addons") })
                                                }
                                                setAttributes({ tools: cloneTools })
                                            } else {
                                                for (let i = 0; i < numberOfTools - newCount; i++) {
                                                    cloneTools.pop()
                                                }
                                                setAttributes({ tools: cloneTools })
                                            }
                                            setAttributes({ numberOfTools: newCount })
                                        }}
                                        min={1}
                                        max={50}
                                    />
                                )
                            }
                            {
                                showTools && (
                                    <Fragment>
                                        <p className="responsive-setting-label">{__("Tools List Style", "responsive-block-editor-addons")}</p>
                                        <Button
                                            key={"bullet"}
                                            icon="editor-ul"
                                            label="Bullet"
                                            onClick={() => setAttributes({ toolsListStyle: "disc" })}
                                            aria-pressed={"disc" === toolsListStyle}
                                            isPrimary={"disc" === toolsListStyle}
                                        />
                                        <Button
                                            key={"numbers"}
                                            icon="editor-ol"
                                            label="Numbers"
                                            onClick={() => setAttributes({ toolsListStyle: "decimal" })}
                                            aria-pressed={"decimal" === toolsListStyle}
                                            isPrimary={"decimal" === toolsListStyle}
                                        />
                                        <Button
                                            key={"none"}
                                            icon="menu"
                                            label="None"
                                            onClick={() => setAttributes({ toolsListStyle: "none" })}
                                            aria-pressed={"none" === toolsListStyle}
                                            isPrimary={"none" === toolsListStyle}
                                        />
                                    </Fragment>
                                )
                            }
                            <ToggleControl
                                label={__("Show Materials", "responsive-block-editor-addons")}
                                checked={showMaterials}
                                onChange={(value) => setAttributes({ showMaterials: !showMaterials })}
                            />
                            {showMaterials && (
                                <RangeControl
                                    label={__("Number Of Materials", "responsive-block-editor-addons")}
                                    value={numberOfMaterials}
                                    onChange={(newCount) => {
                                        let cloneMaterials = [...materials]
                                        if (newCount > numberOfMaterials) {
                                            for (let i = 0; i < newCount - numberOfMaterials; i++) {
                                                cloneMaterials.push({ "add_required_materials": __("A WordPress Website", "responsive-block-editor-addons") })
                                            }
                                            setAttributes({ materials: cloneMaterials })
                                        } else {
                                            for (let i = 0; i < numberOfMaterials - newCount; i++) {
                                                cloneMaterials.pop()
                                            }
                                            setAttributes({ materials: cloneMaterials })
                                        }
                                        setAttributes({ numberOfMaterials: newCount })
                                    }}
                                    min={1}
                                    max={50}
                                />
                            )}
                            {
                                showMaterials && (
                                    <Fragment>
                                        <p className="responsive-setting-label">{__("Materials List Style", "responsive-block-editor-addons")}</p>
                                        <Button
                                            key={"bullet"}
                                            icon="editor-ul"
                                            label="Bullet"
                                            onClick={() => setAttributes({ materialsListStyle: "disc" })}
                                            aria-pressed={"disc" === materialsListStyle}
                                            isPrimary={"disc" === materialsListStyle}
                                        />
                                        <Button
                                            key={"numbers"}
                                            icon="editor-ol"
                                            label="Numbers"
                                            onClick={() => setAttributes({ materialsListStyle: "decimal" })}
                                            aria-pressed={"decimal" === materialsListStyle}
                                            isPrimary={"decimal" === materialsListStyle}
                                        />
                                        <Button
                                            key={"none"}
                                            icon="menu"
                                            label="None"
                                            onClick={() => setAttributes({ materialsListStyle: "none" })}
                                            aria-pressed={"none" === materialsListStyle}
                                            isPrimary={"none" === materialsListStyle}
                                        />
                                    </Fragment>
                                )
                            }
                        </PanelBody>
                    </InspectorTab>
                    <InspectorTab key={'style'}>
                        <PanelBody
                            title={__("Image", "responsive-block-editor-addons")}
                            initialOpen={false}
                        >
                            <MediaUpload
                                title={__("Select Image", "responsive-block-editor-addons")}
                                onSelect={(value) => setAttributes({ mainImage: value })}
                                allowedTypes={["image"]}
                                value={mainImage}
                                render={({ open }) => (
                                    <Button isSecondary onClick={open}>
                                        { !mainImage.url ? __("Select Image", "responsive-block-editor-addons") : __("Replace image", "responsive-block-editor-addons")}
                                    </Button>
                                )}
                            />
                            {mainImage.url &&
                                <Button isLink isDestructive onClick={() => setAttributes({ mainImage: "" })}>
                                    {__("Remove Image", "responsive-block-editor-addons")}
                                </Button>
                            }
                            {
                                mainImage.url && (
                                    <SelectControl
                                        label={__("Border Style", "responsive-block-editor-addons")}
                                        value={borderStyle}
                                        onChange={(value) => setAttributes({ borderStyle: value })}
                                        options={[
                                            {
                                                value: "none",
                                                label: __("None", "responsive-block-editor-addons"),
                                            },
                                            {
                                                value: "solid",
                                                label: __("Solid", "responsive-block-editor-addons"),
                                            },
                                            {
                                                value: "dotted",
                                                label: __("Dotted", "responsive-block-editor-addons"),
                                            },
                                            {
                                                value: "dashed",
                                                label: __("Dashed", "responsive-block-editor-addons"),
                                            },
                                            {
                                                value: "double",
                                                label: __("Double", "responsive-block-editor-addons"),
                                            },
                                            {
                                                value: "groove",
                                                label: __("Groove", "responsive-block-editor-addons"),
                                            },
                                            {
                                                value: "inset",
                                                label: __("Inset", "responsive-block-editor-addons"),
                                            },
                                            {
                                                value: "outset",
                                                label: __("Outset", "responsive-block-editor-addons"),
                                            },
                                            {
                                                value: "ridge",
                                                label: __("Ridge", "responsive-block-editor-addons"),
                                            },
                                        ]}
                                    />
                                )
                            }
                            {
                                (mainImage.url && "none" !== borderStyle) && (
                                    <Fragment>
                                        <RangeControl
                                            label={__("Border Width", "responsive-block-editor-addons")}
                                            value={borderWidth}
                                            onChange={(value) =>
                                                setAttributes({
                                                    borderWidth: value !== undefined ? value : 1,
                                                })
                                            }
                                            min={0}
                                            max={50}
                                            allowReset
                                        />
                                        <RangeControl
                                            label={__("Border Radius", "responsive-block-editor-addons")}
                                            value={borderRadius}
                                            onChange={(value) => {
                                                setAttributes({ borderRadius: value });
                                            }}
                                            min={0}
                                            max={100}
                                        />
                                    </Fragment>
                                )
                            }
                            {(mainImage.url && "none" != borderStyle) && (
                                <Fragment>
                                    <p className="responsive-block-editor-addons-setting-label">
                                        {__("Border Color", "responsive-block-editor-addons")}
                                        <span className="components-base-control__label">
                                            <span
                                                className="component-color-indicator"
                                                style={{ backgroundColor: borderColor }}
                                            ></span>
                                        </span>
                                    </p>
                                    <ColorPalette
                                        value={borderColor}
                                        onChange={(colorValue) =>
                                            setAttributes({ borderColor: colorValue })
                                        }
                                        allowReset
                                    />
                                </Fragment>
                            )}
                        </PanelBody>
                        <PanelBody
                            title={__("Colors", "responsive-block-editor-addons")}
                            initialOpen={false}
                        >
                            <Fragment>
                                <p className="responsive-setting-label">
                                    {__("Primary Heading Color", "responsive-block-editor-addons")}
                                    <span className="components-base-control__label">
                                        <span
                                            className="component-color-indicator"
                                            style={{ backgroundColor: mainHeadingColor }}
                                        ></span>
                                    </span>
                                </p>
                                <ColorPalette
                                    value={mainHeadingColor}
                                    onChange={(colorValue) =>
                                        setAttributes({ mainHeadingColor: colorValue })
                                    }
                                    allowReset
                                />
                            </Fragment>
                            <Fragment>
                                <p className="responsive-setting-label">
                                    {__("Secondary Heading Color", "responsive-block-editor-addons")}
                                    <span className="components-base-control__label">
                                        <span
                                            className="component-color-indicator"
                                            style={{ backgroundColor: secondaryHeadingColor }}
                                        ></span>
                                    </span>
                                </p>
                                <ColorPalette
                                    value={secondaryHeadingColor}
                                    onChange={(colorValue) =>
                                        setAttributes({ secondaryHeadingColor: colorValue })
                                    }
                                    allowReset
                                />
                            </Fragment>
                            <Fragment>
                                <p className="responsive-setting-label">
                                    {__("Description Color", "responsive-block-editor-addons")}
                                    <span className="components-base-control__label">
                                        <span
                                            className="component-color-indicator"
                                            style={{ backgroundColor: descriptionColor }}
                                        ></span>
                                    </span>
                                </p>
                                <ColorPalette
                                    value={descriptionColor}
                                    onChange={(colorValue) =>
                                        setAttributes({ descriptionColor: colorValue })
                                    }
                                    allowReset
                                />
                            </Fragment>
                        </PanelBody>
                        <PanelBody
                            title={__("Typography", "responsive-block-editor-addons")}
                            initialOpen={false}
                        >
                            <TypographyHelperControl
                                title={__("Primary Heading Typography", "responsive-block-editor-addons")}
                                attrNameTemplate="mainHeading%s"
                                values={{
                                    family: mainHeadingFontFamily,
                                    size: mainHeadingFontSize,
                                    sizeMobile: mainHeadingFontSizeMobile,
                                    sizeTablet: mainHeadingFontSizeTablet,
                                    weight: mainHeadingFontWeight,
                                    height: mainHeadingLineHeight,
                                    spacing: mainHeadingLetterSpacing
                                }}
                                showLetterSpacing={true}
                                showTextTransform={false}
                                setAttributes={setAttributes}
                                {...this.props}
                            />
                            <TypographyHelperControl
                                title={__("Secondary Heading Typography", "responsive-block-editor-addons")}
                                attrNameTemplate="subHeading%s"
                                values={{
                                    family: subHeadingFontFamily,
                                    size: subHeadingFontSize,
                                    sizeMobile: subHeadingFontSizeMobile,
                                    sizeTablet: subHeadingFontSizeTablet,
                                    weight: subHeadingFontWeight,
                                    height: subHeadingLineHeight,
                                    spacing: subHeadingLetterSpacing
                                }}
                                showLetterSpacing={true}
                                showTextTransform={false}
                                setAttributes={setAttributes}
                                {...this.props}
                            />
                            <TypographyHelperControl
                                title={__("Description Typography", "responsive-block-editor-addons")}
                                attrNameTemplate="description%s"
                                values={{
                                    family: descriptionFontFamily,
                                    size: descriptionFontSize,
                                    sizeMobile: descriptionFontSizeMobile,
                                    sizeTablet: descriptionFontSizeTablet,
                                    weight: descriptionFontWeight,
                                    height: descriptionLineHeight,
                                    spacing: descriptionLetterSpacing
                                }}
                                showLetterSpacing={true}
                                showTextTransform={false}
                                setAttributes={setAttributes}
                                {...this.props}
                            />
                        </PanelBody>
                        <PanelBody
                            title={__("Spacing", "responsive-block-editor-addons")}
                            initialOpen={false}
                        >
                            {
                                showEstimatedTime && (
                                    <ResponsiveSpacingControl
                                        title={"Time Margin"}
                                        attrNameTemplate="timeMargin%s"
                                        values={{ desktop: timeMargin, tablet: timeMarginTablet, mobile: timeMarginMobile }}
                                        setAttributes={setAttributes}
                                        {...this.props}
                                    />
                                )
                            }
                            {
                                showEstimatedCost && (
                                    <ResponsiveSpacingControl
                                        title={"Cost Margin"}
                                        attrNameTemplate="costMargin%s"
                                        values={{ desktop: costMargin, tablet: costMarginTablet, mobile: costMarginMobile }}
                                        setAttributes={setAttributes}
                                        {...this.props}
                                    />
                                )
                            }
                            <ResponsiveSpacingControl
                                title={"Row Gap"}
                                attrNameTemplate="rowGap%s"
                                values={{ desktop: rowGap, tablet: rowGapTablet, mobile: rowGapMobile }}
                                setAttributes={setAttributes}
                                {...this.props}
                            />
                            <ResponsiveSpacingControl
                                title={"Gap between stpes"}
                                attrNameTemplate="stepsMargin%s"
                                values={{ desktop: stepsMargin, tablet: stepsMarginTablet, mobile: stepsMarginMobile }}
                                setAttributes={setAttributes}
                                {...this.props}
                            />
                        </PanelBody>
                    </InspectorTab>
                    <InspectorTab key={'advance'}>
                        <PanelBody
                        title={__("Responsive Conditions", "responsive-block-editor-addons")}
                        initialOpen={false}
                        >
                            <ToggleControl
                                label={__(
                                "Hide on Desktop",
                                "responsive-block-editor-addons"
                                )}
                                checked={hideWidget}
                                onChange={(value) =>
                                setAttributes({ hideWidget: !hideWidget })
                                }
                            />
                            <ToggleControl
                                label={__(
                                "Hide on Tablet",
                                "responsive-block-editor-addons"
                                )}
                                checked={hideWidgetTablet}
                                onChange={(value) =>
                                setAttributes({ hideWidgetTablet: !hideWidgetTablet })
                                }
                            />
                            <ToggleControl
                                label={__(
                                "Hide on Mobile",
                                "responsive-block-editor-addons"
                                )}
                                checked={hideWidgetMobile}
                                onChange={(value) =>
                                setAttributes({ hideWidgetMobile: !hideWidgetMobile })
                                }
                            />
                        </PanelBody>
                    </InspectorTab>
                </InspectorTabs>
            </InspectorControls>
        );
    }
}

