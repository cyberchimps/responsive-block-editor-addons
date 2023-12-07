/**
 * Internal dependencies
 */
import classnames from "classnames";
import Inspector from "./inspector";
import EditorStyles from "./editor-styles";
import icons from "./icons";
import { BLOCKS_TEMPLATE_PRESET1, BLOCKS_TEMPLATE_PRESET2, BLOCKS_TEMPLATE_CUSTOM } from "./variations";
/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { BlockControls, InnerBlocks } = wp.blockEditor;

const presets = [
  {
    name: 'preset1',
    title: 'Style 1',
    desc: '(Icon, Heading, Text, CTA)',
    icon: icons.preset1
  },
  {
    name: 'preset2',
    title: 'Style 2',
    desc: '(Heading, Text, Image, CTA)',
    icon: icons.preset2
  },
  {
    name: 'custom',
    title: 'Custom',
    desc: '',
    icon: icons.custom
  },
]

export default class Edit extends Component {
  constructor() {
    super(...arguments);

    this.state = {
      isModalOpen: false,
    };

  }
  componentDidUpdate(prevProps, prevState) {
    var element = document.getElementById(
      "responsive-block-editor-addons-popup-style-" +
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

    // Pushing Style tag for this block css.
    const $style = document.createElement("style");
    $style.setAttribute(
      "id",
      "responsive-block-editor-addons-popup-style-" +
      this.props.clientId
    );
    document.head.appendChild($style);
  }
  render() {
    // Setup the attributes
    const {
      attributes: {
        isPopupVariantSelected,
        popupVariant,
        popupInitiateBtn,
        block_id,
      },
      setAttributes,
    } = this.props;

    const VariantSelector = () => {
      return (
        <div class="rba-popup-selector">
          <div class="rba-popup-selector-head">
            {icons.logo}
            <p class="rba-popup-block-name">{__("Popup", "responsive-block-editor-addons")}</p>
          </div>
          <p class="rba-popup-block-text">{__("Select a Preset or create your own.", "responsive-block-editor-addons")}</p>
          <div class="rba-popup-preset-selection">
            {
              presets.map((current, index) => {
                return (
                  <div key={index} class="rba-popup-preset" onClick={() => setAttributes({ isPopupVariantSelected: true, popupVariant: current.name })}>{current.icon}
                    <p class="rba-popup-preset-title">{current.title}</p>
                    <p class="rba-popup-preset-desc">{current.desc}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      )
    }

    return [
      <BlockControls key="controls">
      </BlockControls>,
      // Show the block controls on focus
      <Inspector key={`inspector-${block_id}`} {...{ setAttributes, ...this.props }} />,

      // Show the block markup in the editor
      <div
        className={classnames(
          this.props.className,
          "responsive-block-editor-addons-block-popup",
          `block-${block_id}`
        )}
        key={`mainDiv-${block_id}`}
      >
        {!isPopupVariantSelected &&
          VariantSelector()
        }

        {isPopupVariantSelected &&
          <>
            <button onClick={() => this.setState({ isModalOpen: true })}>Hello World</button>
            <div className={`responsive-block-editor-addons-popup-modal-wrap ${this.state.isModalOpen ? 'responsive-block-editor-popup-modal-show' : 'responsive-block-editor-popup-modal-hide'}`}>
              <div role="presentation" className="responsive-block-editor-addons-popup-modal-wrap-overlay" onClick={() => this.setState({ isModalOpen: false })}></div>
              <div className="responsive-block-editor-addons-popup-modal-content">
                <div className="responsive-block-editor-addons-popup-modal-header"></div>
                <div className="responsive-block-editor-addons-popup-modal-body">
                  <div className="responsive-block-editor-addons-popup-innerblock">
                    <InnerBlocks
                      templateLock={false}
                      template={
                        popupVariant === 'preset1'
                          ? BLOCKS_TEMPLATE_PRESET1
                          : popupVariant === 'preset2'
                            ? BLOCKS_TEMPLATE_PRESET2
                            : BLOCKS_TEMPLATE_CUSTOM
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        }
      </div>,
    ];
  }
}
