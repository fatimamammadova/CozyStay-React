import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactHeader from "./ContactHeader/ContactHeader";
import { Link, NavLink } from "react-router-dom";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./_header.scss";
import { menu } from "../../utils/data";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = ({ setOpenSideMenu, openSideMenu }) => {
  return (
    <header className={`${openSideMenu ? "menu" : ""}`}>
      <ContactHeader openSideMenu={openSideMenu} />

      <div className="header-overlay"></div>

      <div className="page-container navbar-container">
        <div className="navbar-item">
          <button
            type="button"
            className="menu-icon"
            onClick={() => setOpenSideMenu((prev) => !prev)}
          >
            {openSideMenu ? (
              <span className="xmark">
                <FontAwesomeIcon icon={faXmark} size="2xl" />
              </span>
            ) : (
              <>
                <span className="menu-line"></span>
                <span className="menu-line"></span>
                <span className="menu-line"></span>
              </>
            )}
          </button>


          {openSideMenu ? (
            <>
            
            </>
          ) : ( <nav>
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
                              <NavLink className={({ isActive }) => (isActive ? "submenu-active" : "")}  to={submenu.path}>{submenu.name}</NavLink>
                            </li>
                          ))}
                      </ul>
                    )}
                  </li>
                ))}
            </ul>
          </nav>)}
         
        </div>

        <div className="navbar-item logo">
          <Link to="/">
            <img src="/img/main-logo-300x60.png" alt="" className={openSideMenu ? "side-menu-hover" : ""} />
          </Link>
        </div>

        <div className="navbar-item">
          <div className="language">
            <a href="#" className={openSideMenu ? "side-menu-hover" : ""}>EN</a> / <a href="#" className={openSideMenu ? "side-menu-hover" : ""}>FR</a>
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
