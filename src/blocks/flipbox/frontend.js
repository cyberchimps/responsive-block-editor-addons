/**
 * Common js file for flipbox.
 */
(function ($) {
    if ($(window).width() < 968) {
        var innerFlipbox = document.querySelectorAll(".flip-box-inner");
        for (i = 0; i <= innerFlipbox.length; i++) {
            if (innerFlipbox[i] !== null && innerFlipbox[i] !== undefined) {
                innerFlipbox[i].addEventListener("click", function () {
                    let currentInnerFlipbox = $(this);
                    currentInnerFlipbox.toggleClass("flipped");
                    if (currentInnerFlipbox.hasClass("flipped") && currentInnerFlipbox.hasClass("LTR")) {
                        currentInnerFlipbox.css("transform", "rotateY(180deg)");
                    } else if (!currentInnerFlipbox.hasClass("flipped") && currentInnerFlipbox.hasClass("LTR")) {
                        currentInnerFlipbox.css("transform", "rotateY(0deg)");
                    }

                    if (currentInnerFlipbox.hasClass("flipped") && currentInnerFlipbox.hasClass("RTL")) {
                        currentInnerFlipbox.css("transform", "rotateY(-180deg)");
                    } else if (!currentInnerFlipbox.hasClass("flipped") && currentInnerFlipbox.hasClass("RTL")) {
                        currentInnerFlipbox.css("transform", "rotateY(0deg)");
                    }

                    if (currentInnerFlipbox.hasClass("flipped") && currentInnerFlipbox.hasClass("BTT")) {
                        currentInnerFlipbox.css("transform", "rotateX(180deg)");
                    } else if (!currentInnerFlipbox.hasClass("flipped") && currentInnerFlipbox.hasClass("BTT")) {
                        currentInnerFlipbox.css("transform", "rotateX(0deg)");
                    }

                    if (currentInnerFlipbox.hasClass("flipped") && currentInnerFlipbox.hasClass("TTB")) {
                        currentInnerFlipbox.css("transform", "rotateX(-180deg)");
                    } else if (!currentInnerFlipbox.hasClass("flipped") && currentInnerFlipbox.hasClass("TTB")) {
                        currentInnerFlipbox.css("transform", "rotateX(0deg)");
                    }
                });
            }
        }
    }
})(jQuery);
