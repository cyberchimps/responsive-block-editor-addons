/**
 * Internal dependencies
 */
import classnames from "classnames";
import Inspector from "./inspector";
import times from "lodash/times";
import memoize from "memize";
import EditorStyles from "./editor-styles";
/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const {BlockControls, InnerBlocks, AlignmentToolbar } = wp.blockEditor;
const ALLOWED_BLOCKS = ["responsive-block-editor-addons/column"];

const getColumnsTemplate = memoize((columns) => {
  return times(columns, (n) => [
    "responsive-block-editor-addons/column",
    { id: n + 1 },
  ]);
});

export default class Edit extends Component {
  constructor() {
    super(...arguments);
  }

  componentDidUpdate(prevProps, prevState) {
    var element = document.getElementById(
      "responsive-block-editor-addons-advanced-columns-style-" +
        this.props.clientId
    );

    if (null !== element && undefined !== element) {
      element.innerHTML = EditorStyles(this.props);
    }
  }

  componentDidMount() {
    // Assigning block_id in the attribute.
    this.props.setAttributes({ block_id: this.props.clientId });
    this.props.setAttributes({ classMigrate: true });

    // Pushing Style tag for this block css.
    const $style = document.createElement("style");
    $style.setAttribute(
      "id",
      "responsive-block-editor-addons-advanced-columns-style-" +
        this.props.clientId
    );
    document.head.appendChild($style);
  }

  render() {
    // Setup the attributes
    const {
      attributes: {
        columns,
        columnGap,
        contentWidth,
        stack,
        overlayType,
        gradientOverlayType,
        blockAlign,
        align,
        backgroundType,
        block_id,
      },
      setAttributes,
    } = this.props;


    return [
      <style id={`responsive-block-editor-addons-advanced-columns-style-${this.props.clientId}-inner`}>{EditorStyles(this.props)}</style>,
      <BlockControls key="controls">
        <AlignmentToolbar
          value={blockAlign}
          onChange={(value) => setAttributes({ blockAlign: value })}
        />
      </BlockControls>,
      // Show the block controls on focus
      <Inspector key={`ac-inspector-${block_id}`} {...{ setAttributes, ...this.props }} />,
      // Show the block markup in the editor
      <div
        className={classnames(
          this.props.className,
          backgroundType == "image" ? "background-type-image" : ""
          )}
        key = {`ac-mainDiv-${block_id}`}
          >
        <div
          className={classnames(
            "responsive-block-editor-addons-block-columns",
            "responsive-columns-wrap",
            `responsive-columns__gap-${columnGap}`,
            `responsive-columns__stack-${stack}`,
            `responsive-columns__content-width-${contentWidth}`,
            `overlay-type-${overlayType}`,
            `${gradientOverlayType}`,
            `align${align}`
          )}
        >
          <div
            className={classnames(
              "responsive-columns-inner-wrap",
              `responsive-columns-columns-${columns}`
            )}
          >
            <InnerBlocks
              template={getColumnsTemplate(columns)}
              templateLock="all"
              allowedBlocks={ALLOWED_BLOCKS}
            />
          </div>
        </div>
      </div>,
    ];
  }
}
