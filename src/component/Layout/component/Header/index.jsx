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

const Header = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>MyClothes</h1>
        <div className={styles.navbar}>
          <div className={styles["navbar-container"]}>
            <Link className={styles["nav-link"]}>HOME</Link>
            <Link className={styles["nav-link"]}>SHOP</Link>
            <Link className={styles["nav-link"]}>ABOUT</Link>
            <Link className={styles["nav-link"]}>DISCOVER</Link>
            <Link className={styles["nav-link"]}>SOCIAL</Link>
            <Link className={styles["nav-link"]}>OUTFIT</Link>
          </div>
        </div>
        <div className={styles.actions}>
          <div className={styles["actions-item"]}>
            <Popper>
              <FontAwesomeIcon
                className={styles["icon-search"]}
                icon={faMagnifyingGlass}
              ></FontAwesomeIcon>
            </Popper>
            <FontAwesomeIcon onClick={() => navigate('/dashboards')} icon={faUser}></FontAwesomeIcon>
            {/* <button className={styles["Signup-btn"]}>Sign up</button>
            <button className={styles["Login-btn"]}>Log in</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
