/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/block-frontend.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@wordpress/dom-ready/build-module/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@wordpress/dom-ready/build-module/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Specify a function to execute when the DOM is fully loaded.
 *
 * @param {Function} callback A function to execute after the DOM is ready.
 *
 * @example
 * ```js
 * import domReady from '@wordpress/dom-ready';
 *
 * domReady( function() {
 * 	//do something after DOM loads.
 * } );
 * ```
 *
 * @return {void}
 */
var domReady = function domReady(callback) {
  if (document.readyState === 'complete' || // DOMContentLoaded + Images/Styles/etc loaded, so we call directly.
  document.readyState === 'interactive' // DOMContentLoaded fires at this point, so we call directly.
  ) {
      return callback();
    } // DOMContentLoaded has not fired yet, delay callback until then.


  document.addEventListener('DOMContentLoaded', callback);
};

/* harmony default export */ __webpack_exports__["default"] = (domReady);


/***/ }),

/***/ "./node_modules/bigpicture/index.js":
/*!******************************************!*\
  !*** ./node_modules/bigpicture/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// BigPicture.js | license MIT | henrygd.me/bigpicture

// trigger element used to open popup
var el;

// set to true after first interaction
var initialized;

// container element holding html needed for script
var container;

// currently active display element (image, video, youtube / vimeo iframe container)
var displayElement;

// popup image element
var displayImage;

// popup video element
var displayVideo;

// popup audio element
var displayAudio;

// container element to hold youtube / vimeo iframe
var iframeContainer;

// iframe to hold youtube / vimeo player
var iframeSiteVid;

// store requested image source
var imgSrc;

// button that closes the container
var closeButton;

// youtube / vimeo video id
var siteVidID;

// keeps track of loading icon display state
var isLoading;

// timeout to check video status while loading
var checkMediaTimeout;

// loading icon element
var loadingIcon;

// caption element
var caption;

// caption content element
var captionText;

// store caption content
var captionContent;

// hide caption button element
var captionHideButton;

// open state for container element
var isOpen;

// gallery open state
var galleryOpen;

// used during close animation to avoid triggering timeout twice
var isClosing;

// array of prev viewed image urls to check if cached before showing loading icon
var imgCache = [];

// store whether image requested is remote or local
var remoteImage;

// store animation opening callbacks
var animationStart;
var animationEnd;

// store changeGalleryImage callback
var onChangeImage;

// gallery left / right icons
var rightArrowBtn;

var leftArrowBtn;

// position of gallery
var galleryPosition;

// hold active gallery els / image src
var galleryEls;

// counter element
var galleryCounter;

// store images in gallery that are being loaded
var preloadedImages = {};

// whether device supports touch events
var supportsTouch;

// options object
var opts;

// Save bytes in the minified version
var appendEl = 'appendChild';
var createEl = 'createElement';
var removeEl = 'removeChild';

function BigPicture (options) {
	// initialize called on initial open to create elements / style / event handlers
	initialized || initialize();

	// clear currently loading stuff
	if (isLoading) {
		clearTimeout(checkMediaTimeout);
		removeContainer();
	}

	opts = options;

	// store video id if youtube / vimeo video is requested
	siteVidID = options.ytSrc || options.vimeoSrc;

	// store optional callbacks
	animationStart = options.animationStart;
	animationEnd = options.animationEnd;
	onChangeImage = options.onChangeImage;

	// set trigger element
	el = options.el;

	// wipe existing remoteImage state
	remoteImage = false;

	// set caption if provided
	captionContent = el.getAttribute('data-caption');

	if (options.gallery) {
		makeGallery(options.gallery, options.position);
	} else if (siteVidID || options.iframeSrc) {
		// if vimeo, youtube, or iframe video
		// toggleLoadingIcon(true)
		displayElement = iframeContainer;
		createIframe();
	} else if (options.imgSrc) {
		// if remote image
		remoteImage = true;
		imgSrc = options.imgSrc;
		!~imgCache.indexOf(imgSrc) && toggleLoadingIcon(true);
		displayElement = displayImage;
		displayElement.src = imgSrc;
	} else if (options.audio) {
		// if direct video link
		toggleLoadingIcon(true);
		displayElement = displayAudio;
		displayElement.src = options.audio;
		checkMedia('audio file');
	} else if (options.vidSrc) {
		// if direct video link
		toggleLoadingIcon(true);
		if (options.dimensions) {
			changeCSS(displayVideo, ("width:" + (options.dimensions[0]) + "px"));
		}
		makeVidSrc(options.vidSrc);
		checkMedia('video');
	} else {
		// local image / background image already loaded on page
		displayElement = displayImage;
		// get img source or element background image
		displayElement.src =
			el.tagName === 'IMG'
				? el.src
				: window
						.getComputedStyle(el)
						.backgroundImage.replace(/^url|[(|)|'|"]/g, '');
	}

	// add container to page
	container[appendEl](displayElement);
	document.body[appendEl](container);
	return {
		close: close,
		next: function () { return updateGallery(1); },
		prev: function () { return updateGallery(-1); },
	}
}

// create all needed methods / store dom elements on first use
function initialize() {
	var startX;
	// return close button elements
	function createCloseButton(className) {
		var el = document[createEl]('button');
		el.className = className;
		el.innerHTML =
			'<svg viewBox="0 0 48 48"><path d="M28 24L47 5a3 3 0 1 0-4-4L24 20 5 1a3 3 0 1 0-4 4l19 19L1 43a3 3 0 1 0 4 4l19-19 19 19a3 3 0 0 0 4 0v-4L28 24z"/></svg>';
		return el
	}

	function createArrowSymbol(direction, style) {
		var el = document[createEl]('button');
		el.className = 'bp-lr';
		el.innerHTML =
			'<svg viewBox="0 0 129 129" height="70" fill="#fff"><path d="M88.6 121.3c.8.8 1.8 1.2 2.9 1.2s2.1-.4 2.9-1.2a4.1 4.1 0 0 0 0-5.8l-51-51 51-51a4.1 4.1 0 0 0-5.8-5.8l-54 53.9a4.1 4.1 0 0 0 0 5.8l54 53.9z"/></svg>';
		changeCSS(el, style);
		el.onclick = function (e) {
			e.stopPropagation();
			updateGallery(direction);
		};
		return el
	}

	// add style - if you want to tweak, run through beautifier
	var style = document[createEl]('STYLE');
	style.innerHTML =
		'#bp_caption,#bp_container{bottom:0;left:0;right:0;position:fixed;opacity:0}#bp_container>*,#bp_loader{position:absolute;right:0;z-index:10}#bp_container,#bp_caption,#bp_container svg{pointer-events:none}#bp_container{top:0;z-index:9999;background:rgba(0,0,0,.7);opacity:0;transition:opacity .35s}#bp_loader{top:0;left:0;bottom:0;display:flex;align-items:center;cursor:wait;background:0;z-index:9}#bp_loader svg{width:50%;max-width:300px;max-height:50%;margin:auto;animation:bpturn 1s infinite linear}#bp_aud,#bp_container img,#bp_sv,#bp_vid{user-select:none;max-height:96%;max-width:96%;top:0;bottom:0;left:0;margin:auto;box-shadow:0 0 3em rgba(0,0,0,.4);z-index:-1}#bp_sv{background:#111}#bp_sv svg{width:66px}#bp_caption{font-size:.9em;padding:1.3em;background:rgba(15,15,15,.94);color:#fff;text-align:center;transition:opacity .3s}#bp_aud{width:650px;top:calc(50% - 20px);bottom:auto;box-shadow:none}#bp_count{left:0;right:auto;padding:14px;color:rgba(255,255,255,.7);font-size:22px;cursor:default}#bp_container button{position:absolute;border:0;outline:0;background:0;cursor:pointer;transition:all .1s}#bp_container>.bp-x{padding:0;height:41px;width:41px;border-radius:100%;top:8px;right:14px;opacity:.8;line-height:1}#bp_container>.bp-x:focus,#bp_container>.bp-x:hover{background:rgba(255,255,255,.2)}.bp-x svg,.bp-xc svg{height:21px;width:20px;fill:#fff;vertical-align:top;}.bp-xc svg{width:16px}#bp_container .bp-xc{left:2%;bottom:100%;padding:9px 20px 7px;background:#d04444;border-radius:2px 2px 0 0;opacity:.85}#bp_container .bp-xc:focus,#bp_container .bp-xc:hover{opacity:1}.bp-lr{top:50%;top:calc(50% - 130px);padding:99px 0;width:6%;background:0;border:0;opacity:.4;transition:opacity .1s}.bp-lr:focus,.bp-lr:hover{opacity:.8}@keyframes bpf{50%{transform:translatex(15px)}100%{transform:none}}@keyframes bpl{50%{transform:translatex(-15px)}100%{transform:none}}@keyframes bpfl{0%{opacity:0;transform:translatex(70px)}100%{opacity:1;transform:none}}@keyframes bpfr{0%{opacity:0;transform:translatex(-70px)}100%{opacity:1;transform:none}}@keyframes bpfol{0%{opacity:1;transform:none}100%{opacity:0;transform:translatex(-70px)}}@keyframes bpfor{0%{opacity:1;transform:none}100%{opacity:0;transform:translatex(70px)}}@keyframes bpturn{0%{transform:none}100%{transform:rotate(360deg)}}@media (max-width:600px){.bp-lr{font-size:15vw}}';
	document.head[appendEl](style);

	// create container element
	container = document[createEl]('DIV');
	container.id = 'bp_container';
	container.onclick = close;
	closeButton = createCloseButton('bp-x');
	container[appendEl](closeButton);
	// gallery swipe listeners
	if ('ontouchstart' in window) {
		supportsTouch = true;
		container.ontouchstart = function (ref) {
			var changedTouches = ref.changedTouches;

			startX = changedTouches[0].pageX;
		};
		container.ontouchmove = function (e) {
			e.preventDefault();
		};
		container.ontouchend = function (ref) {
			var changedTouches = ref.changedTouches;

			if (!galleryOpen) {
				return
			}
			var distX = changedTouches[0].pageX - startX;
			// swipe right
			distX < -30 && updateGallery(1);
			// swipe left
			distX > 30 && updateGallery(-1);
		};
	}

	// create display image element
	displayImage = document[createEl]('IMG');

	// create display video element
	displayVideo = document[createEl]('VIDEO');
	displayVideo.id = 'bp_vid';
	displayVideo.setAttribute('playsinline', true);
	displayVideo.controls = true;
	displayVideo.loop = true;

	// create audio element
	displayAudio = document[createEl]('audio');
	displayAudio.id = 'bp_aud';
	displayAudio.controls = true;
	displayAudio.loop = true;

	// create gallery counter
	galleryCounter = document[createEl]('span');
	galleryCounter.id = 'bp_count';

	// create caption elements
	caption = document[createEl]('DIV');
	caption.id = 'bp_caption';
	captionHideButton = createCloseButton('bp-xc');
	captionHideButton.onclick = toggleCaption.bind(null, false);
	caption[appendEl](captionHideButton);
	captionText = document[createEl]('SPAN');
	caption[appendEl](captionText);
	container[appendEl](caption);

	// left / right arrow icons
	rightArrowBtn = createArrowSymbol(1, 'transform:scalex(-1)');
	leftArrowBtn = createArrowSymbol(-1, 'left:0;right:auto');

	// create loading icon element
	loadingIcon = document[createEl]('DIV');
	loadingIcon.id = 'bp_loader';
	loadingIcon.innerHTML =
		'<svg viewbox="0 0 32 32" fill="#fff" opacity=".8"><path d="M16 0a16 16 0 0 0 0 32 16 16 0 0 0 0-32m0 4a12 12 0 0 1 0 24 12 12 0 0 1 0-24" fill="#000" opacity=".5"/><path d="M16 0a16 16 0 0 1 16 16h-4A12 12 0 0 0 16 4z"/></svg>';
	// create youtube / vimeo container
	iframeContainer = document[createEl]('DIV');
	iframeContainer.id = 'bp_sv';

	// create iframe to hold youtube / vimeo player
	iframeSiteVid = document[createEl]('IFRAME');
	iframeSiteVid.setAttribute('allowfullscreen', true);
	iframeSiteVid.allow = 'autoplay; fullscreen';
	iframeSiteVid.onload = function () { return iframeContainer[removeEl](loadingIcon); };
	changeCSS(
		iframeSiteVid,
		'border:0;position:absolute;height:100%;width:100%;left:0;top:0'
	);
	iframeContainer[appendEl](iframeSiteVid);

	// display image bindings for image load and error
	displayImage.onload = open;
	displayImage.onerror = open.bind(null, 'image');

	window.addEventListener('resize', function () {
		// adjust loader position on window resize
		galleryOpen || (isLoading && toggleLoadingIcon(true));
		// adjust iframe dimensions
		displayElement === iframeContainer && updateIframeDimensions();
	});

	// close container on escape key press and arrow buttons for gallery
	document.addEventListener('keyup', function (ref) {
		var keyCode = ref.keyCode;

		keyCode === 27 && isOpen && close();
		if (galleryOpen) {
			keyCode === 39 && updateGallery(1);
			keyCode === 37 && updateGallery(-1);
			keyCode === 38 && updateGallery(10);
			keyCode === 40 && updateGallery(-10);
		}
	});
	// prevent scrolling with arrow keys if gallery open
	document.addEventListener('keydown', function (e) {
		var usedKeys = [37, 38, 39, 40];
		if (galleryOpen && ~usedKeys.indexOf(e.keyCode)) {
			e.preventDefault();
		}
	});

	// trap focus within conainer while open
	document.addEventListener(
		'focus',
		function (e) {
			if (isOpen && !container.contains(e.target)) {
				e.stopPropagation();
				closeButton.focus();
			}
		},
		true
	);

	// all done
	initialized = true;
}

// return transform style to make full size display el match trigger el size
function getRect() {
	var ref = el.getBoundingClientRect();
	var top = ref.top;
	var left = ref.left;
	var width = ref.width;
	var height = ref.height;
	var leftOffset = left - (container.clientWidth - width) / 2;
	var centerTop = top - (container.clientHeight - height) / 2;
	var scaleWidth = el.clientWidth / displayElement.clientWidth;
	var scaleHeight = el.clientHeight / displayElement.clientHeight;
	return ("transform:translate3D(" + leftOffset + "px, " + centerTop + "px, 0) scale3D(" + scaleWidth + ", " + scaleHeight + ", 0)")
}

function makeVidSrc(source) {
	if (Array.isArray(source)) {
		displayElement = displayVideo.cloneNode();
		source.forEach(function (src) {
			var source = document[createEl]('SOURCE');
			source.src = src;
			source.type = "video/" + (src.match(/.(\w+)$/)[1]);
			displayElement[appendEl](source);
		});
	} else {
		displayElement = displayVideo;
		displayElement.src = source;
	}
}

function makeGallery(gallery, position) {
	var galleryAttribute = opts.galleryAttribute || 'data-bp';
	if (Array.isArray(gallery)) {
		// is array of images
		galleryPosition = position || 0;
		galleryEls = gallery;
		captionContent = gallery[galleryPosition].caption;
	} else {
		// is element selector or nodelist
		galleryEls = [].slice.call(
			typeof gallery === 'string'
				? document.querySelectorAll((gallery + " [" + galleryAttribute + "]"))
				: gallery
		);
		// find initial gallery position
		var elIndex = galleryEls.indexOf(el);
		galleryPosition =
			position === 0 || position ? position : elIndex !== -1 ? elIndex : 0;
		// make gallery object w/ els / src / caption
		galleryEls = galleryEls.map(function (el) { return ({
			el: el,
			src: el.getAttribute(galleryAttribute),
			caption: el.getAttribute('data-caption'),
		}); });
	}
	// show loading icon if needed
	remoteImage = true;
	// set initial src to imgSrc so it will be cached in open func
	imgSrc = galleryEls[galleryPosition].src;
	!~imgCache.indexOf(imgSrc) && toggleLoadingIcon(true);
	if (galleryEls.length > 1) {
		// if length is greater than one, add gallery stuff
		container[appendEl](galleryCounter);
		galleryCounter.innerHTML = (galleryPosition + 1) + "/" + (galleryEls.length);
		if (!supportsTouch) {
			// add arrows if device doesn't support touch
			container[appendEl](rightArrowBtn);
			container[appendEl](leftArrowBtn);
		}
	} else {
		// gallery is one, just show without clutter
		galleryEls = false;
	}
	displayElement = displayImage;
	// set initial image src
	displayElement.src = imgSrc;
}

function updateGallery(movement) {
	var galleryLength = galleryEls.length - 1;

	// only allow one change at a time
	if (isLoading) {
		return
	}

	// return if requesting out of range image
	var isEnd =
		(movement > 0 && galleryPosition === galleryLength) ||
		(movement < 0 && !galleryPosition);
	if (isEnd) {
		// if beginning or end of gallery, run end animation
		if (!opts.loop) {
			changeCSS(displayImage, '');
			setTimeout(
				changeCSS,
				9,
				displayImage,
				("animation:" + (movement > 0 ? 'bpl' : 'bpf') + " .3s;transition:transform .35s")
			);
			return
		}
		// if gallery is looped, adjust position to beginning / end
		galleryPosition = movement > 0 ? -1 : galleryLength + 1;
	}

	// normalize position
	galleryPosition = Math.max(
		0,
		Math.min(galleryPosition + movement, galleryLength)
	)

	// load images before and after for quicker scrolling through pictures
	;[galleryPosition - 1, galleryPosition, galleryPosition + 1].forEach(
		function (position) {
			// normalize position
			position = Math.max(0, Math.min(position, galleryLength));
			// cancel if image has already been preloaded
			if (preloadedImages[position]) { return }
			var src = galleryEls[position].src;
			// create image for preloadedImages
			var img = document[createEl]('IMG');
			img.addEventListener('load', addToImgCache.bind(null, src));
			img.src = src;
			preloadedImages[position] = img;
		}
	);
	// if image is loaded, show it
	if (preloadedImages[galleryPosition].complete) {
		return changeGalleryImage(movement)
	}
	// if not, show loading icon and change when loaded
	isLoading = true;
	changeCSS(loadingIcon, 'opacity:.4;');
	container[appendEl](loadingIcon);
	preloadedImages[galleryPosition].onload = function () {
		galleryOpen && changeGalleryImage(movement);
	};
	// if error, store error object in el array
	preloadedImages[galleryPosition].onerror = function () {
		galleryEls[galleryPosition] = {
			error: 'Error loading image',
		};
		galleryOpen && changeGalleryImage(movement);
	};
}

function changeGalleryImage(movement) {
	if (isLoading) {
		container[removeEl](loadingIcon);
		isLoading = false;
	}
	var activeEl = galleryEls[galleryPosition];
	if (activeEl.error) {
		// show alert if error
		alert(activeEl.error);
	} else {
		// add new image, animate images in and out w/ css animation
		var oldimg = container.querySelector('img:last-of-type');
		displayImage = displayElement = preloadedImages[galleryPosition];
		changeCSS(
			displayImage,
			("animation:" + (movement > 0 ? 'bpfl' : 'bpfr') + " .35s;transition:transform .35s")
		);
		changeCSS(oldimg, ("animation:" + (movement > 0 ? 'bpfol' : 'bpfor') + " .35s both"));
		container[appendEl](displayImage);
		// update el for closing animation
		if (activeEl.el) {
			el = activeEl.el;
		}
	}
	// update counter
	galleryCounter.innerHTML = (galleryPosition + 1) + "/" + (galleryEls.length);
	// show / hide caption
	toggleCaption(galleryEls[galleryPosition].caption);
	// execute onChangeImage callback
	onChangeImage && onChangeImage([displayImage, galleryEls[galleryPosition]]);
}

// create video iframe
function createIframe() {
	var url;
	var prefix = 'https://';
	var suffix = 'autoplay=1';

	// create appropriate url
	if (opts.ytSrc) {
		url = prefix + "www.youtube" + (opts.ytNoCookie ? '-nocookie' : '') + ".com/embed/" + siteVidID + "?html5=1&rel=0&playsinline=1&" + suffix;
	} else if (opts.vimeoSrc) {
		url = prefix + "player.vimeo.com/video/" + siteVidID + "?" + suffix;
	} else if (opts.iframeSrc) {
		url = opts.iframeSrc;
	}

	// add loading spinner to iframe container
	changeCSS(loadingIcon, '');
	iframeContainer[appendEl](loadingIcon);

	// set iframe src to url
	iframeSiteVid.src = url;

	updateIframeDimensions();

	setTimeout(open, 9);
}

function updateIframeDimensions() {
	var height;
	var width;

	// handle height / width / aspect / max width for iframe
	var windowHeight = window.innerHeight * 0.95;
	var windowWidth = window.innerWidth * 0.95;
	var windowAspect = windowHeight / windowWidth;

	var ref = opts.dimensions || [1920, 1080];
	var dimensionWidth = ref[0];
	var dimensionHeight = ref[1];

	var iframeAspect = dimensionHeight / dimensionWidth;

	if (iframeAspect > windowAspect) {
		height = Math.min(dimensionHeight, windowHeight);
		width = height / iframeAspect;
	} else {
		width = Math.min(dimensionWidth, windowWidth);
		height = width * iframeAspect;
	}

	iframeContainer.style.cssText += "width:" + width + "px;height:" + height + "px;";
}

// timeout to check video status while loading
function checkMedia(errMsg) {
	if (~[1, 4].indexOf(displayElement.readyState)) {
		open();
		// short timeout to to make sure controls show in safari 11
		setTimeout(function () {
			displayElement.play();
		}, 99);
	} else if (displayElement.error) {
		open(errMsg);
	} else {
		checkMediaTimeout = setTimeout(checkMedia, 35, errMsg);
	}
}

// hide / show loading icon
function toggleLoadingIcon(bool) {
	// don't show loading icon if noLoader is specified
	if (opts.noLoader) {
		return
	}
	// bool is true if we want to show icon, false if we want to remove
	// change style to match trigger element dimensions if we want to show
	bool &&
		changeCSS(
			loadingIcon,
			("top:" + (el.offsetTop) + "px;left:" + (el.offsetLeft) + "px;height:" + (el.clientHeight) + "px;width:" + (el.clientWidth) + "px")
		);
	// add or remove loader from DOM
	el.parentElement[bool ? appendEl : removeEl](loadingIcon);
	isLoading = bool;
}

// hide & show caption
function toggleCaption(captionContent) {
	if (captionContent) {
		captionText.innerHTML = captionContent;
	}
	changeCSS(
		caption,
		("opacity:" + (captionContent ? "1;pointer-events:auto" : '0'))
	);
}

function addToImgCache(url) {
	!~imgCache.indexOf(url) && imgCache.push(url);
}

// animate open of image / video; display caption if needed
function open(err) {
	// hide loading spinner
	isLoading && toggleLoadingIcon();

	// execute animationStart callback
	animationStart && animationStart();

	// check if we have an error string instead of normal event
	if (typeof err === 'string') {
		removeContainer();
		return opts.onError
			? opts.onError()
			: alert(("Error: The requested " + err + " could not be loaded."))
	}

	// if remote image is loaded, add url to imgCache array
	remoteImage && addToImgCache(imgSrc);

	// transform displayEl to match trigger el
	displayElement.style.cssText += getRect();

	// fade in container
	changeCSS(container, "opacity:1;pointer-events:auto");

	// set animationEnd callback to run after animation ends (cleared if container closed)
	if (animationEnd) {
		animationEnd = setTimeout(animationEnd, 410);
	}

	isOpen = true;

	galleryOpen = !!galleryEls;

	// enlarge displayEl, fade in caption if hasCaption
	setTimeout(function () {
		displayElement.style.cssText += 'transition:transform .35s;transform:none';
		captionContent && setTimeout(toggleCaption, 250, captionContent);
	}, 60);
}

// close active display element
function close(e) {
	var target = e ? e.target : container;
	var clickEls = [
		caption,
		captionHideButton,
		displayVideo,
		displayAudio,
		captionText,
		leftArrowBtn,
		rightArrowBtn,
		loadingIcon ];

	// blur to hide close button focus style
	target.blur();

	// don't close if one of the clickEls was clicked or container is already closing
	if (isClosing || ~clickEls.indexOf(target)) {
		return
	}

	// animate closing
	displayElement.style.cssText += getRect();
	changeCSS(container, 'pointer-events:auto');

	// timeout to remove els from dom; use variable to avoid calling more than once
	setTimeout(removeContainer, 350);

	// clear animationEnd timeout
	clearTimeout(animationEnd);

	isOpen = false;
	isClosing = true;
}

// remove container / display element from the DOM
function removeContainer() {
	// clear src of displayElement (or iframe if display el is iframe container)
	// needs to be done before removing container in IE
	var srcEl =
		displayElement === iframeContainer ? iframeSiteVid : displayElement;
	srcEl.removeAttribute('src');

	// remove container from DOM & clear inline style
	document.body[removeEl](container);
	container[removeEl](displayElement);
	changeCSS(container, '');
	changeCSS(displayElement, '');

	// remove caption
	toggleCaption(false);

	if (galleryOpen) {
		// remove all gallery stuff
		var images = container.querySelectorAll('img');
		for (var i = 0; i < images.length; i++) {
			container[removeEl](images[i]);
		}
		isLoading && container[removeEl](loadingIcon);
		container[removeEl](galleryCounter);
		galleryOpen = galleryEls = false;
		preloadedImages = {};
		supportsTouch || container[removeEl](rightArrowBtn);
		supportsTouch || container[removeEl](leftArrowBtn);
		// in case displayimage changed, we need to update event listeners
		displayImage.onload = open;
		displayImage.onerror = open.bind(null, 'image');
	}

	// run close callback
	opts.onClose && opts.onClose();

	isClosing = isLoading = false;
}

// style helper functions
function changeCSS(ref, newStyle) {
	var style = ref.style;

	style.cssText = newStyle;
}

module.exports = BigPicture;


/***/ }),

