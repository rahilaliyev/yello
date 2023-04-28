import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const ScreenSizeContext = createContext();

export default ScreenSizeContext;

export const ScreenSizeProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [sidebarMobile, setSidebarMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let contextData = {
    isMobile: screenSize < 1024,
    sidebarMobile,
    setSidebarMobile,
  };

  return <ScreenSizeContext.Provider value={contextData}>{children}</ScreenSizeContext.Provider>;
};

ScreenSizeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
