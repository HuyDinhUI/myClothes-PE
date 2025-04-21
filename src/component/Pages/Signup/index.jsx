import styles from "./Signup.module.scss";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate, Link } from "react-router-dom";
import authorizedAxiosInstance from "../../../utils/AthorizedAxios";
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const submitSignUp = async (data) => {
    console.log("submit signup: ", data);
    try {
      const res = await authorizedAxiosInstance.post(
        "http://localhost:5023/v1/users/signup",
        data
      );
      if (res.data) {
        navigate("/login");
      }
    } catch (error) {}
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.router}>
            <Link to="/">Home</Link>
            <p>{">"}</p>
            <Link to="/login">Log in</Link>
            <p>{">"}</p>
            <Link className={styles["router-current"]} to="/signup">
              Sign up
            </Link>
          </div>
          <div className={styles["form-signup"]}>
            <form onSubmit={handleSubmit(submitSignUp)} className={styles.form}>
              <h1 className={styles.heading}>Sign up</h1>
              <div className={styles["form-group"]}>
                <input
                  placeholder="Username"
                  required
                  type="text"
                  {...register("username", {
                    required: "Username cannot be blank",
                  })}
                  className={styles["input-form"]}
                ></input>
              </div>
              <div className={styles["form-group"]}>
                <input
                  placeholder="Phone"
                  required
                  type="text"
                  {...register("phone", { required: "Phone cannot be blank" })}
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
              <div className={styles["form-group"]}>
                <input
                  placeholder="Comfirm password"
                  required
                  type="password"
                  {...register("comfirmPassword", {
                    required: "Password cannot be blank",
                    validate: (value) =>
                      value === password || "Password is not match",
                  })}
                  className={styles["input-form"]}
                ></input>
              </div>
              <button className={styles["submit-btn"]} type="submit">
                SUBMIT
              </button>
              <p className={styles.login}>
                You have an account?{" "}
                <Link to="/login" className={styles["link-login"]}>
                  Log in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
