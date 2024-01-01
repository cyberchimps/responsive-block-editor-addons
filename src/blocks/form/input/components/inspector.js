/**
 * Inspector Controls
 */

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
import InspectorTab from "../../../../components/InspectorTab";
import InspectorTabs from "../../../../components/InspectorTabs";

// Import block components
const { InspectorControls, PanelColorSettings, RichText } = wp.blockEditor

// Import Inspector components
const {
  PanelBody,
  TextControl,
  SelectControl,
  ToggleControl,
  Button,
} = wp.components;

import {
  __experimentalToggleGroupControl as ToggleGroupControl,
  __experimentalToggleGroupControlOption as ToggleGroupControlOption,
  __experimentalText as Text,
  CheckboxControl,
} from '@wordpress/components';

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
  }

  render() {
    // Setup the attributes
    const {
      attributes: {
        formInputFieldType,
        formInputFieldLabel,
        formInputHideLabel,
        formInputWidth,
        formInputPlaceholder,
        formInputHelpText,
        formInputRequired,
        formInputDefaultValue,
        formInputLabelColor,
        formInputInline,
      },
      setAttributes,
    } = this.props;

    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={"content"}>
            <PanelBody
              title={__("Field Settings", "responsive-block-editor-addons")}
              initialOpen={true}
            >
              <SelectControl
                label={__("Field Type", "responsive-block-editor-addons")}
                value={formInputFieldType}
                options={[
                  { value: "text", label: __("Text", "responsive-block-editor-addons") },
                  { value: "textarea", label: __("Text Area", "responsive-block-editor-addons") },
                  { value: "email", label: __("Email", "responsive-block-editor-addons") },
                  { value: "url", label: __("URL", "responsive-block-editor-addons") },
                  { value: "date", label: __("Date", "responsive-block-editor-addons") },
                  { value: "number", label: __("Number", "responsive-block-editor-addons") },
                  { value: "checkbox", label: __("Checkbox", "responsive-block-editor-addons") },
                ]}
                onChange={(value) => setAttributes({ formInputFieldType: value })}
              />

              <TextControl
                label={__("Field Label","responsive-block-editor-addons")}
                type="text"
                value={formInputFieldLabel}
                onChange={(value) => setAttributes( { formInputFieldLabel: value } ) }
              />

              <ToggleControl
                label={__("Hide Label", "responsive-block-editor-addons")}
                checked={formInputHideLabel}
                onChange={(value) => setAttributes({ formInputHideLabel: !formInputHideLabel }) }
              />

              {formInputFieldType === 'checkbox' && <>
              <Text variant="title.small" as="h3">{__("Options", "responsive-block-editor-addons")}</Text>
              <div className="responsive-block-editor-addons-checkbox-options">
                <div className="responsive-block-editor-addons-checkbox-option">
                  <CheckboxControl className="responsive-block-editor-addons-checkbox-options__checkbox" checked={ formInputHideLabel } onChange={ (value) => setAttributes({ formInputHideLabel: !formInputHideLabel }) }/>
                  <div className="responsive-block-editor-addons-checkbox-options__drag">
                    <span></span>
                  </div>
                  <RichText
                    placeholder={ __( 'Enter Option Label', 'responsive-block-editor-addons' ) }
                    className="responsive-block-editor-addons-checkbox-options__text"
                    value={ formInputFieldLabel }
                    onChange={ value => setAttributes({ formInputFieldLabel: value }) }
                    tagName="span"
                  />
                  <Button className="responsive-block-editor-addons-checkbox-options__button" icon="no-alt"></Button>
                </div>
              </div></>}

              {formInputFieldType !== 'checkbox' &&
              <ToggleGroupControl label="Width" value={formInputWidth} onChange={(value) => setAttributes({ formInputWidth: value }) } isBlock>
                <ToggleGroupControlOption value={100} label="100%" />
                <ToggleGroupControlOption value={75} label="75%" />
                <ToggleGroupControlOption value={66} label="66%" />
                <ToggleGroupControlOption value={50} label="50%" />
                <ToggleGroupControlOption value={33} label="33%" />
                <ToggleGroupControlOption value={25} label="25%" />
              </ToggleGroupControl>}

              {(formInputFieldType === 'text' || formInputFieldType === 'textarea' || formInputFieldType === 'email' || formInputFieldType === 'url' || formInputFieldType === 'number') &&
              <TextControl
                label={__("Placeholder", "responsive-block-editor-addons")}
                type="text"
                value={formInputPlaceholder}
                onChange={(value) => {
                  setAttributes({formInputPlaceholder: value})
                }}
              />}

              <TextControl
                label={__("Help Text", "responsive-block-editor-addons")}
                type="text"
                value={formInputHelpText}
                onChange={(value) => {
                  setAttributes({formInputHelpText: value})
                }}
              />

              {formInputFieldType === 'checkbox' && 
              <ToggleControl
                label="Inline List"
                checked={ formInputInline }
                onChange={ (value) =>  setAttributes({ formInputInline: !formInputInline })}
              />}

              <ToggleControl
                label="Required"
                help={__("If enabled, the input field must be filled out before submitting the form.", "responsive-block-editor-addons")}
                checked={ formInputRequired }
                onChange={ (value) =>  setAttributes({ formInputRequired: !formInputRequired })}
              />

              {(formInputFieldType === 'text' || formInputFieldType === 'textarea' || formInputFieldType === 'email' || formInputFieldType === 'url' || formInputFieldType === 'number') &&
              <TextControl
                label={__("Default Value", "responsive-block-editor-addons")}
                type="text"
                value={formInputDefaultValue}
                onChange={(value) => setAttributes({formInputDefaultValue: value})}
              />}

            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"style"}>
          <PanelColorSettings
            title={__("Color", "responsive-block-editor-addons")}
            initialOpen={false}
            colorSettings={[
              {
                value: formInputLabelColor,
                onChange: (value) => setAttributes({ formInputLabelColor: value }),
                label: __("Label color", "responsive-block-editor-addons"),
              },
            ]}
          ></PanelColorSettings>
          </InspectorTab>
          <InspectorTab key={"advance"}></InspectorTab>
        </InspectorTabs>
      </InspectorControls>
    );
  }
}
