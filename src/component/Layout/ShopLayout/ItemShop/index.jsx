import styles from "./ItemShop.module.scss";
import { SearchIcon } from "@bitcoin-design/bitcoin-icons-react/outline";

const ItemShop = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.search}>
          <div className={styles["search-icon"]}>
            <SearchIcon />
          </div>
          <input
            className={styles["search-input"]}
            placeholder="Search"
          ></input>
        </div>
        <div className={styles.content}>
          <div className={styles.filter}>
            <div className={styles.type}>
              <h3>Type</h3>
              <div className={styles["type-group"]}>
                  <label className={styles["input-group"]}>
                    <input type="checkbox" value={"tshirt"}></input>
                    <span>T-Shirt</span>
                  </label>
                  <label className={styles["input-group"]}>
                    <input type="checkbox" value={"pants"}></input>
                    <span>Pants</span>
                  </label>
                  <label className={styles["input-group"]}>
                    <input type="checkbox" value={"shose"}></input>
                    <span>Shose</span>
                  </label>
                  <label className={styles["input-group"]}>
                    <input type="checkbox" value={"spares"}></input>
                    <span>Spares</span>
                  </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemShop;
