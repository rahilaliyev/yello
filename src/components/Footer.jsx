import CertikLogo from "@/assets/images/certik.webp";
import { ReactComponent as MarketIcon } from "@/assets/images/coin-market.svg";
import { ReactComponent as SocialIcon } from "@/assets/images/socials-icon.svg";
import { ReactComponent as SupportIcon } from "@/assets/images/support-icon.svg";
import { Link } from "react-router-dom";
import ScreenSizeContext from "../context/ScreenSizeContext";
import { useContext } from "react";

const Footer = () => {
  const { isMobile } = useContext(ScreenSizeContext);

  return (
    !isMobile && (
      <footer>
        <div className="footer-container container">
          <div className="left">
            <img src={CertikLogo} alt="Certig Logo" />
          </div>
          <div className="right">
            <Link to="#">
              <MarketIcon />
              <span>CoinMarketCap</span>
            </Link>
            <Link to="#">
              <SocialIcon />
              <span>Socials</span>
            </Link>
            <Link to="#">
              <SupportIcon />
              <span>Support</span>
            </Link>
          </div>
        </div>
      </footer>
    )
  );
};

export default Footer;
