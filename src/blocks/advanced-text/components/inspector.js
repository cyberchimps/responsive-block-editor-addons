import TypographyHelperControl from "../../../settings-components/Typography Settings";
import ResponsiveSpacingControl from "../../../settings-components/Responsive Spacing Settings";
import fontOptions from "../../../utils/googlefonts";
import { loadGoogleFont } from "../../../utils/font";
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";

const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

const {
  InspectorControls,
  PanelColorSettings,
  ColorPalette,
  AlignmentToolbar,
} = wp.editor;

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

export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
  }

  render() {
    const {
      attributes: {},
      setAttributes,
    } = this.props;

    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={"content"}></InspectorTab>
          <InspectorTab key={"style"}></InspectorTab>
          <InspectorTab key={"advance"}></InspectorTab>
        </InspectorTabs>
      </InspectorControls>
    );
  }
}
