/**
 * Internal dependencies
 */
export * from "./background";
export * from "./components";

/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { applyFilters } from "@wordpress/hooks";
import { camelCase, lowerFirst, omit, pick } from "lodash";
import { sprintf } from "@wordpress/i18n";
import classnames from "classnames";
const { Component, Fragment } = wp.element;

export const showOptions = (blockProps) => {
  const {
    showBlockBackground = false,
    blockInnerWidth = "",
    align = "",
  } = blockProps.attributes;

  const previewIsFullWidth =
    (!showBlockBackground && align === "full") ||
    (showBlockBackground && blockInnerWidth === "full");

  return applyFilters(
    "responsive-block-editor-addons.video-popup.show",
    {
      containerWidth: !previewIsFullWidth,
      borderRadius: !previewIsFullWidth,
    },
    blockProps
  );
};

/**
 * Check whether a URL is a video file.
 *
 * @param {string} url
 *
 * @return {boolean} True if a video.
 */
export const urlIsVideo = (url) => url.match(/(mp4|webm|ogg)$/i);

/**
 * From a URL, get the video ID and provider: YouTube or Vimeo.
 *
 * @param {string} url
 *
 * @return {Object} An object containing the video ID and provider name.
 */
export const getVideoProviderFromURL = (url) => {
  let id = "";

  // Check for YouTube.
  id = (url.match(/youtube\.com\/watch\?v=([^\&\?\/]+)/i) || [])[1];

  if (!id) {
    id = (url.match(/youtube\.com\/embed\/([^\&\?\/]+)/i) || [])[1];
  }
  if (!id) {
    id = (url.match(/youtube\.com\/v\/([^\&\?\/]+)/i) || [])[1];
  }
  if (!id) {
    id = (url.match(/youtu\.be\/([^\&\?\/]+)/i) || [])[1];
  }

  if (id) {
    return {
      type: "youtube",
      id,
    };
  }

  // Check for Vimeo.
  id = (url.match(/vimeo\.com\/(\w*\/)*(\d+)/i) || [])[2];
  if (!id) {
    id = (url.match(/^\d+$/i) || [])[0];
  }

  if (id) {
    return {
      type: "vimeo",
      id,
    };
  }

  return {
    type: "youtube",
    id: url,
  };
};

export const __getValue = (
  attributes,
  attrNameCallback = null,
  defaultValue_ = undefined
) => (attrName, format = "", defaultValue = defaultValue_) => {
  const attrNameFunc =
    attrNameCallback !== null ? attrNameCallback : (s) => lowerFirst(s);
  const value =
    typeof attributes[attrNameFunc(attrName)] === "undefined"
      ? ""
      : attributes[attrNameFunc(attrName)];
  return value !== ""
    ? format
      ? sprintf(format.replace(/%$/, "%%"), value)
      : value
    : defaultValue;
};

export const createVideoBackground = (attrNameTemplate, blockProps) => {
  const getAttrName = (attrName) =>
    camelCase(sprintf(attrNameTemplate, attrName));
  const getValue = __getValue(blockProps.attributes, getAttrName, "");

  const mediaUrl = getValue("BackgroundMediaUrl");
  const tabletMediaUrl = getValue("TabletBackgroundMediaUrl");
  const mobileMediaUrl = getValue("MobileBackgroundMediaUrl");

  const desktopClassNames = classnames(
    ["responsive-block-editor-addons-video-background"],
    {
      "responsive-block-editor-addons--video-hide-tablet": tabletMediaUrl,
      "responsive-block-editor-addons--video-hide-mobile": mobileMediaUrl,
    }
  );
  const tabletClassNames = classnames(
    ["responsive-block-editor-addons-video-background"],
    {
      "responsive-block-editor-addons--video-hide-desktop": true,
      "responsive-block-editor-addons--video-hide-mobile": mobileMediaUrl,
    }
  );
  const mobileClassNames = classnames(
    ["responsive-block-editor-addons-video-background"],
    {
      "responsive-block-editor-addons--video-hide-desktop": true,
      "responsive-block-editor-addons--video-hide-tablet": true,
    }
  );

  return (
    <Fragment>
      {urlIsVideo(mediaUrl) && (
        <video
          className={desktopClassNames}
          autoPlay
          muted
          loop
          playsinline
          src={mediaUrl}
        />
      )}
      {urlIsVideo(tabletMediaUrl) && (
        <video
          className={tabletClassNames}
          autoPlay
          muted
          loop
          playsinline
          src={tabletMediaUrl}
        />
      )}
      {urlIsVideo(mobileMediaUrl) && (
        <video
          className={mobileClassNames}
          autoPlay
          muted
          loop
          playsinline
          src={mobileMediaUrl}
        />
      )}
    </Fragment>
  );
};

export const hasBackgroundOverlay = (
  attrNameTemplate = "%s",
  blockAttributes = {}
) => {
  const getAttrName = (attrName) =>
    camelCase(sprintf(attrNameTemplate, attrName));
  const getValue = __getValue(blockAttributes, getAttrName);

  return (
    getValue("BackgroundColorType") === "gradient" ||
    getValue("BackgroundMediaUrl") ||
    getValue("TabletBackgroundMediaUrl") ||
    getValue("MobileBackgroundMediaUrl")
  );
};

export const getAttrName = (
  attrNameTemplate = "%s",
  param1 = "",
  param2 = ""
) => {
  return camelCase(sprintf(attrNameTemplate, param1, param2));
};

export const createAllCombinationAttributes = (
  attrNameTemplate = "",
  attrParams = {},
  arr1 = [],
  arr2 = []
) => {
  if (!arr2.length) {
    return arr1.reduce((attributes, param1, index) => {
      // Selector sprintf index
      const newParams = { ...attrParams };
      if (typeof newParams.selector !== "undefined") {
        newParams.selector = sprintf(newParams.selector, index + 1);
      }

      attributes[camelCase(sprintf(attrNameTemplate, param1))] = newParams;
      return attributes;
    }, {});
  }

  return arr1.reduce((attributes, param1) => {
    return {
      ...attributes,
      ...arr2.reduce((attributes, param2, index) => {
        // Selector sprintf index
        const newParams = { ...attrParams };
        if (typeof newParams.selector !== "undefined") {
          newParams.selector = sprintf(newParams.selector, index + 1);
        }

        attributes[
          camelCase(sprintf(attrNameTemplate, param1, param2))
        ] = newParams;
        return attributes;
      }, {}),
    };
  }, {});
};
