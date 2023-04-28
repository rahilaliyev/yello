import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import ScreenSizeContext from "../context/ScreenSizeContext";
import { ReactComponent as Hamburger } from "@/assets/images/hamburger.svg";

const Layout = () => {
  const { isMobile } = useContext(ScreenSizeContext);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      {isMobile && (
        <div className="hamburger">
          <div className="hamburger-wrapper">
            <Hamburger />
            <span>Menu</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
