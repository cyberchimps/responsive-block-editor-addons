import './css/inspectorTabs.scss';
import classnames from 'classnames';
const { __ } = wp.i18n;
const { Tooltip } = wp.components;
const { Fragment, cloneElement, Children } = wp.element;

const { useState, useRef, useEffect } = wp.element,
    CONTENT = 'content',
    STYLE = 'style',
    ADVANCE = 'advance';

const InspectorTabs = props => {
    const { defaultTab, children, tabs, hasContent, hasStyle, hasAdvance } = props,
        [currentActiveTab, setCurrentActiveTab] = useState(defaultTab ? defaultTab : hasContent === false  ? hasStyle === false ? tabs[2] : tabs[1] : tabs[0]),
        tabWrapper = useRef()

    let sideSettingsPanel;

    useEffect(() => {
        sideSettingsPanel = tabWrapper.current.closest('.components-panel');
    });

    const status = new IntersectionObserver(([e]) => e.target.classList.toggle('rbea-is-sticky', e.intersectionRatio < 1), { threshold: [1] });

    useEffect(() => {

        const container = document.querySelector('.rbea-inspector-tabs-container');
        if (container) {
            status.observe(container);
        }

        return () => {
            sideSettingsPanel && sideSettingsPanel.removeAttribute('data-rbea-tab');
        }
    }, []);

    useEffect(() => {

        sideSettingsPanel && sideSettingsPanel.setAttribute('data-rbea-tab', defaultTab)
    }, [defaultTab]);

    const onTabChange = tab => {
        setCurrentActiveTab(tab);
        sideSettingsPanel && sideSettingsPanel.setAttribute('data-rbea-tab', tab);
    };

    return (
        <Fragment>
            <div className={'rbea-inspector-tabs-container'}>
                <div ref={tabWrapper} className={classnames(
                    'rbea-inspector-tabs',
                    'rbea-inspector-tabs-count-' + tabs.length,
                    currentActiveTab
                )}>
                    {
                        (tabs.indexOf(CONTENT) > -1 && hasContent !== false) && (
                            <Tooltip text={__('Content', 'responsive-block-editor-addons')}>
                                <button className={classnames({ 'rbea-active': currentActiveTab === CONTENT })} onClick={() => onTabChange(CONTENT)}>
                                <img  src= {responsive_globals.plugin_url + 'admin/images/' + ((currentActiveTab === CONTENT) ? 'inspector_content_active.png' : 'inspector_content.png')} className="rbea-inspector-content-icon" alt = "inspector tab content"></img>
                                <h5 className = "rbea-inspector-tab-title">{__('General', 'responsive-block-editor-addons')}</h5>
                                </button>
                            </Tooltip>
                        )
                    }

                    {
                        (tabs.indexOf(STYLE) > -1 && hasStyle !== false) && (
                            <Tooltip text={__('Style', 'responsive-block-editor-addons')}>
                                <button className={classnames({ 'rbea-active': currentActiveTab === STYLE })} onClick={() => onTabChange(STYLE)}>                          
                                <img  src= {responsive_globals.plugin_url + 'admin/images/' + ((currentActiveTab === STYLE) ? 'inspector_style_active.png' : 'inspector_style.png')} className="rbea-inspector-syle-icon" alt = "inspector tab style"></img>
                                <h5 className = "rbea-inspector-tab-title">{__('Style', 'responsive-block-editor-addons')}</h5>
                                </button>
                            </Tooltip>
                        )
                    }

                    {
                        (tabs.indexOf(ADVANCE) > -1 && hasAdvance !== false) && (
                            <Tooltip text={__('Advanced', 'responsive-block-editor-addons')}>
                                <button className={classnames({ 'rbea-active': currentActiveTab === ADVANCE })} onClick={() => onTabChange(ADVANCE)}>
                                <img  src= {responsive_globals.plugin_url + 'admin/images/' + ((currentActiveTab === ADVANCE) ? 'inspector_advance_active.png' : 'inspector_advance.png')} className="rbea-inspector-advance-icon" alt = "inspector tab advance"></img>
                                <h5 className = "rbea-inspector-tab-title">{__('Advanced', 'responsive-block-editor-addons')}</h5>
                                </button>
                            </Tooltip>
                        )
                    }
                </div>
            </div>
            {
                Array.isArray(children) && Children.map(children, (child, index) => {
                    if (!child.key) {
                        throw new Error('props.key not found in <InspectorTab />, you must use `key` prop');
                        return;
                    }
                    return cloneElement(child, {
                        index,
                        isActive: child.key === currentActiveTab
                    })

                })
            }
        </Fragment>
    )
};

InspectorTabs.defaultProps = {
    defaultTab: null,
    tabs: ['content', 'style', 'advance']
}

export default InspectorTabs;
