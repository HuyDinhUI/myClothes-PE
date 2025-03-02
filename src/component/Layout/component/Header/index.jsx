import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
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
            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
