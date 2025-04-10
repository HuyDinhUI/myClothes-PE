import authorizedAxiosInstance from "../../../utils/AthorizedAxios";
import { useContext, useEffect, useState } from "react";
import styles from "./dashboards.module.scss";
import Info from "../Dashboards/Info";
import Cart from "../Dashboards/Cart";
import Orders from "./Orders";
import { ContentContext } from "../../../utils/ContentContext";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";

const Dashboards = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const {page} = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const res = await authorizedAxiosInstance.delete(
        "http://localhost:5023/v1/users/logout"
      );
      navigate("/login");
    };
    if (page === "Log out") {
      fetchData();
    }
  }, [page]);

  
  useEffect(() => {
    const fetchData = async () => {
      const res = await authorizedAxiosInstance.get(
        "http://localhost:5023/v1/dashboards/info"
      );
      console.log(res.data)
      setUser(res.data);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          {page === "Info" && user && <Info infoUser={user} />}
          {page === "Cart" && <Cart />}
          {page === "Orders" && <Orders />}
        </div>
      </div>
    </div>
  );
};

export default Dashboards;
