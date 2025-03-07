import styles from "./home.module.scss";

const Home = () => {
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
        </div>
      </div>
    </div>
  );
};

export default Home;
