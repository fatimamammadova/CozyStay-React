import { useState } from "react";
import Header from "../../components/Header/Header";
import "./_home.scss";
import SideMenu from "../../components/SideMenu/SideMenu";

const Home = () => {
  const [openSideMenu, setOpenSideMenu] = useState(false);
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
                          provide a peaceful, private retreat in the heart of
                          one of the world’s most iconic cities. Experience a
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
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default Home;
