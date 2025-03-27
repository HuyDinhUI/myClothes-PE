import styles from "./login.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useForm } from "react-hook-form";
import authorizedAxiosInstance from "../../../utils/AthorizedAxios";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitLogin = async (data) => {
    // const data = {
    //   username: username,
    //   password: password,
    // };
    console.log("submit login: ", data);
    try {
      const res = await authorizedAxiosInstance.post(
        "http://localhost:5023/v1/users/login",
        data
      );
      const userInfo = {
        id: res.data.id,
        username: res.data.username,
        email: res.data.email,
      };
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      localStorage.setItem("accessToken", res.data.accessToken);
      localStorage.setItem("refreshToken", res.data.refreshToken);
      navigate("/dashboards");
    } catch (error) {}
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles["form-login"]}>
            <h1 className={styles.heading}>Log in</h1>
            <form onSubmit={handleSubmit(submitLogin)} className={styles.form}>
              <div className={styles["form-group"]}>
                <span className={styles["title-form"]}>username</span>
                <input
                  required
                  type="text"
                  {...register("username", {
                    required: "Email cannot be blank",
                  })}
                  className={styles["input-form"]}
                  
                ></input>
              </div>
              <div className={styles["form-group"]}>
                <span className={styles["title-form"]}>email</span>
                <input
                  required
                  type="email"
                  {...register("email", { required: "Email cannot be blank" })}
                  className={styles["input-form"]}
                  
                ></input>
              </div>
              <div className={styles["form-group"]}>
                <span className={styles["title-form"]}>password</span>
                <input
                  required
                  type="password"
                  {...register("password", {
                    required: "Password cannot be blank",
                  })}
                  className={styles["input-form"]}
                  
                ></input>
              </div>
              <button className={styles["submit-btn"]} type="submit">
                SUBMIT
              </button>
              <p className={styles["reset-pass"]}>
                Forgot{" "}
                <a href="/resetpassword" className={styles["link-reset"]}>
                  password ?
                </a>
              </p>
              <p className={styles.signup}>
                Don't have an account?{" "}
                <a href="/signup" className={styles["link-signup"]}>
                  Sign up
                </a>
              </p>
              <div className={styles.AuthO}>
                <a>
                  <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                </a>
                <a>
                  <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