/***/ "./node_modules/counterup2/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/counterup2/dist/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e),n.d(e,"divideNumbers",function(){return o}),n.d(e,"hasComma",function(){return i}),n.d(e,"isFloat",function(){return u}),n.d(e,"decimalPlaces",function(){return l});e.default=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.action,i=void 0===n?"start":n,u=e.duration,l=void 0===u?1e3:u,a=e.delay,c=void 0===a?16:a,d=e.lang,f=void 0===d?void 0:d;if("stop"!==i){if(r(t),/[0-9]/.test(t.innerHTML)){var s=o(t.innerHTML,{duration:l||t.getAttribute("data-duration"),lang:f||document.querySelector("html").getAttribute("lang")||void 0,delay:c||t.getAttribute("data-delay")});t._countUpOrigInnerHTML=t.innerHTML,t.innerHTML=s[0],t.style.visibility="visible",t.countUpTimeout=setTimeout(function e(){t.innerHTML=s.shift(),s.length?(clearTimeout(t.countUpTimeout),t.countUpTimeout=setTimeout(e,c)):t._countUpOrigInnerHTML=void 0},c)}}else r(t)};var r=function(t){clearTimeout(t.countUpTimeout),t._countUpOrigInnerHTML&&(t.innerHTML=t._countUpOrigInnerHTML,t._countUpOrigInnerHTML=void 0),t.style.visibility=""},o=function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.duration,r=void 0===n?1e3:n,o=e.delay,i=void 0===o?16:o,u=e.lang,l=void 0===u?void 0:u,a=r/i,c=t.toString().split(/(<[^>]+>|[0-9.][,.0-9]*[0-9]*)/),d=[],f=0;f<a;f++)d.push("");for(var s=0;s<c.length;s++)if(/([0-9.][,.0-9]*[0-9]*)/.test(c[s])&&!/<[^>]+>/.test(c[s])){var p=c[s],v=/[0-9]+,[0-9]+/.test(p);p=p.replace(/,/g,"");for(var g=/^[0-9]+\.[0-9]+$/.test(p),y=g?(p.split(".")[1]||[]).length:0,b=d.length-1,m=a;m>=1;m--){var T=parseInt(p/a*m,10);g&&(T=parseFloat(p/a*m).toFixed(y),T=parseFloat(T).toLocaleString(l)),v&&(T=T.toLocaleString(l)),d[b--]+=T}}else for(var M=0;M<a;M++)d[M]+=c[s];return d[d.length]=t.toString(),d},i=function(t){return/[0-9]+,[0-9]+/.test(t)},u=function(t){return/^[0-9]+\.[0-9]+$/.test(t)},l=function(t){return u(t)?(t.split(".")[1]||[]).length:0}}])});

