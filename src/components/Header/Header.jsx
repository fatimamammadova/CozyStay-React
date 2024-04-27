import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactHeader from "./ContactHeader/ContactHeader";
import { Link, NavLink } from "react-router-dom";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./_header.scss";

const Header = () => {
  return (
    <header>
      <ContactHeader />

      <div className="page-container navbar-container">
        <div className="navbar-item">
          <button type="button" className="menu-icon">
            <span className="menu-line"></span>
            <span className="menu-line"></span>
            <span className="menu-line"></span>
          </button>

          <nav>
            <ul>
              <li>
                <NavLink to="/">
                  <span className="active">Home</span>
                  <span className="icon-container">
                    <FontAwesomeIcon icon={faChevronDown} size="xs" />
                  </span>
                </NavLink>
              </li>

              <li>
                <NavLink to="/rooms">
                  <span className="active">Rooms</span>
                  <span className="icon-container">
                    <FontAwesomeIcon icon={faChevronDown} size="xs" />
                  </span>
                </NavLink>
              </li>

              <li>
                <NavLink to="/pages">
                  <span className="active">Pages</span>
                  <span className="icon-container">
                    <FontAwesomeIcon icon={faChevronDown} size="xs" />
                  </span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className="navbar-item logo">
          <img src="/img/main-logo-300x60.png" alt="" />
        </div>

        <div className="navbar-item">
          <div className="language">
            <a href="#">EN</a> / <a href="#">FR</a>
          </div>

          <Link to="/">
            <span className="main-button">Check Availability</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
