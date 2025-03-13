import styles from "./dashboardlayout.module.scss";
import Header from "../component/Header/index";
import Navbar from "../component/Navbar/index";
import ItemUser from "./ItemUser";

const DashBoardLayout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <Navbar>
          <ItemUser />
        </Navbar>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