/***/ }),

/***/ "./node_modules/waypoints/lib/noframework.waypoints.js":
/*!*************************************************************!*\
  !*** ./node_modules/waypoints/lib/noframework.waypoints.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
(function() {
  'use strict'

  var keyCounter = 0
  var allWaypoints = {}

  /* http://imakewebthings.com/waypoints/api/waypoint */
  function Waypoint(options) {
    if (!options) {
      throw new Error('No options passed to Waypoint constructor')
    }
    if (!options.element) {
      throw new Error('No element option passed to Waypoint constructor')
    }
    if (!options.handler) {
      throw new Error('No handler option passed to Waypoint constructor')
    }

    this.key = 'waypoint-' + keyCounter
    this.options = Waypoint.Adapter.extend({}, Waypoint.defaults, options)
    this.element = this.options.element
    this.adapter = new Waypoint.Adapter(this.element)
    this.callback = options.handler
    this.axis = this.options.horizontal ? 'horizontal' : 'vertical'
    this.enabled = this.options.enabled
    this.triggerPoint = null
    this.group = Waypoint.Group.findOrCreate({
      name: this.options.group,
      axis: this.axis
    })
    this.context = Waypoint.Context.findOrCreateByElement(this.options.context)

    if (Waypoint.offsetAliases[this.options.offset]) {
      this.options.offset = Waypoint.offsetAliases[this.options.offset]
    }
    this.group.add(this)
    this.context.add(this)
    allWaypoints[this.key] = this
    keyCounter += 1
  }

  /* Private */
  Waypoint.prototype.queueTrigger = function(direction) {
    this.group.queueTrigger(this, direction)
  }

  /* Private */
  Waypoint.prototype.trigger = function(args) {
    if (!this.enabled) {
      return
    }
    if (this.callback) {
      this.callback.apply(this, args)
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/destroy */
  Waypoint.prototype.destroy = function() {
    this.context.remove(this)
    this.group.remove(this)
    delete allWaypoints[this.key]
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/disable */
  Waypoint.prototype.disable = function() {
    this.enabled = false
    return this
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/enable */
  Waypoint.prototype.enable = function() {
    this.context.refresh()
    this.enabled = true
    return this
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/next */
  Waypoint.prototype.next = function() {
    return this.group.next(this)
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/previous */
  Waypoint.prototype.previous = function() {
    return this.group.previous(this)
  }

  /* Private */
  Waypoint.invokeAll = function(method) {
    var allWaypointsArray = []
    for (var waypointKey in allWaypoints) {
      allWaypointsArray.push(allWaypoints[waypointKey])
    }
    for (var i = 0, end = allWaypointsArray.length; i < end; i++) {
      allWaypointsArray[i][method]()
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/destroy-all */
  Waypoint.destroyAll = function() {
    Waypoint.invokeAll('destroy')
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/disable-all */
  Waypoint.disableAll = function() {
    Waypoint.invokeAll('disable')
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/enable-all */
  Waypoint.enableAll = function() {
    Waypoint.Context.refreshAll()
    for (var waypointKey in allWaypoints) {
      allWaypoints[waypointKey].enabled = true
    }
    return this
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/refresh-all */
  Waypoint.refreshAll = function() {
    Waypoint.Context.refreshAll()
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/viewport-height */
  Waypoint.viewportHeight = function() {
    return window.innerHeight || document.documentElement.clientHeight
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/viewport-width */
  Waypoint.viewportWidth = function() {
    return document.documentElement.clientWidth
  }

  Waypoint.adapters = []

  Waypoint.defaults = {
    context: window,
    continuous: true,
    enabled: true,
    group: 'default',
    horizontal: false,
    offset: 0
  }

  Waypoint.offsetAliases = {
    'bottom-in-view': function() {
      return this.context.innerHeight() - this.adapter.outerHeight()
    },
    'right-in-view': function() {
      return this.context.innerWidth() - this.adapter.outerWidth()
    }
  }

  window.Waypoint = Waypoint
}())
;(function() {
  'use strict'

  function requestAnimationFrameShim(callback) {
    window.setTimeout(callback, 1000 / 60)
  }

  var keyCounter = 0
  var contexts = {}
  var Waypoint = window.Waypoint
  var oldWindowLoad = window.onload

  /* http://imakewebthings.com/waypoints/api/context */
  function Context(element) {
    this.element = element
    this.Adapter = Waypoint.Adapter
    this.adapter = new this.Adapter(element)
    this.key = 'waypoint-context-' + keyCounter
    this.didScroll = false
    this.didResize = false
    this.oldScroll = {
      x: this.adapter.scrollLeft(),
      y: this.adapter.scrollTop()
    }
    this.waypoints = {
      vertical: {},
      horizontal: {}
    }

    element.waypointContextKey = this.key
    contexts[element.waypointContextKey] = this
    keyCounter += 1
    if (!Waypoint.windowContext) {
      Waypoint.windowContext = true
      Waypoint.windowContext = new Context(window)
    }

    this.createThrottledScrollHandler()
    this.createThrottledResizeHandler()
  }

  /* Private */
  Context.prototype.add = function(waypoint) {
    var axis = waypoint.options.horizontal ? 'horizontal' : 'vertical'
    this.waypoints[axis][waypoint.key] = waypoint
    this.refresh()
  }

  /* Private */
  Context.prototype.checkEmpty = function() {
    var horizontalEmpty = this.Adapter.isEmptyObject(this.waypoints.horizontal)
    var verticalEmpty = this.Adapter.isEmptyObject(this.waypoints.vertical)
    var isWindow = this.element == this.element.window
    if (horizontalEmpty && verticalEmpty && !isWindow) {
      this.adapter.off('.waypoints')
      delete contexts[this.key]
    }
  }

  /* Private */
  Context.prototype.createThrottledResizeHandler = function() {
    var self = this

    function resizeHandler() {
      self.handleResize()
      self.didResize = false
    }

    this.adapter.on('resize.waypoints', function() {
      if (!self.didResize) {
        self.didResize = true
        Waypoint.requestAnimationFrame(resizeHandler)
      }
    })
  }

  /* Private */
  Context.prototype.createThrottledScrollHandler = function() {
    var self = this
    function scrollHandler() {
      self.handleScroll()
      self.didScroll = false
    }

    this.adapter.on('scroll.waypoints', function() {
      if (!self.didScroll || Waypoint.isTouch) {
        self.didScroll = true
        Waypoint.requestAnimationFrame(scrollHandler)
      }
    })
  }

  /* Private */
  Context.prototype.handleResize = function() {
    Waypoint.Context.refreshAll()
  }

  /* Private */
  Context.prototype.handleScroll = function() {
    var triggeredGroups = {}
    var axes = {
      horizontal: {
        newScroll: this.adapter.scrollLeft(),
        oldScroll: this.oldScroll.x,
        forward: 'right',
        backward: 'left'
      },
      vertical: {
        newScroll: this.adapter.scrollTop(),
        oldScroll: this.oldScroll.y,
        forward: 'down',
        backward: 'up'
      }
    }

    for (var axisKey in axes) {
      var axis = axes[axisKey]
      var isForward = axis.newScroll > axis.oldScroll
      var direction = isForward ? axis.forward : axis.backward

      for (var waypointKey in this.waypoints[axisKey]) {
        var waypoint = this.waypoints[axisKey][waypointKey]
        if (waypoint.triggerPoint === null) {
          continue
        }
        var wasBeforeTriggerPoint = axis.oldScroll < waypoint.triggerPoint
        var nowAfterTriggerPoint = axis.newScroll >= waypoint.triggerPoint
        var crossedForward = wasBeforeTriggerPoint && nowAfterTriggerPoint
        var crossedBackward = !wasBeforeTriggerPoint && !nowAfterTriggerPoint
        if (crossedForward || crossedBackward) {
          waypoint.queueTrigger(direction)
          triggeredGroups[waypoint.group.id] = waypoint.group
        }
      }
    }

    for (var groupKey in triggeredGroups) {
      triggeredGroups[groupKey].flushTriggers()
    }

    this.oldScroll = {
      x: axes.horizontal.newScroll,
      y: axes.vertical.newScroll
    }
  }

  /* Private */
  Context.prototype.innerHeight = function() {
    /*eslint-disable eqeqeq */
    if (this.element == this.element.window) {
      return Waypoint.viewportHeight()
    }
    /*eslint-enable eqeqeq */
    return this.adapter.innerHeight()
  }

  /* Private */
  Context.prototype.remove = function(waypoint) {
    delete this.waypoints[waypoint.axis][waypoint.key]
    this.checkEmpty()
  }

  /* Private */
  Context.prototype.innerWidth = function() {
    /*eslint-disable eqeqeq */
    if (this.element == this.element.window) {
      return Waypoint.viewportWidth()
    }
    /*eslint-enable eqeqeq */
    return this.adapter.innerWidth()
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/context-destroy */
  Context.prototype.destroy = function() {
    var allWaypoints = []
    for (var axis in this.waypoints) {
      for (var waypointKey in this.waypoints[axis]) {
        allWaypoints.push(this.waypoints[axis][waypointKey])
      }
    }
    for (var i = 0, end = allWaypoints.length; i < end; i++) {
      allWaypoints[i].destroy()
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/context-refresh */
  Context.prototype.refresh = function() {
    /*eslint-disable eqeqeq */
    var isWindow = this.element == this.element.window
    /*eslint-enable eqeqeq */
    var contextOffset = isWindow ? undefined : this.adapter.offset()
    var triggeredGroups = {}
    var axes

    this.handleScroll()
    axes = {
      horizontal: {
        contextOffset: isWindow ? 0 : contextOffset.left,
        contextScroll: isWindow ? 0 : this.oldScroll.x,
        contextDimension: this.innerWidth(),
        oldScroll: this.oldScroll.x,
        forward: 'right',
        backward: 'left',
        offsetProp: 'left'
      },
      vertical: {
        contextOffset: isWindow ? 0 : contextOffset.top,
        contextScroll: isWindow ? 0 : this.oldScroll.y,
        contextDimension: this.innerHeight(),
        oldScroll: this.oldScroll.y,
        forward: 'down',
        backward: 'up',
        offsetProp: 'top'
      }
    }

    for (var axisKey in axes) {
      var axis = axes[axisKey]
      for (var waypointKey in this.waypoints[axisKey]) {
        var waypoint = this.waypoints[axisKey][waypointKey]
        var adjustment = waypoint.options.offset
        var oldTriggerPoint = waypoint.triggerPoint
        var elementOffset = 0
        var freshWaypoint = oldTriggerPoint == null
        var contextModifier, wasBeforeScroll, nowAfterScroll
        var triggeredBackward, triggeredForward

        if (waypoint.element !== waypoint.element.window) {
          elementOffset = waypoint.adapter.offset()[axis.offsetProp]
        }

        if (typeof adjustment === 'function') {
          adjustment = adjustment.apply(waypoint)
        }
        else if (typeof adjustment === 'string') {
          adjustment = parseFloat(adjustment)
          if (waypoint.options.offset.indexOf('%') > - 1) {
            adjustment = Math.ceil(axis.contextDimension * adjustment / 100)
          }
        }

        contextModifier = axis.contextScroll - axis.contextOffset
        waypoint.triggerPoint = Math.floor(elementOffset + contextModifier - adjustment)
        wasBeforeScroll = oldTriggerPoint < axis.oldScroll
        nowAfterScroll = waypoint.triggerPoint >= axis.oldScroll
        triggeredBackward = wasBeforeScroll && nowAfterScroll
        triggeredForward = !wasBeforeScroll && !nowAfterScroll

        if (!freshWaypoint && triggeredBackward) {
          waypoint.queueTrigger(axis.backward)
          triggeredGroups[waypoint.group.id] = waypoint.group
        }
        else if (!freshWaypoint && triggeredForward) {
          waypoint.queueTrigger(axis.forward)
          triggeredGroups[waypoint.group.id] = waypoint.group
        }
        else if (freshWaypoint && axis.oldScroll >= waypoint.triggerPoint) {
          waypoint.queueTrigger(axis.forward)
          triggeredGroups[waypoint.group.id] = waypoint.group
        }
      }
    }

    Waypoint.requestAnimationFrame(function() {
      for (var groupKey in triggeredGroups) {
        triggeredGroups[groupKey].flushTriggers()
      }
    })

    return this
  }

  /* Private */
  Context.findOrCreateByElement = function(element) {
    return Context.findByElement(element) || new Context(element)
  }

  /* Private */
  Context.refreshAll = function() {
    for (var contextId in contexts) {
      contexts[contextId].refresh()
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/context-find-by-element */
  Context.findByElement = function(element) {
    return contexts[element.waypointContextKey]
  }

  window.onload = function() {
    if (oldWindowLoad) {
      oldWindowLoad()
    }
    Context.refreshAll()
  }


  Waypoint.requestAnimationFrame = function(callback) {
    var requestFn = window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      requestAnimationFrameShim
    requestFn.call(window, callback)
  }
  Waypoint.Context = Context
}())
;(function() {
  'use strict'

  function byTriggerPoint(a, b) {
    return a.triggerPoint - b.triggerPoint
  }

  function byReverseTriggerPoint(a, b) {
    return b.triggerPoint - a.triggerPoint
  }

  var groups = {
    vertical: {},
    horizontal: {}
  }
  var Waypoint = window.Waypoint

  /* http://imakewebthings.com/waypoints/api/group */
  function Group(options) {
    this.name = options.name
    this.axis = options.axis
    this.id = this.name + '-' + this.axis
    this.waypoints = []
    this.clearTriggerQueues()
    groups[this.axis][this.name] = this
  }

  /* Private */
  Group.prototype.add = function(waypoint) {
    this.waypoints.push(waypoint)
  }

  /* Private */
  Group.prototype.clearTriggerQueues = function() {
    this.triggerQueues = {
      up: [],
      down: [],
      left: [],
      right: []
    }
  }

  /* Private */
  Group.prototype.flushTriggers = function() {
    for (var direction in this.triggerQueues) {
      var waypoints = this.triggerQueues[direction]
      var reverse = direction === 'up' || direction === 'left'
      waypoints.sort(reverse ? byReverseTriggerPoint : byTriggerPoint)
      for (var i = 0, end = waypoints.length; i < end; i += 1) {
        var waypoint = waypoints[i]
        if (waypoint.options.continuous || i === waypoints.length - 1) {
          waypoint.trigger([direction])
        }
      }
    }
    this.clearTriggerQueues()
  }

  /* Private */
  Group.prototype.next = function(waypoint) {
    this.waypoints.sort(byTriggerPoint)
    var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
    var isLast = index === this.waypoints.length - 1
    return isLast ? null : this.waypoints[index + 1]
  }

  /* Private */
  Group.prototype.previous = function(waypoint) {
    this.waypoints.sort(byTriggerPoint)
    var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
    return index ? this.waypoints[index - 1] : null
  }

  /* Private */
  Group.prototype.queueTrigger = function(waypoint, direction) {
    this.triggerQueues[direction].push(waypoint)
  }

  /* Private */
  Group.prototype.remove = function(waypoint) {
    var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
    if (index > -1) {
      this.waypoints.splice(index, 1)
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/first */
  Group.prototype.first = function() {
    return this.waypoints[0]
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/last */
  Group.prototype.last = function() {
    return this.waypoints[this.waypoints.length - 1]
  }

  /* Private */
  Group.findOrCreate = function(options) {
    return groups[options.axis][options.name] || new Group(options)
  }

  Waypoint.Group = Group
}())
;(function() {
  'use strict'

  var Waypoint = window.Waypoint

  function isWindow(element) {
    return element === element.window
  }

  function getWindow(element) {
    if (isWindow(element)) {
      return element
    }
    return element.defaultView
  }

  function NoFrameworkAdapter(element) {
    this.element = element
    this.handlers = {}
  }

  NoFrameworkAdapter.prototype.innerHeight = function() {
    var isWin = isWindow(this.element)
    return isWin ? this.element.innerHeight : this.element.clientHeight
  }

  NoFrameworkAdapter.prototype.innerWidth = function() {
    var isWin = isWindow(this.element)
    return isWin ? this.element.innerWidth : this.element.clientWidth
  }

  NoFrameworkAdapter.prototype.off = function(event, handler) {
    function removeListeners(element, listeners, handler) {
      for (var i = 0, end = listeners.length - 1; i < end; i++) {
        var listener = listeners[i]
        if (!handler || handler === listener) {
          element.removeEventListener(listener)
        }
      }
    }

    var eventParts = event.split('.')
    var eventType = eventParts[0]
    var namespace = eventParts[1]
    var element = this.element

    if (namespace && this.handlers[namespace] && eventType) {
      removeListeners(element, this.handlers[namespace][eventType], handler)
      this.handlers[namespace][eventType] = []
    }
    else if (eventType) {
      for (var ns in this.handlers) {
        removeListeners(element, this.handlers[ns][eventType] || [], handler)
        this.handlers[ns][eventType] = []
      }
    }
    else if (namespace && this.handlers[namespace]) {
      for (var type in this.handlers[namespace]) {
        removeListeners(element, this.handlers[namespace][type], handler)
      }
      this.handlers[namespace] = {}
    }
  }

  /* Adapted from jQuery 1.x offset() */
  NoFrameworkAdapter.prototype.offset = function() {
    if (!this.element.ownerDocument) {
      return null
    }

    var documentElement = this.element.ownerDocument.documentElement
    var win = getWindow(this.element.ownerDocument)
    var rect = {
      top: 0,
      left: 0
    }

    if (this.element.getBoundingClientRect) {
      rect = this.element.getBoundingClientRect()
    }

    return {
      top: rect.top + win.pageYOffset - documentElement.clientTop,
      left: rect.left + win.pageXOffset - documentElement.clientLeft
    }
  }

  NoFrameworkAdapter.prototype.on = function(event, handler) {
    var eventParts = event.split('.')
    var eventType = eventParts[0]
    var namespace = eventParts[1] || '__default'
    var nsHandlers = this.handlers[namespace] = this.handlers[namespace] || {}
    var nsTypeList = nsHandlers[eventType] = nsHandlers[eventType] || []

    nsTypeList.push(handler)
    this.element.addEventListener(eventType, handler)
  }

  NoFrameworkAdapter.prototype.outerHeight = function(includeMargin) {
    var height = this.innerHeight()
    var computedStyle

    if (includeMargin && !isWindow(this.element)) {
      computedStyle = window.getComputedStyle(this.element)
      height += parseInt(computedStyle.marginTop, 10)
      height += parseInt(computedStyle.marginBottom, 10)
    }

    return height
  }

  NoFrameworkAdapter.prototype.outerWidth = function(includeMargin) {
    var width = this.innerWidth()
    var computedStyle

    if (includeMargin && !isWindow(this.element)) {
      computedStyle = window.getComputedStyle(this.element)
      width += parseInt(computedStyle.marginLeft, 10)
      width += parseInt(computedStyle.marginRight, 10)
    }

    return width
  }

  NoFrameworkAdapter.prototype.scrollLeft = function() {
    var win = getWindow(this.element)
    return win ? win.pageXOffset : this.element.scrollLeft
  }

  NoFrameworkAdapter.prototype.scrollTop = function() {
    var win = getWindow(this.element)
    return win ? win.pageYOffset : this.element.scrollTop
  }

  NoFrameworkAdapter.extend = function() {
    var args = Array.prototype.slice.call(arguments)

    function merge(target, obj) {
      if (typeof target === 'object' && typeof obj === 'object') {
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            target[key] = obj[key]
          }
        }
      }

      return target
    }

    for (var i = 1, end = args.length; i < end; i++) {
      merge(args[0], args[i])
    }
    return args[0]
  }

  NoFrameworkAdapter.inArray = function(element, array, i) {
    return array == null ? -1 : array.indexOf(element, i)
  }

  NoFrameworkAdapter.isEmptyObject = function(obj) {
    /* eslint no-unused-vars: 0 */
    for (var name in obj) {
      return false
    }
    return true
  }

  Waypoint.adapters.push({
    name: 'noframework',
    Adapter: NoFrameworkAdapter
  })
  Waypoint.Adapter = NoFrameworkAdapter
}())
;

/***/ }),

/***/ "./src/block-frontend.js":
/*!*******************************!*\
  !*** ./src/block-frontend.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfill */ "./src/polyfill.js");
/* harmony import */ var _polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/**
 * All frontend scripts required by our blocks should be included here.
 *
 * This is the file that Webpack is compiling into blocks.frontend.build.js
 */

/**
 * Internal dependencies
 */


var context = __webpack_require__("./src/blocks sync recursive frontend\\.js$"); // Import.


context.keys().forEach(function (key) {
  return context(key);
});

/***/ }),

/***/ "./src/blocks sync recursive frontend\\.js$":
/*!***************************************!*\
  !*** ./src/blocks sync frontend\.js$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./content-timeline/frontend.js": "./src/blocks/content-timeline/frontend.js",
	"./count-down/frontend.js": "./src/blocks/count-down/frontend.js",
	"./count-up/frontend.js": "./src/blocks/count-up/frontend.js",
	"./expand/frontend.js": "./src/blocks/expand/frontend.js",
	"./post-carousel/frontend.js": "./src/blocks/post-carousel/frontend.js",
	"./post-timeline/frontend.js": "./src/blocks/post-timeline/frontend.js",
	"./video-popup/frontend.js": "./src/blocks/video-popup/frontend.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/blocks sync recursive frontend\\.js$";

/***/ }),

/***/ "./src/blocks/content-timeline/frontend.js":
/*!*************************************************!*\
  !*** ./src/blocks/content-timeline/frontend.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Common js file for timeline.
 */
(function ($) {
  // Listen for events.
  window.addEventListener("load", responsiveTimelineInit);
  window.addEventListener("resize", responsiveTimelineInit);
  window.addEventListener("scroll", responsiveTimelineInit); // Callback function for all event listeners.

  function responsiveTimelineInit() {
    var timeline = $(".responsive-timeline");

    if (timeline.parents(".wp-block").length == 0) {
      timeline.each(function () {
        var line_inner = $(this).find(".responsive-timeline__line__inner");
        var line_outer = $(this).find(".responsive-timeline__line");
        var $icon_class = $(this).find(".responsive-timeline__marker");
        var $card_last = $(this).find(".responsive-timeline__field:last-child");
        var $document = $(document); // Set top and bottom for line.

        var timeline_start_icon = $icon_class.first().position();
        var timeline_end_icon = $icon_class.last().position();
        line_outer.css("top", timeline_start_icon.top);
        var timeline_card_height = $card_last.height();
        var last_item_top = $card_last.offset().top - $(this).offset().top;
        var $last_item, parent_top;

        if ($(this).hasClass("responsive-timeline__arrow-center")) {
          line_outer.css("bottom", timeline_end_icon.top);
          parent_top = last_item_top - timeline_start_icon.top;
          $last_item = parent_top + timeline_end_icon.top;
        } else if ($(this).hasClass("responsive-timeline__arrow-top")) {
          var top_height = timeline_card_height - timeline_end_icon.top;
          line_outer.css("bottom", top_height);
          $last_item = last_item_top;
        } else if ($(this).hasClass("responsive-timeline__arrow-bottom")) {
          var bottom_height = timeline_card_height - timeline_end_icon.top;
          line_outer.css("bottom", bottom_height);
          parent_top = last_item_top - timeline_start_icon.top;
          $last_item = parent_top + timeline_end_icon.top;
        }

        var num = 0;
        var elementEnd = $last_item + 20;
        var connectorHeight = 3 * $(this).find(".responsive-timeline__marker:first").height();
        var viewportHeight = document.documentElement.clientHeight;
        var viewportHeightHalf = viewportHeight / 2 + connectorHeight;
        var elementPos = $(this).offset().top;
        var new_elementPos = elementPos + timeline_start_icon.top;
        var photoViewportOffsetTop = new_elementPos - $document.scrollTop();

        if (photoViewportOffsetTop < 0) {
          photoViewportOffsetTop = Math.abs(photoViewportOffsetTop);
        } else {
          photoViewportOffsetTop = -Math.abs(photoViewportOffsetTop);
        }

        if (elementPos < viewportHeightHalf) {
          if (viewportHeightHalf + Math.abs(photoViewportOffsetTop) < elementEnd) {
            line_inner.height(viewportHeightHalf + photoViewportOffsetTop);
          } else {
            if (photoViewportOffsetTop + viewportHeightHalf >= elementEnd) {
              line_inner.height(elementEnd);
            }
          }
        } else {
          if (photoViewportOffsetTop + viewportHeightHalf < elementEnd) {
            if (0 > photoViewportOffsetTop) {
              line_inner.height(viewportHeightHalf - Math.abs(photoViewportOffsetTop));
              ++num;
            } else {
              line_inner.height(viewportHeightHalf + photoViewportOffsetTop);
            }
          } else {
            if (photoViewportOffsetTop + viewportHeightHalf >= elementEnd) {
              line_inner.height(elementEnd);
            }
          }
        } //Icon bg color and icon color


        var timeline_icon_pos, timeline_card_pos;
        var elementPos, elementCardPos;
        var timeline_icon_top, timeline_card_top;
        var timeline_icon = $(this).find(".responsive-timeline__marker"),
            animate_border = $(this).find(".responsive-timeline__field-wrap");

        for (var i = 0; i < timeline_icon.length; i++) {
          timeline_icon_pos = $(timeline_icon[i]).offset().top;
          timeline_card_pos = $(animate_border[i]).offset().top;
          elementPos = $(this).offset().top;
          elementCardPos = $(this).offset().top;
          timeline_icon_top = timeline_icon_pos - $document.scrollTop();
          timeline_card_top = timeline_card_pos - $document.scrollTop();

          if (timeline_card_top < viewportHeightHalf) {
            animate_border[i].classList.remove("out-view");
            animate_border[i].classList.add("in-view");
          } else {
            // Remove classes if element is below than half of viewport.
            animate_border[i].classList.add("out-view");
            animate_border[i].classList.remove("in-view");
          }

          if (timeline_icon_top < viewportHeightHalf) {
            // Add classes if element is above than half of viewport.
            timeline_icon[i].classList.remove("responsive-timeline__out-view-icon");
            timeline_icon[i].classList.add("responsive-timeline__in-view-icon");
          } else {
            // Remove classes if element is below than half of viewport.
            timeline_icon[i].classList.add("responsive-timeline__out-view-icon");
            timeline_icon[i].classList.remove("responsive-timeline__in-view-icon");
          }
        }
      });
    }
  }
})(jQuery);

/***/ }),

/***/ "./src/blocks/count-down/frontend.js":
/*!*******************************************!*\
  !*** ./src/blocks/count-down/frontend.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener("DOMContentLoaded", function () {
  var countdowns = document.getElementsByClassName("responsive-block-editor-addons-countdown-container"); // Return if there is no countdown block

  if (!countdowns) return; // Set each countdown

  var _loop = function _loop(i) {
    var countdown = countdowns[i];

    var counter = function counter(countdown) {
      var dateNode = countdown.getElementsByClassName("responsive-block-editor-addons-countdown-get-date");
      var date = dateNode[0].getAttribute("data-date");
      var now = new Date().getTime();
      var time = new Date(date);
      var currentUtcOffset = time.getTimezoneOffset() * 60 * 1000;
      var timer = new Date(time - now + currentUtcOffset);
      var oneDay = 24 * 60 * 60 * 1000;
      var days = Math.floor((time - now) / oneDay).toString();
      var hours = timer.getHours();
      var minutes = timer.getMinutes();
      var seconds = timer.getSeconds(); // Get values from html

      var daysNode = countdown.getElementsByClassName("responsive-block-editor-addons-countdown-digits-days");
      var hoursNode = countdown.getElementsByClassName("responsive-block-editor-addons-countdown-digits-hours");
      var minutesNode = countdown.getElementsByClassName("responsive-block-editor-addons-countdown-digits-minutes");
      var secondsNode = countdown.getElementsByClassName("responsive-block-editor-addons-countdown-digits-seconds");
      var isOver = Date.parse(timer) < Date.parse(new Date(currentUtcOffset)); // Change inner html

      daysNode[0].innerHTML = isOver ? 0 : days;
      hoursNode[0].innerHTML = isOver ? 0 : hours;
      minutesNode[0].innerHTML = isOver ? 0 : minutes;
      secondsNode[0].innerHTML = isOver ? 0 : seconds;

      if (isOver) {
        clearInterval(interval);
      }
    };

    interval = setInterval(function () {
      counter(countdown);
    }, 1000);
  };

  for (var i = 0; i < countdowns.length; i++) {
    var interval;

    _loop(i);
  }
});

/***/ }),

/***/ "./src/blocks/count-up/frontend.js":
/*!*****************************************!*\
  !*** ./src/blocks/count-up/frontend.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var counterup2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! counterup2 */ "./node_modules/counterup2/dist/index.js");
/* harmony import */ var counterup2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(counterup2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@wordpress/dom-ready */ "./node_modules/@wordpress/dom-ready/build-module/index.js");
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


Object(_node_modules_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
  __webpack_require__(/*! waypoints/lib/noframework.waypoints.js */ "./node_modules/waypoints/lib/noframework.waypoints.js");

  var elems = document.querySelectorAll(".responsive-count-item__amount");
  elems.forEach(function (el) {
    el.classList.add("responsive-countup--hide");
    new Waypoint({
      element: el,
      handler: function handler() {
        counterup2__WEBPACK_IMPORTED_MODULE_0___default()(el);
        el.classList.remove("responsive-countup--hide");
        this.destroy();
      },
      offset: "bottom-in-view"
    });
  });
});

/***/ }),

/***/ "./src/blocks/expand/frontend.js":
/*!***************************************!*\
  !*** ./src/blocks/expand/frontend.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/@wordpress/dom-ready */ "./node_modules/@wordpress/dom-ready/build-module/index.js");
/**
 * WordPress dependencies
 */

/**
 * Permanently hide the dismissible notification if clicked.
 */

Object(_node_modules_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
  var elems = document.querySelectorAll(".responsive-block-editor-addons-block-expand");
  elems.forEach(function (el) {
    var btn = el.querySelector(".responsive-block-editor-addons-expand-toggle");

    var clickHandler = function clickHandler(e) {
      el.classList.toggle("responsive-block-editor-addons-expand--more");
      var isExpanded = el.classList.contains("responsive-block-editor-addons-expand--more");
      btn.setAttribute("aria-expanded", isExpanded ? "true" : "false");
      e.preventDefault();
    };

    if (btn) {
      btn.addEventListener("click", clickHandler);
      btn.addEventListener("tapEnd", clickHandler);
    }
  });
});

