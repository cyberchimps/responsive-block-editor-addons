import classnames from "classnames";
import Inspector from "./inspector";
import { loadGoogleFont } from "../../../utils/font";
import EditorStyles from "./editor-styles";

const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { RichText } = wp.blockEditor || wp.editor;
import { range } from "lodash";

export default class Edit extends Component {
  constructor() {
    super(...arguments);
  }

  componentDidUpdate(prevProps, prevState) {
    var element = document.getElementById(
      "responsive-block-editor-addons-advanced-text-style-" +
        this.props.clientId
    );

    if (null !== element && undefined !== element) {
      element.innerHTML = EditorStyles(this.props);
    }
  }

  componentDidMount() {
    this.props.setAttributes({ block_id: this.props.clientId });

    this.props.setAttributes({ classMigrate: true });

    const $style = document.createElement("style");
    $style.setAttribute(
      "id",
      "responsive-block-editor-addons-advanced-text-style-" +
        this.props.clientId
    );
    document.head.appendChild($style);
  }

  render() {
    const {
      attributes: {
        block_id,
        displayTitle,
        displaySubtitle,
        columnsCount,
        tagTitle,
        blockTitle,
        blockSubtitle,
        displayColumnSeparator,
      },
      setAttributes,
    } = this.props;

    return [
      <Inspector
        key="advanced-text-inspector"
        {...{ setAttributes, ...this.props }}
      />,
      <Fragment key="advanced-text-container">
        <div
          className={classnames(
            "responsive-block-editor-addons-block-advanced-text",
            `block-${block_id}`
          )}
        >
          {(displayTitle || displaySubtitle) && (
            <div className="responsive-block-editor-addons-wrapper">
              {displayTitle && (
                <RichText
                  tagName={tagTitle || "h2"}
                  className="responsive-block-editor-addons__title"
                  value={blockTitle}
                  onChange={(blockTitle) => setAttributes({ blockTitle })}
                  placeholder={__("Title", "responsive-block-editor-addons")}
                />
              )}
              {displaySubtitle && (
                <RichText
                  tagName="p"
                  className="responsive-block-editor-addons__subtitle"
                  value={blockSubtitle}
                  onChange={(blockSubtitle) => setAttributes({ blockSubtitle })}
                  placeholder={__("Subtitle", "responsive-block-editor-addons")}
                />
              )}
            </div>
          )}
          <div className="responsive-block-editor-addons-text-wrapper">
            {range(columnsCount || 3).map((i) => {
              const index = i + 1;
              return (
                <Fragment key={i}>
                  <div
                    key={`item-${i}`}
                    className="responsive-block-editor-addons__text"
                  >
                    <RichText
                      tagName="p"
                      className={`responsive-block-editor-addons__text-${index}`}
                      value={this.props.attributes[`text${index}`]}
                      onChange={(text) =>
                        setAttributes({ [`text${index}`]: text })
                      }
                      placeholder={__(
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ullamcorper erat. Praesent luctus maximus nisl id placerat. Vestibulum rhoncus augue sed scelerisque tempor. Donec non libero quis massa aliquam consectetur et eget purus.",
                        "responsive-block-editor-addons"
                      )}
                    />
                  </div>
                  {displayColumnSeparator && i !== columnsCount - 1 && (
                    <div
                      className={`responsive-block-editor-addons__rule responsive-block-editor-addons__rule-${index}`}
                      role="presentation"
                    />
                  )}
                </Fragment>
              );
            })}
          </div>
        </div>
      </Fragment>,
    ];
  }
}
