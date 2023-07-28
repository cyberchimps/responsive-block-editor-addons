import React, {useState} from "react";
import ReactDOM from "react-dom";
const { __ } = wp.i18n;

const GettingStarted = () => {
    const [hash, setHash] = useState(window.location.hash.substring(1))
    const [showCategory, setShowCategory] = useState('all')
    window.location.hash = hash
    if ( hash === '' ) {
        window.location.hash = '#blocks'
        setHash('blocks')
    }
    
    return(
        <div className="rbea-getting-started-page">
            <Header />
            <div className="rbea-tabs-section">
                <div className="rbea-tabs">
                    <Tab hash={hash} setHash={setHash} />
                </div>
            </div>
            <div className="rbea-tabs-content">
                <div className="rbea-tabs-inner-content" style={hash == 'templates' ? {backgroundImage: 'url(' + rbealocalize.responsiveurl + "admin/images/rst-template-preview.jpg" + ')'} : {backgroundImage:'none'}}>
                    <div className="rbea-blocks-content rbea-tab-content" style={hash == 'blocks' ? {display:'block'} : {display:'none'}} id="rbea_blocks">
                        {hash == 'blocks' && <Blocks showCategory={showCategory} setShowCategory={setShowCategory} /> }
                    </div>
                    <div className="rbea-templates-content rbea-tab-content" style={hash == 'templates' ? {display:'block'} : {display:'none'}} id="rbea_templates">
                        {hash == 'templates' && <StarterTemplates /> }
                    </div>
                    <div className="rbea-help-content rbea-tab-content" style={hash == 'help' ? {display:'block'} : {display:'none'}} id="rbea_help">
                        {hash == 'help' && <Help /> }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

const Tab = ({hash, setHash}) => {
    const tabList = ['blocks', 'templates', 'help']
    return (
        <>
            {
                tabList.map((current) => {
                    return (
                        <>
                            <div className={"rbea-tab rbea-templates-tab " + (hash == current || hash == '' ? 'rbea-active-tab' : '')} data-tab="blocks" onClick={() => setHash(current)}>
                                <p className="rbea-tab-name">
                                    {
                                        current == 'templates' ? __('Starter Templates','responsive-block-editor-addons') : __(current.charAt(0).toUpperCase() + current.slice(1),'responsive-block-editor-addons')
                                    }
                                </p>
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}

const Help = () => {

    const helpContents = [
        {
            'title': __( 'Documentation & Changelog', 'responsive-block-editor-addons' ),
            'desc': __( 'Browse through the detailed documentation to know how to use the plugin.', 'responsive-block-editor-addons' ),
            'icon': 'dashicons-media-document.svg',
            'links': [
                {
                    'title': __( 'Docs', 'responsive-block-editor-addons' ),
                    'url': 'https://docs.cyberchimps.com/responsive-gutenberg-addons/',
                },
                {
                    'title': __( 'Changelog', 'responsive-block-editor-addons' ),
                    'url': 'https://cyberchimps.com/changelog/responsive-block-editor-addons/',
                }
            ]
        },
        {
            'title': __( 'Blocks Demo', 'responsive-block-editor-addons' ),
            'desc' : __( 'View demos of the Gutenberg blocks to understand their usability.', 'responsive-block-editor-addons' ),
            'icon' : 'dashicons-welcome-view-site.svg',
            'links': [
                {
                    'title': __( 'View Now', 'responsive-block-editor-addons' ),
                    'url'  : 'https://cyberchimps.com/blocks/',
                }
            ]
        },
        {
            'title': __( 'Video Resources', 'responsive-block-editor-addons' ),
            'desc' : __( 'Check out the video resources to learn how to use the powerful plugin features.', 'responsive-block-editor-addons' ),
            'icon' : 'dashicons-youtube.svg',
            'links': [
                {
                    'title': __( 'Watch Now', 'responsive-block-editor-addons' ),
                    'url'  : 'https://www.youtube.com/playlist?list=PLXTwxw3ZJwPSCqW__jo6fkUlEh2uXAsuF',
                }
            ]
        },
        {
            'title': __( 'Support', 'responsive-block-editor-addons' ),
            'desc' : __( 'Got any questions, we are happy to help! Get in touch with our dedicated support team.', 'responsive-block-editor-addons' ),
            'icon' : 'dashicons-sos.svg',
            'links': [
                {
                    'title': __( 'Request Support', 'responsive-block-editor-addons' ),
                    'url'  : 'https://wordpress.org/support/plugin/responsive-block-editor-addons/',
                }
            ]
        },
        {
            'title': __( 'Join Our Community', 'responsive-block-editor-addons' ),
            'desc' : __( 'Join our community of Responsive users to create  websites! Say Hi, ask questions, and grow together.', 'responsive-block-editor-addons' ),
            'icon' : 'dashicons-groups.svg',
            'links': [
                {
                    'title': __( 'Join Facebook Group', 'responsive-block-editor-addons' ),
                    'url'  : 'https://www.facebook.com/groups/responsive.theme',
                }
            ]
        },
        {
            'title': __( 'Rate Us', 'responsive-block-editor-addons' ),
            'desc' : __( 'Your feedback is invaluable to us, and we greatly appreciate each and every review you provide.', 'responsive-block-editor-addons' ),
            'icon' : 'dashicons-thumbs-up.svg',
            'links': [
                {
                    'title': __( 'Submit Review', 'responsive-block-editor-addons' ),
                    'url'  : 'https://wordpress.org/support/plugin/responsive-block-editor-addons/reviews/#new-post',
                },
            ]
        },
    ]

    return(
        <div className="container">
            <div className="row gy-4">
                {
                    helpContents.map((current) => {
                        return (
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="rbea-help-feature-cards h-100">
                                    <div className="row">
                                        <div className="col-md-2">
                                            <img src={rbealocalize.responsiveurl + '/admin/images/' + current.icon} />
                                        </div>
                                        <div className="col-md-10">
                                            <p className="rbea-help-title">{current.title}</p>
                                            <p className="rbea-help-desc">{current.desc}</p>
                                            {
                                                current.links.map((currentLink, linkIndex) => {
                                                    return (
                                                        <>
                                                            <a className="rbea-help-links" href={currentLink.url} target="_blank">{currentLink.title}</a>
                                                            { linkIndex < current.links.length - 1
                                                            ?
                                                            <span className="rbea-help-links-divider">|</span>
                                                            :
                                                            null
                                                            }   
                                                        </>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const StarterTemplates = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2 col-12">
                    <div className="rbea-rst-content">
                        <div className="rbea-text-content text-center">
                            <img className="rbea-responsive-logo rounded mx-auto d-block" src={rbealocalize.responsiveurl + 'admin/images/responsive-thumbnail.jpg'} alt="" />
                            <div className="rbea-brand-text mt-4">
                                <p className="rbea-rst-brand-name">{ __( 'Responsive Starter Templates', 'responsive-block-editor-addons' ) }</p>
                                <p className="rbea-rst-brand-desc">{ __( 'Browse 150+ fully-functional ready site templates by installing the free Responsive Starter Templates plugin. Click the button below to get started.', 'responsive-block-editor-addons' )}</p>
                            </div>
                            <div className="rbea-rst-button-section">
                                
                                <div className="rbea-rst-learn-more">
                                    <a href={rbealocalize.rst_url} target="_blank">{ __( 'Learn More', 'responsive-block-editor-addons' )}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Blocks = ({showCategory, setShowCategory}) => {

    const [search, setSearch] = useState('')

    const categories = [
        {
            key: 'all',
            title: 'All'
        },
        {
            key: 'constructive',
            title: 'Constructive'
        },
        {
            key: 'timelines',
            title: 'Timelines'
        },
        {
            key: 'cro',
            title: 'CRO'
        }
    ]

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-9">
                    <div className="rbea-blocks-list">
                        <p>
                            {
                                categories.map((current, index) => {
                                    return (
                                        <>
                                            <span className={"rbea-blocks-category rbea-blocks-tab pointer " + (showCategory == current.key ? 'rbea-active-blocks-category' : '')} id={current.key} onClick={() => {setShowCategory(current.key);setSearch('')}}>{__( current.title, 'responsive-block-editor-addons' )}</span>
                                            { index < categories.length - 1 ? <span className="rbea-blocks-category mx-lg-3 mx-sm-2 mx-2">|</span> : '' } 
                                        </>
                                    )
                                })
                            }
                        </p>
                    </div>
                </div>
                <div className="col-lg-3 text-center">
                    <div className="rbea-blocks-search-box">
                        <input type="text" id="rbea-input-search-blocks" autocomplete="off" placeholder={__( 'Search Blocks', 'responsive-block-editor-addons' )} onChange={(e) => setSearch(e.target.value)} value={search} />
                        <i className="rbea-blocks-search-icon"><span className="dashicons dashicons-search"></span></i>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 my-5">
                    <div className="row">
                        <div className="rbea-blocks-toggle-all-blocks-section d-flex justify-content-center">
                            <div className="rbea-blocks-toggle-all-text-content">
                                <p className="rbea-blocks-toogle-block-title text-center">{__( 'Toggle All Blocks', 'responsive-block-editor-addons' )}
                                </p>
                                <p className="rbea-blocks-toogle-block-desc text-center">{__( 'You can disable some blocks for faster page speed.', 'responsive-block-editor-addons' )}</p>
                            </div>
                            <div className="rbea-blocks-toggle-block-switch">
                                <label className="rbea-blocks-switch mt-2">
                                    <input id="rbea-blocks-toggle-blocks" type="checkbox" />
                                    <span className="rbea-blocks-slider rbea-blocks-round"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row rbea-block-cards-group">
                <Cards showCategory={showCategory} search={search} />
            </div>
        </div>
    )
}

const Cards = ({showCategory, search}) => {

    const blocks = [
        {
            key: 'accordion',
            title: 'Accordion Block',
            docs: 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/accordion-block/',
            demo: 'https://cyberchimps.com/blocks/accordion/',
            category: 'constructive'
        },
        {
            key: 'advanced-columns',
            title: 'Advance Columns',
            docs: 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/advanced-column/',
            demo: 'https://cyberchimps.com/blocks/advanced-columns/',
            category: 'constructive'
        },
        {
            key: 'advanced-heading',
            title: 'Advance Heading',
            docs: 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/advanced-heading/',
            demo: 'https://cyberchimps.com/blocks/advanced-heading/',
            category: 'constructive'
        },
        {
            key: 'advanced-text',
            title: 'Advance Text',
            docs: 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/advanced-text/',
            demo: 'https://cyberchimps.com/blocks/advanced-text/',
            category: 'constructive'
        },
        {
            key: 'anchor',
            title: 'Anchor Block',
            docs: 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/anchor-block/',
            demo: 'https://cyberchimps.com/blocks/anchor/',
            category: 'constructive'
        },
        {
            key: 'blockquote',
            title: 'Blockquote',
            docs: 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/blockquote/',
            demo: 'https://cyberchimps.com/blocks/block-quote/',
            category: 'constructive'
        },
        {
            key: 'call-mail-button',
            title: 'Call/Mail Button',
            docs: 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/call-mail-button/',
            demo: 'https://cyberchimps.com/blocks/call-mail-button/',
            category: 'constructive'
        },
        {
            key: 'call-to-action',
            title: 'Call To Action',
            docs: 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/call-to-action',
            demo: 'https://cyberchimps.com/blocks/call-to-action/',
            category: 'cro'
        },
        {
            key: 'card',
            title: 'Card',
            docs: 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/card/',
            demo: 'https://cyberchimps.com/blocks/card-block/',
            category: 'constructive'
        },
        {
            key: 'content-timeline',
            title: 'Content Timeline',
            docs: 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/content-timeline/',
            demo: 'https://cyberchimps.com/blocks/content-timeline/',
            category: 'timelines'
        },
        {
            key: 'countdown',
            title: 'Countdown',
            docs: 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/count-down/',
            demo: 'https://cyberchimps.com/blocks/countdown/',
            category: 'timelines'
        },
        {
            key: 'countup',
            title: 'Countup',
            docs: 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/count-up/',
            demo: 'https://cyberchimps.com/blocks/count-up/',
            category: 'timelines'
        },
        {
            key: 'divider',
            title: 'Divider',
            docs: 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/divider/',
            demo: 'https://cyberchimps.com/blocks/divider/',
            category: 'constructive'
        },
        {
            key: 'expand-show-more',
            title: 'Expand/Show More',
            docs: 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/expand-show-more/',
            demo: 'https://cyberchimps.com/blocks/expand/',
            category: 'constructive'
        },
        {
            key: 'feature-grid',
            title: 'Feature Grid',
            docs: 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/feature-grid/',
            demo: 'https://cyberchimps.com/blocks/feature-grid/',
            category: 'constructive'
        },
        {
            key: 'flipbox',
            title: 'Flip Box',
            docs: 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/flip-box/',
            demo: 'https://cyberchimps.com/blocks/flip-box/',
            category: 'constructive'
        },
        {
            key: 'google-map',
            title: 'Google Map',
            docs: 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/google-map/',
            demo: 'https://cyberchimps.com/blocks/google-map/',
            category: 'constructive'
        },
        {
            key: 'icon-list',
            title: 'Icon List',
            docs: 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/icon-list/',
            demo: 'https://cyberchimps.com/blocks/icon-list/',
            category: 'constructive'
        },
        {
            key: 'image-boxes',
            title: 'Image Boxes',
            docs: 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/image-boxes/',
            demo: 'https://cyberchimps.com/blocks/image-boxes/',
            category: 'constructive'
        },
        {
            key: 'image-hotspot',
            title: 'Image Hotspot',
            docs: 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/image-hotspot',
            demo: 'https://cyberchimps.com/blocks/image-hotspot/',
            category: 'constructive'
        },
        {
            key: 'image-slider',
            title: 'Image Slider',
            docs: 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/image-slider/',
            demo: 'https://cyberchimps.com/blocks/image-slider/',
            category: 'constructive'
        },
        {
            key: 'info-block',
            title: 'Info Block',
            docs: 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/info-block/',
            demo: 'https://cyberchimps.com/blocks/info-block/',
            category: 'constructive'
        },
        {
            key: 'inline-notice-block',
            title: 'Inline Notice Block',
            docs: 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/inline-notice-block/',
            demo: 'https://cyberchimps.com/blocks/inline-notice/',
            category: 'constructive'
        },
        {
            key: 'instagram-feed',
            title: 'Instagram Feed',
            docs: 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/instagram-feed/',
            demo: 'https://cyberchimps.com/blocks/instagram-feed/',
            category: 'constructive'
        },
        {
            key: 'masonry',
            title: 'Masonry',
            docs: 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/masonry/',
            demo: 'https://cyberchimps.com/blocks/masonry/',
            category: 'constructive'
        },
        {
            key: 'multi-buttons',
            title: 'Multi Buttons',
            docs: 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/multi-buttons/',
            demo: 'https://cyberchimps.com/blocks/multi-buttons/',
            category: 'cro'
        },
        {
            key: 'portfolio',
            title: 'Portfolio',
            docs: 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/portfolio/',
            demo: 'https://cyberchimps.com/blocks/portfolio/',
            category: 'constructive'
        },
        {
            key: 'post-carousel',
            title: 'Post Carousel',
            docs: 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/post-carousel/',
            demo: 'https://cyberchimps.com/blocks/post-carousel/',
            category: 'constructive'
        },
        {
            key: 'post-timeline',
            title: 'Post Timeline',
            docs: 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/post-timeline/',
            demo: 'https://cyberchimps.com/blocks/post-timeline/',
            category: 'timelines'
        },
        {
            key: 'pricing-list',
            title: 'Pricing List',
            docs: 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/pricing-list/',
            demo: 'https://cyberchimps.com/blocks/pricing-list/',
            category: 'constructive'
        },
        {
            key: 'pricing-table',
            title: 'Pricing Table',
            docs: 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/pricing-table/',
            demo: 'https://cyberchimps.com/blocks/pricing-table/',
            category: 'constructive'
        },
        {
            key: 'progress-bar',
            title: 'Progress Bar',
            docs: 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/progress-bar/',
            demo: 'https://cyberchimps.com/blocks/progress-bar/',
            category: 'constructive'
        },
        {
            key: 'post-page-grid',
            title: 'Post And Page Grid',
            docs: 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/post-and-page-grid/',
            demo: 'https://cyberchimps.com/blocks/post-and-page-grid/',
            category: 'constructive'
        },
        {
            key: 'section',
            title: 'Section',
            docs: 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/section/',
            demo: 'https://cyberchimps.com/blocks/section/',
            category: 'constructive'
        },
        {
            key: 'shape-divider',
            title: 'Shape Divider',
            docs: 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/shape-divider/',
            demo: 'https://cyberchimps.com/blocks/shape-divider/',
            category: 'constructive'
        },
        {
            key: 'social-share',
            title: 'Social Share',
            docs: 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/social-share/',
            demo: 'https://cyberchimps.com/blocks/social-share/',
            category: 'constructive'
        },
        {
            key: 'spacer',
            title: 'Spacer',
            docs: 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/spacer/',
            demo: 'https://cyberchimps.com/blocks/spacer/',
            category: 'constructive'
        },
        {
            key: 'table-of-contents',
            title: 'Table Of Contents',
            docs: 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/table-of-contents/',
            demo: 'https://cyberchimps.com/blocks/table-of-content/',
            category: 'constructive'
        },
        {
            key: 'tabs',
            title: 'Tabs',
            docs: 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/tabs/',
            demo: 'https://cyberchimps.com/blocks/tabs/',
            category: 'constructive'
        },
        {
            key: 'taxonomy-list',
            title: 'Taxonomy List',
            docs: 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/taxonomy-list/',
            demo: 'https://cyberchimps.com/blocks/taxonomy-list/',
            category: 'constructive'
        },
        {
            key: 'team',
            title: 'Team',
            docs: 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/team/',
            demo: 'https://cyberchimps.com/blocks/team/',
            category: 'constructive'
        },
        {
            key: 'testimonial',
            title: 'Testimonial',
            docs: 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/testimonial/',
            demo: 'https://cyberchimps.com/blocks/testimonial/',
            category: 'constructive'
        },
        {
            key: 'testimonial-slider',
            title: 'Testimonial Slider',
            docs: 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/testimonial-slider/',
            demo: 'https://cyberchimps.com/blocks/testimonial-slider/',
            category: 'constructive'
        },
        {
            key: 'video-popup',
            title: 'Video Popup',
            docs: 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/video-popup/',
            demo: 'https://cyberchimps.com/blocks/video-popup/',
            category: 'constructive'
        },
        {
            key: 'wp-search',
            title: 'WP Search',
            docs: 'https://docs.cyberchimps.com/responsive-gutenberg-addons/blocks/wp-search/',
            demo: 'https://cyberchimps.com/blocks/wp-search/',
            category: 'constructive'
        },
    ]

    return (
        blocks.map((current, index) => {
            return (
                <>
                {
                    search == ''
                    ?
                    <>
                        {(current.category == showCategory || 'all' == showCategory) && <Card category={current.category} title={current.title} docs={current.docs} index={index} key={current.key} />}
                    </>
                    :
                    <>
                        {current.title.toLowerCase().includes(search) && <Card category={current.category} title={current.title} docs={current.docs} index={index} key={current.key} />}
                    </>
                }
                </>
            )
        })
    )
}

const Card = ({category, title, docs, demo, index, key}) => {
    return (
        <div className={"col-lg-4 col-md-4 gy-3 rbea-block-category-card rbea-block-category-" + (category)}>
            <div className="rbea-blocks-card d-flex justify-content-between h-100">
                <div className="rbea-blocks-card-text-content">
                    <div className="rbea-blocks-card-title"><p>{__(title, 'responsive-block-editor-addons')}</p></div>
                </div>
                <div className="rbea-blocks-card-switch align-self-center">
                    <a className="rbea-blocks-docs-demo-links" href={docs} target="_blank"><img src={rbealocalize.responsiveurl + 'admin/images/icon-article.svg'} alt="icon-article" /></a>&nbsp;
                    <a className="rbea-blocks-docs-demo-links" href={demo} target="_blank"><img src={rbealocalize.responsiveurl + 'admin/images/icon-demo.svg'} alt="icon-demo" /></a>&nbsp;
                    <label className="rbea-blocks-switch">
                        <input className="rbea-blocks-input-checkbox" data-index={index} type="checkbox" id={key} />
                        <span className="rbea-blocks-slider rbea-blocks-round"></span>
                    </label>
                </div>
            </div>
        </div>
    )
}

const Header = () => {
    return (
        <div className="rbea-header">
            <div className="rbea-brand">
                <img className="rbea-logo" src={rbealocalize.responsiveurl + 'admin/images/responsive-thumbnail.jpg'} alt="responsive-thumbnail" />
                <h1 className="rbea-brand-name">{__("Responsive Blocks", "responsive-block-editor-addons")}</h1>
                <div className="rbea-version">{rbealocalize.rbea_version}</div>
            </div>
            <p className="rbea-brand-desc">{__( 'Thank you for choosing Responsive Gutenberg Blocks Library - A Powerful WordPress Editor Plugin', 'responsive-block-editor-addons' )}</p>
        </div>
    )
}

const Footer = () => {
    return (
        <div className="rbea-footer">
            <div className="rbea-footer-details">
                <div className="rbea-footer-text">
                    <p className="rbea-footer-text-line">{__('If you like', 'responsive-block-editor-addons')}
                    <span className="rbea-footer-brand-name"> {__('Responsive Blocks', 'responsive-block-editor-addons')}</span>, <br className="rbea-mobile-line-break" />{__('please leave us a ', 'responsive-block-editor-addons')} 
                        <a href={rbealocalize.review_link} target="_blank" className="rbea-star-rating">
                            <img src={ rbealocalize.responsiveurl + 'admin/images/ph_star-fill.svg'} /><img src={ rbealocalize.responsiveurl + 'admin/images/ph_star-fill.svg'} /><img src={ rbealocalize.responsiveurl + 'admin/images/ph_star-fill.svg'} /><img src={ rbealocalize.responsiveurl + 'admin/images/ph_star-fill.svg'} /><img src={ rbealocalize.responsiveurl + 'admin/images/ph_star-fill.svg'} />
                        </a>{__(' rating. Thank you!', 'responsive-block-editor-addons')}
                    </p>
                </div>
                <div className="rbea-hr"></div>
            </div>
            <img className="rbea-cyberchimps-logo" src={rbealocalize.responsiveurl + 'admin/images/cyberchimps-logo.png'} />
        </div>
    )
}


document.addEventListener('DOMContentLoaded', () => {
    var rbeaGettingStartedPageElement = document.getElementById( 'rbea-getting-started-page-app' );
    if ( typeof rbeaGettingStartedPageElement !== 'undefined' && rbeaGettingStartedPageElement !== null ) {
      ReactDOM.render(<GettingStarted />, rbeaGettingStartedPageElement);
    }
});




// var $ = jQuery.noConflict();
// $(document).ready(function () {
//     let hash = window.location.hash;
//         if ( hash === '' ) {
//             window.location.hash = '#help'
//             hash = '#help'
//         }
//         if ( hash === '#templates' ) {
//             goToRST()
//             $(".rbea-tabs-inner-content").css("background-image", "url('" + rbealocalize.responsiveurl + "admin/images/rst-template-preview.jpg')");
//         }
//         $('.rbea-tab-content').hide()
//         $('.rbea-tab').removeclassName('rbea-active-tab')
//         $('.rbea-' + hash.substring(1) + '-tab').addclassName('rbea-active-tab')
//         $('#rbea_' + hash.substring(1)).show()
    

//     $('.rbea-tab').click(function () {
//         $('.rbea-tab-content').hide()
//         $('.rbea-tab').removeclassName('rbea-active-tab')
//         let tab = $(this).data('tab');
//         $('#rbea_' + tab).show();
//         window.location.hash = tab;
//         $(this).addclassName('rbea-active-tab');
//     });

//     $(window).on('hashchange', function() {
//         let currentHash = window.location.hash;
//         if ( currentHash === '#templates') {
//             goToRST()
//             $(".rbea-tabs-inner-content").css("background-image", "url('" + rbealocalize.responsiveurl + "admin/images/rst-template-preview.jpg')");
//         } else {
//             $(".rbea-tabs-inner-content").css("background-image", "none");
//         }
//     });

//     function goToRST() {
//         if ( rbealocalize.isRSTActivated ) {
//             window.location.href = rbealocalize.siteurl + '/wp-admin/admin.php?page=responsive-add-ons'
//             return
//         }
//     }

//     $( 'body' ).on(
//         'click',
//         '.rbea-install-plugin',
//         function ( e ) {
//             e.preventDefault();
//             let button   = $( this );
//             let buttonID = button.attr( 'id' );
//             let slug     = button.attr( 'data-slug' );
//             let url      = button.attr( 'href' );
//             let redirect = $( button ).data( 'redirect' );
//             button.text( rbealocalize.installing );
//             button.addclassName( 'updating-message' );

//             wp.updates.installPlugin(
//                 {
//                     slug: slug,
//                     success: function () {
//                         $( '#' + buttonID ).text( rbealocalize.activating + '...' )
//                         $( '#' + buttonID ).addclassName( 'updating-message' );
//                         activatePlugin( url, redirect );
//                     }
//                 }
//             );
//         }
//     );

//     function activatePlugin(  url, redirect ) {
//         if ( typeof url === 'undefined' || ! url ) {
//             return;
//         }
//         jQuery.ajax(
//             {
//                 async: true,
//                 type: 'GET',
//                 url: url,
//                 success: function () {
//                     // Reload the page.
//                     if ( typeof(redirect) !== 'undefined' && redirect !== '' ) {
//                         window.location.replace( redirect );
//                         window.location.href( redirect );
//                     } else {
//                         location.reload();
//                     }
//                 },
//                 error: function ( jqXHR, exception ) {
//                     var msg = '';
//                     if ( jqXHR.status === 0 ) {
//                         msg = rbealocalize.verify_network;
//                     } else if ( jqXHR.status === 404 ) {
//                         msg = rbealocalize.page_not_found;
//                     } else if ( jqXHR.status === 500 ) {
//                         msg = rbealocalize.internal_server_error;
//                     } else if ( exception === 'parsererror' ) {
//                         msg = rbealocalize.json_parse_failed;
//                     } else if ( exception === 'timeout' ) {
//                         msg = rbealocalize.timeout_error;
//                     } else if ( exception === 'abort' ) {
//                         msg = rbealocalize.ajax_req_aborted;
//                     } else {
//                         msg = rbealocalize.uncaught_error;
//                     }
//                     console.log( msg );
//                 },
//             }
//         );
//     }

//     $( 'body' ).on(
//         'click',
//         '.activate-now',
//         function ( e ) {
//             e.preventDefault();
//             let button   = $( this );
//             let url      = button.attr( 'href' );
//             let redirect = $( button ).data( 'redirect' );
//             button.text( rbealocalize.activating + '...' )
//             activatePlugin( url, redirect );
//         }
//     );

// });