/***/ }),

/***/ "./src/blocks/post-carousel/frontend.js":
/*!**********************************************!*\
  !*** ./src/blocks/post-carousel/frontend.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($) {
  $(window).on("load", function () {
    var wrap = jQuery(".responsive-block-editor-addons-block-post-carousel");
    var id;
    wrap.each(function (x) {
      id = $(this).data("carouselid");
      var scope = $(this).find(".responsive-post_carousel-equal-height-1");
      var post_active = scope.find(".responsive-block-editor-addons-post-carousel-inner"),
          max_height = -1,
          post_active_height = -1,
          is_background_enabled = scope.parents(".responsive-post-grid").hasClass("responsive-post__image-position-background");
      post_active.each(function (i) {
        var blog_post = $(this).find(".responsive-block-editor-addons-post-carousel-inner"),
            blog_post_height = blog_post.outerHeight(),
            post_img_ht = $(this).find(".responsive-block-editor-addons-block-post-carousel-image-top").outerHeight(),
            post_text_ht = $(this).find(".responsive-block-editor-addons-block-post-carousel-text-wrap").outerHeight();

        if (is_background_enabled) {
          blog_post_height = post_text_ht + 15;
        } else {
          blog_post_height = post_img_ht + post_text_ht;
        }

        if (max_height < blog_post_height) {
          max_height = blog_post_height;
          post_active_height = max_height + 15;
        }
      });
      post_active.each(function (i) {
        var selector = $(this);
        selector.animate({
          height: post_active_height
        }, {
          duration: 200,
          easing: "linear"
        });
        selector.css("height", post_active_height);
      });
    });
  });
})(jQuery);

/***/ }),

