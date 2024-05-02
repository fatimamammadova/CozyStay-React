import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FooterTop from "./FooterTop/FooterTop";
import "./_footer.scss";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import {
  faCcMastercard,
  faCcPaypal,
  faCcStripe,
  faCcVisa,
  faFacebookF,
  faInstagram,
  faPinterest,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <FooterTop />
      <footer>
        <div className="f-top">
          <div className="page-container">
            <div className="f-top-inner">
              <div className="f-top-content">
                <span className="sub-title">STAY TUNED WITH COZYSTAY</span>
                <h5 className="font-marcellus">
                  Sign up for our newsletter to receive our news, deals and
                  special offers.
                </h5>
              </div>

              <div className="form">
                <form>
                  <div className="form-inner">
                    <div className="form-input">
                      <input type="email" placeholder="Your Email Adress" />

                      <button type="submit" className="font-marcellus">
                        Subscribe
                        <span className="icon">
                          <FontAwesomeIcon icon={faPaperPlane} size="lg" />
                        </span>
                      </button>
                    </div>
                    <p>
                      <label htmlFor="check">
                        <input type="checkbox" name="" id="check" />I agree to
                        the Privacy Policy
                      </label>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="f-bottom">
          <div className="page-container">
            <div className="f-bottom-inner f-b-col">
              <p className=" f-b-col">© Copyright CozyStay WordPress Theme for Hotel Booking.</p>

              <div className="icons f-b-col">
                {[
                  { icon: faCcPaypal },
                  { icon: faCcMastercard },
                  { icon: faCcVisa },
                  { icon: faCcStripe },
                ].map((i, index) => (
                  <span key={index} className="icon-wrapper">
                    <FontAwesomeIcon icon={i.icon} size="2xl" />
                  </span>
                ))}
              </div>

              <div className="socials f-b-col">
                <h6>Stay Connected:</h6>

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
                        <FontAwesomeIcon icon={icon.icon} size="lg" />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
