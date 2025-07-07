import React from "react";

const Logo = responsive_globals.home_url + '/wp-content/plugins/responsive-block-editor-addons/admin/images/responsive-blocks.svg';

const RbeaSupportControl = ({ blockSlug }) => {
    const blockData = (typeof rbeaSupportBlocks !== 'undefined' && Array.isArray(rbeaSupportBlocks.blocks))
        ? rbeaSupportBlocks.blocks.find(block => block.key === blockSlug)
        : null;

    const demoUrl = blockData ? blockData.demo : '#';
    const docsUrl = blockData ? blockData.docs : '#';

    return (
        <div className="rbea-support-control-panel">
            <div className="rbea-support-control-panel__header">
                <img src={Logo} alt="Responsive Blocks" className="rbea-support-control-panel__logo" />
                <span className="rbea-support-control-panel__title">Need Help?</span>
            </div>

            <div className="rbea-support-control-panel__links">
                { blockSlug !==  'popup' && blockSlug !== 'form' && ( <a
                    href={demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rbea-support-control-panel__link"
                >
                    <span className="dashicons dashicons-controls-play"></span>
                    Demo
                </a>)  }

                <a
                    href={docsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rbea-support-control-panel__link"
                >
                    <span className="dashicons dashicons-media-default"></span>
                    Docs
                </a>
            </div>
        </div>
    );
};

export default RbeaSupportControl;
