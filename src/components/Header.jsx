import { ReactComponent as Logo } from "@/assets/images/Logo.svg";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Basket } from "@/assets/images/basket.svg";
const Header = () => {
  return (
    <header>
      <div className="header-container container">
        <div className="left">
          <Link to="/" className="logo">
            <Logo />
          </Link>
          <ul>
            <li>
              <NavLink to="/swap" className={({ isActive }) => (isActive ? "active" : "")}>
                Swap
              </NavLink>
            </li>
            <li>
              <NavLink to="/rewards" className={({ isActive }) => (isActive ? "active" : "")}>
                Rewards
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className={({ isActive }) => (isActive ? "active" : "")}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/launchpad" className={({ isActive }) => (isActive ? "active" : "")}>
                Launchpad
              </NavLink>
            </li>
            <li>
              <NavLink to="/leaderboard" className={({ isActive }) => (isActive ? "active" : "")}>
                Leaderboard
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="right">
          <ul>
            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/support" className={({ isActive }) => (isActive ? "active" : "")}>
                Support
              </NavLink>
            </li>
          </ul>
          <div className="basket-lang">
            <button>Connect Wallet</button>
            <span className="lang">En</span>
            <div className="basket">
              <Basket />
              <span className="notification">1</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