/***/ "./src/blocks/post-timeline/frontend.js":
/*!**********************************************!*\
  !*** ./src/blocks/post-timeline/frontend.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Common js file for timeline.
 */
(function ($) {
  // Listen for events.
  window.addEventListener("load", responsivePostTimelineInit);
  window.addEventListener("resize", responsivePostTimelineInit);
  window.addEventListener("scroll", responsivePostTimelineInit); // Callback function for all event listeners.

  function responsivePostTimelineInit() {
    var post_timeline = $(".responsive-block-editor-addons-timeline");

    if (post_timeline.parents(".wp-block").length == 0) {
      post_timeline.each(function () {
        var post_line_inner = $(this).find(".responsive-block-editor-addons-timeline__line__inner");
        var post_line_outer = $(this).find(".responsive-block-editor-addons-timeline__line");
        var $post_icon_class = $(this).find(".responsive-block-editor-addons-timeline__marker");
        var $post_card_last = $(this).find(".responsive-block-editor-addons-block-post-timeline:last-child");
        var $post_document = $(document); // Set top and bottom for line.

        var post_timeline_start_icon = $post_icon_class.first().position();
        var post_timeline_end_icon = $post_icon_class.last().position();
        post_line_outer.css("top", post_timeline_start_icon.top);
        var post_timeline_card_height = $post_card_last.height();
        var post_last_item_top = $post_card_last.offset().top - $(this).offset().top;
        var $post_last_item, post_parent_top;

        if ($(this).hasClass("responsive-block-editor-addons-timeline__arrow-center")) {
          post_line_outer.css("bottom", post_timeline_end_icon.top);
          post_parent_top = post_last_item_top - post_timeline_start_icon.top;
          $post_last_item = post_parent_top + post_timeline_end_icon.top;
        } else if ($(this).hasClass("responsive-block-editor-addons-timeline__arrow-top")) {
          var post_top_height = post_timeline_card_height - post_timeline_end_icon.top;
          post_line_outer.css("bottom", post_top_height);
          $post_last_item = post_last_item_top;
        } else if ($(this).hasClass("responsive-block-editor-addons-timeline__arrow-bottom")) {
          var post_bottom_height = post_timeline_card_height - post_timeline_end_icon.top;
          post_line_outer.css("bottom", post_bottom_height);
          post_parent_top = post_last_item_top - post_timeline_start_icon.top;
          $post_last_item = post_parent_top + post_timeline_end_icon.top;
        }

        var post_num = 0;
        var postElementEnd = $post_last_item + 20;
        var postConnectorHeight = 3 * $(this).find(".responsive-block-editor-addons-timeline__marker:first").height();
        var postViewportHeight = document.documentElement.clientHeight;
        var postViewportHeightHalf = postViewportHeight / 2 + postConnectorHeight;
        var postElementPos = $(this).offset().top;
        var post_new_elementPos = postElementPos + post_timeline_start_icon.top;
        var postPhotoViewportOffsetTop = post_new_elementPos - $post_document.scrollTop();

        if (postPhotoViewportOffsetTop < 0) {
          postPhotoViewportOffsetTop = Math.abs(postPhotoViewportOffsetTop);
        } else {
          postPhotoViewportOffsetTop = -Math.abs(postPhotoViewportOffsetTop);
        }

        if (postElementPos < postViewportHeightHalf) {
          if (postViewportHeightHalf + Math.abs(postPhotoViewportOffsetTop) < postElementEnd) {
            post_line_inner.height(postViewportHeightHalf + postPhotoViewportOffsetTop);
          } else {
            if (postPhotoViewportOffsetTop + postViewportHeightHalf >= postElementEnd) {
              post_line_inner.height(postElementEnd);
            }
          }
        } else {
          if (postPhotoViewportOffsetTop + postViewportHeightHalf < postElementEnd) {
            if (0 > postPhotoViewportOffsetTop) {
              post_line_inner.height(postViewportHeightHalf - Math.abs(postPhotoViewportOffsetTop));
              ++post_num;
            } else {
              post_line_inner.height(postViewportHeightHalf + postPhotoViewportOffsetTop);
            }
          } else {
            if (postPhotoViewportOffsetTop + postViewportHeightHalf >= postElementEnd) {
              post_line_inner.height(postElementEnd);
            }
          }
        } //Icon bg color and icon color


        var post_timeline_icon_pos, post_timeline_card_pos;
        var postElementPos, postElementCardPos;
        var post_timeline_icon_top, post_timeline_card_top;
        var post_timeline_icon = $(this).find(".responsive-block-editor-addons-timeline__marker"),
            post_animate_border = $(this).find(".responsive-block-editor-addons-timeline__field-wrap");

        for (var i = 0; i < post_timeline_icon.length; i++) {
          post_timeline_icon_pos = $(post_timeline_icon[i]).offset().top;
          post_timeline_card_pos = $(post_animate_border[i]).offset().top;
          postElementPos = $(this).offset().top;
          postElementCardPos = $(this).offset().top;
          post_timeline_icon_top = post_timeline_icon_pos - $post_document.scrollTop();
          post_timeline_card_top = post_timeline_card_pos - $post_document.scrollTop();

          if (post_timeline_card_top < postViewportHeightHalf) {
            post_animate_border[i].classList.remove("out-view");
            post_animate_border[i].classList.add("in-view");
          } else {
            // Remove classes if element is below than half of viewport.
            post_animate_border[i].classList.add("out-view");
            post_animate_border[i].classList.remove("in-view");
          }

          if (post_timeline_icon_top < postViewportHeightHalf) {
            // Add classes if element is above than half of viewport.
            post_timeline_icon[i].classList.remove("responsive-block-editor-addons-timeline__out-view-icon");
            post_timeline_icon[i].classList.add("responsive-block-editor-addons-timeline__in-view-icon");
          } else {
            // Remove classes if element is below than half of viewport.
            post_timeline_icon[i].classList.add("responsive-block-editor-addons-timeline__out-view-icon");
            post_timeline_icon[i].classList.remove("responsive-block-editor-addons-timeline__in-view-icon");
          }
        }
      });
    }
  }
})(jQuery);

