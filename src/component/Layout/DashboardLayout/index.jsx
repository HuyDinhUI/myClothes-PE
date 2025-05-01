import styles from "./dashboardlayout.module.scss";
import Header from "../component/Header/index";
import Navbar from "../component/Navbar/index";
import ItemUser from "./ItemUser";
import Footer from "../component/Footer/index";
import { Link } from "react-router-dom";
import { ContentProvider } from "../../../utils/ContentContext";

const DashBoardLayout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.router}>
        <Link to="/">Home</Link>
        <p>{">"}</p>
        <Link
          className={styles["router-current"]}
          to="/dashboards/Account Settings"
        >
          Account
        </Link>
      </div>
      <div className={styles.container}>
        <Navbar classname={"navbarDashBoard"}>
          <ItemUser />
        </Navbar>
        <div className={styles.content}>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default DashBoardLayout;
