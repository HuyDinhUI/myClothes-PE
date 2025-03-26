import authorizedAxiosInstance from "../../../utils/AthorizedAxios";
import { useContext, useEffect, useState } from "react";
import styles from "./dashboards.module.scss";
import Info from "../Dashboards/Info";
import Cart from "../Dashboards/Cart";
import Orders from "./Orders";
import { ContentContext } from "../../../utils/ContentContext";
import { useNavigate } from "react-router-dom";

const Dashboards = () => {
  const [user, setUser] = useState(null);
  const { Content } = useContext(ContentContext);
  const navigate = useNavigate();

  useEffect(() => {
        if (Content === 'Log out'){
          localStorage.removeItem("userInfo");
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          navigate("/login");
        }
        
     
  }, [Content]);

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

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          {Content === "Info" && <Info />}
          {Content === "Cart" && <Cart />}
          {Content === "Orders" && <Orders/>}
        </div>
      </div>
    </div>
  );
};

export default Dashboards;
