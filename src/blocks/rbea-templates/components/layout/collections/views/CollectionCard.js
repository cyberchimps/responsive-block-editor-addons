/**
 * Collections Card.
 * This is a render component that deals with rendering output, but not logic or state management.
 */

/**
 * WordPress dependencies.
 */
const { __ } = wp.i18n;
const { Button } = wp.components;

export function CollectionCard(props) {
  return (
    <>
      <div className="rbea-patterns-design">
        <div className="rbea-patterns-design-inside">
          <div className="rbea-patterns-design-item">
            <Button
              className="rbea-patterns-insert-button rbea-patterns-collection-button"
              isSmall
              onClick={() => {
                props.collectionsView.setCurrentView("collection");
                props.collectionsView.setCurrentCollection(
                  props.collectionSlug
                );
              }}
            >
              <div className="rbea-patterns-collection-cover">
                <img
                  src={
                    props.context.collections[props.collectionSlug].thumbnail
                      ? props.context.collections[props.collectionSlug]
                          .thumbnail
                      : responsive_globals?.pattern_fallback_image
                  }
                  alt={props.context.collections[props.collectionSlug].label}
                  onError={(event) => {
                    event.target.src =
                      responsive_globals?.pattern_fallback_image;
                  }}
                />
              </div>
              <div className="rbea-patterns-design-info">
                <div className="rbea-patterns-design-title">
                  <span className="rbea-patterns-collection-label">
                    {props.context.collections[props.collectionSlug].label}
                  </span>
                </div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
