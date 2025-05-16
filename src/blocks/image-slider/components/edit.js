/**
 * External dependencies
 */
import classnames from "classnames";
import filter from "lodash/filter";
import Flickity from "react-flickity-component";
import EditorStyles from "./editor-styles";
import { withSelect } from "@wordpress/data";

/**
 * Internal dependencies
 */
import Inspector from "./inspector";
import GalleryImage from "../../../utils/components/block-gallery/gallery-image";
import GalleryPlaceholder from "../../../utils/components/block-gallery/gallery-placeholder";
import { GalleryClasses } from "../../../utils/components/block-gallery/shared";

/**
 * WordPress dependencies
 */
import { __, sprintf } from "@wordpress/i18n";
import { Component, Fragment } from "@wordpress/element";
import { compose } from "@wordpress/compose";
import { withNotices, ResizableBox } from "@wordpress/components";
import { RichText } from "@wordpress/block-editor";
import Style from "style-it";
import { hexToRgba } from "../../../utils/index.js";

class GalleryCarouselEdit extends Component {
  constructor() {
    super(...arguments);

    this.onSelectImage = this.onSelectImage.bind(this);
    this.onRemoveImage = this.onRemoveImage.bind(this);
    this.setImageAttributes = this.setImageAttributes.bind(this);
    this.onFocusCaption = this.onFocusCaption.bind(this);
    this.onItemClick = this.onItemClick.bind(this);

    this.state = {
      selectedImage: null,
      captionFocused: false,
    };
  }

  componentDidMount() {
    this.props.setAttributes({
      shadow: undefined,
    });

    this.props.setAttributes({ block_id: this.props.clientId });
    this.props.setAttributes({ classMigrate: true });

    const $style = document.createElement("style");
    $style.setAttribute(
      "id",
      "responsive-block-editor-addons-image-slider-style-" + this.props.clientId
    );
    document.head.appendChild($style);
  }

  componentDidUpdate(prevProps) {
    var element = document.getElementById(
      "responsive-block-editor-addons-image-slider-style-" + this.props.clientId
    );

    if (null !== element && undefined !== element) {
      element.innerHTML = EditorStyles(this.props);
    }
    if (!this.props.isSelected && prevProps.isSelected) {
      this.setState({
        selectedImage: null,
        captionSelected: false,
        captionFocused: false,
      });
    }

    if (
      !this.props.isSelected &&
      prevProps.isSelected &&
      this.state.captionFocused
    ) {
      this.setState({
        captionFocused: false,
      });
    }

    if (this.props.attributes.gutter <= 0) {
      this.props.setAttributes({
        radius: 0,
      });
    }

    if (
      this.props.attributes.gridSize === "xlrg" &&
      prevProps.attributes.align === undefined
    ) {
      this.props.setAttributes({
        gutter: 0,
        gutterMobile: 0,
        gutterTablet: 0,
      });
    }
  }

  onSelectImage(index) {
    return () => {
      if (this.state.selectedImage !== index) {
        this.setState({
          selectedImage: index,
          captionFocused: false,
        });
      }
    };
  }

  onRemoveImage(index) {
    return () => {
      const images = filter(
        this.props.attributes.images,
        (_img, i) => index !== i
      );
      this.setState({ selectedImage: null });
      this.props.setAttributes({
        images,
      });
    };
  }

  setImageAttributes(index, attributes) {
    const {
      attributes: { images },
      setAttributes,
    } = this.props;
    if (!images[index]) {
      return;
    }
    setAttributes({
      images: [
        ...images.slice(0, index),
        {
          ...images[index],
          ...attributes,
        },
        ...images.slice(index + 1),
      ],
    });
  }

  onFocusCaption() {
    if (!this.state.captionFocused) {
      this.setState({
        captionFocused: true,
      });
    }
  }

  onItemClick() {
    if (!this.props.isSelected) {
      this.props.onSelect();
    }

    if (this.state.captionFocused) {
      this.setState({
        captionFocused: false,
      });
    }
  }

