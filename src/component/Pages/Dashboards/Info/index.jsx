import { useState } from "react";
import styles from "./info.module.scss";

const Info = () => {
  const [namebank, setNameBank] = useState(null);
  const [typecard, setTypeCard] = useState(null);
  const [idcard, SetIdCard] = useState(null);
  const [namecard, SetNameCard] = useState(null);
  const [monththru, setMonthThru] = useState(null);
  const [yearthru, setYearThru] = useState(null);
  const [cvc,setCVC] = useState(null)

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles["info-user"]}>
            <div className={styles.avatar}>
              <img
                className={styles["img-avatar"]}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/ff832a9b10986dd21cefbad621a3ca91~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=b7dcb886&x-expires=1742097600&x-signature=dlC3xKDXzfoUF6zCojlJn62xo2w%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my2"
              ></img>
            </div>
            <div className={styles.information}>
              <form className={styles["form-info"]}>
                <input
                  placeholder="username"
                  className={styles["input-info"]}
                ></input>
                <input
                  placeholder="fullname"
                  className={styles["input-info"]}
                ></input>
                <input
                  placeholder="phone number"
                  className={styles["input-info"]}
                ></input>
                <input
                  placeholder="address"
                  className={styles["input-info"]}
                ></input>
                <input
                  type="email"
                  placeholder="email"
                  className={styles["input-info"]}
                ></input>
                <button className={styles["btn-info"]}>save</button>
              </form>
            </div>
          </div>
          <div className={styles["info-card"]}>
            <div className={styles["visa"]}>
              <div className={styles.bank}>
                <p>{namebank === null ? ".." : namebank}</p>
              </div>
              <div className={styles["type-card"]}>
                <p>{typecard === null ? "...." : typecard}</p>
              </div>
              <div className={styles["id-card"]}>
                <p>{idcard === null ? ".... .... .... ...." : idcard}</p>
                {/* <p>{idcard === null ? '....':idcard.Slice(4,7)}</p>
                    <p>{idcard === null ? '....':idcard.Slice(8,11)}</p>
                    <p>{idcard === null ? '....':idcard.Slice(12,15)}</p> */}
              </div>
              <div className={styles["name-own"]}>
                <p>
                  {namecard === null
                    ? ".............."
                    : namecard.toUpperCase()}
                </p>
              </div>
              <div className={styles["value-thur"]}>
                <p className={styles["title-value-thur"]}>
                  {monththru === null ? ".." : monththru}
                </p>
                <p>/</p>
                <p className={styles["title-value-thur"]}>
                  {yearthru === null ? ".." : yearthru}
                </p>
              </div>
            </div>
            <div className={styles["form-info-card"]}>
              <form className={styles["form-card"]}>
                <select
                  value={namebank}
                  className={styles["input-card"]}
                  onChange={(e) => setNameBank(e.target.value)}
                >
                  <option value disabled selected>
                    Select bank name
                  </option>
                  <option value="MB">MB Bank</option>
                  <option value="ACB">ACB Bank</option>
                  <option>MBank</option>
                </select>
                <select
                  value={typecard}
                  className={styles["input-card"]}
                  onChange={(e) => setTypeCard(e.target.value)}
                >
                  <option value disabled selected>
                    Select type card
                  </option>
                  <option value={"VISA"}>Visa</option>
                  <option value={"MASTERCARD"}>Mastercard</option>
                </select>
                <input
                  value={idcard}
                  onChange={(e) => SetIdCard(e.target.value)}
                  className={styles["input-card"]}
                  placeholder="id card"
                ></input>
                <input
                  value={namecard}
                  onChange={(e) => SetNameCard(e.target.value)}
                  className={styles["input-card"]}
                  placeholder="name"
                ></input>
                <input
                  value={monththru}
                  onChange={(e) => setMonthThru(e.target.value)}
                  className={styles["input-card"]}
                  placeholder="month due"
                ></input>
                <input
                  value={yearthru}
                  onChange={(e) => setYearThru(e.target.value)}
                  className={styles["input-card"]}
                  placeholder="year due"
                ></input>
                <input 
                value={cvc} 
                onChange={(e) => setCVC(e.target.value)}
                className={styles["input-card"]}
                placeholder="CVC"
                ></input>
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
