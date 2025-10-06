/**
 * Box-Shadow reusable component.
 *
 */
import ButtonBorderControl from "./BorderSettings";
import ButtonSpacingControl from "./SpacingSettings";
import ButtonColorControl from "./ColorSettings";
const { __ } = wp.i18n;

const { ColorPalette } = wp.blockEditor;

const { SelectControl, RangeControl, PanelBody, ToggleControl } = wp.components;

// Extend component
const { Component, Fragment } = wp.element;

class ButtonSettingsControl extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
      const {
          attributes: {
              buttonTarget
          },
          setAttributes,
      } = this.props;

    var advancedControls;
      advancedControls = (
          <Fragment>
              <ToggleControl
                  label={__("Open link in new tab", "responsive-block-editor-addons")}
                  checked={buttonTarget}
                  onChange={() => {
                      setAttributes({ buttonTarget: !buttonTarget });
                  }}
                  __nextHasNoMarginBottom
              />
              <hr className="responsive-block-editor-addons-editor__separator" />
              {this.props.showButtonSpacing === false ? false : true && (
                <ButtonSpacingControl {...this.props}/>
              )}
              <hr className="responsive-block-editor-addons-editor__separator" />
              <ButtonBorderControl {...this.props}/>
              <hr className="responsive-block-editor-addons-editor__separator" />
              <ButtonColorControl {...this.props}/>
          </Fragment>
      );

    return (
      <div className="responsive-block-editor-addons-block-border-settings">
        {advancedControls}
      </div>
    );
  }
}

export default ButtonSettingsControl;
