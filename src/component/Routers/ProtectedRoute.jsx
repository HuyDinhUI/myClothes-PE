import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import authorizedAxiosInstance from "../../utils/AthorizedAxios";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

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

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  return children;
};

export default ProtectedRoute;
