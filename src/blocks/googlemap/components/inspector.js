/**
 * Inspector Controls
 */
import InspectorTab from "../../../components/InspectorTab";
import InspectorTabs from "../../../components/InspectorTabs";

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;

// Import block components
const { InspectorControls } = wp.blockEditor;

// Import Inspector components
const {
	PanelBody,
	RangeControl,
	BaseControl,
    TabPanel,
    Dashicon
} = wp.components;
import { ENTER } from '@wordpress/keycodes';


/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
	constructor(props) {
		super(...arguments);
		this.state = {
			address: props.attributes.address,
		};
        this.handleKeyDown = this.handleKeyDown.bind( this );

    }

    handleKeyDown( keyCode ) {
        if ( keyCode !== ENTER ) {
            return;
        }
	}

	render() {
		// Setup the attributes
		const {
			attributes: { zoom, height, heightMobile, heightTablet },
			setAttributes,
		} = this.props;

		return (
			<InspectorControls key="inspector">
				<InspectorTabs hasStyle={false}>
					<InspectorTab key={"content"}>
						<PanelBody title={__("Map settings", "responsive-block-editor-addons")}>
							<RangeControl
								label={__("Zoom", "responsive-block-editor-addons")}
								value={zoom}
								onChange={(value) =>
									this.props.setAttributes({
										zoom: value,
									})
								}
								min={10}
								max={17}
								step={1}
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
                label={__(
                    "Height in pixels",
                    "responsive-block-editor-addons"
            )}
                value={heightMobile}
                onChange={(value) =>
                setAttributes({
                    heightMobile: value,
                })
            }

                min={100}
                max={2000}
                step={10}
                />
                </Fragment>
            );
            } else if ("tablet" === tab.name) {
                tabout = (
                    <Fragment>
                    <RangeControl
                label={__(
                    "Height in pixels",
                    "responsive-block-editor-addons"
            )}
                value={heightTablet}
                onChange={(value) =>
                setAttributes({
                    heightTablet: value,
                })
            }

                min={100}
                max={2000}
                step={10}
                />
                </Fragment>
            );
            } else {
                tabout = (
                    <Fragment>
                    <RangeControl
                label={__("Height in pixels", "responsive-block-editor-addons")}
                min={100}
                max={2000}
                step={10}
                value={height}
                onChange={(value) =>
                setAttributes({
                    height: value,
                })
            }

                />
                </Fragment>
            );
            }

            return <div>{tabout}</div>;
        }}
    </TabPanel>
						</PanelBody>

					</InspectorTab>
					<InspectorTab key={"advance"}>
					</InspectorTab>
				</InspectorTabs>
			</InspectorControls>
		);
	}
}
