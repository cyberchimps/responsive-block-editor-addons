/**
 * Pattern Card.
 */

/**
 * WordPress dependencies.
 */
const { __ } = wp.i18n;
const { addQueryArgs } = wp.url;
const { Component, Fragment } = wp.element;

export default class LayoutLibraryItemList extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const postIdString = this.props.itemKey.match(/\d+/g);
    const postID = postIdString[0];

    return (
      <Fragment>
        <div className="rbea-patterns-reusable">
          <div>
            <a
              role="button"
              key={this.props.itemKey}
              className="rbea-patterns-insert-button"
              onClick={() => {
                this.props.import(this.props.content);
              }}
            >
              {this.props.name}
            </a>
          </div>
          <div className="rbea-patterns-reusable-actions">
            <span>
              <a
                href={addQueryArgs("post.php", {
                  post: postID,
                  post_type: "wp_block",
                  action: "edit",
                })}
                target="_blank"
                rel="noopener noreferrer"
              >
                {__("Edit", "responsive-block-editor-addons")}
              </a>
            </span>
          </div>
        </div>
      </Fragment>
    );
  }
}
