import { useState, useCallback } from "react";
import { ReactComponent as Wallet } from "@/assets/images/wallet.svg";
import { ReactComponent as Gateway } from "@/assets/images/gateway.svg";
import { ReactComponent as Chart } from "@/assets/images/chart-tv.svg";
import { ReactComponent as OppositeArrows } from "@/assets/images/opposite-arrows.svg";
import { ReactComponent as ArrowRight } from "@/assets/images/arrow-right.svg";
import { ReactComponent as CoinSwap } from "@/assets/images/coinSwap.svg";
import { ReactComponent as ArrowBottom } from "@/assets/images/arrow-bottom.svg";
import { ReactComponent as ChangeIcon } from "@/assets/images/change-icon.svg";
import { ReactComponent as QuestionIcon } from "@/assets/images/question-icon.svg";
import { ReactComponent as Mark } from "@/assets/images/mark.svg";
import NearIconPng from "@/assets/images/nearIcon.png";
import ThpayIcon from "@/assets/images/thpayIcon.png";

const HomePage = () => {
  const [values, setValues] = useState({ firstValue: "", secondValue: "", condition: false });

  const handleChange = useCallback(({ target: { name, value, checked } }) => {
    name === "condition"
      ? setValues((prevState) => ({
          ...prevState,
          condition: checked,
        }))
      : setValues((prevState) => ({
          ...prevState,
          [name]: value,
        }));
  }, []);
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(values);
    },
    [values]
  );

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
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <div className="paying">
                  <span>You pay</span>
                  <span>3409.2419 THPAY/NEAR</span>
                </div>
                <div className="form-input">
                  <div className="svg">
                    <img src={NearIconPng} alt="near" />
                  </div>
                  <input type="number" placeholder="0" value={values.firstValue} onChange={handleChange} name="firstValue" />
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
                    <img src={ThpayIcon} alt="thpay" />
                  </div>
                  <input
                    type="number"
                    placeholder="0"
                    value={values.secondValue}
                    onChange={handleChange}
                    name="secondValue"
                  />
                  <div className="select-box">
                    <CoinSwap />
                    THPAY
                    <ArrowBottom />
                  </div>
                </div>
                <div className="checkbox-wrapper">
                  <div className="form-checkbox">
                    <input type="checkbox" name="condition" id="checkbox" onChange={handleChange} />
                    <label htmlFor="checkbox">
                      <Mark />
                    </label>
                  </div>
                  <p>
                    I have read and agree with HedgePay Terms of Service. I have done my research to make sure I am legally
                    able to purchase the token in my country of residence.
                  </p>
                </div>
                <button disabled={!values.firstValue || !values.secondValue || !values.condition} type="submit">
                  Swap
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
