/**
 * Internal dependencies
 */
import icons from "./icons";

/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { Component, Fragment } from "@wordpress/element";
import { BlockControls } from "@wordpress/block-editor";
import { Toolbar, ToolbarButton, ToolbarGroup } from "@wordpress/components";

class Controls extends Component {
  render() {
    const { attributes, setAttributes } = this.props;

    const { horizontalFlip, verticalFlip } = attributes;

    const toolbarControls = [
      {
        icon: icons.flipY,
        title: __("Flip horiztonally", "responsive-block-editor-addons"),
        isActive: !!verticalFlip,
        onClick: () => setAttributes({ verticalFlip: !verticalFlip }),
      },
      {
        icon: icons.flipX,
        title: __("Flip vertically", "responsive-block-editor-addons"),
        isActive: !!horizontalFlip,
        onClick: () => setAttributes({ horizontalFlip: !horizontalFlip }),
      },
    ];

    return (
      <Fragment key="shape-divider-control-fragment" >
        <BlockControls>
          <ToolbarGroup>
            {toolbarControls.map((current,index) => {
              return (
              <ToolbarButton key={`shape-divider-${index}`}
                icon={current.icon}
                title={current.title}
                isActive={current.isActive}
                onClick={current.onClick}
              />)
            })}
          </ToolbarGroup>
        </BlockControls>
      </Fragment>
    );
  }
}

export default Controls;
