const Logo = responsive_globals.home_url + '/wp-content/plugins/responsive-block-editor-addons/admin/images/responsive-blocks.svg';

const RbeaSupportControl = ({ blockSlug }) => {
    // Safely get the blockData, fallback to null if data not available
    const blockData = (typeof rbeaSupportBlocks !== 'undefined' && Array.isArray(rbeaSupportBlocks.blocks))
        ? rbeaSupportBlocks.blocks.find(block => block.key === blockSlug)
        : null;

    const demoUrl = blockData ? blockData.demo : '#';
    const docsUrl = blockData ? blockData.docs : '#';
    
    // console.log(demoUrl);
    // console.log(docsUrl);

    return (
        <div className="rbea-support-control-panel">
            <div className="rbea-support-control-panel__header">
                <img src={Logo} alt="Responsive Blocks" className="rbea-support-control-panel__logo" />
                <a href="#" className="rbea-support-control-panel__title">Need Help?</a>
            </div>

            <div className="rbea-support-control-panel__links">
                <a
                    href={demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rbea-support-control-panel__link"
                >
                    <span className="dashicons dashicons-controls-play"></span>
                    Demo
                </a>

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
