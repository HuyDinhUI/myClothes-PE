import styles from "./login.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useForm } from "react-hook-form";
import authorizedAxiosInstance from "../../../utils/AthorizedAxios";
import { Link, useNavigate } from "react-router-dom";
import { style } from "@mui/system";
import { useState, useEffect } from "react";
import calculateTimeLeft from "../../../utils/TimeLeft";
import { useAuth0 } from "@auth0/auth0-react";
import { GoogleIcon } from "../../../assets/Icon";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitLogin = async (data) => {
    console.log("submit login: ", data);
    try {
      const res = await authorizedAxiosInstance.post(
        "http://localhost:5023/v1/users/login",
        data
      );
      if (res.data.role === "customer") {
        navigate(`/dashboards/Account Settings`);
      } else navigate("/admin");
    } catch (error) {}
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.router}>
            <Link to="/">Home</Link>
            <p>{"/"}</p>
            <Link to="/dashboards/Account Settings">Dashboard</Link>
            <p>{"/"}</p>
            <Link className={styles["router-current"]} to="/login">
              Log in
            </Link>
          </div>
          <div className={styles.main}>
            <div className={styles["form-login"]}>
              <form
                onSubmit={handleSubmit(submitLogin)}
                className={styles.form}
              >
                <div className={styles.heading}>
                  <h2>Log in</h2>
                </div>
                <div className={styles["form-group"]}>
                  <input
                    placeholder="Phone"
                    required
                    type="text"
                    {...register("phone", {
                      required: "Phone cannot be blank",
                    })}
                    className={styles["input-form"]}
                  ></input>
                </div>
                <div className={styles["form-group"]}>
                  <input
                    placeholder="Password"
                    required
                    type="password"
                    {...register("password", {
                      required: "Password cannot be blank",
                    })}
                    className={styles["input-form"]}
                  ></input>
                </div>
                <p>
                  Forget password ? <a>reset now</a>
                </p>
                <button className={styles["submit-btn"]} type="submit">
                  SIGN IN
                </button>
                <div
                  onClick={() =>
                    (window.location.href =
                      "http://localhost:5023/v1/auth/google")
                  }
                  className={styles.AuthO}
                >
                  <GoogleIcon/>
                  <p>Log in with Google</p>
                </div>
                <p>
                  You don't have account ? <Link to='/signup'>Sign up</Link>
                </p>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
