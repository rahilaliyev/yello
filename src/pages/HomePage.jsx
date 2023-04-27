import { ReactComponent as Wallet } from "@/assets/images/wallet.svg";
import { ReactComponent as Gateway } from "@/assets/images/gateway.svg";
import { ReactComponent as Chart } from "@/assets/images/chart-tv.svg";
import { ReactComponent as OppositeArrows } from "@/assets/images/opposite-arrows.svg";
import { ReactComponent as ArrowRight } from "@/assets/images/arrow-right.svg";
import { ReactComponent as NearIcon } from "@/assets/images/nearIcon.svg";
import { ReactComponent as ThpayIcon } from "@/assets/images/thpayCoinIcon.svg";
import { ReactComponent as CoinSwap } from "@/assets/images/coinSwap.svg";
import { ReactComponent as ArrowBottom } from "@/assets/images/arrow-bottom.svg";
import { ReactComponent as ChangeIcon } from "@/assets/images/change-icon.svg";
import { ReactComponent as QuestionIcon } from "@/assets/images/question-icon.svg";

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
        <div className="center">
          <h3>Aggregator DEX</h3>
          <p>
            HedgePay’s Aggregator DEX has the ability to track the best prices for the token you want on established
            Decentralized Exchanges. The HedgePay DEX will also provides you with the option to set limit orders, giving you
            the freedom hunt for the token you want at the price you want it
          </p>
          <div className="button-group">
            <button>Buy HedgePay</button>
            <button>
              <span>View Chart</span>
            </button>
          </div>
        </div>
        <div className="right">
          <div className="content">
            <div className="balance">
              Your Balance: <span>$0.92</span>
            </div>
            <div className="price">0.20115234 NEAR</div>
            <form>
              <div className="form-group">
                <div className="paying">
                  <span>You pay</span>
                  <span>3409.2419 THPAY/NEAR</span>
                </div>
                <div className="form-input">
                  <div className="svg">
                    <NearIcon />
                  </div>
                  <input type="number" placeholder="0" />
                  <div className="select-box">
                    <CoinSwap />
                    NEAR
                    <ArrowBottom />
                  </div>
                </div>
                <div className="change-button-and-info">
                  <button type="button">
                    <ChangeIcon />
                  </button>
                  <div className="information">
                    <span>Better by +76.7750%</span>
                    <QuestionIcon />
                  </div>
                </div>
                <div className="form-input">
                  <div className="svg">
                    <ThpayIcon />
                  </div>
                  <input type="number" placeholder="0" />
                  <div className="select-box">
                    <CoinSwap />
                    THPAY
                    <ArrowBottom />
                  </div>
                </div>
                <div className="checkbox-wrapper">
                  <div className="form-checkbox">
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox">checkbox</label>
                  </div>
                  <p>
                    I have read and agree with HedgePay Terms of Service. I have done my research to make sure I am legally
                    able to purchase the token in my country of residence.
                  </p>
                </div>
                <button type="submit">Swap</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
