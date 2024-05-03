import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { pagesCardsOne, pagesCardsTwo } from "../../utils/data";
import Index from "../index";
import "./_pages.scss";
import { faClock } from "@fortawesome/free-regular-svg-icons";

const Pages = () => {
  return (
    <Index>
      <div className="img-container">
        <img src="/img/pages-bg-img.jpg" alt="" />
      </div>
      <div className="img-overlay"></div>

      <div className="main-content pages-content">
        <div className="page-container">
          <div className="content-inner">
            <h1 className="font-marcellus">Amenities & Services</h1>

            <p>
              We strive to provide our guests with luxury, comfort & tailor-made
              service.
            </p>
          </div>
        </div>
      </div>
      {pagesCardsOne &&
        pagesCardsOne.map((card, index) => (
          <section key={index} className={`service-card card-${index + 1}`}>
            <div className="page-container">
              <div className="card-wrapper">
                <div className="card-left card-col">
                  <div className="cl-inner">
                    <div
                      className="c-img c-img-1"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      <img
                        src={card.imageOne}
                        alt=""
                        width={370}
                        height={555}
                      />
                    </div>
                    <div
                      className="c-img c-img-2"
                      data-aos="fade-up"
                      data-aos-duration="3000"
                    >
                      <img
                        src={card.imageTwo}
                        alt=""
                        width={370}
                        height={555}
                      />
                    </div>
                  </div>
                </div>
                <div className="card-right card-col">
                  <div className="cr-inner">
                    <span className="sub-title">{card.sub_title}</span>

                    <h3 className="font-marcellus">{card.title}</h3>

                    <div className="text">
                      <p>{card.text}</p>
                    </div>

                    <div className="opening-hours">
                      <h6 className="font-marcellus">Opening Hours</h6>

                      <ul className="oh-list">
                        {card.openingHours &&
                          card.openingHours.map((hours, index) => (
                            <li key={index}>
                              <span className="card-icon">
                                <FontAwesomeIcon icon={faClock} />
                              </span>
                              <span className="hours">{hours.hours}</span>
                            </li>
                          ))}
                      </ul>
                    </div>

                    <div className="btn">
                      <div className="main-button">{card.buttonOne}</div>
                      {card.buttonTwo && (
                        <div className="main-button button-2">
                          {card.buttonTwo}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

      <section
        className="services-facilites"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="s-f-img">
          <img src="/img/pages-bg-img-2.jpg" alt="" />
        </div>

        <div className="overlay"></div>

        <div className="s-f-content">
          <div className="page-container">
            <div className="s-f-content-inner">
              <span className="sub-title">
                INTRODUCING OUR SERVICES & FACILITIES
              </span>

              <h3 className="secondary-section-title font-marcellus">
                All you need to know to ensure your trip is perfect.
              </h3>

              <div className="text">
                <p>
                  State-of-the-art amenities include a dramatic double-story
                  loft lounge, spectacular rooftop lounge, Technogym fitness
                  center, media corner, and a gracious 24/7 resident services
                  team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {pagesCardsTwo &&
        pagesCardsTwo.map((card, index) => (
          <section key={index} className={`service-card card-${index + 1}`}>
            <div className="page-container">
              <div className="card-wrapper">
                <div className="card-left card-col">
                  <div className="cl-inner">
                    <div
                      className="c-img c-img-1"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      <img
                        src={card.imageOne}
                        alt=""
                        width={370}
                        height={555}
                      />
                    </div>
                    <div
                      className="c-img c-img-2"
                      data-aos="fade-up"
                      data-aos-duration="3000"
                    >
                      <img
                        src={card.imageTwo}
                        alt=""
                        width="370"
                        height="555"
                      />
                    </div>
                  </div>
                </div>
                <div className="card-right card-col">
                  <div className="cr-inner">
                    <span className="sub-title">{card.sub_title}</span>

                    <h3 className="font-marcellus">{card.title}</h3>

                    <div className="text">
                      <p>{card.text}</p>
                    </div>

                    <div className="opening-hours">
                      <h6 className="font-marcellus">Opening Hours</h6>

                      <ul className="oh-list">
                        {card.openingHours &&
                          card.openingHours.map((hours, index) => (
                            <li key={index}>
                              <span className="card-icon">
                                <FontAwesomeIcon icon={faClock} />
                              </span>
                              <span className="hours">{hours.hours}</span>
                            </li>
                          ))}
                      </ul>
                    </div>

                    <div className="btn">
                      <div className="main-button">{card.buttonOne}</div>
                      {card.buttonTwo && (
                        <div className="main-button button-2">
                          {card.buttonTwo}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
    </Index>
  );
};

export default Pages;
