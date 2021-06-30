/**
 * External dependencies
 */
import counterUp from "counterup2";

/**
 * WordPress dependencies
 */
import domReady from "../../../node_modules/@wordpress/dom-ready";
domReady(() => {
  require("waypoints/lib/noframework.waypoints.js");
  const elems = document.querySelectorAll(".responsive-count-item__amount");
  elems.forEach((el) => {
    el.classList.add("responsive-countup--hide");
    new Waypoint({
      element: el,
      handler() {
        counterUp(el);
        el.classList.remove("responsive-countup--hide");
        this.destroy();
      },
      offset: "bottom-in-view",
    });
  });
});
