import styles from "./Signup.module.scss";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
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

  const password = watch('password');

  const submitSignUp = async (data) => {
    console.log("submit signup: ", data);
    try {
      const res = await authorizedAxiosInstance.post(
        "http://localhost:5023/v1/users/signup",
        data
      );
      if (res.data) {
        navigate('/login');
      }
    } catch (error) {}
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.posterSlider}>
            <AutoplaySlider
              play={true}
              cancelOnInteraction={false}
              interval={6000}
              bullets={false}
              organicArrows={false}
            >
              <div data-src="https://i.pinimg.com/736x/31/79/d5/3179d5cda839bc931c85a0d599f0fad1.jpg"></div>
              <div data-src="https://i.pinimg.com/736x/a2/90/31/a29031e9941384267f9ec1bd4c4c6847.jpg"></div>
              <div data-src="https://i.pinimg.com/736x/38/ea/c3/38eac3a47d5d8afe9f7d8c3d618788e4.jpg"></div>
            </AutoplaySlider>
          </div>
          <form
            onSubmit={handleSubmit(submitSignUp)}
            className={styles["form-signup"]}
          >
            <h1 className={styles.heading}>Sign up</h1>
            <div className={styles["form-group"]}>
              <span className={styles["title-form"]}>username</span>
              <input
                placeholder="huydinh@123"
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
                placeholder="huydinh@gmail.com"
                required
                type="email"
                {...register("email", { required: "Email cannot be blank" })}
                className={styles["input-form"]}
              ></input>
            </div>
            <div className={styles["form-group"]}>
              <span className={styles["title-form"]}>password</span>
              <input
                placeholder="123456778"
                required
                type="password"
                {...register("password", {
                  required: "Password cannot be blank",
                })}
                className={styles["input-form"]}
              ></input>
            </div>
            <div className={styles["form-group"]}>
              <span className={styles["title-form"]}>comfirm password</span>
              <input
                placeholder="12345678"
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
              <a href="/login" className={styles["link-login"]}>
                Log in
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
