import Footer from "../components/Footer/Footer";
import SideMenu from "../components/SideMenu/SideMenu";
import { useState } from "react";
import Header from "../components/Header/Header";

const Index = ({ children }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  return (
    <>
      <main>
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
            {children}
          </>
        )}
      </main>

      {!openSideMenu && <Footer />}
    </>
  );
};

export default Index;
