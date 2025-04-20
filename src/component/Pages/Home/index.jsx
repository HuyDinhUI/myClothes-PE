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
          <div className={styles["container-hero"]}>
            <img
              src="//levents.asia/cdn/shop/files/LEVENTS_X_HELLO_KITTY_PC_BANNER.jpg?v=1734680006&amp;width=3840"
              alt=""
              srcset="//levents.asia/cdn/shop/files/LEVENTS_X_HELLO_KITTY_PC_BANNER.jpg?v=1734680006&amp;width=375 375w, //levents.asia/cdn/shop/files/LEVENTS_X_HELLO_KITTY_PC_BANNER.jpg?v=1734680006&amp;width=550 550w, //levents.asia/cdn/shop/files/LEVENTS_X_HELLO_KITTY_PC_BANNER.jpg?v=1734680006&amp;width=750 750w, //levents.asia/cdn/shop/files/LEVENTS_X_HELLO_KITTY_PC_BANNER.jpg?v=1734680006&amp;width=1100 1100w, //levents.asia/cdn/shop/files/LEVENTS_X_HELLO_KITTY_PC_BANNER.jpg?v=1734680006&amp;width=1500 1500w, //levents.asia/cdn/shop/files/LEVENTS_X_HELLO_KITTY_PC_BANNER.jpg?v=1734680006&amp;width=1780 1780w, //levents.asia/cdn/shop/files/LEVENTS_X_HELLO_KITTY_PC_BANNER.jpg?v=1734680006&amp;width=2000 2000w, //levents.asia/cdn/shop/files/LEVENTS_X_HELLO_KITTY_PC_BANNER.jpg?v=1734680006&amp;width=3000 3000w, //levents.asia/cdn/shop/files/LEVENTS_X_HELLO_KITTY_PC_BANNER.jpg?v=1734680006&amp;width=3840 3840w"
              width="1920"
              height="916.0000000000001"
              loading="lazy"
              fetchpriority="high"
              sizes="100vw"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
