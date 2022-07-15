/**
 * Internal dependencies
 */
import classnames from "classnames";
import Inspector from "./inspector";
import { loadGoogleFont } from "../../../utils/font";
import EditorStyles from "./editor-styles";
/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { RichText, AlignmentToolbar, BlockControls } = wp.editor;
export default class Edit extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      items: [],
      DataisLoaded : false
    };
  }
  componentDidUpdate(prevProps, prevState) {
    var element = document.getElementById(
      "responsive-block-editor-addons-featured-product-style-" +
      this.props.clientId
    );

    if (null !== element && undefined !== element) {
      element.innerHTML = EditorStyles(this.props);
    }
  }

  componentDidMount() {
    const getHomeURL = () => {
      let href = window.location.href;
      let index = href.indexOf('/wp-admin');
      let homeUrl = href.substring(0, index);
      return homeUrl;
    }
    const homeUrl = getHomeURL()
    fetch(`${homeUrl}/wp-json/wc/store/v1/products?per_page=0&catalog_visibility=any&search=&orderby=title&order=asc&_locale=user`).then( (apidata) => {
        return apidata.json();
    }).then( (json) => {
      this.setState({
        items: json,
        DataisLoaded: true
    });
    })

    // Assigning block_id in the attribute.
    this.props.setAttributes({ block_id: this.props.clientId });

    this.props.setAttributes({ classMigrate: true });

    // Pushing Style tag for this block css.
    const $style = document.createElement("style");
    $style.setAttribute(
      "id",
      "responsive-block-editor-addons-featured-product-style-" +
      this.props.clientId
    );
    document.head.appendChild($style);
  }

  render() {
    const { DataisLoaded, items } = this.state;
    if(!DataisLoaded){
      return <div><h1>Please Wait Some Time...</h1></div>
    }
    // Setup the attributes
    const {
      attributes: {
        headingTitle,
        headingDesc,
        seperatorStyle,
        headingTitleFontFamily,
        subHeadingTitleFontFamily,
        headingTag,
        headingAlignment,
        showHeading,
        showSubHeading,
        showSeparator,
        seperatorPosition,
        textJustify,
        block_id,
        productdata,
      },
      setAttributes,
      mergeBlocks,
      insertBlocksAfter,
      onReplace,
    } = this.props;
    this.props.setAttributes({ block_id: this.props.clientId });
    return [

      <BlockControls key="controls">
        <AlignmentToolbar
          value={headingAlignment}
          onChange={(value) => setAttributes({ headingAlignment: value })}
        />
      </BlockControls>,
      // Show the block controls on focus
      <Inspector {...{ setAttributes, ...this.props }} />,
      // Show the block markup in the editor
      <div className="fp-container">
        <form>
          <h2>Featured Product</h2>
          <p>
            Visually highlight a product or variation and encourage prompt
            action
          </p>
          <hr />
          <label for="product-search">Search for a product to display</label>
          <div id="fp-searchbar">
            <input type="text" name="product-search" />
          </div>
          <div className="fp-radio-container"> {
            items.map((item) => (
              <div classname="fp-radio">
                <input type="radio" value="" />
                {item.name}
              </div>
            ))
          }
          </div>
          <button type="submit">Done</button>
        </form>
      </div>,
    ];
  }
}
