/**
 * External dependencies
 */
import classnames from "classnames";

/**
 * Internal dependencies
 */
import Controls from "./controls";
import Inspector from "./inspector";
import applyWithColors from "./colors";
import { getDividerFromStyle } from "./utils";
import InlineColorPicker from "../../../utils/components/inline-color-picker";
import EditorStyles from "./editor-styles";

/**
 * WordPress dependencies
 */
import { Component, Fragment } from "@wordpress/element";
import { compose } from "@wordpress/compose";
import { ResizableBox } from "@wordpress/components";

/**
 * Block edit function
 */
class Edit extends Component {
  constructor() {
    super(...arguments);

    this.saveMeta = this.saveMeta.bind(this);
    this.getBrowserWidth = this.getBrowserWidth.bind(this);

    this.state = {
      resizing: false,
      resizingAlt: false,
      innerWidth: this.getBrowserWidth(),
    };
  }

  componentDidUpdate(prevProps, prevState) {
    var element = document.getElementById(
      "responsive-block-editor-addons-shape-divider-style-" +
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
    this.getBrowserWidth();
    window.addEventListener("resize", this.getBrowserWidth.bind(this));

    // Pushing Style tag for this block css.
    const $style = document.createElement("style");
    $style.setAttribute(
      "id",
      "responsive-block-editor-addons-shape-divider-style-" +
        this.props.clientId
    );
    document.head.appendChild($style);
  }

  UNSAFE_componentWillMount() {
    // eslint-disable-line camelcase
    this.getBrowserWidth();
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.getBrowserWidth.bind(this));
  }

  getBrowserWidth() {
    this.setState({ innerWidth: window.innerWidth });
    return window.innerWidth;
  }

  saveMeta(type) {
    const meta = wp.data.select("core/editor").getEditedPostAttribute("meta");
    const block = wp.data
      .select("core/block-editor")
      .getBlock(this.props.clientId);
    let dimensions = {};

    if (
      typeof this.props.attributes.responsive_block_editor_addons !==
        "undefined" &&
      typeof this.props.attributes.responsive_block_editor_addons.id !==
        "undefined"
    ) {
      const id =
        this.props.name.split("/").join("-") +
        "-" +
        this.props.attributes.responsive_block_editor_addons.id;
      const height = {
        height: block.attributes[type],
        heightTablet: block.attributes[type + "Tablet"],
        heightMobile: block.attributes[type + "Mobile"],
      };

      if (
        typeof meta._responsive_block_editor_addons_responsive_height ===
          "undefined" ||
        (typeof meta._responsive_block_editor_addons_responsive_height !==
          "undefined" &&
          meta._responsive_block_editor_addons_responsive_height === "")
      ) {
        dimensions = {};
      } else {
        dimensions = JSON.parse(
          meta._responsive_block_editor_addons_responsive_height
        );
      }

      if (typeof dimensions[id] === "undefined") {
        dimensions[id] = {};
        dimensions[id][type] = {};
      } else if (typeof dimensions[id][type] === "undefined") {
        dimensions[id][type] = {};
      }

      dimensions[id][type] = height;

      // Save values to metadata.
      wp.data.dispatch("core/editor").editPost({
        meta: {
          _responsive_block_editor_addons_responsive_height: JSON.stringify(
            dimensions
          ),
        },
      });
    }
  }