  render() {
    const {
      attributes,
      className,
      isSelected,
      noticeUI,
      setAttributes,
      isInExample,
      clientId,
    } = this.props;

    const {
      block_id,
      align,
      gridSize,
      gutter,
      gutterMobile,
      gutterTablet,
      height,
      images,
      pageDots,
      prevNextButtons,
      primaryCaption,
      alignCells,
      thumbnails,
      responsiveHeight,
      lightbox,
      blockBorderWidth,
      blockBorderColor,
      blockBorderStyle,
      blockBorderRadius,
      iconColor,
      iconBackgroundRadius,
      iconBackgroundColor,
      counterId,
      iconBackgroundOpacity,
      width,
      customWidth,
      isSmallImage,
      // Assume these preview props exist in attributes:
      previewImage,
      previewTitle,
      previewDescription,
    } = attributes;

    // Show preview card if in example mode and previewImage is provided
    if (isInExample && previewImage) {
      console.log("Previewing in the example mode");
      return (
        <div
          className="rbea-template-preview"
          style={{
            border: "1px solid #ddd",
            borderRadius: "6px",
            padding: "12px",
            textAlign: "center",
            backgroundColor: "#fff",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
            alt={previewTitle || "Example Preview"}
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "200px",
              objectFit: "cover",
              borderRadius: "4px",
              marginBottom: "10px",
            }}
          />
          <h3 style={{ margin: 0, fontSize: "1.1em" }}>{previewTitle}</h3>
          <p style={{ margin: "5px 0 0", fontSize: "0.9em", color: "#666" }}>
            {previewDescription}
          </p>
        </div>
      );
    }

    const hasImages = !!images.length;

    const innerClasses = classnames(
      "block-id-" + counterId,
      "is-cropped",
      ...GalleryClasses(attributes),
      {
        [`align${align}`]: align,
        "has-horizontal-gutter": gutter > 0,
        "has-no-dots": !pageDots,
        "has-no-arrows": !prevNextButtons,
        "is-selected": isSelected,
        "has-no-thumbnails": !thumbnails,
        "has-lightbox": lightbox,
        "scale-down": isSmallImage,
      }
    );

    const flickityClasses = classnames(
      "has-carousel",
      `has-carousel-${gridSize}`,
      {
        "has-aligned-cells": alignCells,
        [`has-margin-bottom-${gutter}`]: thumbnails && gutter > 0,
        [`has-margin-bottom-mobile-${gutterMobile}`]:
          thumbnails && gutterMobile > 0,
        [`has-margin-bottom-tablet-${gutterTablet}`]:
          thumbnails && gutterTablet > 0,
      }
    );

    const navClasses = classnames("carousel-nav", {
      [`has-margin-top-${gutter}`]: gutter > 0,
      [`has-margin-top-mobile-${gutterMobile}`]: gutterMobile > 0,
      [`has-margin-top-tablet-${gutterTablet}`]: gutterTablet > 0,
      [`has-negative-margin-left-${gutter}`]: gutter > 0,
      [`has-negative-margin-left-mobile-${gutterMobile}`]: gutterMobile > 0,
      [`has-negative-margin-left-tablet-${gutterTablet}`]: gutterTablet > 0,
      [`has-negative-margin-right-${gutter}`]: gutter > 0,
      [`has-negative-margin-right-mobile-${gutterMobile}`]: gutterMobile > 0,
      [`has-negative-margin-right-tablet-${gutterTablet}`]: gutterTablet > 0,
    });

    const flickityOptions = {
      draggable: false,
      pageDots: true,
      prevNextButtons: true,
      wrapAround: true,
      autoPlay: false,
      cellAlign: alignCells ? "left" : "center",
      arrowShape: {
        x0: 10,
        x1: 60,
        y1: 50,
        x2: 65,
        y2: 45,
        x3: 20,
      },
      responsiveHeight,
      thumbnails,
    };

    const navOptions = {
      asNavFor: ".has-carousel",
      draggable: false,
      pageDots: true,
      prevNextButtons: false,
      wrapAround: true,
      autoPlay: false,
      thumbnails: false,
      cellAlign: "left",
    };

    const navStyles = {
      marginLeft: gutter > 0 && !responsiveHeight ? gutter + "px" : undefined,
      marginRight: gutter > 0 && !responsiveHeight ? gutter + "px" : undefined,
      borderWidth: blockBorderWidth,
      borderStyle: blockBorderStyle,
      borderColor: blockBorderColor,
      borderRadius: blockBorderRadius,
    };

    const navFigureClasses = classnames(
      "responsive-block-editor-addons--figure",
      {
        [`has-margin-left-${gutter}]: gutter > 0, [has-margin-left-mobile-${gutterMobile}]: gutterMobile > 0, [has-margin-left-tablet-${gutterTablet}`]:
          gutterTablet > 0,
      }
    );

    const renderCarouselImages = () =>
      images.map((img, i) => (
        <GalleryImage
          key={i}
          index={i}
          attributes={img}
          onRemoveImage={this.onRemoveImage(i)}
          onSelectImage={this.onSelectImage(i)}
          isSelected={this.state.selectedImage === i}
          setImageAttributes={this.setImageAttributes}
          onFocusCaption={this.onFocusCaption}
          isSelectedBlock={isSelected}
        />
      ));

    return (
      <Fragment>
        {noticeUI}
        <ResizableBox
          className={innerClasses}
          size={{
            width: width === "custom" ? customWidth : "100%",
            height: height ? height : undefined,
          }}
          enable={{ right: true }}
          onResizeStop={(event, direction, elt, delta) => {
            setAttributes({ customWidth: elt.style.width });
          }}
          minWidth={250}
          maxWidth={"100%"}
        >
          <div className={flickityClasses}>
            {!hasImages && (
              <GalleryPlaceholder
                onSelectImages={(imgs) => setAttributes({ images: imgs })}
              />
            )}
            {hasImages && (
              <Flickity options={flickityOptions} reloadOnUpdate={true} static>
                {renderCarouselImages()}
              </Flickity>
            )}
          </div>
        </ResizableBox>

        <Inspector {...{ attributes, setAttributes, isSelected }} />
      </Fragment>
    );
  }
}

// Inject isInExample based on clientId
const mapSelectToProps = (select, ownProps) => {
  const { clientId } = ownProps;
  // The example logic: clientId ends with '-example' means example mode
  return {
    isInExample: clientId && clientId.endsWith("-example"),
  };
};

export default compose(
  withSelect(mapSelectToProps),
  withNotices
)(GalleryCarouselEdit);
