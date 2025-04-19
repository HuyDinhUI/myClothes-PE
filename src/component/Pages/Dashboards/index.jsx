import authorizedAxiosInstance from "../../../utils/AthorizedAxios";
import { useContext, useEffect, useState } from "react";
import styles from "./dashboards.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Suspense, lazy } from "react";
import { Triangle } from "react-loader-spinner";

const Info = lazy(() => import("./Info/index.jsx"));
const Cart = lazy(() => import("./Cart/index.jsx"));
const Orders = lazy(() => import("./Orders/index.jsx"));

const Dashboards = () => {
  const [userInfo, setUser] = useState();
  const navigate = useNavigate();
  const { page } = useParams();
  const { logout, getAccessTokenSilently, isAuthenticated, user } = useAuth0();
  console.log(userInfo);

  useEffect(() => {
    const fetchData = async () => {
      const res = await authorizedAxiosInstance.delete(
        "http://localhost:5023/v1/users/logout"
      );
      navigate("/login");
    };
    if (page === "Log out") {
      if (isAuthenticated) {
        logout({ returnTo: window.location.origin + "/login" });
      } else {
        fetchData();
      }
    }
  }, [page]);

  useEffect(() => {
    if (isAuthenticated) {
      const fectchDataAuth0 = async () => {
        const token = await getAccessTokenSilently();
        const res = await fetch("http://localhost:5023/v1/auth0", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(user);
      };
      fectchDataAuth0();
    } else {
      const fetchData = async () => {
        const res = await authorizedAxiosInstance.get(
          "http://localhost:5023/v1/dashboards/info"
        );
        console.log(res.data);
        setUser(res.data);
      };

      fetchData();
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Suspense
            fallback={
              <Triangle
                visible={true}
                height="80"
                width="80"
                color="var(--black)"
                ariaLabel="triangle-loading"
                wrapperStyle={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100vh",
                }}
                wrapperClass="Triangle"
              />
            }
          >
            {page === "Info" && userInfo && <Info infoUser={userInfo} />}
            {page === "Cart" && <Cart />}
            {page === "Orders" && <Orders />}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Dashboards;
