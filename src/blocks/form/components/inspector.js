/**
 * Inspector Controls
 */

// Setup the block
const { __ } = wp.i18n;
const { Component } = wp.element;
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import { __experimentalText as Text } from '@wordpress/components';
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import { createBlock } from '@wordpress/blocks';

// Import block components
const { InspectorControls } = wp.blockEditor

// Import Inspector components
const {
  PanelBody,
  RangeControl,
  SelectControl,
  ButtonGroup,
  Button,
  ToggleControl,
  TabPanel,
  Dashicon,
  BaseControl,
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
  }

  checkLabelEquality(prevFormInnerBlocks, currentFormInnerBlocks) {
    const { setAttributes } = this.props
    const { formInnerBlocks } = this.props.attributes
    for (let i = 0; i < prevFormInnerBlocks.length; i++) {
      const label1 = prevFormInnerBlocks[i]?.attributes.formInputFieldLabel;
      const label2 = currentFormInnerBlocks[i]?.attributes.formInputFieldLabel;
      if (label1 !== label2) {
          setAttributes({ formInnerBlocks:  currentFormInnerBlocks})
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { clientId, setAttributes } = this.props
    const { formInnerBlocks } = this.props.attributes
    if ( formInnerBlocks.length === 0) {
      setTimeout( () => {
          let allFormInnerBlocks = wp.data.select('core/block-editor').getBlock(clientId)?.innerBlocks;
          let filteredInnerBlocks = allFormInnerBlocks?.filter((block) => block.name === 'responsive-block-editor-addons/form-input');
          setAttributes({ formInnerBlocks: filteredInnerBlocks });
        },
        100
      );
    } else {
      if (prevProps.attributes.formInnerBlocks.length !== 0) {
        let allFormInnerBlocks1 = wp.data.select('core/block-editor').getBlock(clientId)?.innerBlocks;
        let filteredInnerBlocks1 = allFormInnerBlocks1?.filter((block) => block.name === 'responsive-block-editor-addons/form-input');
        this.checkLabelEquality(prevProps.attributes.formInnerBlocks, filteredInnerBlocks1)
      }
    }
  }

  render() {

    // Setup the attributes
    const {
      attributes: {
        isFormVariantSelected,
        formInnerBlocks,
      },
      setAttributes,
      clientId
    } = this.props;

    const inputFieldActions = {
      select: ( blockId ) => {
        if ( 0 < formInnerBlocks?.length ) {
          wp.data.dispatch( 'core/block-editor' ).selectBlock( blockId );
        }
      },
      move: ( blockId, position ) => {
        const blockClientId = formInnerBlocks.find( block => block.clientId === blockId )?.clientId;
        if ( blockClientId ) {
          wp.data.dispatch( 'core/block-editor' ).moveBlockToPosition( blockClientId, clientId, clientId, position );
        }
      },
      delete: ( blockId ) => {
        if ( 0 < formInnerBlocks?.length ) {
          wp.data.dispatch( 'core/block-editor' ).removeBlock( blockId, false );
          let filteredInnerBlocks = formInnerBlocks.filter((block) => block.clientId !== blockId )
          setAttributes({ formInnerBlocks: filteredInnerBlocks })
        }
      },
      add: ( blockName ) => {
        const itemBlock = createBlock( blockName );
        wp.data.dispatch('core/block-editor').insertBlocks(itemBlock, ( formInnerBlocks?.length ) || 0, clientId);
        setTimeout(() => {
          const allFormInnerBlocks = wp.data.select('core/block-editor').getBlock(clientId).innerBlocks;
          const filteredInnerBlocks = allFormInnerBlocks.filter((block) => block.name === 'responsive-block-editor-addons/form-input');
          setAttributes({ formInnerBlocks: filteredInnerBlocks });
        }, 100);
      }
    };

    const DragHandle = SortableHandle(() => <div className="responsive-block-editor-addons-checkbox-sort-options__drag"><span className="responsive-block-editor-addons-checkbox-sort-options__dragspan"></span></div>);

    const SortableInputField = SortableElement(({ item, actions }) => {
      return (
        <div className="responsive-block-editor-addons-checkbox-sort-option">
          <DragHandle />
          <div className="responsive-block-editor-addons-checkbox-sort-options__text">{item?.attributes?.formInputFieldLabel}</div>
          <Button
            icon="edit"
            label={__("Edit Field", "responsive-block-editor-addons")}
            showTooltip={true}
            className="responsive-block-editor-addons-checkbox-sort-options__button"
            onClick={() => actions?.select?.(item.clientId)}
          />
          <Button
            icon="no-alt"
            label={__("Remove Field", "responsive-block-editor-addons")}
            showTooltip={true}
            className="responsive-block-editor-addons-checkbox-sort-options__button"
            onClick={() => actions?.delete?.(item.clientId)}
          />
        </div>
      )
    })    

    const InputFieldList = SortableContainer( ({ items }) => {
      return (
        <div>
          { items.map( ( item, index ) => {
            return (
              <SortableInputField
                key={ item.clientId }
                index={ index }
                item={ item }
                actions={inputFieldActions}
              />
            );
          }) }
        </div>
      );
    });

    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={"content"}>
            <PanelBody
              title={__("General", "responsive-block-editor-addons")}
              initialOpen={true}
            >
              <Text variant="title.small" as="h3">{__( 'Input Fields', 'responsive-block-editor-addons' )}</Text>
              <Text variant="subtitle">{__( 'Press and hold to use drag and drop to sort the tabs', 'responsive-block-editor-addons' )}</Text>
              {formInnerBlocks.length !== 0 && (
                <>
                  <InputFieldList
										items={ formInnerBlocks }
										onSortEnd={({ oldIndex, newIndex }) => {
                      const movedClientId = formInnerBlocks?.[oldIndex]?.clientId;
                      if (movedClientId) {
                        const updatedBlocks = arrayMove(formInnerBlocks, oldIndex, newIndex);
                        setAttributes({ formInnerBlocks: updatedBlocks });
                        inputFieldActions.move(movedClientId, newIndex);
                      }
                    }}
										useDragHandle
										axis="y"
										lockAxis="y"
									/>
                </>
              )}

              {isFormVariantSelected && <>
                <Button
									variant="secondary"
									className="responsive-block-editor-addons-checkbox__add-options"
									onClick={ () => inputFieldActions?.add?.( 'responsive-block-editor-addons/form-input' ) }
								>
									{ __( 'Add Input Field', 'responsive-block-editor-addons' ) }
								</Button>
              
              </>}

            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"style"}>
          </InspectorTab>
          <InspectorTab key={"advance"}></InspectorTab>
        </InspectorTabs>
      </InspectorControls>
    );
  }
}
