import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { feedbacks } from "../../utils/data";
import "./_feedbackSwiper.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const FeedBackSwiper = () => {
  return (
    <section className="feedbacks">
      <div className="f-inner">
        <div className="wrapper"></div>

        <div className="f-img">
          <img src="/img/feedback-bg.jpg" alt="" />
        </div>

        <div className="f-swiper">
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[EffectFade, Navigation, Pagination, Autoplay]}
            className="feedbackSwiper"
          >
            {feedbacks &&
              feedbacks.map((fback, index) => (
                <SwiperSlide key={index}>
                  <div className="slide-inner">
                    <div className="rating-star">
                      <span className="star">
                        <FontAwesomeIcon icon={faStar} size="sm" />
                      </span>
                      <span className="star">
                        <FontAwesomeIcon icon={faStar} size="sm" />
                      </span>
                      <span className="star">
                        <FontAwesomeIcon icon={faStar} size="sm" />
                      </span>
                      <span className="star">
                        <FontAwesomeIcon icon={faStar} size="sm" />
                      </span>
                      <span className="star">
                        <FontAwesomeIcon icon={faStar} size="sm" />
                      </span>
                    </div>

                    <div className="slide-content">
                      <div className="s-c-feedback">
                        <p className="font-marcellus">{fback.feedback}</p>
                      </div>
                      <div className="s-c-author">
                        <span className="author font-marcellus">
                          {fback.author}
                        </span>
                        <span className="author-job">{fback.author_job}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default FeedBackSwiper;
