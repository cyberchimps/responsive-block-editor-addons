import classnames from "classnames";
import Inspector from "./inspector";
import EditorStyles from "./editor-styles";
import { loadGoogleFont } from "../../../utils/font";
import renderSVG from "../../../renderIcon";
import ReactDOMServer from "react-dom/server";

const { __ } = wp.i18n;
import { merge, isEqual, get, unescape, cloneDeep } from "lodash";
const { jQuery: $ } = window;
const { compose } = wp.compose;
const { Component, Fragment } = wp.element;
const { ToolbarGroup, ToolbarButton } = wp.components;
const { BlockControls, MediaPlaceholder, MediaUpload, MediaUploadCheck } =
  wp.blockEditor;
const { withSelect, withDispatch } = wp.data;

const ALLOWED_MEDIA = ["image"];

class Edit extends Component {
  constructor() {
    super(...arguments);

    this.handleCurrentHotspot = this.handleCurrentHotspot.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.getState = this.getState.bind(this);
    this.handleUpdateData = this.handleUpdateData.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    this.state = {
      currentStatus: false,
      currentHotspot: null,
      updateHotspot: false,
      activeHotspot: false,
      editModal: false,
    };
  }

  handleUpdateData(value, index) {
    const deepMap = (obj, cb) => {
      var out = {};

      Object.keys(obj).forEach(function (k) {
        var val;
        if (obj[k] !== null && typeof obj[k] === "object") {
          val = deepMap(obj[k], cb);
        } else {
          val = cb(obj[k], k);
        }

        out[k] = val;
      });

      return out;
    };

    value = deepMap(value, function (v, k) {
      if (typeof v == "undefined") {
        v = "";
      }
      return v;
    });

    const { attributes, setAttributes } = this.props;
    const { imagePoints } = attributes;

    const imagePointsParsed = imagePoints != "" ? JSON.parse(imagePoints) : [];

    const newItems = imagePointsParsed.map((item, thisIndex) => {
      if (index === thisIndex) {
        item = merge(item, value);
      }
      return item;
    });

    setAttributes({
      imagePoints: JSON.stringify(newItems),
    });
  }

  handleStateChange(param, value) {
    if (typeof param == "object") {
      this.setState(param);
    } else if (typeof param == "string") {
      this.setState({ [param]: value });
    }
  }

  getState(value) {
    return this.state[value];
  }

  getLocation(event, el, hotspotsize) {
    var x, y;
    var left = el.offset().left;
    var top = el.offset().top;
    var hotspot = hotspotsize ? hotspotsize : 0;

    x = ((event.pageX - left - hotspot / 2) / el.outerWidth()) * 100;
    y = ((event.pageY - top - hotspot / 2) / el.outerHeight()) * 100;

    return {
      x: parseFloat(x).toFixed(2) + "%",
      y: parseFloat(y).toFixed(2) + "%",
    };
  }

  initTooltips() {
    const { clientId } = this.props;
    const {
      imagePoints,
      tooltipTheme,
      tooltipArrow,
      tooltipAnimation,
    } = this.props.attributes;

    const imagePointsParsed = imagePoints != "" ? JSON.parse(imagePoints) : [];

    jQuery(".tippy-popper").remove();

    const thisBlock = $(`[data-block='${clientId}']`);
    const hotspots = $(
      `.responsive_block_addons___wrapper .responsive_block_addons___dot`,
      thisBlock
    );

    if (typeof tippy == "function") {
      $.each(hotspots, function (index, val) {
        let dot = jQuery(val),
          point_id = dot.data("point-id"),
          title = dot.find(`.responsive_block_addons___dot-title`).html(),
          content = unescape(imagePointsParsed[point_id].content),
          placement = imagePointsParsed[point_id].placement,
          width = imagePointsParsed[point_id].popUpWidth;

        if (title || content) {
          let tooltip = tippy(val, {
            maxWidth: parseInt(width, 10),
            theme: tooltipTheme,
            animation: tooltipAnimation,
            animateFill: false,
            interactive: true,
            trigger: "mouseenter",
            arrow: tooltipArrow,
            placement: placement,
            allowHTML: true,
            content: `<div class="responsive_block_addons___tooltip"><div class="responsive_block_addons___tooltip-title">${title}</div><div class="responsive_block_addons___tooltip-content">${content}</div></div>`,
          });
        }

        dot.find(`.responsive_block_addons___dot-description`).remove();
      });
    }
  }

