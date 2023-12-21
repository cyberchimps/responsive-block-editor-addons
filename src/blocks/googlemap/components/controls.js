/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { BlockControls } from "@wordpress/block-editor";
import { Toolbar, ToolbarButton, ToolbarGroup  } from "@wordpress/components";

function Controls({ attributes, setAttributes }) {
  const { address, pinned } = attributes;

  const toolbarControls = [
    {
      icon: "edit",
      title: __("Edit Location", "responsive-block-editor-addons"),
      isActive: !pinned,
      onClick: () => setAttributes({ pinned: !pinned }),
    },
  ];

  return (
    <BlockControls>
      {address && <ToolbarGroup>
        {toolbarControls.map((current,index) => {
          return (
            <ToolbarButton 
            key={`toolbar-button-${index}`}
              icon={current.icon}
              title={current.title}
              isActive={current.isActive}
              onClick={current.onClick} 
            />
          )
        })}
      </ToolbarGroup>
      }
    </BlockControls>
  );
}

export default Controls;
