/**
 * Star Rating Component
 * Displays star ratings with customizable colors and alignment
 */

import classnames from "classnames";
import { SVG, Path } from "@wordpress/components";

const StarRating = ({ rating = 5, range = 5, alignment = "left", starColor = "#f0ad4e", starUnmarkedColor = "#ccd6df", starSize = 18, starGap = 2, className = "" }) => {
  const filledCount = Math.floor(rating);
  const partialStar = rating - filledCount;
  const hasPartialStar = partialStar > 0 && partialStar < 1;

  // Get alignment class
  const getAlignmentClass = () => {
    if (alignment === "center") return "justify-center";
    if (alignment === "right") return "justify-end";
    return "justify-start";
  };

  // Star SVG component
  const StarIcon = ({ className: iconClassName = "" }) => (
    <SVG
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      className={iconClassName}
      style={{ width: "1em", height: "1em", display: "inline-block", flexShrink: "0" }}
    >
      <Path
        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
        clipRule="evenodd"
        fillRule="evenodd"
      />
    </SVG>
  );

  return (
    <div
      className={classnames(
        "responsive-block-editor-addons-star-rating",
        getAlignmentClass(),
        className
      )}
    >
      {Array.from({ length: range }, (_, index) => {
        const starIndex = index + 1;
        const isFilled = starIndex <= filledCount;
        const isPartial = hasPartialStar && starIndex === filledCount + 1;

        return (
          <span
            key={starIndex}
            className={classnames(
              "responsive-block-editor-addons-star-rating-star",
              {
                "responsive-block-editor-addons-star-filled": isFilled,
                "responsive-block-editor-addons-star-partial": isPartial,
              }
            )}
          >
            <StarIcon />
            {isPartial && (
              <span
                className="responsive-block-editor-addons-star-partial-fill"
                style={{
                  width: hasPartialStar ? `${partialStar * 100}%` : "0%"
                }}
              >
                <StarIcon />
              </span>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
