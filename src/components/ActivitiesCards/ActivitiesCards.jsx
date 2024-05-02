import { Link } from "react-router-dom";
import { activitiesCards } from "../../utils/data";
import "./_activitiesCards.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ActivitiesCards = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="activities">
      <div className="page-container">
        <div className="a-title">
          <span className="sub-title">LOCAL TOURS & ACTIVITIES</span>

          <h3 className="section-title font-marcellus">Discover The City</h3>

          <div className="a-text">
            <p>
              You are in a city where people are never bored. Immerse yourself
              in local art exhibitions, neighbourhood events, seasonal
              activities and numerous parks.
            </p>
          </div>
        </div>

        <div className="a-cards">
          <div className="a-cards-inner">
            {activitiesCards &&
              activitiesCards.map((card, index) => (
                <div
                  className="a-card-item"
                  key={index}
                  data-aos={card.aos}
                  data-aos-duration="1500"
                >
                  <Link to="/" className="a-card-inner">
                    {card.recommended && (
                      <div className="recommended">
                        <span>Recommended</span>
                      </div>
                    )}

                    <div className="a-card-img">
                      <img src={card.image} alt="" />
                    </div>

                    <div className="a-card-content">
                      <span className="sub-title">{card.sub_title}</span>

                      <h4 className="font-marcellus">{card.title}</h4>

                      <div className="card-text">
                        <p>{card.text}</p>
                      </div>

                      <button className="card-btn font-jost">
                        <span className="active">Discover More</span>
                        <span className="arrow-icon">
                          <FontAwesomeIcon icon={faAngleRight} size="xs" />
                        </span>
                      </button>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesCards;
