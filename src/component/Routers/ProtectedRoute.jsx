import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import authorizedAxiosInstance from "../../utils/AthorizedAxios";
import { Triangle } from "react-loader-spinner";
import { useAuth0 } from "@auth0/auth0-react";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth0();
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    if (!isAuthenticated) {
      const checkLogin = async () => {
        try {
          const res = await authorizedAxiosInstance(
            "http://localhost:5023/v1/dashboards/info"
          );

          if (res.data) {
            setAuth(true);
          } else {
            setAuth(false);
          }
        } catch (error) {
          setAuth(false);
        }
      };

      checkLogin();
    }

    else {
      setAuth(true)
    }
  }, []);

  if (auth === null)
    return (
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
      ></Triangle>
    );

  if (!auth) return <Navigate to="/login" replace />;

  return children;
};

export default ProtectedRoute;
