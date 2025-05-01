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
  MenuIcon
} from "@bitcoin-design/bitcoin-icons-react/outline";
import { useEffect, useState } from "react";


const slide_content = ['Share Your Dream','Sale Off 50%','For Anyone For Every Style']

const Header = () => {
  const navigate = useNavigate();

  const [slideIndex,setSlideIndex] = useState(1)

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
      setSlideIndex((prev) => prev + 1)
    }, 5000);

    return () => clearInterval(interval);
  },[]);

  useEffect(()=>{
    showSlide(slideIndex)
  },[slideIndex])

  return (
    <div className={styles.wrapper}>
      <div className={styles["header-slider"]}>
        <div className={styles.slides}>
          {slide_content.map(s => {
            return (
              <div className={styles.slide}>
                <p>{s}</p>
              </div>
            )
          })}
          {/* <div className={styles.slide}>
            <p>Share Your Dream</p>
          </div>
          <div className={styles.slide}>
            <p>Save Off 50%</p>
          </div> */}
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles["sidebar-icon"]}>
          <MenuIcon></MenuIcon>
        </div>
        <h1 className={styles.title}>MyClothes</h1>
        <div className={styles["navbar-items"]}>
          <div className={styles["item"]}>
            <Popper>
              <SearchIcon className={styles["icon-search"]}></SearchIcon>
            </Popper>
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
