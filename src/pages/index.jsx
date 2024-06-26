import Footer from "../components/Footer/Footer";
import SideMenu from "../components/SideMenu/SideMenu";
import { useState } from "react";
import Header from "../components/Header/Header";
import GoToTop from "../components/GoToTop/GoToTop";

const Index = ({ children }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  return (
    <>
      <div className="container">
        {openSideMenu ? (
          <SideMenu
            setOpenSideMenu={setOpenSideMenu}
            openSideMenu={openSideMenu}
          />
        ) : (
          <>
            <Header
              setOpenSideMenu={setOpenSideMenu}
              openSideMenu={openSideMenu}
            />

            <main>{children}</main>
          </>
        )}
      </div>
        <GoToTop />
      {!openSideMenu && <Footer />}
    </>
  );
};

export default Index;
