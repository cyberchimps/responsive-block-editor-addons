import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button, IconButton, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { media } from '@wordpress/media-utils';
import { Trash } from '@wordpress/icons';

const RbeaBackgroundMediaControl = ({ label, description, value, onChange , mediaType}) => {
    const [mediaData, setMediaData] = useState(value);

    const mediaTypeCapitalCase = mediaType.charAt(0).toUpperCase() + mediaType.slice(1).toLowerCase();

    const handleMediaSelect = (media) => {
        const updatedValue = { ...mediaData, media_url: media.url };
        setMediaData(updatedValue);
        onChange(updatedValue);
    };

    const selectMedia = () => {
        const frame = wp.media({
            title: __(`Select Background ${mediaType}`, 'responsive-block-editor-addons'),
            button: { text: __('Select', 'responsive-block-editor-addons') },
            multiple: false,
            library: {
                type: `${mediaType}`
            }
        });

        frame.on('select', () => {
            const media = frame.state().get('selection').first().toJSON();
            handleMediaSelect(media);
        });

        frame.open();
    };

    // Function to remove the selected media
    const removeMedia = () => {
        const updatedValue = { ...mediaData, media_url: '' };
        setMediaData(updatedValue);
        onChange(updatedValue);
    };

    return (
        <div className="background-image-control">

            {(
                <div className="image-control-wrapper" style={{ position: 'relative' }}>
                    {!mediaData.media_url ? (
                        <div className="image-placeholder" onClick={selectMedia}>
                            <span style={{ fontSize: '24px', color: '#777' }}>+</span>
                        </div>
                    ) : (
                        <div className="image-selected">
                            <img
                                src={mediaData.media_url}
                                alt={__(`Selected ${mediaTypeCapitalCase}`, 'responsive-block-editor-addons')}
                            />
                          
                            <svg class="bgimage-remove-btn" width="32" height="32" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"  onClick={removeMedia}>
                                <circle cx="10" cy="10" r="10" fill="#F2F2F2"/>
                                <path d="M8.54175 11.4583L8.54175 9.70825" stroke="#666666" stroke-width="0.8" stroke-linecap="round"/>
                                <path d="M11.4583 11.4583L11.4583 9.70825" stroke="#666666" stroke-width="0.8" stroke-linecap="round"/>
                                <path d="M4.75 6.79175H15.25V6.79175C15.2113 6.79175 15.192 6.79175 15.1756 6.79202C14.0967 6.80967 13.2263 7.68007 13.2086 8.75902C13.2083 8.77539 13.2083 8.79473 13.2083 8.83342V11.1667C13.2083 12.2947 13.2083 12.8587 12.9874 13.2889C12.7964 13.6606 12.4939 13.9632 12.1221 14.1541C11.692 14.3751 11.128 14.3751 10 14.3751V14.3751C8.87203 14.3751 8.30805 14.3751 7.87786 14.1541C7.50614 13.9632 7.20357 13.6606 7.01263 13.2889C6.79167 12.8587 6.79167 12.2947 6.79167 11.1667V8.83342C6.79167 8.79473 6.79167 8.77539 6.7914 8.75902C6.77374 7.68007 5.90334 6.80967 4.82439 6.79202C4.80803 6.79175 4.78869 6.79175 4.75 6.79175V6.79175Z" stroke="#666666" stroke-width="0.8" stroke-linecap="round"/>
                                <path d="M8.54159 5.04173C8.54159 5.04173 8.83325 4.45825 9.99992 4.45825C11.1666 4.45825 11.4583 5.04159 11.4583 5.04159" stroke="#666666" stroke-width="0.8" stroke-linecap="round"/>
                            </svg>
                        </div>
                    )}

                    {/* Change Media Button */}
                    <Button 
                        className = "bgimage-select-button"
                        onClick={selectMedia}
                    >
                        {mediaData.media_url ? __(`Change ${mediaTypeCapitalCase}`, 'responsive-block-editor-addons') : __(`Select ${mediaTypeCapitalCase}`, 'responsive-block-editor-addons')}
                    </Button>
                </div>
            )}

            {description && <p className="image-description" style={{ marginTop: '10px' }}>{description}</p>}
        </div>
    );
};

RbeaBackgroundMediaControl.propTypes = {
    label: PropTypes.string,
    description: PropTypes.string,
    value: PropTypes.shape({
        enable: PropTypes.bool,
        media_url: PropTypes.string,
    }),
    onChange: PropTypes.func.isRequired,
};

export default RbeaBackgroundMediaControl;
