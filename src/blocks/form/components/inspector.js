/**
 * Inspector Controls
 */

// Setup the block
const { __ } = wp.i18n;
const { Component } = wp.element;
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import { __experimentalText as Text, FontSizePicker, __experimentalBoxControl as BoxControl } from '@wordpress/components';
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import { createBlock } from '@wordpress/blocks';
import ResponsiveSpacingControl from "../../../settings-components/ResponsiveSpacingSettings";

// Import block components
const { InspectorControls, PanelColorSettings, AlignmentToolbar } = wp.blockEditor

// Import Inspector components
const {
  TextControl,
  TextareaControl,
  PanelBody,
  RangeControl,
  Button,
  TabPanel,
  Dashicon,
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
        formEmailTo,
        formEmailSubject,
        formSuccessMessage,
        formErrorMessage,
        formLabelSize,
        formInputSize,
        formLabelInputGap,
        formFieldInputGap,
        inputFieldPaddingTop,
        inputFieldPaddingTopTablet,
        inputFieldPaddingTopMobile,
        inputFieldPaddingBottom,
        inputFieldPaddingBottomTablet,
        inputFieldPaddingBottomMobile,
        inputFieldPaddingLeft,
        inputFieldPaddingLeftTablet,
        inputFieldPaddingLeftMobile,
        inputFieldPaddingRight,
        inputFieldPaddingRightTablet,
        inputFieldPaddingRightMobile,
        formButtonLabelColor,
        formButtonLabelBGColor,
        formButtonLabelHoverColor,
        formButtonLabelHoverBGColor,
        formButtonPaddingTop,
        formButtonPaddingTopTablet,
        formButtonPaddingTopMobile,
        formButtonPaddingBottom,
        formButtonPaddingBottomTablet,
        formButtonPaddingBottomMobile,
        formButtonPaddingLeft,
        formButtonPaddingLeftTablet,
        formButtonPaddingLeftMobile,
        formButtonPaddingRight,
        formButtonPaddingRightTablet,
        formButtonPaddingRightMobile,
        formButtonAlign,
        formButtonAlignTablet,
        formButtonAlignMobile,
        formLabelColor,
        formInputTextColor,
        formInputBGColor,
        formBorderColor,
        formHelperLabelColor,
        formRequiredLabelColor,
        formSuccessMessageColor,
        formErrorMessageColor,
        formBorderRadius,
        formBorderWidth,
        formHelperTextSize,
        formsSuccessErrorMessageSize,
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

    const defaultFontSizes = [
      {
        name: __( 'Small', 'otter-blocks' ),
        size: '14px',
        slug: 'small'
      },
      {
        name: __( 'Medium', 'otter-blocks' ),
        size: '16px',
        slug: 'medium'
      },
      {
        name: __( 'Large', 'otter-blocks' ),
        size: '18px',
        slug: 'large'
      },
      {
        name: __( 'XL', 'otter-blocks' ),
        size: '20px',
        slug: 'xl'
      }
    ];

    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={"content"}>
          {isFormVariantSelected && <>
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

                <Button
									variant="secondary"
									className="responsive-block-editor-addons-checkbox__add-options"
									onClick={ () => inputFieldActions?.add?.( 'responsive-block-editor-addons/form-input' ) }
								>
									{ __( 'Add Input Field', 'responsive-block-editor-addons' ) }
								</Button>

            </PanelBody>
            <PanelBody
              title={__("Form Options", "responsive-block-editor-addons")}
              initialOpen={false}
            >

              <TextControl
                label={__("Email To", "responsive-block-editor-addons")}
                type="text"
                help={__("Default is site administrator.", "responsive-block-editor-addons")}
                placeholder={ __( "Default is to admin site", 'responsive-block-editor-addons' ) }
                value={formEmailTo}
                onChange={(value) => {
                  setAttributes({formEmailTo: value})
                }}
              />

              <hr className="responsive-block-editor-addons-editor__separator" />

              <TextControl
                label={__("Email Subject", "responsive-block-editor-addons")}
                type="text"
                help={__("Enter the title of the email.", "responsive-block-editor-addons")}
                placeholder={ __( "A new submission", 'responsive-block-editor-addons' ) }
                value={formEmailSubject}
                onChange={(value) => {
                  setAttributes({formEmailSubject: value})
                }}
              />

            </PanelBody>
            <PanelBody
              title={__("Submit Messages", "responsive-block-editor-addons")}
              initialOpen={false}
            >

              <TextareaControl
								label={ __( "Success Message", "responsive-block-editor-addons" ) }
								placeholder={ __( "Success", "responsive-block-editor-addons" ) }
								value={ formSuccessMessage }
								onChange={ (value) => setAttributes({ formSuccessMessage: value }) }
								help={ __( "Show this message after the form was successfully submitted.", "responsive-block-editor-addons" ) }
							/>

              <TextareaControl
								label={ __( "Error Message", "responsive-block-editor-addons" ) }
								placeholder={ __( "Error. Please try again", "responsive-block-editor-addons" ) }
								value={ formErrorMessage }
								onChange={ (value) => setAttributes({ formErrorMessage: value }) }
								help={ __( "This message will be displayed when there is a problem with the server.", "responsive-block-editor-addons" ) }
							/>

            </PanelBody>
            </>}
          </InspectorTab>
          <InspectorTab key={"style"}>
          {isFormVariantSelected && <>
          
            <PanelBody
              title={__("Labels", "responsive-block-editor-addons")}
              initialOpen={false}
            >

              <FontSizePicker
                fontSizes={defaultFontSizes}
                value={ formLabelSize }
                onChange={ ( value ) => {setAttributes({ formLabelSize: value })} }
                units={[{ value: 'px', label: 'px', default: 16 }]}
                __nextHasNoMarginBottom
              />

              <RangeControl
                label={ __( "Spacing", "responsive-block-editor-addons" ) }
                value={formLabelInputGap}
                onChange={ value => setAttributes({ formLabelInputGap: value }) }
                allowReset
                step={ 0.1 }
                min={ 0 }
                max={ 50 }
                initialPosition={ 10 }
              />

            </PanelBody>

            <PanelBody
              title={__("Input Fields", "responsive-block-editor-addons")}
              initialOpen={false}
            >

              <FontSizePicker
                fontSizes={defaultFontSizes}
                value={ formInputSize }
                onChange={ ( value ) => {setAttributes({ formInputSize: value })} }
                units={[{ value: 'px', label: 'px', default: 16 }]}
                __nextHasNoMarginBottom
              />

              <RangeControl
                label={ __( "Field Spacing", "responsive-block-editor-addons" ) }
                value={formFieldInputGap}
                onChange={ value => setAttributes({ formFieldInputGap: value }) }
                allowReset
                step={ 0.1 }
                min={ 0 }
                max={ 50 }
                initialPosition={ 16 }
              />

              <ResponsiveSpacingControl
                title={__("Input Padding Top", "responsive-block-editor-addons")}
                attrNameTemplate="inputFieldPaddingTop%s"
                values={{
                  desktop: inputFieldPaddingTop,
                  tablet: inputFieldPaddingTopTablet,
                  mobile: inputFieldPaddingTopMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />

              <ResponsiveSpacingControl
                title={__("Input Padding Bottom", "responsive-block-editor-addons")}
                attrNameTemplate="inputFieldPaddingBottom%s"
                values={{
                  desktop: inputFieldPaddingBottom,
                  tablet: inputFieldPaddingBottomTablet,
                  mobile: inputFieldPaddingBottomMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />

              <ResponsiveSpacingControl
                title={__("Input Padding Left", "responsive-block-editor-addons")}
                attrNameTemplate="inputFieldPaddingLeft%s"
                values={{
                  desktop: inputFieldPaddingLeft,
                  tablet: inputFieldPaddingLeftTablet,
                  mobile: inputFieldPaddingLeftMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />

              <ResponsiveSpacingControl
                title={__("Input Padding Right", "responsive-block-editor-addons")}
                attrNameTemplate="inputFieldPaddingRight%s"
                values={{
                  desktop: inputFieldPaddingRight,
                  tablet: inputFieldPaddingRightTablet,
                  mobile: inputFieldPaddingRightMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />

            </PanelBody>

            <PanelBody
              title={__("Button", "responsive-block-editor-addons")}
              initialOpen={false}
            >

              <PanelColorSettings
                title={__("Normal Color", "responsive-block-editor-addons")}
                initialOpen={false}
                colorSettings={[
                  {
                    value: formButtonLabelColor,
                    onChange: (value) => setAttributes({ formButtonLabelColor: value }),
                    label: __("Normal Button Color", "responsive-block-editor-addons"),
                  },
                  {
                    value: formButtonLabelBGColor,
                    onChange: (value) => setAttributes({ formButtonLabelBGColor: value }),
                    label: __("Normal Button Background color", "responsive-block-editor-addons"),
                  },
                ]}
              ></PanelColorSettings>

              <PanelColorSettings
                title={__("Hover Color", "responsive-block-editor-addons")}
                initialOpen={false}
                colorSettings={[
                  {
                    value: formButtonLabelHoverColor,
                    onChange: (value) => setAttributes({ formButtonLabelHoverColor: value }),
                    label: __("Hover Button Color", "responsive-block-editor-addons"),
                  },
                  {
                    value: formButtonLabelHoverBGColor,
                    onChange: (value) => setAttributes({ formButtonLabelHoverBGColor: value }),
                    label: __("Hover Button Background color", "responsive-block-editor-addons"),
                  },
                ]}
              ></PanelColorSettings>

              <ResponsiveSpacingControl
                title={__("Button Padding Top", "responsive-block-editor-addons")}
                attrNameTemplate="formButtonPaddingTop%s"
                values={{
                  desktop: formButtonPaddingTop,
                  tablet: formButtonPaddingTopTablet,
                  mobile: formButtonPaddingTopMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />

              <ResponsiveSpacingControl
                title={__("Button Padding Bottom", "responsive-block-editor-addons")}
                attrNameTemplate="formButtonPaddingBottom%s"
                values={{
                  desktop: formButtonPaddingBottom,
                  tablet: formButtonPaddingBottomTablet,
                  mobile: formButtonPaddingBottomMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />

              <ResponsiveSpacingControl
                title={__("Button Padding Left", "responsive-block-editor-addons")}
                attrNameTemplate="formButtonPaddingLeft%s"
                values={{
                  desktop: formButtonPaddingLeft,
                  tablet: formButtonPaddingLeftTablet,
                  mobile: formButtonPaddingLeftMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />

              <ResponsiveSpacingControl
                title={__("Button Padding Right", "responsive-block-editor-addons")}
                attrNameTemplate="formButtonPaddingRight%s"
                values={{
                  desktop: formButtonPaddingRight,
                  tablet: formButtonPaddingRightTablet,
                  mobile: formButtonPaddingRightMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />

              <TabPanel
                className=" responsive-size-type-field-tabs  responsive-size-type-field__common-tabs  responsive-inline-margin"
                activeClass="active-tab"
                tabs={[
                  {
                    name: "desktop",
                    title: <Dashicon icon="desktop" />,
                    className:
                      " responsive-desktop-tab  responsive-responsive-tabs",
                  },
                  {
                    name: "tablet",
                    title: <Dashicon icon="tablet" />,
                    className:
                      " responsive-tablet-tab  responsive-responsive-tabs",
                  },
                  {
                    name: "mobile",
                    title: <Dashicon icon="smartphone" />,
                    className:
                      " responsive-mobile-tab  responsive-responsive-tabs",
                  },
                ]}
              >
                {(tab) => {
                  let tabout;

                  if ("mobile" === tab.name) {
                    tabout = (
                      <>
                        <p>{__("Button Alignment (Mobile)", "responsive-block-editor-addons")}</p>
                        <AlignmentToolbar
                          value={formButtonAlignMobile}
                          onChange={(value) =>
                            setAttributes({
                              formButtonAlignMobile: value,
                            })
                          }
                          controls={["left", "center", "right"]}
                          isCollapsed={false}
                        />
                      </>
                    );
                  } else if ("tablet" === tab.name) {
                    tabout = (
                      <>
                        <p>{__("Button Alignment (Tablet)", "responsive-block-editor-addons")}</p>
                        <AlignmentToolbar
                          value={formButtonAlignTablet}
                          onChange={(value) =>
                            setAttributes({
                              formButtonAlignTablet: value,
                            })
                          }
                          controls={["left", "center", "right"]}
                          isCollapsed={false}
                        />
                      </>
                    );
                  } else {
                    tabout = (
                      <>
                        <p>
                          {__("Button Alignment", "responsive-block-editor-addons")}
                        </p>
                        <AlignmentToolbar
                          value={formButtonAlign}
                          onChange={(value) =>
                            setAttributes({
                              formButtonAlign: value,
                            })
                          }
                          controls={["left", "center", "right"]}
                          isCollapsed={false}
                        />
                      </>
                    );
                  }

                  return <div>{tabout}</div>;
                }}
              </TabPanel>

            </PanelBody>

            <PanelBody
              title={__("Colors", "responsive-block-editor-addons")}
              initialOpen={false}
            >

              <PanelColorSettings
                title={__("Colors", "responsive-block-editor-addons")}
                initialOpen={false}
                colorSettings={[
                  {
                    value: formLabelColor,
                    onChange: (value) => setAttributes({ formLabelColor: value }),
                    label: __("Label", "responsive-block-editor-addons"),
                  },
                  {
                    value: formInputTextColor,
                    onChange: (value) => setAttributes({ formInputTextColor: value }),
                    label: __("Input Text", "responsive-block-editor-addons"),
                  },
                  {
                    value: formInputBGColor,
                    onChange: (value) => setAttributes({ formInputBGColor: value }),
                    label: __("Input Background", "responsive-block-editor-addons"),
                  },
                  {
                    value: formBorderColor,
                    onChange: (value) => setAttributes({ formBorderColor: value }),
                    label: __("Border", "responsive-block-editor-addons"),
                  },
                  {
                    value: formHelperLabelColor,
                    onChange: (value) => setAttributes({ formHelperLabelColor: value }),
                    label: __("Helper Label", "responsive-block-editor-addons"),
                  },
                  {
                    value: formRequiredLabelColor,
                    onChange: (value) => setAttributes({ formRequiredLabelColor: value }),
                    label: __("Required Label", "responsive-block-editor-addons"),
                  },
                  {
                    value: formSuccessMessageColor,
                    onChange: (value) => setAttributes({ formSuccessMessageColor: value }),
                    label: __("Success Message", "responsive-block-editor-addons"),
                  },
                  {
                    value: formErrorMessageColor,
                    onChange: (value) => setAttributes({ formErrorMessageColor: value }),
                    label: __("Error Message", "responsive-block-editor-addons"),
                  },
                ]}
              ></PanelColorSettings>

            </PanelBody>

            <PanelBody
              title={__("Border", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <div className="responsive-block-editor-addons-form-border-radius-control">
                <BoxControl
                  label={__("Border Radius", "responsive-block-editor-addons")}
                  values={formBorderRadius}
                  units={[{ value: 'px', label: 'px', default: 4 }]}
                  onChange={ ( value ) => {setAttributes({ formBorderRadius: value }) } }
                />
              </div>

              <BoxControl
                label={__("Border Radius", "responsive-block-editor-addons")}
                values={formBorderWidth}
                units={[{ value: 'px', label: 'px', default: 16 }]}
                onChange={ ( value ) => {setAttributes({ formBorderWidth: value })} }
              />

            </PanelBody>

            <PanelBody
              title={__("Help and Submit Messages", "responsive-block-editor-addons")}
              initialOpen={false}
            >

              <Text variant="title.small" as="h3">{__( 'Helper Text', 'responsive-block-editor-addons' )}</Text>
              <FontSizePicker
                fontSizes={defaultFontSizes}
                value={ formHelperTextSize }
                onChange={ ( value ) => {setAttributes({ formHelperTextSize: value })} }
                units={[{ value: 'px', label: 'px', default: 16 }]}
                __nextHasNoMarginBottom
              />

              <Text variant="title.small" as="h3">{__( 'Success/Error Message', 'responsive-block-editor-addons' )}</Text>
              <FontSizePicker
                fontSizes={defaultFontSizes}
                value={ formsSuccessErrorMessageSize }
                onChange={ ( value ) => {setAttributes({ formsSuccessErrorMessageSize: value })} }
                units={[{ value: 'px', label: 'px', default: 16 }]}
                __nextHasNoMarginBottom
              />

            </PanelBody>

          </>}
          </InspectorTab>
          <InspectorTab key={"advance"}></InspectorTab>
        </InspectorTabs>
      </InspectorControls>
    );
  }
}
