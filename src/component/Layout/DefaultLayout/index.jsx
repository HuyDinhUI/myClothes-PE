import styles from "./defaultlayout.module.scss";
import Header from "../component/Header/index";
import Footer from "../component/Footer/index";
import Signup from "../../Pages/Signup";
import { useEffect, useState } from "react";
import authorizedAxiosInstance from "../../../utils/AthorizedAxios";

const DefaultLayout = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState();
  console.log(isAuthenticated);

  useEffect(() => {
    const checkLogin = async () => {
      const res = await authorizedAxiosInstance(
        "http://localhost:5023/v1/dashboards/info"
      );

      if (res.data) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    };

    checkLogin();
  }, []);

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <div className={styles.content}>{children}</div>
      </div>
      <Footer />
      {!isAuthenticated && <Signup />}
    </div>
  );
};

export default DefaultLayout;
