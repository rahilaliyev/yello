import { ReactComponent as Wallet } from "@/assets/images/wallet.svg";
import { ReactComponent as Gateway } from "@/assets/images/gateway.svg";
import { ReactComponent as Chart } from "@/assets/images/chart-tv.svg";
import { ReactComponent as OppositeArrows } from "@/assets/images/opposite-arrows.svg";
import { ReactComponent as ArrowRight } from "@/assets/images/arrow-right.svg";

const HomePage = () => {
  return (
    <section className="homepage">
      <div className="homepage-container container">
        <div className="left">
          <h6>
            HPAY <span>Exchange</span>
          </h6>
          <ul>
            <li className="active">
              <Wallet /> <span>Buy HedgePay</span> <ArrowRight className="arrow" />
            </li>
            <li>
              <Gateway /> <span>Transfer Gateway</span> <ArrowRight className="arrow" />
            </li>
            <li>
              <Chart /> <span>View Chart</span> <ArrowRight className="arrow" />
            </li>
            <li>
              <OppositeArrows /> <span>Buy with Transak</span> <ArrowRight className="arrow" />
            </li>
          </ul>
        </div>
        <div className="center">center</div>
        <div className="right">right</div>
      </div>
    </section>
  );
};

export default HomePage;
