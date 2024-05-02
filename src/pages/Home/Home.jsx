import { useState } from "react";
import Header from "../../components/Header/Header";
import "./_home.scss";
import SideMenu from "../../components/SideMenu/SideMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ServicesCards from "../../components/ServicesCards/ServicesCards";
import FeedBackSwiper from "../../components/FeedbackSwiper/FeedbackSwiper";
import ActivitiesCards from "../../components/ActivitiesCards/ActivitiesCards";

const Home = () => {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const [openVideo, setOpenVideo] = useState(false);
  return (
    <main>
      {openSideMenu ? (
        <SideMenu
          setOpenSideMenu={setOpenSideMenu}
          openSideMenu={openSideMenu}
        />
      ) : (
        <>
          <div className="img-container">
            <img src="/img/home-bg-img.jpg" alt="" />
          </div>
          <div className="img-overlay"></div>
          <Header
            setOpenSideMenu={setOpenSideMenu}
            openSideMenu={openSideMenu}
          />

          {openVideo && (
            <div className={`${openVideo ? "modal-active" : ""} video-modal`}>
              <div className="modal-inner">
                <button
                  className="close-button"
                  onClick={() => setOpenVideo(false)}
                >
                  <FontAwesomeIcon icon={faXmark} size="2xl" />
                </button>

                <div className="video-link">
                  <div className="vl-inner">
                    <iframe
                      src="https://www.youtube.com/embed/XHOmBV4js_E?feature=oembed&amp;playsinline=1&amp;wmode=opaque&amp;muted=muted&amp;autoplay=1"
                      allowFullScreen={1}
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="container">
            <div className="main-content">
              <div className="page-container">
                <div className="content-inner">
                  <div className="mc-top">
                    <div className="mc-top-inner">
                      <span className="sub-title">
                        Welcome to CozyStay, a luxury apartment hotel in Times
                        Square
                      </span>
                      <h1 className="font-marcellus">
                        Your Next Boutique Apartments
                      </h1>
                    </div>
                  </div>
                  <div className="mc-bottom"></div>
                </div>
              </div>
            </div>
            <section className="apartment">
              <div className="page-container">
                <div className="apartment-inner">
                  <div className="a-item">
                    <div className="img-1">
                      <div className="img-1-inner">
                        <img src="/img/img-apartment.jpg" alt="" />
                      </div>
                    </div>

                    <div className="img-2">
                      <img src="/img/img-apartment-2.jpg" alt="" />
                    </div>
                  </div>
                  <div className="a-item">
                    <span className="sub-title">
                      Stay in the heart of New York
                    </span>
                    <h2 className="font-marcellus">
                      Luxury furnished serviced apartments in Times Square{" "}
                    </h2>

                    <div className="a-content">
                      <p>
                        Located in Times Square, CozyStay apartment hotel
                        provide a peaceful, private retreat in the heart of one
                        of the world’s most iconic cities. Experience a
                        sophisticated blend of professional services and home
                        comforts. We proudly offers a full range of
                        complimentary amenities and services that provide you
                        with everything you need for an inspiring stay.
                      </p>
                    </div>

                    <div className="main-button">Start Exploring</div>
                  </div>
                </div>
              </div>
            </section>

            <section className="video">
              <div className="video-img">
                <img src="/img/videoimg-bg.jpg" alt="" />
              </div>

              <div className="video-button">
                <button type="button" onClick={() => setOpenVideo(true)}>
                  <span className="button-border">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="64"
                      height="72"
                      viewBox="0 0 64 72"
                    >
                      <path
                        stroke="#FFF"
                        strokeWidth="2"
                        fill="none"
                        d="m3.121 1.446 58.545 35.412L1.708 69.853 3.121 1.446Z"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
            </section>

            <section className="apartment-types">
              <div className="page-container">
                <div className="title-inner">
                  <span className="sub-title">
                    EXTRAORDINARY ACCOMMODATIONS
                  </span>
                  <h3 className="main-title font-marcellus">
                    Choose Your Apartment Type
                  </h3>
                </div>

                <div className="at-cards">
                  {[
                    {
                      img: "/img/apartment-type-1.jpg",
                      type: "Luxury Penthouses",
                    },
                    { img: "/img/apartment-type-2.jpg", type: "Art Apartment" },
                    {
                      img: "/img/apartment-type-3.jpg",
                      type: "Modern Studios",
                    },
                  ].map((card, index) => (
                    <div className="card" key={index}>
                      <div className="card-inner">
                        <div className="card-img">
                          <img src={card.img} alt="" />
                        </div>

                        <div className="card-title">
                          <h6 className="font-marcellus">{card.type}</h6>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="vacation-experience">
              <div className="ve-inner">
                <div className="ve-item">
                  <div className="ve-main-img">
                    <div className="ve-main-img-inner">
                      <img src="/img/vacation-experience-img-1.jpg" alt="" />
                    </div>
                  </div>
                </div>

                <div className="ve-item">
                  <div className="ve-content">
                    <div className="ve-c-inner">
                      <div className="ve-c-top">
                        <span className="sub-title">
                          BON APPÉTIT DURING VACATIONS AND TRIPS
                        </span>

                        <h3 className="font-marcellus section-title">
                          Experience exquisite cuisine from all over the world
                        </h3>

                        <div className="section-text">
                          <p>
                            The experienced chefs creates international
                            specialties with unique flavors. Relax with gourmet
                            cuisine and signature cocktails or homemade tonics,
                            all enhanced by beautiful music and gorgeous views
                            over the city. From seasonal menus to dining
                            experiences to satisfy any craving, see what our
                            chefs are preparing for you.
                          </p>
                        </div>

                        <button type="button" className="main-button">
                          Start Exploring
                        </button>
                      </div>
                      <div className="ve-c-bottom">
                        <div className="ve-c-img">
                          <div className="ve-c-img-inner">
                            <img
                              src="/img/vacation-experience-img-2.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="services">
              <div className="page-container">
                <div className="services-inner">
                  <div className="s-content">
                    <span className="sub-title">
                      INTRODUCING OUR SERVICES & FACILITIES
                    </span>

                    <h3 className="font-marcellus secondary-section-title">
                      All you need to know to ensure your trip is perfect.
                    </h3>

                    <div className="section-text">
                      <p>
                        State-of-the-art amenities include a dramatic
                        double-story loft lounge, spectacular rooftop lounge,
                        Technogym fitness center, media corner, and a gracious
                        24/7 resident services team.
                      </p>
                    </div>
                  </div>

                  <ServicesCards />
                </div>
              </div>
            </section>

            <section className="standarts">
              <div className="s-img">
                <img src="/img/high-standart-bg-img.jpg" alt="" />
              </div>

              <div className="overlay"></div>

              <div className="s-content">
                <div className="page-container">
                  <div className="s-content-inner">
                    <span className="sub-title">
                      High standards of hospitality
                    </span>

                    <h3 className="secondary-section-title font-marcellus">
                      We strive to provide our guests with luxury, comfort &
                      tailor-made service.
                    </h3>
                  </div>
                </div>
              </div>
            </section>

            <FeedBackSwiper/>

            <ActivitiesCards/>
          </div>
        </>
      )}
    </main>
  );
};

export default Home;
