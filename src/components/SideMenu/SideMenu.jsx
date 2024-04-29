import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  mobileMenuListOne,
  mobileMenuListTwo,
  sideMenuList,
} from "../../utils/data";
import Header from "../Header/Header";
import "./_sideMenu.scss";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFax } from "@fortawesome/free-solid-svg-icons/faFax";
import {
  faFacebookF,
  faInstagram,
  faPinterest,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const SideMenu = ({ setOpenSideMenu, openSideMenu }) => {
  return (
    <>
      <div className="side-menu">
        <Header setOpenSideMenu={setOpenSideMenu} openSideMenu={openSideMenu} />

        <div className="page-container">
          <div className="sm-inner">
            <div className="sm-item">
              <nav className="sm-list">
                <ul>
                  {sideMenuList &&
                    sideMenuList.map((list, index) => (
                      <li key={index} className="font-marcellus">
                        <NavLink className={({ isActive }) => (isActive ? "active-link side-menu-hover" : "side-menu-hover")} to={list.path}>
                          {list.name}
                        </NavLink>
                      </li>
                    ))}
                </ul>
              </nav>

              <div className="mobile-menu">
                <ul className="mobile-menu-item">
                  {mobileMenuListOne &&
                    mobileMenuListOne.map((list, index) => (
                      <li key={index} className="font-jost">
                        <Link to={list.path} className="side-menu-hover">
                          {list.name}
                        </Link>
                      </li>
                    ))}
                </ul>

                <ul className="mobile-menu-item">
                  {mobileMenuListTwo &&
                    mobileMenuListTwo.map((list, index) => (
                      <li key={index} className="font-jost">
                        <Link to={list.path} className="side-menu-hover">
                          {list.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="sm-item">
              <div className="sm-img">
                <img src="/img/side_menu-img.jpg" alt="" />
              </div>
            </div>
            <div className="sm-item">
              <div className="contact-info">
                <h3 className="side-menu-title font-marcellus">Contact Info</h3>
                <ul className="ci-inner">
                  {[
                    {
                      icon: faLocationDot,
                      name: "1250 West 6th Ave, New York, NY 10036, United States",
                      path: "https://www.google.com/maps/place/Times+Square/@40.757975,-73.985543,14z/data=!4m6!3m5!1s0x89c25855c6480299:0x55194ec5a1ae072e!8m2!3d40.7579747!4d-73.9855426!16zL20vMDdxZHI?hl=en",
                    },
                    {
                      icon: faPhone,
                      name: "Phone: +1 212 555 6688",
                      path: "tel:+12125556688",
                    },
                    { icon: faFax, name: "Fax: +1 212 555 6699" },
                    {
                      icon: faEnvelope,
                      name: "Email: info@cozystay.com",
                      path: "mailto:booking@cozystay.com",
                    },
                  ].map((info, index) => (
                    <li key={index}>
                      {info.path ? (
                        <>
                          <a className="ci-name side-menu-hover" href={info.path}>
                            <span className="ci-icon">
                              <FontAwesomeIcon icon={info.icon} />
                            </span>
                            <span>{info.name}</span>
                          </a>
                        </>
                      ) : (
                        <span className="fax-content">
                          <span className="ci-icon">
                            <FontAwesomeIcon icon={info.icon} />
                          </span>
                          <span className="ci-name">{info.name}</span>
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="socials">
                <h3 className="side-menu-title font-marcellus">
                  Stay Connected
                </h3>

                <ul className="s-inner">
                  {[
                    { icon: faFacebookF },
                    { icon: faTwitter },
                    { icon: faPinterest },
                    { icon: faYoutube },
                    { icon: faInstagram },
                  ].map((icon, index) => (
                    <li key={index}>
                      <span>
                        <FontAwesomeIcon icon={icon.icon} />
                      </span>
                    </li>
                  ))}
                </ul>

                <p>© Copyright CozyStay WordPress Theme for Hotel Booking.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
