import RbeaBackgroundTypeControl from "../../../utils/components/rbea-background-type-control";
import BackgroundImageControls from "./BackgroundImageControls";
import { __ } from "@wordpress/i18n";

const OverlaySettings = ( props ) => {
    const { attributes, setAttributes, attachmentOptions, backgroundSizeOptions, blendModeOptions, repeatOptions } = props;
    const {
        backgroundType,
        backgroundColor,
        backgroundImage,
        backgroundVideo,
        overlayType,
        gradient
    } = attributes;

    // console.log( 'props' )
    // console.log( props )

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
                    value={overlayType}
                    onChange={(value) => setAttributes({ overlayType: value })}
                    options={colorOverlayOptions}
                />
            );
        }
        
        if (backgroundType === 'gradient' && gradient) {
            return (
                <RbeaBackgroundTypeControl
                    label={__("Overlay", "responsive-block-editor-addons")}
                    value={overlayType}
                    onChange={(value) => setAttributes({ overlayType: value })}
                    options={gradientOverlayOptions}
                />
            );
        }
        
        if (backgroundType === 'image' && backgroundImage) {
            return (
                <RbeaBackgroundTypeControl
                    label={__("Overlay", "responsive-block-editor-addons")}
                    value={overlayType}
                    onChange={(value) => setAttributes({ overlayType: value })}
                    options={imageOverlayOptions}
                />
            );
        }
        
        if (backgroundType === 'video' && backgroundVideo?.url) {
            return (
                <RbeaBackgroundTypeControl
                    label={__("Overlay", "responsive-block-editor-addons")}
                    value={overlayType}
                    onChange={(value) => setAttributes({ overlayType: value })}
                    options={videoOverlayOptions}
                />
            );
        }
        
        return null;
    };

    const renderOverlayContent = () => {
        // Image Overlays
        if (overlayType === 'image') {
            if (backgroundType === 'image' && backgroundImage) {
                return (
                    <>
                        <p>Render The Image Overlay for {backgroundType}</p>
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
                        />
                    </>
                );
            }
            if (backgroundType === 'color' && backgroundColor) {
                return <p>Render The Image Overlay for {backgroundType}</p>;
            }
            if (backgroundType === 'gradient' && gradient) {
                return <p>Render The Image Overlay for {backgroundType}</p>;
            }
        }
        
        // Color Overlays
        if (overlayType === 'color') {
            if (backgroundType === 'image' && backgroundImage) {
                return <p>Render The Color Overlay for {backgroundType}</p>;
            }
            if (backgroundType === 'video' && backgroundVideo?.url) {
                return <p>Render The Color Overlay for {backgroundType}</p>;
            }
        }
        
        // Gradient Overlays
        if (overlayType === 'gradient') {
            if (backgroundType === 'image' && backgroundImage) {
                return <p>Render The Gradient Overlay for {backgroundType}</p>;
            }
            if (backgroundType === 'video' && backgroundVideo?.url) {
                return <p>Render The Gradient Overlay for {backgroundType}</p>;
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