  setDotSelection() {
    const { clientId } = this.props;
    const $thisBlock = $(`[data-block='${clientId}']`);
    const $imageDots = $(
      `.responsive_block_addons___wrapper .responsive_block_addons___dot`,
      $thisBlock
    );

    if ($imageDots.length) {
      $.each($imageDots, (index, dot) => {
        const { getState } = this;
        const pointIndex = $(dot).data("point-id");

        if (isEqual(getState("currentHotspot"), pointIndex)) {
          $(dot).addClass("is-selected");
        }
      });
    }
  }

  handleCurrentHotspot() {
    const { clientId } = this.props;
    const thisBlock = $(`[data-block='${clientId}']`);

    const { imagePoints } = this.props.attributes;

    const imagePointsParsed = imagePoints != "" ? JSON.parse(imagePoints) : [];
    const $imageDots = $(
      `.responsive_block_addons___wrapper .responsive_block_addons___dot`,
      thisBlock
    );

    const { getState } = this;
    const currentHotspot = getState("currentHotspot");

    return (
      $imageDots.hasClass("is-selected") &&
      imagePointsParsed.length &&
      !isEqual(currentHotspot, null)
    );
  }

  initiateHotspotSettings() {
    const { clientId } = this.props;
    const { hotspotSize } = this.props.attributes;

    const {
      handleCancel,
      getLocation,
      handleUpdateData,
      handleStateChange,
      getState,
    } = this;

    const thisBlock = $(`[data-block='${clientId}']`);

    const imageWrapper = $(`.responsive_block_addons___wrapper`, thisBlock);
    const $imageDots = $(
      `.responsive_block_addons___wrapper .responsive_block_addons___dot`,
      thisBlock
    );

    if (getState("activeHotspot") == true && getState("currentHotspot") != null) {
      $imageDots.removeClass("is-selected");
      imageWrapper
        .find(
          `.responsive_block_addons___dot[data-point-id="${getState(
            "currentHotspot"
          )}"]`
        )
        .addClass("is-selected");
      imageWrapper
        .find(
          `.responsive_block_addons___dot[data-point-id="${getState(
            "currentHotspot"
          )}"]`
        )
        .addClass("is-selected");

      handleStateChange({
        activeHotspot: false,
      });
    }

    $imageDots.off();
    imageWrapper.off();

    imageWrapper.on( 'contextmenu', function () {
      return false;
    });

    $imageDots.on( 'contextmenu', function () {
      return false;
    });

    $imageDots.on( 'click', (event) => {
      event.stopPropagation();

      const dot = event.currentTarget;
      if ($(dot).hasClass("is-selected")) {
        return;
      }

      const { selectBlock } = this.props;

      selectBlock(clientId);

      $imageDots.removeClass("is-selected");
      $(dot).addClass("is-selected");

      handleStateChange("currentHotspot", $(dot).data("point-id"));
    });

    $imageDots.on( 'mousedown', function (e) {
      if (e.button == 1) {
        e.preventDefault();
        handleStateChange("currentHotspot", jQuery(this).data("point-id"));
        handleStateChange({
          currentStatus: "edit",
          editModal: true,
        });
        return false;
      }
    });

    if (typeof imageWrapper.imagesLoaded === "function") {
      imageWrapper.imagesLoaded().done(function (instance) {
        $.each($imageDots, function (index, dot) {
          dot.oncontextmenu = function () {
            return false;
          };

          var draggable_dot = new Draggabilly(dot, {
            containment: imageWrapper,
          });

          draggable_dot.on("dragStart", function (event, pointer) {
            handleStateChange("currentHotspot", jQuery(dot).data("point-id"));

            $imageDots.removeClass("is-selected");
            jQuery(dot).addClass("is-selected");
            jQuery(".tippy-popper").remove();
          });

          draggable_dot.on("dragEnd", function (event, pointer) {
            var x_coords = parseFloat(
              (dot.offsetLeft / dot.parentNode.offsetWidth) * 100
            ).toFixed(2);
            var y_coords = parseFloat(
              (dot.offsetTop / dot.parentNode.offsetHeight) * 100
            ).toFixed(2);

            x_coords =
              x_coords < 0 ? 0 : (x_coords > 100 ? 100 : x_coords) + "%";
            y_coords =
              y_coords < 0 ? 0 : (y_coords > 100 ? 100 : y_coords) + "%";

            dot.style.left = x_coords;
            dot.style.top = y_coords;

            if (getState("currentHotspot") == null) {
              handleStateChange("currentHotspot", jQuery(dot).data("point-id"));
            }
            handleUpdateData(
              {
                position: {
                  x: x_coords,
                  y: y_coords,
                },
              },
              jQuery(dot).data("point-id")
            );
          });
        });
      });
    }

    $(document).on( 'keyup', function (e) {
      if (
        getState("currentHotspot") != null &&
        getState("currentStatus") == "drop" &&
        e.which == 27
      ) {
        handleStateChange({
          currentStatus: false,
          editModal: false,
        });

        handleCancel();
      }
    });

    imageWrapper.on( 'click', (event) => {
      const wrapper = event.target;

      $imageDots.removeClass("is-selected");

      if (getState("currentStatus") == "drop") {
        const coords = getLocation(event, $(wrapper), hotspotSize);

        const hotspot = this.generateHotspot(
          getState("currentHotspot"),
          coords.x,
          coords.y
        );

        $(wrapper).append(hotspot);

        handleUpdateData(
          {
            position: {
              x: coords.x,
              y: coords.y,
            },
          },
          getState("currentHotspot")
        );

        handleStateChange("editModal", true);
      } else {
        if (wrapper.className == `responsive_block_addons___image`) {
          handleStateChange("currentHotspot", null);
        }
      }
    });
  }

