import "./_footerTop.scss";


const FooterTop = () => {
  return (
    <div className="footer-top">
      <div className="f-t-inner">
        <div
          className="f-t-item"
          style={{
            backgroundImage: "url('../../public/img/footer-img-1.jpg')",
          }}
        >
          <div className="overlay"></div>

          <div className="f-t-content">
            <span className="sub-title">OUR LOCATION</span>
            <h5 className="f-t-title font-marcellus">Getting Here</h5>
            <div className="f-t-text">
              <p>
                CozyStay Aparthotel Times Square <br />
                415 6th Avenue, New York, New York, USA, 10018
                <br />
                Tel: +1 212-555-6699
                <br />
                Email: information@cozystay.com
                <br />
              </p>
            </div>

            <button className="main-button">Get Directions</button>
          </div>
        </div>

        <div
          className="f-t-item"
          style={{
            backgroundImage: "url('../../public/img/footer-img-2.jpg')",
          }}
        >
          <div className="overlay"></div>

          <div className="f-t-content">
            <span className="sub-title">BOOK A ROOM</span>
            <h5 className="f-t-title font-marcellus">
              Spend Your Time With Us
            </h5>
            <div className="f-t-text">
              <p>
                Everything at CozyStay, in its restaurants, bar and spa is
                designed to make your stay, lunch or dinner unforgettable.
                <br />
                Tel: +1 212-555-6688 <br />
                Email: reservation@cozystay.com
              </p>
            </div>

            <button className="main-button">Reserve Your Stay</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
