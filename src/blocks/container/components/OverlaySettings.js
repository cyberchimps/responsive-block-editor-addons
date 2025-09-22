import RbeaBackgroundTypeControl from "../../../utils/components/rbea-background-type-control";
import BackgroundImageControls from "./BackgroundImageControls";
import RbeaColorControl from "../../../utils/components/rbea-color-control";
import RbeaRangeControl from "../../../utils/components/rbea-range-control";
import { GradientPicker } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

const OverlaySettings = ( props ) => {
    const { attributes, setAttributes, attachmentOptions, backgroundSizeOptions, blendModeOptions, repeatOptions, gradientOptions } = props;
    const {
        backgroundType,
        backgroundColor,
        backgroundImage,
        backgroundVideo,
        overlayType,
        gradient,
        overlayColor,
        overlayGradient,
        opacity,
    } = attributes;

    const colorOverlayOptions = [
        { value: "image", label: __("Image", "responsive-block-editor-addons") }
    ];

    const gradientOverlayOptions = [
        { value: "image", label: __("Image", "responsive-block-editor-addons") }
    ];

    const imageOverlayOptions = [
        { value: "color", label: __("Color", "responsive-block-editor-addons") },
        { value: "gradient", label: __("Gradient", "responsive-block-editor-addons") },
        { value: "image", label: __("Image", "responsive-block-editor-addons") },
    ];

    const videoOverlayOptions = [
        { value: "color", label: __("Color", "responsive-block-editor-addons") },
        { value: "gradient", label: __("Gradient", "responsive-block-editor-addons") },
    ];

    // Define conditional components
    const renderOverlayTypeControl = () => {
        if (backgroundType === 'color' && backgroundColor) {
            return (
                <RbeaBackgroundTypeControl
                    label={__("Overlay", "responsive-block-editor-addons")}
                    selectedValue={overlayType}
                    onChange={(value) => setAttributes({ overlayType: value })}
                    options={colorOverlayOptions}
                />
            );
        }
        
        if (backgroundType === 'gradient' && gradient) {
            return (
                <RbeaBackgroundTypeControl
                    label={__("Overlay", "responsive-block-editor-addons")}
                    selectedValue={overlayType}
                    onChange={(value) => setAttributes({ overlayType: value })}
                    options={gradientOverlayOptions}
                />
            );
        }
        
        if (backgroundType === 'image' && backgroundImage) {
            return (
                <RbeaBackgroundTypeControl
                    label={__("Overlay", "responsive-block-editor-addons")}
                    selectedValue={overlayType}
                    onChange={(value) => setAttributes({ overlayType: value })}
                    options={imageOverlayOptions}
                />
            );
        }
        
        if (backgroundType === 'video' && backgroundVideo?.url) {
            return (
                <RbeaBackgroundTypeControl
                    label={__("Overlay", "responsive-block-editor-addons")}
                    selectedValue={overlayType}
                    onChange={(value) => setAttributes({ overlayType: value })}
                    options={videoOverlayOptions}
                />
            );
        }
        
        return null;
    };

    const renderOpacityControl = () => (
        <RbeaRangeControl
            label={__("Opacity", "responsive-block-editor-addons")}
            value={opacity}
            onChange={ (value) => setAttributes({opacity: value}) }
            min={0}
            max={100}
            allowReset
            resetFallbackValue={100}
        />
    );

    const renderBackgroundImageControl = () => (
        <>
            <BackgroundImageControls
                attributes={attributes}
                setAttributes={setAttributes}
                // Specify overlay-specific attribute names
                imageAttr="overlayImage"
                positionAttr="overlayImagePosition"
                positionTabletAttr="overlayImagePositionTablet"
                positionMobileAttr="overlayImagePositionMobile"
                attachmentAttr="overlayAttachment"
                attachmentTabletAttr="overlayAttachmentTablet"
                attachmentMobileAttr="overlayAttachmentMobile"
                blendModeAttr="blendMode"
                blendModeTabletAttr="blendModeTablet"
                blendModeMobileAttr="blendModeMobile"
                repeatAttr="overlayRepeat"
                repeatTabletAttr="overlayRepeatTablet"
                repeatMobileAttr="overlayRepeatMobile"
                sizeAttr="overlayImageSize"
                sizeTabletAttr="overlayImageSizeTablet"
                sizeMobileAttr="overlayImageSizeMobile"
                attachmentTabAttr="attachmentTab"
                blendModeTabAttr="blendModeTab"
                repeatTabAttr="overlayRepeatTab"
                imageSizeTabAttr="overlayImageSizeTab"
                attachmentOptions={attachmentOptions}
                blendModeOptions={blendModeOptions}
                repeatOptions={repeatOptions}
                backgroundSizeOptions={backgroundSizeOptions}
                allowBlendMode={true}
            />
            {renderOpacityControl()}
        </>
    );

    const renderColorControl = () => (
        <>
            <RbeaColorControl
                label={__("Color", "responsive-block-editor-addons")}
                colorValue={overlayColor}
                onChange={(colorValue) =>
                    setAttributes({ overlayColor: colorValue })
                }
                resetColor={() => setAttributes({ overlayColor: "" })}
            />
            {renderOpacityControl()}
        </>
    );

    const renderGradientControl = () => (
        <>
            <GradientPicker
                value={overlayGradient}
                onChange={(value) => { setAttributes({ overlayGradient: value }) }}
                gradients={gradientOptions}
            />
            {renderOpacityControl()}
        </>
    );

    const renderOverlayContent = () => {
        // Image Overlays
        if (overlayType === 'image') {
            if (backgroundType === 'image' && backgroundImage) {
                return (
                    <>
                        {renderBackgroundImageControl()}
                    </>
                );
            }
            if (backgroundType === 'color' && backgroundColor) {
                return (
                    <>
                        {renderBackgroundImageControl()}
                    </>
                );
            }
            if (backgroundType === 'gradient' && gradient) {
                return (
                    <>
                        {renderBackgroundImageControl()}
                    </>
                );
            }
        }
        
        // Color Overlays
        if (overlayType === 'color') {
            if (backgroundType === 'image' && backgroundImage) {
                return (
                    <>
                        {renderColorControl()}
                    </>
                );
            }
            if (backgroundType === 'video' && backgroundVideo?.url) {
                return (
                    <>
                        {renderColorControl()}
                    </>
                );
            }
        }
        
        // Gradient Overlays
        if (overlayType === 'gradient') {
            if (backgroundType === 'image' && backgroundImage) {
                return (
                    <>
                        {renderGradientControl()}
                    </>
                );
            }
            if (backgroundType === 'video' && backgroundVideo?.url) {
                return (
                    <>
                        {renderGradientControl()}
                    </>
                );
            }
        }
        
        return null;
    };

    return (
        <>
            {renderOverlayTypeControl()}
            {renderOverlayContent()}
        </>
    );
};

export default OverlaySettings;