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
import {SearchIcon,ContactsIcon} from '@bitcoin-design/bitcoin-icons-react/outline'

const Header = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>MyClothes</h1>
        <div className={styles.navbar}>
          <div className={styles["navbar-container"]}>
            <Link to='/' className={styles["nav-link"]}>HOME</Link>
            <Link to='/shop' className={styles["nav-link"]}>SHOP</Link>
            <Link className={styles["nav-link"]}>ABOUT US</Link>
            <Link className={styles["nav-link"]}>BLOG</Link>
          </div>
        </div>
        <div className={styles.actions}>
          <div className={styles["actions-item"]}>
            <Popper>
              <SearchIcon
                className={styles["icon-search"]}
              ></SearchIcon>
            </Popper>
            <ContactsIcon className={styles.info} onClick={() => navigate('/dashboards/Info')}></ContactsIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
