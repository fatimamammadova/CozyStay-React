import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactHeader from "./ContactHeader/ContactHeader";
import { Link, NavLink, useParams } from "react-router-dom";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./_header.scss";
import { menu } from "../../utils/data";

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
            <ul className="menu">
              {menu &&
                menu.map((link, index) => (
                  <li key={index} className="menu-list">
                    <NavLink
                      to={link.path}
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      <span className="active">{link.name}</span>
                      <span className="icon-container">
                        <FontAwesomeIcon icon={faChevronDown} size="xs" />
                      </span>
                    </NavLink>

                    {link.sub_menu && (
                      <ul className="submenu">
                        {link.sub_menu &&
                          link.sub_menu.map((submenu, index) => (
                            <li className="submenu-list" key={index}>
                              <Link to={submenu.path}>{submenu.name}</Link>
                            </li>
                          ))}
                      </ul>
                    )}
                  </li>
                ))}
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
