import authorizedAxiosInstance from "../../../utils/AthorizedAxios";
import { useContext, useEffect, useState } from "react";
import styles from "./dashboards.module.scss";
import Info from "../Dashboards/Info";
import Cart from "../Dashboards/Cart";
import { ContentContext } from "../../../utils/ContentContext";

const Dashboards = () => {
  const [user, setUser] = useState(null);
  const { Content } = useContext(ContentContext);

  useEffect(() => {
    const fetchData = async () => {
      const res = await authorizedAxiosInstance.get(
        "http://localhost:5023/v1/dashboards/access"
      );
      console.log(res.data);
      setUser(res.data);
    };

    fetchData();
  }, []);

  const logout = () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          {Content === "Info" && <Info />}
          {Content === "Cart" && <Cart />}
        </div>
      </div>
    </div>
  );
};

export default Dashboards;
