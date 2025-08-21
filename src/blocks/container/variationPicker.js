/**
 * Internal dependencies
 */
import {
	__experimentalBlockVariationPicker as BlockVariationPicker,
	useBlockProps,
} from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import { useDispatch } from "@wordpress/data";
import { createBlocksFromInnerBlocksTemplate } from "@wordpress/blocks";
import rowIcons from "./icons";
import ResponsiveBlockEditorAddonsIcons from "../../block-icons";

export const variations = [
  {
    name: "one-column",
    icon: rowIcons["100"],
    attributes: {
      variationSelected: true,
    },
    scope: ["block"],
  },
  {
    name: "two-column-split",
    icon: rowIcons["50-50"],
    attributes: {
      variationSelected: true,
      directionDesktop: "row",
      wrapMobile: "wrap",
    },
    isDefault: true,
    innerBlocks: [
      [
        "responsive-block-editor-addons/container",
        { customWidthDesktop: 50, customWidthMobile: 100, widthSetByUser: true },
      ],
      [
        "responsive-block-editor-addons/container",
        { customWidthDesktop: 50, customWidthMobile: 100, widthSetByUser: true },
      ],
    ],
    scope: ["block"],
  },
  {
    name: "three-columns-equal",
    icon: rowIcons["33-33-33"],
    attributes: {
      variationSelected: true,
      directionDesktop: "row",
      wrapMobile: "wrap",
    },
    innerBlocks: [
      [
        "responsive-block-editor-addons/container",
        { customWidthDesktop: 33, customWidthMobile: 100, widthSetByUser: true },
      ],
      [
        "responsive-block-editor-addons/container",
        { customWidthDesktop: 33, customWidthMobile: 100, widthSetByUser: true },
      ],
      [
        "responsive-block-editor-addons/container",
        { customWidthDesktop: 33, customWidthMobile: 100, widthSetByUser: true },
      ],
    ],
    scope: ["block"],
  },
  {
    name: "four-column",
    icon: rowIcons["25-25-25-25"],
    attributes: {
      variationSelected: true,
      directionDesktop: "row",
      wrapMobile: "wrap",
    },
    innerBlocks: [
      [
        "responsive-block-editor-addons/container",
        { customWidthDesktop: 25, customWidthMobile: 100, widthSetByUser: true },
      ],
      [
        "responsive-block-editor-addons/container",
        { customWidthDesktop: 25, customWidthMobile: 100, widthSetByUser: true },
      ],
      [
        "responsive-block-editor-addons/container",
        { customWidthDesktop: 25, customWidthMobile: 100, widthSetByUser: true },
      ],
      [
        "responsive-block-editor-addons/container",
        { customWidthDesktop: 25, customWidthMobile: 100, widthSetByUser: true },
      ],
    ],
    scope: ["block"],
  },
  {
    name: "50-50_50-50",
    icon: rowIcons["50-50_50-50"],
    attributes: {
      variationSelected: true,
      directionDesktop: "row",
      wrapDesktop: "wrap",
      wrapMobile: "wrap",
    },
    innerBlocks: [
      [
        "responsive-block-editor-addons/container",
        { customWidthDesktop: 48, customWidthMobile: 100, widthSetByUser: true },
      ],
      [
        "responsive-block-editor-addons/container",
        { customWidthDesktop: 48, customWidthMobile: 100, widthSetByUser: true },
      ],
      [
        "responsive-block-editor-addons/container",
        { customWidthDesktop: 48, customWidthMobile: 100, widthSetByUser: true },
      ],
      [
        "responsive-block-editor-addons/container",
        { customWidthDesktop: 48, customWidthMobile: 100, widthSetByUser: true },
      ],
    ],
    scope: ["block"],
  },
  {
    name: "two-columns-one-third-two-thirds",
    icon: rowIcons["25-75"],
    attributes: {
      variationSelected: true,
      directionDesktop: "row",
      wrapMobile: "wrap",
    },
    innerBlocks: [
      [
        "responsive-block-editor-addons/container",
        { customWidthDesktop: 25, customWidthMobile: 100, widthSetByUser: true },
      ],
      [
        "responsive-block-editor-addons/container",
        { customWidthDesktop: 75, customWidthMobile: 100, widthSetByUser: true },
      ],
    ],
    scope: ["block"],
  },
  {
    name: "33-33-33_33-33-33",
    icon: rowIcons["33-33-33_33-33-33"],
    attributes: {
      variationSelected: true,
      directionDesktop: "row",
      wrapDesktop: "wrap",
      wrapMobile: "wrap",
    },
    innerBlocks: [
      [
        "responsive-block-editor-addons/container",
        { customWidthDesktop: 31, customWidthMobile: 100, widthSetByUser: true },
      ],
      [
        "responsive-block-editor-addons/container",
        { customWidthDesktop: 31, customWidthMobile: 100, widthSetByUser: true },
      ],
      [
        "responsive-block-editor-addons/container",
        { customWidthDesktop: 31, customWidthMobile: 100, widthSetByUser: true },
      ],
      [
        "responsive-block-editor-addons/container",
        { customWidthDesktop: 31, customWidthMobile: 100, widthSetByUser: true },
      ],
      [
        "responsive-block-editor-addons/container",
        { customWidthDesktop: 31, customWidthMobile: 100, widthSetByUser: true },
      ],
      [
        "responsive-block-editor-addons/container",
        { customWidthDesktop: 31, customWidthMobile: 100, widthSetByUser: true },
      ],
    ],
    scope: ["block"],
  },
  {
    name: "three-columns-wider-center",
    icon: rowIcons["25-50-25"],
    attributes: {
      variationSelected: true,
      directionDesktop: "row",
      wrapMobile: "wrap",
    },
    innerBlocks: [
      [
        "responsive-block-editor-addons/container",
        { customWidthDesktop: 25, customWidthMobile: 100, widthSetByUser: true },
      ],
      [
        "responsive-block-editor-addons/container",
        { customWidthDesktop: 50, customWidthMobile: 100, widthSetByUser: true },
      ],
      [
        "responsive-block-editor-addons/container",
        { customWidthDesktop: 25, customWidthMobile: 100, widthSetByUser: true },
      ],
    ],
    scope: ["block"],
  },
  {
    name: "two-columns-two-thirds-one-third",
    icon: rowIcons["75-25"],
    attributes: {
      variationSelected: true,
      directionDesktop: "row",
      wrapMobile: "wrap",
    },
    innerBlocks: [
      [
        "responsive-block-editor-addons/container",
        { customWidthDesktop: 75, customWidthMobile: 100, widthSetByUser: true },
      ],
      [
        "responsive-block-editor-addons/container",
        { customWidthDesktop: 25, customWidthMobile: 100, widthSetByUser: true },
      ],
    ],
    scope: ["block"],
  },
  {
    name: "75-25_25_75",
    icon: rowIcons["75-25_25_75"],
    attributes: {
      variationSelected: true,
      directionDesktop: "row",
      wrapDesktop: "wrap",
      wrapMobile: "wrap",
    },
    innerBlocks: [
      [
        "responsive-block-editor-addons/container",
        { customWidthDesktop: 73, customWidthMobile: 100, widthSetByUser: true },
      ],
      [
        "responsive-block-editor-addons/container",
        { customWidthDesktop: 23, customWidthMobile: 100, widthSetByUser: true },
      ],
      [
        "responsive-block-editor-addons/container",
        { customWidthDesktop: 23, customWidthMobile: 100, widthSetByUser: true },
      ],
      [
        "responsive-block-editor-addons/container",
        { customWidthDesktop: 73, customWidthMobile: 100, widthSetByUser: true },
      ],
    ],
    scope: ["block"],
  },
  {
    name: "50-50_100",
    icon: rowIcons["50-50_100"],
    attributes: {
      variationSelected: true,
      directionDesktop: "row",
      wrapDesktop: "wrap",
      wrapMobile: "wrap",
    },
    innerBlocks: [
      [
        "responsive-block-editor-addons/container",
        { customWidthDesktop: 100, widthSetByUser: true, directionDesktop: "row" },
        [
          [
            "responsive-block-editor-addons/container",
            { customWidthDesktop: 48, customWidthMobile: 100, widthSetByUser: true },
          ],
          [
            "responsive-block-editor-addons/container",
            { customWidthDesktop: 48, customWidthMobile: 100, widthSetByUser: true },
          ],
        ],
      ],
      [
        "responsive-block-editor-addons/container",
        { customWidthDesktop: 100, customWidthMobile: 100, widthSetByUser: true },
      ],
    ],
    scope: ["block"],
  },
  {
    name: "25-75_75-25",
    icon: rowIcons["25-75_75-25"],
    attributes: {
      variationSelected: true,
      directionDesktop: "row",
      wrapDesktop: "wrap",
      wrapMobile: "wrap",
    },
    innerBlocks: [
      [
        "responsive-block-editor-addons/container",
        { customWidthDesktop: 23, customWidthMobile: 100, widthSetByUser: true },
      ],
      [
        "responsive-block-editor-addons/container",
        { customWidthDesktop: 73, customWidthMobile: 100, widthSetByUser: true },
      ],
      [
        "responsive-block-editor-addons/container",
        { customWidthDesktop: 73, customWidthMobile: 100, widthSetByUser: true },
      ],
      [
        "responsive-block-editor-addons/container",
        { customWidthDesktop: 23, customWidthMobile: 100, widthSetByUser: true },
      ],
    ],
    scope: ["block"],
  },
];

export const VariationPicker = (props) => {
  const { clientId, setAttributes, defaultVariation } = props;
  const { replaceInnerBlocks } = useDispatch("core/block-editor");

  const blockVariationPickerOnSelect = (nextVariation = defaultVariation) => {
    if (nextVariation.attributes) {
      setAttributes(nextVariation.attributes);
    }

    if (nextVariation.innerBlocks && "one-column" !== nextVariation.name) {
      replaceInnerBlocks(
        clientId,
        createBlocksFromInnerBlocksTemplate(nextVariation.innerBlocks)
      );
    }
  };

  return (
    <div {...useBlockProps()} className="responsive-block-editor-addons-container-variation-picker">
      <BlockVariationPicker
        icon={ResponsiveBlockEditorAddonsIcons.container}
        label={__("Container", "responsive-block-editor-addons")}
        instructions={__(
          "Select a layout to start with.",
          "responsive-block-editor-addons"
        )}
        variations={variations}
        onSelect={(nextVariation) =>
          blockVariationPickerOnSelect(nextVariation)
        }
      />
    </div>
  );
};
