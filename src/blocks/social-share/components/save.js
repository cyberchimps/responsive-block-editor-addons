/**
 * Internal dependencies
 */
import classnames from "classnames";
import renderSVG from "../../../renderIcon";

/**
 * WordPress dependencies
 */
const { Component, Fragment } = wp.element;

export default class Save extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const {
      block_id,
      socialMediaIcons,
      iconsAlign,
      viewOption,
      iconColorType,
    } = this.props.attributes;

    return [
      <div
        className={classnames(
          this.props.className,
          "responsive-block-editor-addons-block-social-share",
          `block-${block_id}`
        )}
      >
        <div
          className={`responsive-block-editior-addons-share-icons-align-${iconsAlign}`}
        >
          <ul className="rbea-icons-wrapper responsive-block-editor-addons-share-icons-container">
            {socialMediaIcons.map((icon, index) => (
              <li
                key={index}
                className={"responsive-block-editor-addons-share-icon"}
                areaLabel={icon.label}
              >
                <a
                  href={icon.url || "#"}
                  target={icon.newTab ? "_blank" : null}
                  rel="nofollow noopener noreferrer"
                >
                  <div className="rbea-social-icon responsive-block-editor-addons-share-icon-svg-container">
                      { (viewOption==='icon' || viewOption==='icontext') && <span className={classnames(
                          "rbea-social-icon responsive-block-editor-addons-share-icon-svg",
                          iconColorType === 'official' ?`responsive-block-editor-addons-icon-${icon.icon}` : '',
                        )}>
                        {renderSVG(icon.icon)}
                      </span>
                      }
                  </div>
                  </a>
                  <a
                  href={icon.url || "#"}
                  target={icon.newTab ? "_blank" : null}
                  rel="nofollow noopener noreferrer"
                  >
                  {icon.label && (viewOption==='text' || viewOption==='icontext') && (
                    <span className="responsive-block-editor-addons-share-icon-label">
                      {icon.label}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>,
    ];
  }
}
