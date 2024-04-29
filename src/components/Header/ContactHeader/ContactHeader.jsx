import "./_contactHeader.scss";

const ContactHeader = ({ openSideMenu }) => {
  return (
    <div className="contact">
      <div className="contact-overlay"></div>

      <div className="page-container contact-inner">
        <div>
          <a
            target="_blank"
            href="https://www.google.com/maps/place/Times+Square/@40.757975,-73.985543,14z/data=!4m6!3m5!1s0x89c25855c6480299:0x55194ec5a1ae072e!8m2!3d40.7579747!4d-73.9855426!16zL20vMDdxZHI?hl=en"
            className={openSideMenu ? "side-menu-hover" : ""}
          >
            1250 WEST 6TH AVE, NEW YORK, NY 10036, UNITED STATES
          </a>
        </div>

        <div>
          <a
            href="tel:+12125556688"
            className={openSideMenu ? "side-menu-hover" : ""}
          >
            TEL: +1 212 555 6688
          </a>
          <p className={openSideMenu ? "side-menu-hover" : ""}>
            FAX: +1 212 555 6699
          </p>
          <a
            href="mailto:booking@cozystay.com"
            className={openSideMenu ? "side-menu-hover" : ""}
          >
            BOOKING@COZYSTAY.COM
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;
