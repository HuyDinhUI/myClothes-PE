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
import { useEffect, useState } from "react";
import { m } from "framer-motion";
import {
  UserIcon,
  CartIcon,
  MenuIcon,
  SearchIcon,
} from "../../../../assets/Icon";

const slide_content = [
  "Share Your Dream",
  "For Anyone For Every Style",
  '"MyClothes – Wear Your Story."',
];

const navbar_items = [
  {
    title: "ABOUT",
    to: "/about",
  },
  {
    title: "SHOP",
    to: "/shop",
  },
  {
    title: "HOME",
    to: "/",
  },
  {
    title: "CONTACT US",
    to: "/contact",
  },
];

const Header = () => {
  const navigate = useNavigate();

  const [slideIndex, setSlideIndex] = useState(1);
  const text = "myClothes";

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
        {/* <div className={styles.title}>
          <p>MyClothes</p>
        </div> */}
        <div className={styles["navbar-items"]}>
          {navbar_items.map((item) => {
            return <Link to={item.to}>{item.title}</Link>;
          })}
        </div>
        <div className={styles["user-items"]}>
          <SearchIcon style={{ cursor: "pointer" }}></SearchIcon>
          <CartIcon style={{ cursor: "pointer" }}></CartIcon>
          <UserIcon
            style={{ cursor: "pointer" }}
            onclick={() => navigate("/dashboards/Account Settings")}
          ></UserIcon>
        </div>
      </div>
    </div>
  );
};

export default Header;
