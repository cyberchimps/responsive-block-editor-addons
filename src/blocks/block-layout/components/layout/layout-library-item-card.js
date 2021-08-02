/**
 * Pattern Card.
 */

/**
 * Dependencies.
 */
import classnames from "classnames";

/**
 * WordPress dependencies.
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { Button, Dashicon, Tooltip } = wp.components;

export default class LayoutLibraryItemCard extends Component {
  constructor() {
    super(...arguments);
  }

  addDefaultSrc(event) {
    event.target.src = responsive_globals?.pattern_fallback_image;
  }

  render() {
    return (
      <Fragment>
        <div
          key={"rbea-patterns-design-" + this.props.itemKey}
          className="rbea-patterns-design"
        >
          <div className="rbea-patterns-design-inside">
            <div className="-design-item">
              <Button
                key={this.props.itemKey}
                className="rbea-patterns-insert-button"
                isSmall
                onClick={() => {
                  this.props.import(this.props.content, this.props.clientId);
                }}
              >
                <img
                  src={
                    this.props.image
                      ? this.props.image
                      : responsive_globals?.pattern_fallback_image
                  }
                  alt={this.props.name}
                  onError={this.addDefaultSrc}
                />
              </Button>

              <div className="rbea-patterns-design-info">
                <div className="rbea-patterns-design-title">
                  {this.props.name}
                  {
                    <Tooltip
                      text={
                        this.props.context.favoriteKeys.includes(
                          this.props.itemKey
                        )
                          ? __(
                              "Remove from Favorites",
                              "responsive-block-editor-addons"
                            )
                          : __(
                              "Add to Favorites",
                              "responsive-block-editor-addons"
                            )
                      }
                    >
                      <Button
                        key={"buttonFavorite"}
                        className="rbea-patterns-favorite-button"
                        isSmall
                        onClick={() => {
                          this.props.context.toggleFavorite(this.props.itemKey);
                        }}
                      >
                        <Dashicon
                          icon={"heart"}
                          className={classnames(
                            "rbea-patterns-icon-favorite",
                            this.props.context.favoriteKeys.includes(
                              this.props.itemKey
                            ) && "rbea-patterns-icon-favorite-active"
                          )}
                        />
                      </Button>
                    </Tooltip>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
