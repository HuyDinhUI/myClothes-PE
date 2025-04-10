import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import authorizedAxiosInstance from "../../utils/AthorizedAxios";
import { Triangle } from "react-loader-spinner";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const res = await authorizedAxiosInstance(
          "http://localhost:5023/v1/dashboards/info"
        );

        if (res.data) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    checkLogin();
  }, []);

  if (isAuthenticated === null)
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

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  return children;
};

export default ProtectedRoute;
