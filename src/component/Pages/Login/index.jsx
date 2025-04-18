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
import { useAuth0 } from '@auth0/auth0-react';



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
        navigate(`/dashboards/Info`);
      } else navigate("/admin");
    } catch (error) {}
    
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.router}>
            <Link to="/dashboards/info">Dashboard</Link>
            <p>{">"}</p>
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
                  <h2>SIGN IN TO YOUR ACCOUNT</h2>
                  <p>
                    First time visiting? You might need to{" "}
                    <a href="/resetpassword" className={styles["link-reset"]}>
                      reset your password.
                    </a>
                  </p>
                </div>
                <div className={styles["form-group"]}>
                  <input
                    placeholder="Username"
                    required
                    type="text"
                    {...register("username", {
                      required: "Email cannot be blank",
                    })}
                    className={styles["input-form"]}
                  ></input>
                </div>
                <div className={styles["form-group"]}>
                  <input
                    placeholder="Email"
                    required
                    type="email"
                    {...register("email", {
                      required: "Email cannot be blank",
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
                <button className={styles["submit-btn"]} type="submit">
                  Sign in
                </button>
                <div onClick={()=> loginWithRedirect()} className={styles.AuthO}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Logo_de_Auth0.svg"></img>
                </div>
              </form>
            </div>
            <div className={styles["create-account"]}>
              <div className={styles["voucher"]}>
                <div className={styles.heading}>
                  <h2>CREATE ACCOUNT TO RECEIVE VOUCHER</h2>
                  <p>Create an account and receive a voucher up to 50%</p>
                </div>
                <img src="https://i.pinimg.com/736x/71/72/c1/7172c1ca448d8d1e9eadf267fbba37f0.jpg"></img>
                <button onClick={()=>navigate('/signup')} className={styles["signup-btn"]}>
                  CREATE ACCOUNT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