/***/ }),

/***/ "./src/blocks/video-popup/frontend.js":
/*!********************************************!*\
  !*** ./src/blocks/video-popup/frontend.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bigpicture__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bigpicture */ "./node_modules/bigpicture/index.js");
/* harmony import */ var bigpicture__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bigpicture__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@wordpress/dom-ready */ "./node_modules/@wordpress/dom-ready/build-module/index.js");
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


Object(_node_modules_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
  var elems = document.querySelectorAll(".responsive-block-editor-addons-video-popup[data-video], .responsive-block-editor-addons-video-popup [data-video]");

  var openVideo = function openVideo(el) {
    if (bigpicture__WEBPACK_IMPORTED_MODULE_0___default.a) {
      var videoID = el.getAttribute("data-video");
      var args = {
        el: el,
        noLoader: true
      };

      if (videoID.match(/^\d+$/g)) {
        args.vimeoSrc = videoID;
      } else if (videoID.match(/^https?:\/\//g)) {
        args.vidSrc = videoID;
      } else {
        args.ytSrc = videoID;
      }

      bigpicture__WEBPACK_IMPORTED_MODULE_0___default()(args);
    }
  };

  elems.forEach(function (el) {
    var a = el.querySelector("a");
    a.addEventListener("click", function (ev) {
      ev.preventDefault();
      openVideo(el);
    });
  });
});

/***/ }),

/***/ "./src/polyfill.js":
/*!*************************!*\
  !*** ./src/polyfill.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Polyfills used.
 */
// Nodelist forEach polyfill.
if (window.NodeList && !window.NodeList.prototype.forEach) {
  window.NodeList.prototype.forEach = Array.prototype.forEach;
}

/***/ })

/******/ });
//# sourceMappingURL=frontend_blocks.js.map