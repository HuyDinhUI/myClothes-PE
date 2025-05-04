import { Link, useNavigate } from "react-router-dom";
import styles from "./header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import Popper from "../../../Popper";
import { Navigate } from "react-router-dom";
import {
  SearchIcon,
  ContactsIcon,
  CarIcon,
  CartIcon,
  MenuIcon,
} from "@bitcoin-design/bitcoin-icons-react/outline";
import { useEffect, useState } from "react";

const slide_content = [
  "Share Your Dream",
  "For Anyone For Every Style",
  '"MyClothes – Wear Your Story."',
];

const Header = () => {
  const navigate = useNavigate();

  const [slideIndex, setSlideIndex] = useState(1);
  const text = "myClothes"

  function showSlide(n) {
    const slides = document.querySelectorAll(`.${styles.slide}`);
    if (n > slides.length) {
      setSlideIndex(1);
    }
    if (n < 1) {
      setSlideIndex(slides.length);
    }
    slides.forEach((slide) => {
      slide.style.transform = "translateX(-" + (slideIndex - 1) * 100 + "%)";
    });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    showSlide(slideIndex);
  }, [slideIndex]);

  return (
    <div className={styles.wrapper}>
      <div className={styles["header-slider"]}>
        <div className={styles.slides}>
          {slide_content.map((s) => {
            return (
              <div className={styles.slide}>
                <p>{s}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles["sidebar-icon"]}>
          <MenuIcon></MenuIcon>
        </div>
        <div className={styles.title}>
          <img width="50" height="70" src="https://s3.us-east-2.amazonaws.com/asset-uploads.agent.ai/8e75e401dd2beb114327f16f5f2d78ae0f0f775be9173c4efaa8533d_tmpxe88fw8o.jpg"></img>
          <p>MyClothes</p>
        </div>
        <div className={styles["navbar-items"]}>
          <div className={styles["item"]}>
            <SearchIcon className={styles["icon-search"]}></SearchIcon>
            <CartIcon className={styles.cart}></CartIcon>
            <ContactsIcon
              className={styles.info}
              onClick={() => navigate("/dashboards/Account Settings")}
            ></ContactsIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
