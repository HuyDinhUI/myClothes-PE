import styles from "./home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import Signup from "../Signup";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Home = () => {
  const productSeller = [
    {
      id: "MH001",
      name: "",
      img: "https://i.imgur.com/aDq8IFd.jpeg",
      priceOld: 10,
      priceNew: 9.9,
      type: "shose",
    },
    {
      id: "MH002",
      name: "",
      img: "https://i.imgur.com/aDq8IFd.jpeg",
      priceOld: 10,
      priceNew: 9.9,
      type: "t-shirt",
    },
    {
      id: "MH003",
      name: "",
      img: "https://i.imgur.com/aDq8IFd.jpeg",
      priceOld: 10,
      priceNew: 9.9,
      type: "shose",
    },
    {
      id: "MH004",
      name: "",
      img: "https://i.imgur.com/aDq8IFd.jpeg",
      priceOld: 10,
      priceNew: 9.9,
      type: "shose",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.standout}>
            <div className={styles["standout-1"]}>
              <div className={styles["heading-standout"]}>
                <h1 className={styles.slogan}>FOR ⟶ EVERYONE BUT NOTANYONE</h1>
                <p className={styles["para-slogan"]}>
                  We establish personal relationships with our boutiques, to
                  make sure each is vetted for a stress-free shopping experience
                </p>
              </div>
            </div>
            <div className={styles["standout-2"]}>
              <div className={styles["img-standout"]}></div>
            </div>
            <div className={styles["standout-3"]}>
              <div className={styles["navigate-standout"]}></div>
              <div className={styles["navigate-standout"]}></div>
            </div>
          </div>
          <div className={styles.bestseller}>
            <div className={styles["heading-seller"]}>
              <h2 className={styles["title-seller"]}>
                BEST SELLER <br></br> MARCH
              </h2>
            </div>
            <div className={styles["product-seller"]}>
              <div className={styles["list-product"]}>
                {productSeller.map((item, index) => {
                  return (
                    <div
                      key={index}
                      id={item.id}
                      className={styles["container-product"]}
                    >
                      <img
                        src={item.img}
                        className={styles["img-product"]}
                      ></img>
                      {/* <div className={styles["img-product"]} style={{backgroundImage:`url(${item.img})`}}></div> */}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={styles.saleOff}>
            <div className={styles["title-saleOff-1"]}>
              <h3>
                SALE <br></br> OFF
              </h3>
            </div>
            <div className={styles["shoes"]}>
              <img
                src="https://i.imgur.com/3WN4rvb.jpg"
                className={styles["img-type"]}
              ></img>
              <h3 className={styles["title-type"]}>SHOES -50%</h3>
            </div>
            <div className={styles["spare"]}>
              <img
                src="https://i.imgur.com/tqzkB80.jpg"
                className={styles["img-type"]}
              ></img>
              <h3 className={styles["title-type"]}>SPARE -55%</h3>
            </div>
            <div className={styles["tshirt"]}>
              <img
                src="https://i.imgur.com/mKtPXLi.jpg"
                className={styles["img-type"]}
              ></img>
              <h3 className={styles["title-type"]}>TSHIRT -60%</h3>
            </div>
            <div className={styles["pants"]}>
              <img
                src="https://i.imgur.com/FkpnP0v.jpg"
                className={styles["img-type"]}
              ></img>
              <h3 className={styles["title-type"]}>PANTS -65%</h3>
            </div>
            <div className={styles["title-saleOff-2"]}>
              <h3>
                FROM <br></br> -50%
              </h3>
            </div>
          </div>
          <div className={styles.register}>
            <div className={styles["heading-register"]}>
              <h3 className={styles["title-register"]}>VOUCHER FOR NEWBIES</h3>
            </div>

            <div className={styles["voucher-register"]}>
              <svg
                width="970"
                height="365"
                viewBox="0 0 970 365"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 18C0 8.05888 8.05888 0 18 0H952C961.941 0 970 8.05888 970 18V135.003C969.834 135.001 969.667 135 969.5 135C943.266 135 922 156.266 922 182.5C922 208.734 943.266 230 969.5 230C969.667 230 969.834 229.999 970 229.997V347C970 356.941 961.941 365 952 365H18C8.05889 365 0 356.941 0 347V229.997C26.0032 229.729 47 208.567 47 182.5C47 156.433 26.0032 135.271 0 135.003V18Z"
                  fill="#605948"
                />
              </svg>
              <div className={styles["content-voucher"]}>
                <h3 className={styles["title-voucher"]}>
                  REGISTER TO RECEIVE VOUCHER <br></br> 50%
                </h3>
                <form className={styles["form-register"]}>
                  <input
                    name="username"
                    type="username"
                    placeholder="enter your username"
                    className={styles["input-register"]}
                  ></input>
                  <input
                    name="email"
                    type="email"
                    placeholder="huydinh@gmail.com"
                    className={styles["input-register"]}
                  ></input>
                  <input
                    name="password"
                    type="password"
                    placeholder="password have must least 8 characters"
                    className={styles["input-register"]}
                  ></input>
                  <input
                    name="confirm-password"
                    type="password"
                    placeholder="confirm password"
                    className={styles["input-register"]}
                  ></input>
                  <button className={styles["btn-register"]}>SUBMIT</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
