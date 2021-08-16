/**
 * Pattern Card.
 */

/**
 * Dependencies.
 */
import classnames from "classnames";

const { apiFetch } = wp;

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

  importApiCall( content ) {
    console.log('calling api with content...')
    //call backend api, which in turn calls function to download images and replace links with downloaded paths.
    return apiFetch( {
			path: '/rbeablocks/v1/import',
			method: 'PATCH',
			body: JSON.stringify( { pattern_content: content } ),
			_wpnonce: wpApiSettings.nonce,
		} )
			.then( ( modified_content ) => {
				return modified_content;
			} )
			.catch( ( error ) => console.error( error ) );
  }

  async importCurrentPattern(content, id) {
    console.log('preparing to call api...')
    //api call to backend function: download images in content and replace remote path with downloaded path.
    let modified_content = await this.importApiCall( content );
    console.log('got data from api...')
    //call internal import function with content provided, to render pattern on screen.
    console.log(content)
    console.log(modified_content)
    console.log(modified_content['data'])
    this.props.import(modified_content['data'], id);
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
                  //call function having api call.
                  this.importCurrentPattern(this.props.content, this.props.clientId)
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
