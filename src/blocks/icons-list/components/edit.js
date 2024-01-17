/**
 * Internal dependencies
 */
import classnames from "classnames";
import Inspector from "./inspector";
import IconList from "./iconlist";
import memoize from "memize";
import times from "lodash/times";
import { loadGoogleFont } from "../../../utils/font";
import EditorStyles from "./editor-styles";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { select } = wp.data;
const { Component, Fragment } = wp.element;
const { AlignmentToolbar, BlockControls, InnerBlocks } = wp.blockEditor;

const ALLOWED_BLOCKS = ["responsive-block-editor-addons/icons-list-child"];

export default class Edit extends Component {
  constructor() {
    super(...arguments);
  }
  componentDidUpdate(prevProps, prevState) {
    var element = document.getElementById(
      "responsive-block-editor-addons-icon-list-style-" + this.props.clientId
    );

    if (null !== element && undefined !== element) {
      element.innerHTML = EditorStyles(this.props);
    }
  }

  componentDidMount() {
    // Assigning block_id in the attribute.
    this.props.setAttributes({ block_id: this.props.clientId });

    // Pushing Style tag for this block css.
    const $style = document.createElement("style");
    $style.setAttribute(
      "id",
      "responsive-block-editor-addons-icon-list-style-" + this.props.clientId
    );
    document.head.appendChild($style);

    this.changeChildAttr(this.props.attributes.hideLabel);
  }

  changeChildAttr(value) {
    const { setAttributes } = this.props;
    const getChildBlocks = select("core/block-editor").getBlocks(
      this.props.clientId
    );

    getChildBlocks.forEach((iconChild, key) => {
      iconChild.attributes.hideLabel = value;
    });
    setAttributes({ hideLabel: value });
  }

  render() {
    // Setup the attributes
    const { attributes, setAttributes } = this.props;

    const { align, block_id, icon_count, icons, labelFontFamily } = attributes;

    

    const getIconTemplate = memoize((icon_block, icons) => {
      return times(icon_block, (n) => [
        "responsive-block-editor-addons/icons-list-child",
        icons[n],
      ]);
    });

    return (
      <Fragment>
        <style id={`responsive-block-editor-addons-icon-list-style-${this.props.clientId}-inner`}>{EditorStyles(this.props)}</style>
        <BlockControls key="controls">
          <AlignmentToolbar
            value={align}
            onChange={(value) => setAttributes({ align: value })}
          />
        </BlockControls>

        <Inspector {...{ setAttributes, ...this.props }} />

        <IconList {...this.props}>
          <div
            className={classnames(
              `responsive-block-editor-addons-icon-wrap-${block_id}`,
              "responsive-block-editor-addons-icon-list__wrap"
            )}
          >
            {labelFontFamily && loadGoogleFont(labelFontFamily)}
            <InnerBlocks
              template={getIconTemplate(icon_count, icons)}
              templateLock={false}
              allowedBlocks={ALLOWED_BLOCKS}
            />
          </div>
        </IconList>
      </Fragment>
    );
  }
}
