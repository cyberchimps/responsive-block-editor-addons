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
    const time = speed > 1 ? __("seconds", "responsive-block-editor-addons") : __("second", "responsive-block-editor-addons");

    return checked
      ? sprintf(
          /* translators: %1$d: Speed of the slider, %2$d: Time until the slide advances */
          __("Advancing after %1$d %2$s.", "responsive-block-editor-addons"),
          speed,
          time
        )
      : __("Automatically advance to the next slide.", "responsive-block-editor-addons");
  }

  getDraggableHelp(checked) {
    return checked
      ? __("Dragging and flicking enabled.", "responsive-block-editor-addons")
      : __("Toggle to enable drag functionality.", "responsive-block-editor-addons");
  }

  getArrowNavigationHelp(checked) {
    return checked
      ? __("Showing slide navigation arrows.", "responsive-block-editor-addons")
      : __("Toggle to show slide navigation arrows.", "responsive-block-editor-addons");
  }

  getDotNavigationHelp(checked) {
    return checked
      ? __("Showing dot navigation.", "responsive-block-editor-addons")
      : __("Toggle to show dot navigation.", "responsive-block-editor-addons");
  }

  getAlignCellsHelp(checked) {
    return checked
      ? __("Aligning slides to the left.", "responsive-block-editor-addons")
      : __("Aligning slides to the center.", "responsive-block-editor-addons");
  }
  getPauseAutoplayOnHoverHelp(checked) {
    return checked
      ? __("Pausing autoplay when hovering.", "responsive-block-editor-addons")
      : __("Toggle to pause autoplay when hovered.", "responsive-block-editor-addons");
  }

  getfreeScrollHelp(checked) {
    return checked
      ? __("Scrolling without fixed slides enabled.", "responsive-block-editor-addons")
      : __("Toggle to scroll without fixed slides.", "responsive-block-editor-addons");
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
        <PanelBody title={__("Slider settings", "responsive-block-editor-addons")} initialOpen={false}>
          <ToggleControl
            label={__("Autoplay", "responsive-block-editor-addons")}
            checked={!!autoPlay}
            onChange={() => setAttributes({ autoPlay: !autoPlay })}
            help={this.getAutoPlayHelp}
          />
          {autoPlay && (
            <Fragment>
              <SelectControl
                label={__("Transition speed", "responsive-block-editor-addons")}
                value={autoPlaySpeed}
                onChange={(value) => setAttributes({ autoPlaySpeed: value })}
                options={autoPlayOptions}
                className="components- responsive-block-editor-addons-gallery-inspector__autoplayspeed-select"
              />
              <ToggleControl
                label={__("Pause on hover", "responsive-block-editor-addons")}
                checked={pauseHover}
                onChange={() => setAttributes({ pauseHover: !pauseHover })}
                help={this.getPauseAutoplayOnHoverHelp}
              />
            </Fragment>
          )}
          <ToggleControl
            label={__("Draggable", "responsive-block-editor-addons")}
            checked={!!draggable}
            onChange={() => setAttributes({ draggable: !draggable })}
            help={this.getDraggableHelp}
          />
          {draggable && (
            <ToggleControl
              label={__("Free scroll", "responsive-block-editor-addons")}
              checked={!!freeScroll}
              onChange={() => setAttributes({ freeScroll: !freeScroll })}
              help={this.getfreeScrollHelp}
            />
          )}
          <ToggleControl
            label={__("Arrow navigation", "responsive-block-editor-addons")}
            checked={!!prevNextButtons}
            onChange={() =>
              setAttributes({ prevNextButtons: !prevNextButtons })
            }
            help={this.getArrowNavigationHelp}
          />
          <ToggleControl
            label={__("Dot navigation", "responsive-block-editor-addons")}
            checked={!!pageDots}
            onChange={() => setAttributes({ pageDots: !pageDots })}
            help={this.getDotNavigationHelp}
          />
          <ToggleControl
            label={__("Align cells", "responsive-block-editor-addons")}
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
