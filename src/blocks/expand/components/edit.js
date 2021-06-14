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
const { RichText, BlockControls, AlignmentToolbar } = wp.editor;

export default class Edit extends Component {
  constructor() {
    super(...arguments);
  }

  componentDidUpdate(prevProps, prevState) {
    var element = document.getElementById(
      "responsive-block-editor-addons-expand-style-" + this.props.clientId
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
      "responsive-block-editor-addons-expand-style-" + this.props.clientId
    );
    document.head.appendChild($style);
  }

  render() {
    // Setup the attributes
    const {
      attributes: {
        block_id,
        blockTitle,
        expandLessText,
        expandMoreText,
        moreLabel,
        lessLabel,
        expandAlignment,
        showTitle,
        titleFontFamily,
        textFontFamily,
        linkFontFamily,
      },
      setAttributes,
      isSelected,
    } = this.props;

    return [
      <BlockControls key="controls">
        <AlignmentToolbar
          value={expandAlignment}
          onChange={(value) => setAttributes({ expandAlignment: value })}
        />
      </BlockControls>,

      <Inspector {...{ setAttributes, ...this.props }} />,
      <Fragment>
        <div
          className={classnames(
            "responsive-block-editor-addons-block-expand",
            `block-${block_id}`
          )}
        >
          <div className="responsive-block-editor-addons-expand-block-content">
            {titleFontFamily && loadGoogleFont(titleFontFamily)}
            {textFontFamily && loadGoogleFont(textFontFamily)}
            {linkFontFamily && loadGoogleFont(linkFontFamily)}
            {showTitle && (
              <RichText
                tagName="h4"
                keepPlaceholderOnFocus
                value={blockTitle}
                className="responsive-block-editor-addons-expand-title"
                onChange={(value) =>
                  this.props.setAttributes({ blockTitle: value })
                }
              />
            )}
            {isSelected && (
              <label className="responsive-block-editor-addons-expand-label">
                {__("Less Text", "responsive-block-editor-addons")}
              </label>
            )}
            <RichText
              tagName="p"
              keepPlaceholderOnFocus
              value={expandLessText}
              className="responsive-block-editor-addons-expand-less-text"
              onChange={(value) =>
                this.props.setAttributes({ expandLessText: value })
              }
            />
            <div className="responsive-block-editor-addons-expand-toggle-wrapper">
              <a>
                <RichText
                  tagName="p"
                  keepPlaceholderOnFocus
                  value={moreLabel}
                  className="responsive-block-editor-addons-expand-more-toggle-text"
                  onChange={(value) =>
                    this.props.setAttributes({ moreLabel: value })
                  }
                />
              </a>
            </div>
            {isSelected && (
              <Fragment>
                <label className="responsive-block-editor-addons-expand-label">
                  {__("More Text", "responsive-block-editor-addons")}
                </label>
                <RichText
                  tagName="p"
                  keepPlaceholderOnFocus
                  value={expandMoreText}
                  className="responsive-block-editor-addons-expand-more-text"
                  onChange={(value) =>
                    this.props.setAttributes({ expandMoreText: value })
                  }
                />
                <div className="responsive-block-editor-addons-expand-toggle-wrapper">
                  <a>
                    <RichText
                      tagName="p"
                      keepPlaceholderOnFocus
                      value={lessLabel}
                      className="responsive-block-editor-addons-expand-less-toggle-text"
                      onChange={(value) =>
                        this.props.setAttributes({ lessLabel: value })
                      }
                    />
                  </a>
                </div>
              </Fragment>
            )}
          </div>
        </div>
      </Fragment>,
    ];
  }
}
