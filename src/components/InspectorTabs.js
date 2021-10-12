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
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1.6em" height="1.6em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path d="M6.4 14.1l1.3 1.3l6.9-6.9l-1.3-1.3l-6.9 6.9zm6.3-7.5l-1.3-1.3l-6.9 6.9l1.4 1.4l6.8-7zm2.1-4.7l3.3 3.3c.6.6.5 1.5 0 2l-9.9 9.9l-6.9 1.4l1.4-6.9c6.2-6.3 9.5-9.6 9.9-9.9c.6-.4 1.6-.4 2.2.2z" fill="#626262"/><rect x="0" y="0" width="20" height="20" fill="rgba(0, 0, 0, 0)" /></svg>
                                <h5>{__('Content', 'responsive-block-editor-addons')}</h5>
                                </button>
                            </Tooltip>
                        )
                    }

                    {
                        (tabs.indexOf(STYLE) > -1 && hasStyle !== false) && (
                            <Tooltip text={__('Style', 'responsive-block-editor-addons')}>
                                <button className={classnames({ 'rbea-active': currentActiveTab === STYLE })} onClick={() => onTabChange(STYLE)}>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1.6em" height="1.6em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path d="M8.55 3.06c1.01.34-1.95 2.01-.1 3.13c1.04.63 3.31-2.22 4.45-2.86c.97-.54 2.67-.65 3.53 1.23c1.09 2.38.14 8.57-3.79 11.06c-3.97 2.5-8.97 1.23-10.7-2.66c-2.01-4.53 3.12-11.09 6.61-9.9zm1.21 6.45c.73 1.64 4.7-.5 3.79-2.8c-.59-1.49-4.48 1.25-3.79 2.8z" fill="#626262"/><rect x="0" y="0" width="20" height="20" fill="rgba(0, 0, 0, 0)" /></svg>
                                <h5>{__('Style', 'responsive-block-editor-addons')}</h5>
                                </button>
                            </Tooltip>
                        )
                    }

                    {
                        (tabs.indexOf(ADVANCE) > -1 && hasAdvance !== false) && (
                            <Tooltip text={__('Advanced', 'responsive-block-editor-addons')}>
                                <button className={classnames({ 'rbea-active': currentActiveTab === ADVANCE })} onClick={() => onTabChange(ADVANCE)}>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1.6em" height="1.6em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path d="M18 12h-2.18c-.17.7-.44 1.35-.81 1.93l1.54 1.54l-2.1 2.1l-1.54-1.54c-.58.36-1.23.63-1.91.79V19H8v-2.18c-.68-.16-1.33-.43-1.91-.79l-1.54 1.54l-2.12-2.12l1.54-1.54c-.36-.58-.63-1.23-.79-1.91H1V9.03h2.17c.16-.7.44-1.35.8-1.94L2.43 5.55l2.1-2.1l1.54 1.54c.58-.37 1.24-.64 1.93-.81V2h3v2.18c.68.16 1.33.43 1.91.79l1.54-1.54l2.12 2.12l-1.54 1.54c.36.59.64 1.24.8 1.94H18V12zm-8.5 1.5c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3s1.34 3 3 3z" fill="#626262"/><rect x="0" y="0" width="20" height="20" fill="rgba(0, 0, 0, 0)" /></svg>
                                <h5>{__('Advanced', 'responsive-block-editor-addons')}</h5>
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
