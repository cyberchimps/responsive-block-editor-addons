import React from "react";
// import { Icon } from "@wordpress/icons";
// import { video, book } from "@wordpress/icons";

// import DashIcons from "@wordpress/components";

const Logo = responsive_globals.home_url + '/wp-content/plugins/responsive-block-editor-addons/admin/images/responsive-blocks.svg';

const rbeaDemoBaseUrl = "https://cyberchimps.com/responsive-blocks/";
const rbeaDocsBaseUrl = "https://cyberchimps.com/docs/responsive-blocks/blocks/";

const RbeaSupportControl = ({ blockSlug }) => {
    return (
        <div className="rbea-support-control-panel">
            <div className="rbea-support-control-panel__header">
                <img src={Logo} alt="Responsive Blocks" className="rbea-support-control-panel__logo" />
                <a href="#" className="rbea-support-control-panel__title">Need Help?</a>
            </div>

            <div className="rbea-support-control-panel__links">
                <a
                    href={rbeaDemoBaseUrl + blockSlug}
                    target="_blank"
                    rel="noreferrer"
                    className="rbea-support-control-panel__link"
                >
                    <span className="dashicons dashicons-controls-play"></span>
                    Demo
                </a>

                <a
                    href={rbeaDocsBaseUrl + blockSlug}
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
