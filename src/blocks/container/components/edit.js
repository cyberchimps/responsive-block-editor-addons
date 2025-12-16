/**
 * Internal dependencies
 */
import classnames from "classnames";
import Inspector from "./inspector";
import EditorStyles from "./editor-styles";
import { VariationPicker } from "../variationPicker";
import { useSelect } from '@wordpress/data';
import Render from './render';
import AutoRegisterCSSBlock from "../../../extensions/custom-css/AutoRegisterCSSBlock";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { useEffect } = wp.element;

export default function Edit(props) {
  const {
    attributes,
    attributes: { block_id, variationSelected },
    setAttributes,
    className,
    clientId,
		name,
  } = props;

  const {
    isParentOfSelectedBlock,
    variations,
    defaultVariation,
    getBlockParents,
    parentBlocks,
    parentAttributes,
    deviceType,
  } = useSelect((select) => {
    const coreBlocks = select("core/blocks");
    const coreBlockEditor = select("core/block-editor");
    const getBlockParentStore = coreBlockEditor?.getBlockParents(clientId);
    const { __experimentalGetPreviewDeviceType } = select('core/edit-post');
    const parentClientId = coreBlockEditor.getBlockRootClientId(props.clientId);
    return {
      defaultVariation: coreBlocks?.getDefaultBlockVariation(name),
      variations: coreBlocks?.getBlockVariations(name),
      isParentOfSelectedBlock: coreBlockEditor?.hasSelectedInnerBlock(
        clientId,
        true
      ),
      getBlockParents: getBlockParentStore,
      parentBlocks: coreBlockEditor?.getBlocksByClientId(getBlockParentStore),
      parentAttributes: coreBlockEditor.getBlockAttributes(parentClientId),
      deviceType: __experimentalGetPreviewDeviceType?.() || 'Desktop',
    };
  });

  // Equivalent to componentDidMount
  useEffect(() => {
    setAttributes({ block_id: clientId });
    setAttributes({ classMigrate: true });

    const styleEl = document.createElement("style");
    styleEl.setAttribute(
      "id",
      "responsive-block-editor-addons-container-style-" + clientId
    );
    document.head.appendChild(styleEl);

    return () => {
      // Clean up style tag on unmount
      document.head.removeChild(styleEl);
    };
  }, []);

  // Equivalent to componentDidUpdate for styles
  useEffect(() => {
    const styleEl = document.getElementById(
      "responsive-block-editor-addons-container-style-" + clientId
    );
    if (styleEl) {
      styleEl.innerHTML = EditorStyles(props, deviceType);
    }
  }, [props]);

  if ( isParentOfSelectedBlock ) {
		const emptyBlockInserter = document.querySelector( '.block-editor-block-list__empty-block-inserter' );
		if ( emptyBlockInserter ) {
			emptyBlockInserter.style.display = 'none';
		}
	}

  useEffect( () => {
		// Check if a parent of this container is one of these special blocks.
		const attributesToUpdate = {};

		// Conditionally set the isBlockRootParent attribute
		if ( ! parentBlocks || parentBlocks.length === 0 || ! parentBlocks.some( parent => parent.name === 'responsive-block-editor-addons/container' ) ) {
			attributesToUpdate.isBlockRootParent = true;
		}

		// Compare with attribute and attributeToUpdate and update only if there is a change.
		if ( attributesToUpdate.isBlockRootParent !== attributes.isBlockRootParent ) {
			setAttributes( attributesToUpdate );
		}
	}, [] );

  if ( isParentOfSelectedBlock ) {
		const emptyBlockInserter = document.querySelector( '.block-editor-block-list__empty-block-inserter' );
		if ( emptyBlockInserter ) {
			emptyBlockInserter.style.display = 'none';
		}
	}

  if (!variationSelected && 0 === getBlockParents?.length) {
    return <VariationPicker {...{ ...props, variations, defaultVariation }} />;
  }

  return [
    <>
      <style id={`responsive-block-editor-addons-container-style-${clientId}-inner`}>{EditorStyles(props, deviceType)}</style>
      <AutoRegisterCSSBlock key="auto-register-css" {...props} />
      <Inspector
        key={`inspector-${block_id}`}
        {...{ setAttributes, ...props }}
      />
      <Render key={`mainDiv-${block_id}`} {...props} />
    </>
  ];
}
