import { useState } from "react";
import styles from "./info.module.scss";
import { useForm } from "react-hook-form";
import authorizedAxiosInstance from "../../../../utils/AthorizedAxios";

const Info = ({ infoUser }) => {
  const [namebank, setNameBank] = useState(null);
  const [typecard, setTypeCard] = useState(null);
  const [idcard, SetIdCard] = useState(null);
  const [namecard, SetNameCard] = useState(null);
  const [monththru, setMonthThru] = useState(null);
  const [yearthru, setYearThru] = useState(null);
  const [cvc, setCVC] = useState(null);
  console.log(infoUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitUpdateInfoUser = async (data) => {
    console.log("submit login: ", data);
    try {
      const res = await authorizedAxiosInstance.put(
        "http://localhost:5023/v1/dashboards/update",
        data
      );
    } catch (error) {}
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles["info-user"]}>
            <div className={styles.avatar}>
              <img
                className={styles["img-avatar"]}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/ff832a9b10986dd21cefbad621a3ca91~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=582d0c55&x-expires=1742479200&x-signature=hGtGRL4riCrUe8i64%2FNDsMphs78%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my2"
              ></img>
            </div>
            <div className={styles.information}>
              <form
                onSubmit={handleSubmit(submitUpdateInfoUser)}
                className={styles["form-info"]}
              >
                <input
                  type="text"
                  {...register("username", {
                    required: "Email cannot be blank",
                  })}
                  placeholder="username"
                  className={styles["input-info"]}
                  value={infoUser.username}
                ></input>
                <input
                  type="text"
                  {...register("fullName", {
                    required: "FullName cannot be blank",
                  })}
                  placeholder="fullname"
                  className={styles["input-info"]}
                  value={infoUser.fullName}
                ></input>
                <input
                  type="text"
                  {...register("phone", {
                    required: "Phone cannot be blank",
                  })}
                  placeholder="phone number"
                  className={styles["input-info"]}
                  value={infoUser.phone}
                ></input>
                <input
                  type="text"
                  {...register("address")}
                  placeholder="address"
                  className={styles["input-info"]}
                  value={infoUser.address}
                ></input>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email cannot be blank",
                  })}
                  placeholder="email"
                  className={styles["input-info"]}
                  value={infoUser.email}
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
