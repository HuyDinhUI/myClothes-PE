import styles from "./popper.module.scss";
import Tippy from "@tippyjs/react/headless";

const Popper = ({ children, data }) => {
  return (
    <Tippy
    interactive
    placement="bottom-end"
    
      render={(attrs) => (
        <div className={styles.wrapper} tabIndex="-1" {...attrs}>
          <div className={styles.container}>
            <div className={styles.content}>
              <div className={styles.search}>
                <input
                  className={styles["search-input"]}
                  placeholder="enter product name"
                ></input>
              </div>
              <div className={styles.items}>
                <img className={styles["img-product"]}></img>
                <h3 className={styles["title-product"]}></h3>
              </div>
            </div>
          </div>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
};

export default Popper;