  generateHotspot(
    pointID = 0,
    coordx = 0,
    coordy = 0,
    title = "",
    link = "",
    newTab = false,
    override_icon = "",
    override_color = "",
    override_backgroundColor = ""
  ) {
    const {
      hotspotIcon,
      hotspotSize,
      hotspotPadding,
      hotspotColor,
      hotspotBackground,
      hotspotOpacity,
    } = this.props.attributes;

    let icon = override_icon ? override_icon : hotspotIcon,
      color = override_color ? override_color : hotspotColor,
      background = override_backgroundColor
        ? override_backgroundColor
        : hotspotBackground;

    let style = "";
    let dot_style = "";

    if (hotspotSize && hotspotSize != 16) {
      dot_style += "font-size: " + hotspotSize + "px;";
    }
    if (hotspotPadding && hotspotPadding != 6) {
      style += "padding: " + hotspotPadding + "px;";
    }
    if (color) {
      dot_style += "fill: " + color + ";";
    }
    if (background) {
      style += "background-color: " + background + ";";
    }
    if (hotspotOpacity && hotspotOpacity != 100) {
      style += "opacity: " + hotspotOpacity / 100 + ";";
    }

    let class_name = classnames(`responsive_block_addons___dot`);

    let link_HTML = "";
    if (link != "") {
      link_HTML =
        `<a href="${link}"` +
        (newTab ? ' target="_blank" rel="noopener noreferrer"' : "") +
        `>${title}</a>`;
    } else {
      link_HTML = title;
    }

    let hotspot =
      `<div data-point-id="${pointID}" class="${class_name}" style="left: ${coordx}; top: ${coordy};` +
      (style != "" ? style : "") +
      `">
			<div class="responsive_block_addons__dot-wrapper">
				<div` +
      (dot_style != "" ? ' style="' + dot_style + '"' : "") +
      ` class="responsive_block_addons__dot-content">${ReactDOMServer.renderToString(renderSVG(icon))}</div>
				<div class="responsive_block_addons__dot-description">
					<div class="responsive_block_addons___dot-title">${link_HTML}</div>
				</div>
			</div>
		</div>
		`;

    return hotspot;
  }

