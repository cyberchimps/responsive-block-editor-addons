import React from "react";
import { Icon } from "@wordpress/icons";
import { video, book } from "@wordpress/icons";

const Logo = responsive_globals.home_url + '/wp-content/plugins/responsive-block-editor-addons/admin/images/responsive-blocks.svg';

const rbeaDemoBaseUrl = "https://cyberchimps.com/responsive-blocks/";
const rbeaDocsBaseUrl = "https://cyberchimps.com/docs/responsive-blocks/blocks/";

const RbeaSupportControl = ({ blockSlug }) => {
    return (
        <div className="rbea-support-control-panel">
            <div className="rbea-support-control-panel__header">
                <img src={Logo} alt="Responsive Blocks" className="rbea-support-control-panel__logo" />
                <h3>Need Help?</h3>
            </div>

            <div className="rbea-support-control-panel__links">
                <a
                    href={rbeaDemoBaseUrl + blockSlug}
                    target="_blank"
                    rel="noreferrer"
                    className="rbea-support-control-panel__links"
                >
                    <Icon icon={video} />
                    <span>Demo</span>
                </a>

                <a
                    href={rbeaDocsBaseUrl + blockSlug}
                    target="_blank"
                    rel="noreferrer"
                    className="rbea-support-control-panel__links"
                >
                    <Icon icon={book} />
                    <span>Docs</span>
                </a>
            </div>
        </div>
    );
};

export default RbeaSupportControl;
