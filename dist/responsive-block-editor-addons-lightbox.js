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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/blocks/gallery-masonry/responsive-block-editor-addons-lightbox.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/gallery-masonry/responsive-block-editor-addons-lightbox.js":
/*!*******************************************************************************!*\
  !*** ./src/blocks/gallery-masonry/responsive-block-editor-addons-lightbox.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  "use strict";

  var lightboxModals = document.getElementsByClassName("has-lightbox");
  Array.from(lightboxModals).forEach(function (lightbox, index) {
    lightbox.className += " lightbox-" + index + " ";
    renderLightboxModal(index);
  });

  function renderLightboxModal(lightboxIndex) {
    var wrapper = document.createElement("div");
    wrapper.setAttribute("class", "responsive-block-editor-addons-lightbox");
    var wrapperBackground = document.createElement("div");
    wrapperBackground.setAttribute("class", "responsive-block-editor-addons-lightbox__background");
    var modalHeading = document.createElement("div");
    modalHeading.setAttribute("class", "responsive-block-editor-addons-lightbox__heading");
    var close = document.createElement("button");
    close.setAttribute("class", "responsive-block-editor-addons-lightbox__close");
    var counter = document.createElement("span");
    counter.setAttribute("class", "responsive-block-editor-addons-lightbox__count");
    var imageContainer = document.createElement("div");
    imageContainer.setAttribute("class", "responsive-block-editor-addons-lightbox__image");
    var image = document.createElement("img");
    var caption = document.createElement("figcaption");
    caption.setAttribute("class", "responsive-block-editor-addons-lightbox__caption");
    var arrowLeftContainer = document.createElement("button");
    arrowLeftContainer.setAttribute("class", "responsive-block-editor-addons-lightbox__arrow responsive-block-editor-addons-lightbox__arrow--left");
    var arrowRightContainer = document.createElement("button");
    arrowRightContainer.setAttribute("class", "responsive-block-editor-addons-lightbox__arrow responsive-block-editor-addons-lightbox__arrow--right");
    var arrowRight = document.createElement("div");
    arrowRight.setAttribute("class", "arrow-right");
    var arrowLeft = document.createElement("div");
    arrowLeft.setAttribute("class", "arrow-left");
    var images = document.querySelectorAll(".has-lightbox.lightbox-".concat(lightboxIndex, " > :not(.carousel-nav) figure img, figure.has-lightbox.lightbox-").concat(lightboxIndex, " > img"));
    var captions = document.querySelectorAll(".has-lightbox.lightbox-".concat(lightboxIndex, " > :not(.carousel-nav) figure figcaption"));
    var index;
    modalHeading.append(counter, close);
    imageContainer.append(image, caption);
    arrowLeftContainer.append(arrowLeft);
    arrowRightContainer.append(arrowRight);
    wrapper.append(wrapperBackground, modalHeading, imageContainer, arrowLeftContainer, arrowRightContainer);

    if (images.length > 0) {
      document.getElementsByTagName("BODY")[0].append(wrapper);

      if (images.length === 1) {
        arrowRightContainer.remove();
        arrowLeftContainer.remove();
      }
    }

    if (captions.length > 0) {
      Array.from(captions).forEach(function (captionElem, captionIndex) {
        captionElem.addEventListener("click", function () {
          changeImage(captionIndex);
        });
      });
    }

    Array.from(images).forEach(function (img, imgIndex) {
      img.closest("figure").addEventListener("click", function () {
        changeImage(imgIndex);
      });
    });
    arrowLeftContainer.addEventListener("click", function () {
      index = index === 0 ? images.length - 1 : index - 1;
      if (wrapper.style.display === "flex") changeImage(index);
    });
    arrowRightContainer.addEventListener("click", function () {
      index = index === images.length - 1 ? 0 : index + 1;
      if (wrapper.style.display === "flex") changeImage(index);
    });
    wrapperBackground.addEventListener("click", function () {
      wrapper.style.display = "none";
    });
    close.addEventListener("click", function () {
      wrapper.style.display = "none";
    });

    function getImageCaption(elem) {
      var selector = "figcaption";
      var sibling = elem.nextElementSibling; // If the sibling matches our selector, use it
      // If not, jump to the next sibling and continue the loop

      while (sibling) {
        if (sibling.matches(selector)) {
          return sibling.innerHTML;
        }

        sibling = sibling.nextElementSibling;
      }

      return "";
    }

    var imagePreloader = {
      preloaded: false,
      setPreloadImages: function setPreloadImages() {
        if (!imagePreloader.preloaded) {
          imagePreloader.preloaded = true;
          Array.from(images).forEach(function (img, imgIndex) {
            imagePreloader["img-".concat(imgIndex)] = new window.Image();
            imagePreloader["img-".concat(imgIndex)].src = img.attributes.src.value;
            imagePreloader["img-".concat(imgIndex)]["data-caption"] = images[imgIndex] && images[imgIndex].nextElementSibling ? getImageCaption(images[imgIndex]) : "";
          });
          setKeyboardListener();
        }
      }
    };

    function changeImage(imageIndex) {
      imagePreloader.setPreloadImages();
      index = imageIndex;
      wrapper.style.display = "flex";
      wrapperBackground.style.backgroundImage = "url(".concat(imagePreloader["img-".concat(index)].src, ")");
      image.src = imagePreloader["img-".concat(index)].src;
      caption.innerHTML = imagePreloader["img-".concat(index)]["data-caption"];
      counter.textContent = "".concat(index + 1, " / ").concat(images.length);
    }

    function setKeyboardListener() {
      document.onkeydown = function (e) {
        var lightboxDisplayValue = wrapper;
        var lightboxIsOpen = typeof lightboxDisplayValue !== "undefined" && lightboxDisplayValue !== "none";

        if (lightboxIsOpen) {
          e = e || window.event;

          switch (e.keyCode) {
            case 27:
              // Esc key
              close.click();
              break;

            case 37:
              // Arrow left or 'A' key.
              arrowLeftContainer.click();
              break;

            case 65:
              // 'A' key.
              arrowLeftContainer.click();
              break;

            case 39:
              // Arrow right.
              arrowRightContainer.click();
              break;

            case 68:
              // 'D' key.
              arrowRightContainer.click();
              break;
          }
        }
      };
    }
  }
})();

/***/ })

/******/ });
//# sourceMappingURL=responsive-block-editor-addons-lightbox.js.map