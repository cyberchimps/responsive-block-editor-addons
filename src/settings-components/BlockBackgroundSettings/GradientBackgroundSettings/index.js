/**
 * Box-Shadow reusable component.
 *
 */
import GradientHoverBackgroundControl from './GradientHoverBackgroundSettings';
import RbeaColorControl from '../../../utils/components/rbea-color-control';
import RbeaRangeControl from '../../../utils/components/rbea-range-control';
import RbeaAngleRangeControl from '../../../utils/components/rbea-angle-range-control';
import { GradientPicker } from "@wordpress/components";
import { hexToRgba } from "../../../utils/index.js";

const { __ } = wp.i18n;

const { ColorPalette } = wp.blockEditor;

const { SelectControl, RangeControl, TabPanel } = wp.components;

// Extend component
const { Component, Fragment } = wp.element;

class GradientBackgroundControl extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
      const {
          attributes: {
              backgroundColor1,
              backgroundColor2,
              colorLocation1,
              colorLocation2,
              gradientDirection,
              opacity,
              gradient,
          },
          setAttributes,
      } = this.props;
    
    // Gradient options for WordPress GradientPicker (same as container)
    const gradientOptions = [
        {
        name: 'JShine',
        gradient:
            'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)',
        slug: 'jshine',
        },
        {
        name: 'Moonlit Asteroid',
        gradient:
            'linear-gradient(135deg,#0F2027 0%, #203A43 0%, #2c5364 100%)',
        slug: 'moonlit-asteroid',
        },
        {
        name: 'Rastafarie',
        gradient:
            'linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)',
        slug: 'rastafari',
        },
    ];

    // Convert old gradient attributes to WordPress gradient format if needed
    const getGradientValue = () => {
        // If gradient already exists (WordPress format), use it
        if (gradient) {
        return gradient;
        }
        
        // Otherwise, convert from old attributes to WordPress format
        if (backgroundColor1 || backgroundColor2) {
        const imgopacity = opacity ? opacity / 100 : 1;
        const color1 = hexToRgba(backgroundColor1 || "#fff", imgopacity);
        const color2 = hexToRgba(backgroundColor2 || "#fff", imgopacity);
        const location1 = colorLocation1 !== undefined ? colorLocation1 : 0;
        const location2 = colorLocation2 !== undefined ? colorLocation2 : 100;
        const direction = gradientDirection !== undefined ? gradientDirection : 90;
        
        return `linear-gradient(${direction}deg, ${color1} ${location1}%, ${color2} ${location2}%)`;
        }
        
        return undefined;
    };

    // Handle gradient change - save to new format
    const onGradientChange = (value) => {
        setAttributes({ gradient: value });
    };
    
    var gradientNormalOptions = (
    <Fragment>
        <GradientPicker
            value={getGradientValue()}
            onChange={onGradientChange}
            gradients={gradientOptions}
        />
    </Fragment>
    )

    var advancedControls;
      advancedControls = (
          <Fragment>
              <TabPanel
              className="responsive-block-editor-addons-inspect-tabs 
              responsive-block-editor-addons-inspect-tabs-col-2  
              responsive-block-editor-addons-color-inspect-tabs"
                activeClass="active-tab"
                initialTabName="normal" // Set the default active tab here
                tabs={[
                    {
                        name: "empty-1",
                        title: __("", "responsive-block-editor-addons"),
                        className: "responsive-block-editor-addons-empty-tab",
                    },
                    {
                        name: "normal",
                        title: __("Normal", "responsive-block-editor-addons"),
                        className: "responsive-block-editor-addons-normal-tab",
                    },
                    {
                        name: "empty-2",
                        title: __("", "responsive-block-editor-addons"),
                        className: "responsive-block-editor-addons-empty-tab-middle",
                    },
                    {
                        name: "hover",
                        title: __("Hover", "responsive-block-editor-addons"),
                        className: "responsive-block-editor-addons-hover-tab",
                    },
                    {
                        name: "empty-3",
                        title: __("", "responsive-block-editor-addons"),
                        className: "responsive-block-editor-addons-empty-tab",
                    },
                ]}
              >
                {(tabName) => {
                    let btn_color_tab;
                    if ("normal" === tabName.name) {
                    btn_color_tab =
                        gradientNormalOptions
                    } else if ("hover" === tabName.name) {
                    btn_color_tab = (
                        <Fragment>
                        <GradientHoverBackgroundControl
                            {...this.props}
                        />
                        </Fragment>
                    );
                    } else {
                      btn_color_tab = this.props.values.emptyColorControl;
                    }
                    return <div>{btn_color_tab}</div>;
                }}
                </TabPanel>
            </Fragment>
      );

    return (
      <div className="responsive-block-editor-addons-gradient-background-settings">
        { this.props.showHoverGradient ? advancedControls : gradientNormalOptions}
      </div>
    );
  }
}

export default GradientBackgroundControl;
