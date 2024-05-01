import { servicesCards } from "../../utils/data";
import "./_servicesCards.scss";
import { Link } from "react-router-dom";

const ServicesCards = () => {
  return (
    <div className="services-cards">
      <div className="sc-inner">
        {servicesCards &&
          servicesCards.map((card, index) => (
            <div className="s-card" key={index}>
              <Link to="/" className="s-c-inner">
                <div className="s-card-item">
                  <div className="s-card-img">
                      <img src={card.image} alt="" />
                  </div>
                </div>
                <div className="s-card-item">
                  <div className="s-card-content">
                    <span className="sub-title">{card.sub_title}</span>

                    <h4 className="card-title font-marcellus">{card.title}</h4>

                    <div className="card-text">
                      <p>{card.text}</p>
                    </div>

                    <button className="main-button">Discover More</button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ServicesCards;
