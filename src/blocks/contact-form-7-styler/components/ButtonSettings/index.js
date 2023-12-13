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
              {this.props.showButtonSpacing === false ? false : true && (
                <ButtonSpacingControl {...this.props}/>
              )}
              <ButtonBorderControl {...this.props}/>
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
