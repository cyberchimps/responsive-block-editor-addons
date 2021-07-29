/**
 * Internal dependencies
 */
import autoPlayOptions from "./autoplay-options";

/**
 * WordPress dependencies
 */
import { __, sprintf } from "@wordpress/i18n";
import { Component, Fragment } from "@wordpress/element";
import { PanelBody, ToggleControl, SelectControl } from "@wordpress/components";

class SliderPanel extends Component {
  constructor() {
    super(...arguments);
    this.getAutoPlayHelp = this.getAutoPlayHelp.bind(this);
  }

  getAutoPlayHelp(checked) {
    // Retrieve the height value and divide it to display full seconds.
    const speed = this.props.attributes.autoPlaySpeed / 1000;
    const time = speed > 1 ? __("seconds") : __("second");

    return checked
      ? sprintf(
          /* translators: %1$d: Speed of the slider, %2$d: Time until the slide advances */
          __("Advancing after %1$d %2$s."),
          speed,
          time
        )
      : __("Automatically advance to the next slide.");
  }

  getDraggableHelp(checked) {
    return checked
      ? __("Dragging and flicking enabled.")
      : __("Toggle to enable drag functionality.");
  }

  getArrowNavigationHelp(checked) {
    return checked
      ? __("Showing slide navigation arrows.")
      : __("Toggle to show slide navigation arrows.");
  }

  getDotNavigationHelp(checked) {
    return checked
      ? __("Showing dot navigation.")
      : __("Toggle to show dot navigation.");
  }

  getAlignCellsHelp(checked) {
    return checked
      ? __("Aligning slides to the left.")
      : __("Aligning slides to the center.");
  }
  getPauseAutoplayOnHoverHelp(checked) {
    return checked
      ? __("Pausing autoplay when hovering.")
      : __("Toggle to pause autoplay when hovered.");
  }

  getfreeScrollHelp(checked) {
    return checked
      ? __("Scrolling without fixed slides enabled.")
      : __("Toggle to scroll without fixed slides.");
  }

  render() {
    const { attributes, setAttributes } = this.props;

    const {
      autoPlay,
      autoPlaySpeed,
      draggable,
      freeScroll,
      pageDots,
      prevNextButtons,
      alignCells,
      pauseHover,
    } = attributes;

    return (
      <Fragment>
        <PanelBody title={__("Slider settings")} initialOpen={false}>
          <ToggleControl
            label={__("Autoplay")}
            checked={!!autoPlay}
            onChange={() => setAttributes({ autoPlay: !autoPlay })}
            help={this.getAutoPlayHelp}
          />
          {autoPlay && (
            <Fragment>
              <SelectControl
                label={__("Transition speed")}
                value={autoPlaySpeed}
                onChange={(value) => setAttributes({ autoPlaySpeed: value })}
                options={autoPlayOptions}
                className="components- responsive-block-editor-addons-gallery-inspector__autoplayspeed-select"
              />
              <ToggleControl
                label={__("Pause on hover")}
                checked={pauseHover}
                onChange={() => setAttributes({ pauseHover: !pauseHover })}
                help={this.getPauseAutoplayOnHoverHelp}
              />
            </Fragment>
          )}
          <ToggleControl
            label={__("Draggable")}
            checked={!!draggable}
            onChange={() => setAttributes({ draggable: !draggable })}
            help={this.getDraggableHelp}
          />
          {draggable && (
            <ToggleControl
              label={__("Free scroll")}
              checked={!!freeScroll}
              onChange={() => setAttributes({ freeScroll: !freeScroll })}
              help={this.getfreeScrollHelp}
            />
          )}
          <ToggleControl
            label={__("Arrow navigation")}
            checked={!!prevNextButtons}
            onChange={() =>
              setAttributes({ prevNextButtons: !prevNextButtons })
            }
            help={this.getArrowNavigationHelp}
          />
          <ToggleControl
            label={__("Dot navigation")}
            checked={!!pageDots}
            onChange={() => setAttributes({ pageDots: !pageDots })}
            help={this.getDotNavigationHelp}
          />
          <ToggleControl
            label={__("Align cells")}
            checked={!!alignCells}
            onChange={() => setAttributes({ alignCells: !alignCells })}
            help={this.getAlignCellsHelp}
          />
        </PanelBody>
      </Fragment>
    );
  }
}

export default SliderPanel;