  initHotspot(pointID = 0, dotObj = false) {
    const { clientId } = this.props;

    const hotspot = this.generateHotspot(
      pointID,
      dotObj["position"].x,
      dotObj["position"].y,
      dotObj["title"],
      dotObj["link"],
      dotObj["newTab"],
      dotObj["icon"],
      dotObj["color"],
      dotObj["backgroundColor"]
    );

    const thisBlock = $(`[data-block='${clientId}']`);
    const imageWrapper = $(`.responsive_block_addons___wrapper`, thisBlock);

    imageWrapper.append(hotspot);
  }

  initHotspots(isUpdate = false) {
    const { clientId } = this.props;
    const { handleStateChange } = this;
    const { imagePoints } = this.props.attributes;

    const imagePointsParsed = imagePoints != "" ? JSON.parse(imagePoints) : [];

    const thisBlock = $(`[data-block='${clientId}']`);
    const imageDots = $(
      `.responsive_block_addons___wrapper .responsive_block_addons___dot`,
      thisBlock
    );

    imageDots.remove();

    if (imagePointsParsed.length) {
      $.each(imagePointsParsed, (index, item) => {
        this.initHotspot(index, item);
      });
    }

    if (isUpdate) {
      handleStateChange("updateHotspot", false);
    }

    this.setDotSelection();
    this.initiateHotspotSettings();
    this.initTooltips();
  }

  handleClone(pointID = 0) {
    const {
      attributes: { imagePoints },
      setAttributes,
    } = this.props;

    const imagePointsParsed = imagePoints != "" ? JSON.parse(imagePoints) : [];

    const cloned_imagePointsParsed = cloneDeep(imagePointsParsed);
    const current_dot = cloned_imagePointsParsed[pointID];

    var coord_x = parseInt(current_dot.position.x, 10) + 3;
    var coord_y = parseInt(current_dot.position.y, 10) + 3;

    coord_x = coord_x > 98 ? 98 : coord_x;
    coord_y = coord_y > 96 ? 96 : coord_y;

    current_dot.position.x = coord_x + "%";
    current_dot.position.y = coord_y + "%";

    const newPoints = imagePointsParsed;
    const handleStateChange = this.handleStateChange;

    newPoints.push(current_dot);

    setAttributes({
      imagePoints: JSON.stringify(newPoints),
    });

    handleStateChange({
      currentHotspot: newPoints.length == 1 ? 0 : newPoints.length - 1,
      activeHotspot: true,
      updateHotspot: true,
    });
  }

  handleAddHotspot() {
    const {
      attributes: { imagePoints },
      setAttributes,
    } = this.props;

    const imagePointsParsed = imagePoints != "" ? JSON.parse(imagePoints) : [];

    const newPoints = imagePointsParsed;
    const handleStateChange = this.handleStateChange;

    newPoints.push({
      link: "",
      icon: "",
      title: "",
      color: "",
      content: "",
      backgroundColor: "",

      newTab: false,
      popUpOpen: false,

      popUpWidth: 350,
      placement: "top",
      position: {
        x: 0,
        y: 0,
      },
    });

    setAttributes({
      imagePoints: JSON.stringify(newPoints),
    });

    handleStateChange(
      "currentHotspot",
      newPoints.length == 1 ? 0 : newPoints.length - 1
    );
  }

