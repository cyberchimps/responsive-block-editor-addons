/**
 * Inspector Controls
 */
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";
import ResponsivePaddingControl from "../../../settings-components/ResponsiveSpacingSettings/ResponsivePaddingControl";
import ResponsiveMarginControl from "../../../settings-components/ResponsiveSpacingSettings/ResponsiveMarginControl";

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

// Import block components
const { InspectorControls, PanelColorSettings } = wp.blockEditor;

// Import Inspector components
const {
  PanelBody,
  ToggleControl,
  TextareaControl,
  RangeControl,
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

  render() {
    // Setup the attributes
    const {
      attributes: {
        token,
        columns,
        columnsMobile,
        columnsTablet,
        instaPosts,
        numberOfItems,
        imagesGap,
        borderRadius,
        hasEqualImages,
        showCaptions,
        instaTopPadding,
        instaBottomPadding,
        instaRightPadding,
        instaLeftPadding,
        instaTopPaddingMobile,
        instaBottomPaddingMobile,
        instaRightPaddingMobile,
        instaLeftPaddingMobile,
        instaTopPaddingTablet,
        instaBottomPaddingTablet,
        instaRightPaddingTablet,
        instaLeftPaddingTablet,
        instaTopMargin,
        instaBottomMargin,
        instaRightMargin,
        instaLeftMargin,
        instaTopMarginMobile,
        instaBottomMarginMobile,
        instaRightMarginMobile,
        instaLeftMarginMobile,
        instaTopMarginTablet,
        instaBottomMarginTablet,
        instaRightMarginTablet,
        instaLeftMarginTablet,
        gridSize,
      },
      setAttributes,
    } = this.props;

    return (
      <InspectorControls key="inspector">
        <InspectorTabs>
          <InspectorTab key={"content"}>
            <PanelBody title={__("API Key", "responsive-block-editor-addons")}>
              <TextareaControl
                label={__("Access Token", "responsive-block-editor-addons")}
                value={token}
                onChange={(value) => {
                  setAttributes({ token: value });
                }}
              />
              <p>
                Note: This block requires you to obtain an Instagram Access
                Token to connect Instagram with WordPress. You will need to use
                your Instagram credentials to get access token.
              </p>
            </PanelBody>
            <PanelBody title={__("Settings", "responsive-block-editor-addons")} initialOpen={false}>
              <RangeControl
                label={__("Number Of Items", "responsive-block-editor-addons")}
                value={numberOfItems}
                onChange={(value) => {
                  setAttributes({ numberOfItems: value });
                }}
                min={1}
                max={20}
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
                      <Fragment>
                        <RangeControl
                          label={__("Columns Mobile", "responsive-block-editor-addons")}
                          value={columnsMobile}
                          onChange={(value) => {
                            setAttributes({ columnsMobile: value });
                          }}
                          min={1}
                          max={8}
                        />
                      </Fragment>
                    );
                  } else if ("tablet" === tab.name) {
                    tabout = (
                      <Fragment>
                        <RangeControl
                          label={__("Columns Tablet", "responsive-block-editor-addons")}
                          value={columnsTablet}
                          onChange={(value) => {
                            setAttributes({ columnsTablet: value });
                          }}
                          min={1}
                          max={8}
                        />
                      </Fragment>
                    );
                  } else {
                    tabout = (
                      <Fragment>
                        <RangeControl
                          label={__("Columns", "responsive-block-editor-addons")}
                          value={columns}
                          onChange={(value) => {
                            setAttributes({ columns: value });
                          }}
                          min={1}
                          max={8}
                        />
                      </Fragment>
                    );
                  }

                  return <div>{tabout}</div>;
                }}
              </TabPanel>

              <RangeControl
                label={__("Spacing", "responsive-block-editor-addons")}
                value={imagesGap}
                onChange={(value) => setAttributes({ imagesGap: value })}
                min={0}
                max={30}
              />

              <RangeControl
                label={__("Border Radius", "responsive-block-editor-addons")}
                value={borderRadius}
                onChange={(borderRadius) => setAttributes({ borderRadius })}
                min={0}
                max={50}
              />
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"style"}>
            <PanelBody
              title={__("Padding", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ResponsivePaddingControl
                attrNameTemplate="insta%s"
                values={{
                  desktopTop: instaTopPadding,
                  desktopBottom: instaBottomPadding,
                  desktopLeft: instaLeftPadding,
                  desktopRight: instaRightPadding,

                  tabletTop: instaTopPaddingTablet,
                  tabletBottom: instaBottomPaddingTablet,
                  tabletLeft: instaLeftPaddingTablet,
                  tabletRight: instaRightPaddingTablet,

                  mobileTop: instaTopPaddingMobile,
                  mobileBottom: instaBottomPaddingMobile,
                  mobileLeft: instaLeftPaddingMobile,
                  mobileRight: instaRightPaddingMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
            </PanelBody>

            <PanelBody
              title={__("Margin", "responsive-block-editor-addons")}
              initialOpen={false}
            >
              <ResponsiveMarginControl
                attrNameTemplate="insta%s"
                values={{
                  desktopTop: instaTopMargin,
                  desktopBottom: instaBottomMargin,
                  desktopLeft: instaLeftMargin,
                  desktopRight: instaRightMargin,

                  tabletTop: instaTopMarginTablet,
                  tabletBottom: instaBottomMarginTablet,
                  tabletLeft: instaLeftMarginTablet,
                  tabletRight: instaRightMarginTablet,

                  mobileTop: instaTopMarginMobile,
                  mobileBottom: instaBottomMarginMobile,
                  mobileLeft: instaLeftMarginMobile,
                  mobileRight: instaRightMarginMobile,
                }}
                setAttributes={setAttributes}
                {...this.props}
              />
            </PanelBody>
          </InspectorTab>
          <InspectorTab key={"advance"}></InspectorTab>
        </InspectorTabs>
      </InspectorControls>
    );
  }
}
