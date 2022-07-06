/**
 * Internal dependencies
 */
import classnames from "classnames";
import Style from "style-it";

/**
 * WordPress dependencies
 */
const { Component, Fragment } = wp.element;
const { RichText } = wp.editor;

export default class Save extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const {
      block_id,
      anchor,
      numberValue,
      blockTag,
    } = this.props.attributes;

    const saveBody = (
      <div className="rbea-number-box-main-container">
        <div className="rbea-number-box">
          <div className="rbea-number-box-container">
            <RichText.Content
              tagName="div"
              value={numberValue}
              className="rbea-number-box-block"
            />
          </div>
        </div>
      </div>
    )

    return [
      <>
        {
          blockTag == 'div' &&
          <div
            id={anchor}
            className={classnames(
              "responsive-block-editor-addons-block-number-box",
              `block-${block_id}`
            )}
          >
            {saveBody}
          </div>
        }
        {
          blockTag == 'section' &&
          <section
            id={anchor}
            className={classnames(
              "responsive-block-editor-addons-block-number-box",
              `block-${block_id}`
            )}
          >
            {saveBody}
          </section>
        }
        {
          blockTag == 'footer' &&
          <footer
            id={anchor}
            className={classnames(
              "responsive-block-editor-addons-block-number-box",
              `block-${block_id}`
            )}
          >
            {saveBody}
          </footer>
        }
        {
          blockTag == 'main' &&
          <main
            id={anchor}
            className={classnames(
              "responsive-block-editor-addons-block-number-box",
              `block-${block_id}`
            )}
          >
            {saveBody}
          </main>
        }
        {
          blockTag == 'aside' &&
          <aside
            id={anchor}
            className={classnames(
              "responsive-block-editor-addons-block-number-box",
              `block-${block_id}`
            )}
          >
            {saveBody}
          </aside>
        }
        {
          blockTag == 'article' &&
          <article
            id={anchor}
            className={classnames(
              "responsive-block-editor-addons-block-number-box",
              `block-${block_id}`
            )}
          >
            {saveBody}
          </article>
        }
        {
          blockTag == 'nav' &&
          <nav
            id={anchor}
            className={classnames(
              "responsive-block-editor-addons-block-number-box",
              `block-${block_id}`
            )}
          >
            {saveBody}
          </nav>
        }
        {
          blockTag == 'header' &&
          <header
            id={anchor}
            className={classnames(
              "responsive-block-editor-addons-block-number-box",
              `block-${block_id}`
            )}
          >
            {saveBody}
          </header>
        }

      </>
    ];
  }
}
