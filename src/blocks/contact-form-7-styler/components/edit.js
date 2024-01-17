/**
 * Internal dependencies
 */
import classnames from "classnames";
import Inspector from "./inspector";
import { loadGoogleFont } from "../../../utils/font";
import EditorStyles from "./editor-styles";
import apiFetch from '@wordpress/api-fetch';
import { Placeholder, Spinner } from '@wordpress/components';



const {
  PanelBody,
  ComboboxControl,
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
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { RichText, AlignmentToolbar, BlockControls } = wp.editor;
export default class Edit extends Component {
  constructor() {
    super(...arguments);
    this.onSelectForm = this.onSelectForm.bind(this);
  }
  componentDidUpdate(prevProps, prevState) {
    const { formId, isHtml, formJson } = this.props.attributes;
    var element = document.getElementById(
      "responsive-block-editor-addons-contact-form-7-styler-style-" +
      this.props.clientId
    );

    if (null !== element && undefined !== element) {
      element.innerHTML = EditorStyles(this.props);
    }

    this.onSelectForm(formId);
  }

  componentDidMount() {
    // Pushing Style tag for this block css.
    const $style = document.createElement("style");
    $style.setAttribute(
      "id",
      "responsive-block-editor-addons-contact-form-7-styler-style-" +
      this.props.clientId
    );
    document.head.appendChild($style);
    // Assigning block_id in the attribute.
    this.props.setAttributes({ block_id: this.props.clientId });
    this.props.setAttributes({ classMigrate: true });
  }

  onSelectForm(id) {
   
    const { setAttributes } = this.props;
    const { formId, isHtml, formJson } = this.props.attributes;

    if (!id) {
      setAttributes({ isHtml: false });
      setAttributes({ formId: null });
      return;
    }

    setAttributes({ isHtml: true });
    setAttributes({ formId: id });

    let jsonData = '';

    const formData = new window.FormData();

    formData.append('action', 'responsive_block_editor_cf7_shortcode');
    formData.append(
      'nonce',
      responsive_globals.responsive_block_editor_ajax_nonce
    );
    formData.append('formId', id);

    apiFetch({
      url: responsive_globals.ajax_url,
      method: 'POST',
      body: formData,
    }).then((data) => {
      setAttributes({ isHtml: true });
      setAttributes({ formJson: data.data.html });
      jsonData = data;
    });
  }

  componentWillMount() {
    const { formId, isHtml, formJson } = this.props.attributes;

    this.onSelectForm(formId);

  }

  render() {
    // Setup the attributes
    const {
      attributes: {
        formTitle,
        formDescription,
        formTitleFontFamily,
        formDescriptionFontFamily,
        formTitleTag,
        labelFontFamily,
        inputFontFamily,
        submitButtonFontFamily,
        formAlignment,
        headingAlignment,
        showFormTitle,
        showFormDescription,
        block_id,
        //  html,
        formId,
        align,
        isHtml,
        formJson
      },
      setAttributes,
      mergeBlocks,
      insertBlocksAfter,
      onReplace,
    } = this.props;

    return [
      <style id={`responsive-block-editor-addons-contact-form-7-styler-style-${this.props.clientId}-inner`}>{EditorStyles(this.props)}</style>,
      <BlockControls key="controls">
        <AlignmentToolbar
          value={formAlignment}
          onChange={(value) => setAttributes({ formAlignment: value })}
        />
      </BlockControls>,
      // Show the block controls on focus
      <Inspector key="inspector" {...{ setAttributes, ...this.props }} />,
      <div key={`contact-form-${block_id}`} className={classnames(
        this.props.className,
        "responsive-block-editor-addons-block-contact-form-7-styler",
        `block-${block_id}`
      )}>
        {(parseInt(formId) === -1) ? (
          <Placeholder
            label={__("Select the Form", "responsive-block-editor-addons")}
          >
            <SelectControl
              label={__("Select the Form", "responsive-block-editor-addons")}
              value={formId}
              onChange={(value) => this.onSelectForm(value)}
              options={responsive_globals.cf7_forms}
            />
          </Placeholder>

        ) : (
          <Fragment key={`contact-form-fragment-${block_id}`} >

            <div className="form-container" >

              <div className="form">

                {formTitleFontFamily && loadGoogleFont(formTitleFontFamily)}
                {showFormTitle && (
                  <RichText
                    tagName={formTitleTag}
                    placeholder={__("Form Title", "responsive-block-editor-addons")}
                    value={formTitle}
                    className="responsive-form-title-text"
                    multiline={false}
                    onChange={(value) => {
                      setAttributes({ formTitle: value });
                    }}
                    onMerge={mergeBlocks}
                    unstableOnSplit={
                      insertBlocksAfter
                        ? (before, after, ...blocks) => {
                          setAttributes({ content: before });
                          insertBlocksAfter([
                            ...blocks,
                            createBlock("core/paragraph", { content: after }),
                          ]);
                        }
                        : undefined
                    }
                    onRemove={() => onReplace([])}
                  />
                )}

                {formDescriptionFontFamily && loadGoogleFont(formDescriptionFontFamily)}
                {showFormDescription && (
                  <RichText
                    tagName="p"
                    placeholder={__("Form Description", "responsive-block-editor-addons")}
                    value={formDescription}
                    className="responsive-form-desc-text"
                    onChange={(value) => setAttributes({ formDescription: value })}
                    onMerge={mergeBlocks}
                    unstableOnSplit={this.splitBlock}
                    onRemove={() => onReplace([])}
                  />
                )}

                {inputFontFamily && loadGoogleFont(inputFontFamily)}
                {labelFontFamily && loadGoogleFont(labelFontFamily)}
                {submitButtonFontFamily && loadGoogleFont(submitButtonFontFamily)}
                <div dangerouslySetInnerHTML={{ __html: formJson }} />
              </div>
            </div>

          </Fragment>
        )}

      </div>
    ];
  }
}
