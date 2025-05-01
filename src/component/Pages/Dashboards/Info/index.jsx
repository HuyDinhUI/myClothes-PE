import { useState } from "react";
import styles from "./info.module.scss";
import { useForm } from "react-hook-form";
import authorizedAxiosInstance from "../../../../utils/AthorizedAxios";
import { Link } from "react-router-dom";

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
            <div className={styles["info-username"]}>
              <h1>Hello, {infoUser.username.split(" ").pop()}</h1>
            </div>
            <div className={styles.profile}>
              <div className={styles["profile-title"]}>
                <h3>PROFILE</h3>
              </div>
              <div className={styles["profile-detail"]}>
                <div className={styles["profile-detail-information"]}>
                  <p><strong>{infoUser.username}</strong></p>
                  <p>{infoUser.email}</p>
                  <p>{infoUser.phone}</p>
                  <div className={styles["profile-edit"]}>
                    <Link to='/editprofile'>Edit</Link>
                  </div>
                </div>
                <div className={styles["profile-detail-account"]}>
                  <p>.........................</p>
                  <div className={styles["profile-edit"]}>
                    <Link to='/editaccount'>Edit</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.address}>
              <div className={styles["address-title"]}>
                <h3>ADDRESS</h3>
              </div>
              <div className={styles["address-detail"]}>
                <div className={styles["address-detail-information"]}>
                  <p>{infoUser.address}</p>
                  <div className={styles["profile-edit"]}><Link to='/editaddress'>Add</Link></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
