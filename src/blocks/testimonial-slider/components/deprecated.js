import classnames from "classnames";
import AuthorName from "./AuthorName";
import Company from "./Company";
import Description from "./Description";
import PositionClasses from "../classes";
import TestimonialImage from "./Image";
import oldAttributes from "./deprecated/attributes";
import attributes from "../attributes";

const { Fragment } = wp.element;

const deprecated = [
  {
    // attributes,
    attributes: oldAttributes,
    save: function (props) {
      const {
        attributes: {
          block_id,
          className,
          columns,
          autoplaySpeed,
          autoplay,
          infiniteLoop,
          pauseOnHover,
          transitionSpeed,
          tcolumns,
          arrowSize,
          mcolumns,
          test_block,
          imagePosition,
          arrowDots,
          backgroundPosition,
          backgroundOpacity,
          headingAlign,
          skin,
        },
        setAttributes,
      } = props;

      function NextArrow(props) {
        return (
          <button
            type="button"
            data-role="none"
            className="slick-next slick-arrow"
            aria-label="Next"
            tabIndex="0"
            role="button"
          >
            <Dashicon
              icon="arrow-right-alt2"
              height={arrowSize}
              width={arrowSize}
            />
          </button>
        );
      }

      function PrevArrow(props) {
        return (
          <button
            type="button"
            data-role="none"
            className="slick-prev slick-arrow"
            aria-label="Previous"
            tabIndex="0"
            role="button"
          >
            <Dashicon
              icon="arrow-left-alt2"
              height={arrowSize}
              width={arrowSize}
            />
          </button>
        );
      }
      let dots =
        "dots" == arrowDots || "arrows_dots" == arrowDots ? true : false;
      let arrows =
        "arrows" == arrowDots || "arrows_dots" == arrowDots ? true : false;

      const settings = {
        slidesToShow: columns,
        slidesToScroll: 1,
        autoplaySpeed: autoplaySpeed,
        autoplay: autoplay,
        infinite: infiniteLoop,
        pauseOnHover: pauseOnHover,
        speed: transitionSpeed,
        arrows: arrows,
        dots: dots,
        rtl: false,
        draggable: false,
        nextArrow: <NextArrow arrowSize={arrowSize} />,
        prevArrow: <PrevArrow arrowSize={arrowSize} />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: tcolumns,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: mcolumns,
              slidesToScroll: 1,
            },
          },
        ],
      };

      return (
        <Fragment>
        <div
          className={classnames(
            className,
            "responsive-block-editor-addons-testomonial__outer-wrap responsive-block-editor-addons-slick-carousel responsive-block-editor-addons-tm__arrow-outside",
            `responsive-block-editor-addons-block-${block_id}`
          )}
        >
          {settings}
          <div
            className={classnames(
              "is-carousel",
              `responsive-block-editor-addons-tm__columns-${columns}`,
              "responsive-block-editor-addons-tm__items",
              "responsive-testimonial-slick-carousel",
              `responsive-block-editor-addons-block-${block_id}`
            )}
            dataSlick={settings}
          >
            {test_block.map((test, index) => (
              <div
                className={classnames(
                  "responsive-block-editor-addons-testimonial__wrap",
                  ...PositionClasses(props.attributes)
                )}
                key={"wrap-" + index}
              >
                <div
                  className={classnames(
                    "responsive-block-editor-addons-tm__content",
                    `skin-type-${skin}`,
                    `${headingAlign}-aligned`
                  )}
                  key={"tm_content-" + index}
                >
                  <div className="responsive-block-editor-addons-tm__overlay"></div>
                  {(imagePosition == "top" || imagePosition == "left") && (
                    <TestimonialImage
                      attributes={props.attributes}
                      index_value={index}
                    />
                  )}
  
                  <div className="responsive-block-editor-addons-tm__text-wrap">
                    {
                      // Get description.
                      <Fragment>
                        <div
                          className="responsive-block-editor-addons-testinomial-text-wrap"
                          key={"text-wrap-" + index}
                        >
                          <Description
                            attributes={props.attributes}
                            setAttributes="not_set"
                            props={props}
                            index_value={index}
                          />
                        </div>
                      </Fragment>
                    }
                    <div className="responsive-block-editor-addons-tm__meta">
                      <div className="responsive-block-editor-addons-tm__meta-inner">
                        {imagePosition == "bottom" && (
                          <TestimonialImage
                            attributes={props.attributes}
                            index_value={index}
                          />
                        )}
  
                        {
                          //title_text
                          <Fragment>
                            <div
                              className="responsive-block-editor-addons-testimonial-details"
                              key={"tm_wraps-" + index}
                            >
                              {imagePosition == "stacked" && (
                                <TestimonialImage
                                  attributes={props.attributes}
                                  index_value={index}
                                />
                              )}
                              <AuthorName
                                attributes={props.attributes}
                                setAttributes="not_set"
                                props={props}
                                index_value={index}
                              />
                              <Company
                                attributes={props.attributes}
                                setAttributes="not_set"
                                props={props}
                                index_value={index}
                              />
                            </div>
                          </Fragment>
                        }
                      </div>
                    </div>
                  </div>
                  {imagePosition == "right" && (
                    <TestimonialImage
                      attributes={props.attributes}
                      index_value={index}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Fragment>
      );
    },
  },
  {
    // attributes,
    attributes: attributes,
    save: function (props) {
      const {
        block_id,
        className,
        columns,
        autoplaySpeed,
        autoplay,
        infiniteLoop,
        pauseOnHover,
        transitionSpeed,
        tcolumns,
        arrowSize,
        mcolumns,
        test_block,
        imagePosition,
        arrowDots,
        backgroundPosition,
        backgroundOpacity,
        headingAlign,
        skin,
      } = props.attributes;

      function NextArrow(props) {
        return (
          <button
            type="button"
            data-role="none"
            className="slick-next slick-arrow"
            aria-label="Next"
            tabIndex="0"
            role="button"
          >
            <Dashicon
              icon="arrow-right-alt2"
              height={arrowSize}
              width={arrowSize}
            />
          </button>
        );
      }

      function PrevArrow(props) {
        return (
          <button
            type="button"
            data-role="none"
            className="slick-prev slick-arrow"
            aria-label="Previous"
            tabIndex="0"
            role="button"
          >
            <Dashicon
              icon="arrow-left-alt2"
              height={arrowSize}
              width={arrowSize}
            />
          </button>
        );
      }
      let dots =
        "dots" == arrowDots || "arrows_dots" == arrowDots ? true : false;
      let arrows =
        "arrows" == arrowDots || "arrows_dots" == arrowDots ? true : false;

      const settings = {
        slidesToShow: columns,
        slidesToScroll: 1,
        autoplaySpeed: autoplaySpeed,
        autoplay: autoplay,
        infinite: infiniteLoop,
        pauseOnHover: pauseOnHover,
        speed: transitionSpeed,
        arrows: arrows,
        dots: dots,
        rtl: false,
        draggable: false,
        nextArrow: <NextArrow arrowSize={arrowSize} />,
        prevArrow: <PrevArrow arrowSize={arrowSize} />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: tcolumns,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: mcolumns,
              slidesToScroll: 1,
            },
          },
        ],
      };
      return (
        <Fragment>
          <div
            className={classnames(
              className,
              "responsive-block-editor-addons-testomonial__outer-wrap responsive-block-editor-addons-slick-carousel responsive-block-editor-addons-tm__arrow-outside",
              `responsive-block-editor-addons-block-${block_id}`
            )}
          >
            {settings}
            <div
              className={classnames(
                "is-carousel",
                `responsive-block-editor-addons-tm__columns-${columns}`,
                "responsive-block-editor-addons-tm__items",
                "responsive-testimonial-slick-carousel",
                `responsive-block-editor-addons-block-${block_id}`
              )}
              dataSlick={settings}
            >
              {test_block.map((test, index) => (
                <div
                  className={classnames(
                    "responsive-block-editor-addons-testimonial__wrap",
                    ...PositionClasses(props.attributes)
                  )}
                  key={"wrap-" + index}
                >
                  <div
                    className={classnames(
                      "responsive-block-editor-addons-tm__content",
                      `skin-type-${skin}`,
                      `${headingAlign}-aligned`
                    )}
                    key={"tm_content-" + index}
                  >
                    <div className="responsive-block-editor-addons-tm__overlay"></div>
                    {(imagePosition == "top" || imagePosition == "left") && (
                      <TestimonialImage
                        attributes={props.attributes}
                        index_value={index}
                      />
                    )}

                    <div className="responsive-block-editor-addons-tm__text-wrap">
                      {
                        // Get description.
                        <Fragment>
                          <div
                            className="responsive-block-editor-addons-testinomial-text-wrap"
                            key={"text-wrap-" + index}
                          >
                            <Description
                              attributes={props.attributes}
                              setAttributes="not_set"
                              props={props}
                              index_value={index}
                            />
                          </div>
                        </Fragment>
                      }
                      <div className="responsive-block-editor-addons-tm__meta">
                        <div className="responsive-block-editor-addons-tm__meta-inner">
                          {imagePosition == "bottom" && (
                            <TestimonialImage
                              attributes={props.attributes}
                              index_value={index}
                            />
                          )}

                          {
                            //title_text
                            <Fragment>
                              <div
                                className="responsive-block-editor-addons-testimonial-details"
                                key={"tm_wraps-" + index}
                              >
                                {imagePosition == "stacked" && (
                                  <TestimonialImage
                                    attributes={props.attributes}
                                    index_value={index}
                                  />
                                )}
                                <AuthorName
                                  attributes={props.attributes}
                                  setAttributes="not_set"
                                  props={props}
                                  index_value={index}
                                />
                                <Company
                                  attributes={props.attributes}
                                  setAttributes="not_set"
                                  props={props}
                                  index_value={index}
                                />
                              </div>
                            </Fragment>
                          }
                        </div>
                      </div>
                    </div>
                    {imagePosition == "right" && (
                      <TestimonialImage
                        attributes={props.attributes}
                        index_value={index}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Fragment>
      );
    },
  },
];

export default deprecated;
