import authorizedAxiosInstance from "../../../utils/AthorizedAxios";
import { useEffect, useState } from "react";

const Dashboards = () => {
  const [user,setUser] = useState(null)

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
  return <button onClick={logout}>logout</button>;
};

export default Dashboards;
