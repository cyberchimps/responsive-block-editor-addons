//Container
import "./blocks/container/index.js";

//Section
import "./blocks/section/index.js";

//Advanced Columns
import "./blocks/advance-columns/index.js";
import "./blocks/advance-columns/column/index.js";

//Advanced Heading
import "./blocks/advanced-heading/index.js";

//Advanced Text
import "./blocks/advanced-text/index.js";

//Image
import "./blocks/image/index.js"

//Multi Buttons
import "./blocks/buttons/index.js";
import "./blocks/buttons/buttons-child/index.js";

//Call to Action
import "./blocks/call-to-action/index.js";

//Block Quote
import "./blocks/blockquote/index.js";

//Divider
import "./blocks/divider/index.js";

//Info Block
import "./blocks/info-block/index.js";

//Count Down
import "./blocks/count-down/index.js";

//Spacer
import "./blocks/spacer/index.js";

//Inline Notice
import "./blocks/inline-notice/index.js";

//Progress Bar
import "./blocks/progress-bar/index.js";

//Table of Contents
import "./blocks/table-of-contents/index.js";

//Testimonial
import "./blocks/testimonial/index.js";

//Count up
import "./blocks/count-up/index.js";

//Flipbox
import "./blocks/flipbox/index.js";

//Icons List
import "./blocks/icons-list/index.js";
import "./blocks/icons-list/icons-list-child/index.js";

//Google Map
import "./blocks/googlemap/index.js";

//Image Gallery
import "./blocks/gallery-masonry/index.js";

//Responsive Post and Page Grid
import "./blocks/post-grid/index.js";

//Post Carousel
import "./blocks/post-carousel/index.js";

//Post Timeline
import "./blocks/post-timeline/index.js";

//Image Boxes
import "./blocks/image-boxes/index.js";

//Shape Divider
import "./blocks/shape-divider/index.js";

//Accordian
import "./blocks/accordion/index.js";
import "./blocks/accordion/accordion-item/index.js";

//Content Timeline
import "./blocks/content-timeline/index.js";

//Image Slider
import "./blocks/image-slider/index.js";

//Team
import "./blocks/team/index.js";

//Expand/Show More
import "./blocks/expand/index.js";

//Card
import "./blocks/card/index.js";

//Pricing Table
import "./blocks/pricing-table/index.js";

//Pricing List
import "./blocks/pricing-list/index.js";

//Video Popup
import "./blocks/video-popup/index.js";

//Testimonial Slider
import "./blocks/testimonial-slider/index.js";

//Feature Grid
import "./blocks/feature-grid/index.js";

//Portfolio
import "./blocks/portfolio/index.js";

//Not to make available for users yet
// import "./blocks/how-to/index.js";

//Anchor
import "./blocks/anchor/index.js";

//Call/Mail Button
import "./blocks/call-mail-button/index.js";

//Social Icons
import "./blocks/social-share/index.js";

//Tabs
import "./blocks/tabs/index.js";
import "./blocks/tabs/tabs-child/index";

//Taxonomy List
import "./blocks/taxonomy-list/index.js";

//WP Search
import "./blocks/wp-search/index.js";

//Instagram
import "./blocks/instagram/index.js";

//Image Hotspot
import "./blocks/image-hotspot/index.js";

//Contact Form 7 Styler
import "./blocks/contact-form-7-styler/index.js";

//Popup
import "./blocks/popup/index.js";

//Form
import "./blocks/form/index.js";
import "./blocks/form/input/index.js";

//Section block
import "./blocks/section-block/index.js";

// Extensions
import "./extensions/cover-styles";
import "./extensions/animations/RbeaAnimations.js";
import "./extensions/attributes.js";
import "./utils/accordionOneOpen.js"
import "./utils/responsiveTabSync.js"

// Auto Block Recovery System and Inherit from Theme.
import {initAutoBlockRecovery, initGlobalInheritFromThemeSystem} from './utils/settings.js'
import { initCustomCSSRegistry } from './utils/custom-css-registry.js';
import domReady from '@wordpress/dom-ready';

// Initialize auto block recovery only if enabled
domReady( initAutoBlockRecovery );

// Initialize global inherit from theme system
domReady( initGlobalInheritFromThemeSystem );

// Initialize custom CSS registry for editor
domReady( initCustomCSSRegistry );