  render() {
    const {
      clientId,
      attributes,
      className,
      isSelected,
      setAttributes,
      backgroundColor,
    } = this.props;

    const {
      block_id,
      responsive_block_editor_addons,
      shapeHeight,
      shapeHeightTablet,
      shapeHeightMobile,
      backgroundHeight,
      backgroundHeightTablet,
      backgroundHeightMobile,
      verticalFlip,
      horizontalFlip,
      justAdded,
      align,
      design,
    } = attributes;

    let shapeHeightResizer = {
      target: "shapeHeight",
      value: shapeHeight,
    };

    let backgroundHeightResizer = {
      target: "shapeHeight",
      value: backgroundHeight,
    };

    if (this.state.innerWidth <= 768 && this.state.innerWidth > 514) {
      shapeHeightResizer = {
        target: "shapeHeightTablet",
        value: shapeHeightTablet ? shapeHeightTablet : shapeHeight,
      };

      backgroundHeightResizer = {
        target: "backgroundHeightTablet",
        value: backgroundHeightTablet
          ? backgroundHeightTablet
          : backgroundHeight,
      };
    } else if (this.state.innerWidth <= 514) {
      shapeHeightResizer = {
        target: "shapeHeightMobile",
        value: shapeHeightMobile ? shapeHeightMobile : shapeHeight,
      };

      backgroundHeightResizer = {
        target: "backgroundHeightMobile",
        value: backgroundHeightMobile
          ? backgroundHeightMobile
          : backgroundHeight,
      };
    }

    //modify blocks when added
    if (justAdded) {
      const prevBlockClientId = wp.data
        .select("core/block-editor")
        .getPreviousBlockClientId(clientId);
      const nextBlockClientId = wp.data
        .select("core/block-editor")
        .getNextBlockClientId(clientId);

      if (prevBlockClientId) {
        wp.data
          .dispatch("core/block-editor")
          .updateBlockAttributes(prevBlockClientId, {
            noBottomMargin: true,
            marginBottom: 0,
            marginBottomTablet: 0,
            marginBottomMobile: 0,
          });
      }

      if (nextBlockClientId) {
        wp.data
          .dispatch("core/block-editor")
          .updateBlockAttributes(nextBlockClientId, {
            noTopMargin: true,
            marginTop: 0,
            marginTopTablet: 0,
            marginTopMobile: 0,
          });
      }
      setAttributes({ justAdded: false });
    }

    let classes = classnames(
      'wp-block-responsive-block-editor-addons-shape-divider',
      className && design==='empty'? className : `is-style-${design}`,
      "responsive-block-editor-addons-block-shape-divider",
      `block-${block_id}`,
      {
        "is-vertically-flipped": verticalFlip,
        "is-horizontally-flipped": horizontalFlip,
      }
    );

    if (
      responsive_block_editor_addons &&
      typeof responsive_block_editor_addons.id !== "undefined"
    ) {
      classes = classnames(
        classes,
        `responsive-block-editor-addons-shape-divider-${responsive_block_editor_addons.id}`,
        `align${align}`
      );
    }

    return (
      <Fragment key="shape-divider-fragment" >
        <style id={`responsive-block-editor-addons-shape-divider-style-${this.props.clientId}-inner`}>{EditorStyles(this.props)}</style>
        {isSelected && <Inspector {...this.props} />}
        {isSelected && <Controls {...this.props} />}
        <div className={classes}>
          <ResizableBox
            className={classnames(
              "wp-block-responsive-block-editor-addons-shape-divider__svg-wrapper",
              {
                "is-selected": isSelected,
                "is-resizing": this.state.resizing,
              }
            )}
            size={{
              height: shapeHeightResizer.value,
            }}
            minHeight="20"
            enable={{
              top: false,
              right: false,
              bottom: true,
              left: false,
              topRight: false,
              bottomRight: false,
              bottomLeft: false,
              topLeft: false,
            }}
            onResizeStop={(_event, _direction, _elt, delta) => {
              switch (shapeHeightResizer.target) {
                case "shapeHeightTablet":
                  setAttributes({
                    shapeHeightTablet: parseInt(
                      shapeHeightResizer.value + delta.height,
                      10
                    ),
                  });
                  break;

                case "shapeHeightMobile":
                  setAttributes({
                    shapeHeightMobile: parseInt(
                      shapeHeightResizer.value + delta.height,
                      10
                    ),
                  });
                  break;

                default:
                  setAttributes({
                    shapeHeight: parseInt(
                      shapeHeightResizer.value + delta.height,
                      10
                    ),
                  });
                  break;
              }

              this.setState({ resizing: false });

              //update meta
              this.saveMeta("shapeHeight");
            }}
            onResizeStart={() => {
              this.setState({ resizing: true });
            }}
          >
            {
              className && design==='empty'? getDividerFromStyle(className) : 
              getDividerFromStyle(`is-style-${design}`)
            }
          </ResizableBox>
          <ResizableBox
            className={classnames(
              "wp-block-responsive-block-editor-addons-shape-divider__alt-wrapper",
              {
                "is-selected": isSelected,
                "is-resizing": this.state.resizingAlt,
              }
            )}
            size={{
              height: backgroundHeightResizer.value,
            }}
            minWidth="100%"
            minHeight="20"
            enable={{
              top: false,
              right: false,
              bottom: true,
              left: false,
              topRight: false,
              bottomRight: false,
              bottomLeft: false,
              topLeft: false,
            }}
            onResizeStop={(_event, _direction, _elt, delta) => {
              switch (backgroundHeightResizer.target) {
                case "backgroundHeightTablet":
                  setAttributes({
                    backgroundHeightTablet: parseInt(
                      backgroundHeightResizer.value + delta.height,
                      10
                    ),
                  });
                  break;

                case "backgroundHeightMobile":
                  setAttributes({
                    backgroundHeightMobile: parseInt(
                      backgroundHeightResizer.value + delta.height,
                      10
                    ),
                  });
                  break;

                default:
                  setAttributes({
                    backgroundHeight: parseInt(
                      backgroundHeightResizer.value + delta.height,
                      10
                    ),
                  });
                  break;
              }

              this.setState({ resizingAlt: false });
              this.saveMeta("backgroundHeight");
            }}
            onResizeStart={() => {
              this.setState({ resizingAlt: true });
            }}
          >
            {isSelected && (
              <InlineColorPicker
                value={this.props.color.color}
                onChange={(color) =>
                  setAttributes({ color: null, customColor: color })
                }
              />
            )}
          </ResizableBox>
        </div>
      </Fragment>
    );
  }
}

export default compose([applyWithColors])(Edit);
