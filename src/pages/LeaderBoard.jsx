import { ReactComponent as Leaderboard } from "@/assets/images/leaderBoard.svg";
import Partnership from "@/assets/images/partner-ship.svg";
import { ReactComponent as ArrowRight } from "@/assets/images/arrow-right.svg";
import LeaderBoardImage from "@/assets/images/Globe.png";

const LeaderBoard = () => {
  return (
    <section className="homepage">
      <div className="homepage-container container">
        <div className="left">
          <h6>
            HPAY <span>Leaderboard</span>
          </h6>
          <ul>
            <li>
              <Leaderboard /> <span>Leaderboard</span> <ArrowRight className="arrow" />
            </li>
            <li className="active">
              <img src={Partnership} alt="logo" />
              <span>Partnerships</span> <ArrowRight className="arrow" />
            </li>
          </ul>
        </div>
        <div className="center">
          <h3>Security Center</h3>
          <p>
            One of HedgePay’s three core tenants is security. Use our database to find projects with known leaders and
            audited contracts.
          </p>
        </div>
        <div className="right no-css">
          <img src={LeaderBoardImage} alt="World" />
        </div>
      </div>
    </section>
  );
};

export default LeaderBoard;
