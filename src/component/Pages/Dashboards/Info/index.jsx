import styles from "./info.module.scss";

const Info = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles["info-user"]}>
            <div className={styles.avatar}>
              <img className={styles["img-avatar"]} src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/ff832a9b10986dd21cefbad621a3ca91~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=b7dcb886&x-expires=1742097600&x-signature=dlC3xKDXzfoUF6zCojlJn62xo2w%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my2"></img>
            </div>
            <div className={styles.information}>
                <form className={styles["form-info"]}>
                    <input className={styles["input-info"]}></input>
                    <input className={styles["input-info"]}></input>
                    <input className={styles["input-info"]}></input>
                    <input className={styles["input-info"]}></input>
                    <input className={styles["input-info"]}></input>
                    <button className={styles["btn-info"]}>save</button>
                </form>
            </div>
          </div>
          <div className={styles["info-card"]}>
            <div className={styles["visa"]}>
                <div className={styles.bank}>
                    <p>..</p>
                </div>
                <div className={styles["type-card"]}>
                    <p>....</p>
                </div>
                <div className={styles["id-card"]}>
                    <p>....</p>
                    <p>....</p>
                    <p>....</p>
                    <p>....</p>
                </div>
                <div className={styles["name-own"]}>
                    <p>..............</p>
                </div>
                <div className={styles["value-thur"]}>
                    <p className={styles["title-value-thur"]}>..</p>
                    <p>/</p>
                    <p className={styles["title-value-thur"]}>..</p>
                </div>
            </div>
            <div className={styles["form-info-card"]}>
                <form className={styles["form-card"]}>
                    <select className={styles["input-card"]}>
                        <option>MBank</option>
                        <option>MBank</option>
                        <option>MBank</option>
                    </select>
                    <select className={styles["input-card"]}>
                        <option>Visa</option>
                        <option>Mastercard</option>
                    </select>
                    <input className={styles["input-card"]}></input>
                    <input className={styles["input-card"]}></input>
                    <input className={styles["input-card"]}></input>
                    <input className={styles["input-card"]}></input>
                    <input className={styles["input-card"]}></input>
                    <button className={styles["btn-card"]}>save</button>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