  handleDelete(pointID = 0) {
    const { handleStateChange } = this;
    const { imagePoints } = this.props.attributes;
    const { clientId, setAttributes } = this.props;

    const imagePointsParsed = imagePoints != "" ? JSON.parse(imagePoints) : [];

    const newItems = imagePointsParsed.filter((item, idx) => idx !== pointID);

    handleStateChange({
      currentHotspot: null,
      updateHotspot: true,
    });

    const $block = $(`#block-${clientId}`);
    const $imageDots = $block.find(
      `.responsive_block_addons___wrapper .responsive_block_addons___dot`
    );

    $imageDots.removeClass("is-selected");

    setAttributes({
      imagePoints: JSON.stringify(newItems),
    });
  }

  handleCancel() {
    const { setAttributes } = this.props;
    const { getState, handleStateChange } = this;
    const { imagePoints } = this.props.attributes;

    const imagePointsParsed = imagePoints != "" ? JSON.parse(imagePoints) : [];

    const newItems = imagePointsParsed.filter(
      (item, idx) => idx !== getState("currentHotspot")
    );

    setAttributes({
      imagePoints: JSON.stringify(newItems),
    });

    handleStateChange({
      currentHotspot: null,
      updateHotspot: true,
    });
  }

  render() {
    const { id, url, alt, block_id } = this.props.attributes;
    const { className, isSelected, setAttributes, clientId } = this.props;
    const {
      handleCancel,
      handleDelete,
      handleUpdateData,
      handleStateChange,
      getState,
      handleCurrentHotspot,
    } = this;

    const thisBlock = $(`[data-block='${clientId}']`);

    const toolbarControls = [
      {
        icon: "sticky",
        title: __("Add Hotspot", "responsive-block-editor-addons"),
        className: "image-hotspot-toolbar-icons",
        isDisabled: getState("currentHotspot") != null,
        isActive: getState("currentStatus") == "drop",
        onClick: () => {
          if (getState("currentStatus") != "drop") {
            this.handleAddHotspot();
            handleStateChange("currentStatus", "drop");
          }
        },
      },
      {
        icon: "edit",
        title: __("Edit", "responsive-block-editor-addons"),
        className: "image-hotspot-toolbar-icons",
        isDisabled:
          getState("currentHotspot") === null || getState("currentStatus") == "drop",
        isActive: getState("currentStatus") == "edit" && getState("editModal") == true,
        onClick: () => {
          handleStateChange({
            currentStatus: "edit",
            editModal: true,
          });
        },
      },
      {
        icon: "images-alt",
        title: __("Clone", "responsive-block-editor-addons"),
        className: "image-hotspot-toolbar-icons",
        isDisabled: getState("currentHotspot") === null,
        onClick: () => {
          this.handleClone(getState("currentHotspot"));
        },
      },
      {
        icon: "trash",
        title: __("Remove", "responsive-block-editor-addons"),
        className: "image-hotspot-toolbar-icons",
        isDisabled:
          getState("currentHotspot") === null || getState("currentStatus") == "drop",
        onClick: () => {
          handleDelete(getState("currentHotspot"));
        },
      },
    ];

    const changeImageSize = (media, imageSize) => {
      if (!media) {
        setAttributes({ url: undefined, id: undefined });
        return;
      }

      setAttributes({
        id: media.id,
        alt: media.alt,
        url:
          get(media, ["sizes", imageSize, "url"]) ||
          get(media, ["media_details", "sizes", imageSize, "source_url"]) ||
          media.url,
      });
    };

    const onSelectMedia = (media) => {
      const { imageSize } = this.props.attributes;

      if (!["full", "large", "medium", "thumbnail"].includes(imageSize)) {
        setAttributes({
          imageSize: attributes.imageSize.default,
        });
      }

      changeImageSize(media, imageSize);
    };

    const containerClasses = {
      className: classnames(
        className,
        {
          "is-selected": isSelected,
          [`responsive_block_addons_--dropPoint`]: getState("currentStatus") == "drop",
        },
        `responsive-block-editor-addons-block-image-hotspot`,
        `block-${block_id}`
      ),
    };

    const innerContainerClasses = classnames(`responsive_block_addons___wrapper`);

    const imageHTML = url ? (
      <img
        className={`responsive_block_addons___image`}
        src={url}
        alt={alt ? alt : ""}
      />
    ) : (
      ""
    );

		const controls = (
			<Fragment>
				{ ! url && (
					<MediaPlaceholder
						icon={'format-image'}
						className={'responsive_block_addons image-hotspot-toolbar-icons responsive_block_addons-hotspot-media-placeholder'}
						labels={{
							title: __('Image Hotspot', 'responsive-block-editor-addons'),
						}}
						onSelect={onSelectMedia}
						accept="image/*"
						allowedTypes={ALLOWED_MEDIA}
					/>
				)}
				<BlockControls>
					{ !! url && (
						<Fragment>
							<MediaUploadCheck>
								<ToolbarGroup>
									<MediaUpload
										onSelect={onSelectMedia}
										allowedTypes={ALLOWED_MEDIA}
										value={id}
										render={({open}) => (
											<ToolbarButton
												className="components-toolbar__control image-hotspot-toolbar-icons"
												label={__('Edit Media', 'responsive-block-editor-addons')}
												icon="format-image"
												onClick={open}
											/>
										)}
									/>
								</ToolbarGroup>
							</MediaUploadCheck>
						</Fragment>
					)}
				</BlockControls>
			</Fragment>
		);


    return (
      <Fragment>
        <style id={`responsive-block-editor-addons-image-hotspot-style-${this.props.clientId}-inner`}>{EditorStyles(this.props)}</style>
        <div {...containerClasses}>
          {controls}
          {!!url && (
            <Fragment>
              <BlockControls>
                <ToolbarGroup controls={toolbarControls} />
              </BlockControls>

              <Inspector
                {...{
                  setAttributes,
                  ...this.props,
                  ...{ handleCancel },
                  ...{ handleDelete },
                  ...{ handleUpdateData },
                  ...{ changeImageSize },
                  ...{ handleStateChange },
                  ...{ getState },
                  ...{ thisBlock },
                  ...{ onSelectMedia },
                  ...{ handleCurrentHotspot },
                }}
                key="inspector"
              />
            </Fragment>
          )}
          <div className={innerContainerClasses}>{imageHTML}</div>
        </div>
      </Fragment>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    var element = document.getElementById(
      "responsive-block-editor-addons-image-hotspot-style-" +
        this.props.clientId
    );

    if (null !== element && undefined !== element) {
      element.innerHTML = EditorStyles(this.props);
    }

    const { clientId } = this.props;
    const thisBlock = $(`[data-block='${clientId}']`);
    const $imageDots = $(
      `.responsive_block_addons___wrapper .responsive_block_addons___dot`,
      thisBlock
    );

    const getState = this.getState;
    const needRender =
      !isEqual(this.props.attributes, prevProps.attributes) &&
      isEqual(
        this.props.attributes.imagePoints,
        prevProps.attributes.imagePoints
      );

    if (prevProps.isSelected == true && this.props.isSelected == false) {
      $imageDots.removeClass("is-selected");
    }

    $(`.responsive_block_addons___modal-delete`).on( 'contextmenu', function () {
      return false;
    });
    $(`.components-modal__screen-overlay`).on( 'contextmenu', function () {
      return false;
    });

    if (needRender || getState("updateHotspot") == true) {
      this.initHotspots(true);
    }
  }

  componentDidMount() {
    this.props.setAttributes({ block_id: this.props.clientId });
    this.props.setAttributes({ classMigrate: true });

    const $style = document.createElement("style");
    $style.setAttribute(
      "id",
      "responsive-block-editor-addons-image-hotspot-style-" +
        this.props.clientId
    );

    document.head.appendChild($style);
    this.initHotspots(false);
  }
}

export default compose([
  withDispatch((dispatch, props) => {
    const { selectBlock } = dispatch("core/editor");
    return {
      selectBlock,
    };
  }),
  withSelect((select, props) => {
    const { getMedia } = select("core");
    const { id } = props.attributes;

    if (typeof id != "undefined") {
      return {
        imgObj: id ? getMedia(id) : null,
      };
    }
  }),
])(Edit);
