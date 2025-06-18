import React from "react";

import Dashicon from "@wordpress/components";

const rbeaDemoBaseUrl = "https://rbea-demo.renovatebot.com";
const rbeaDocsBaseUrl = "https://docs.renovatebot.com/rbea";

const RbeaSupportControl = ({ blockSlug }) => {
    return (
        <div className="rbea-support-control-panel">
            <div className="rbea-support-control-panel__header">
                <h3>Need Help?</h3>
            </div>

            <div className="rbea-support-control-panel__links">
                <a href={rbeaDemoBaseUrl + blockSlug} target="_blank" className="rbea-support-control-panel__links">
                    <Dashicon icon="media-video" />
                    <span>Demo</span>
                </a>

                <a href={rbeaDocsBaseUrl + blockSlug} target="_blank" className="rbea-support-control-panel__links">
                    <Dashicon icon="media-default" />
                    <span>Doc</span>
                </a>
            </div>

        </div>
    )
}


export default RbeaSupportControl;