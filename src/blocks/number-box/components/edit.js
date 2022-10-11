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
  }
  componentDidUpdate(prevProps, prevState) {
    var element = document.getElementById(
      "responsive-block-editor-addons-number-box-style-" +
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
      "responsive-block-editor-addons-number-box-style-" +
      this.props.clientId
    );
    document.head.appendChild($style);
  }
  render() {
    // Setup the attributes
    const {
      attributes: {
        block_id,
        numberValue,
        numberBoxAlignment,
        contentFontFamily,
        blockTag,
      },
      setAttributes,
    } = this.props;
    this.props.setAttributes({ block_id: this.props.clientId });

    const editBody = (
      <div className="rbea-number-box-main-container">
        <div className="rbea-number-box">
          <div className="rbea-number-box-container">
            {contentFontFamily && loadGoogleFont(contentFontFamily)}
            <RichText
              tagName="div"
              value={numberValue}
              placeholder={__("101", "responsive-block-editor-addons")}
              className="rbea-number-box-block"
              multiline={false}
              onChange={(value) => setAttributes({ numberValue: value })}
              allowedFormats={['core/bold', 'core/italic']}
            />
          </div>
        </div>
      </div>
    )

    return [
      <BlockControls key="controls">
        <AlignmentToolbar
          value={numberBoxAlignment}
          onChange={(value) => setAttributes({ numberBoxAlignment: value })}
        />
      </BlockControls>,
      // Show the block controls on focus
      <Inspector {...{ setAttributes, ...this.props }} />,

      // Show the block markup in the editor
      <>
        {
          blockTag == 'div' &&
          <div
            className={classnames(
              this.props.className,
              "responsive-block-editor-addons-block-number-box",
              `block-${block_id}`
            )}
          >
            {editBody}

          </div>
        }
        {
          blockTag == 'section' &&
          <section
            className={classnames(
              this.props.className,
              "responsive-block-editor-addons-block-number-box",
              `block-${block_id}`
            )}
          >
            {editBody}

          </section>
        }
        {
          blockTag == 'footer' &&
          <footer
            className={classnames(
              this.props.className,
              "responsive-block-editor-addons-block-number-box",
              `block-${block_id}`
            )}
          >
            {editBody}

          </footer>
        }
        {
          blockTag == 'main' &&
          <main
            className={classnames(
              this.props.className,
              "responsive-block-editor-addons-block-number-box",
              `block-${block_id}`
            )}
          >
            {editBody}

          </main>
        }
        {
          blockTag == 'aside' &&
          <aside
            className={classnames(
              this.props.className,
              "responsive-block-editor-addons-block-number-box",
              `block-${block_id}`
            )}
          >
            {editBody}

          </aside>
        }
        {
          blockTag == 'article' &&
          <article
            className={classnames(
              this.props.className,
              "responsive-block-editor-addons-block-number-box",
              `block-${block_id}`
            )}
          >
            {editBody}

          </article>
        }
        {
          blockTag == 'nav' &&
          <nav
            className={classnames(
              this.props.className,
              "responsive-block-editor-addons-block-number-box",
              `block-${block_id}`
            )}
          >
            {editBody}

          </nav>
        }
        {
          blockTag == 'header' &&
          <header
            className={classnames(
              this.props.className,
              "responsive-block-editor-addons-block-number-box",
              `block-${block_id}`
            )}
          >
            {editBody}

          </header>
        }
      </>
    ];
  }
}
