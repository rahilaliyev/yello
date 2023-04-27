import { createContext, useState, useEffect } from "react";

const ScreenSizeContext = createContext();

export default ScreenSizeContext;

export const ScreenSizeProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let contextData = {
    isMobile: screenSize < 1024,
  };

  return <ScreenSizeContext.Provider value={contextData}>{children}</ScreenSizeContext.Provider>;
};
