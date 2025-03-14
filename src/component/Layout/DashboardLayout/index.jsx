import styles from "./dashboardlayout.module.scss";
import Header from "../component/Header/index";
import Navbar from "../component/Navbar/index";
import ItemUser from "./ItemUser";
import { ContentProvider } from "../../../utils/ContentContext";

const DashBoardLayout = ({ children }) => {
  return (
    <ContentProvider>
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.container}>
          <Navbar>
            <ItemUser />
          </Navbar>
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    </ContentProvider>
  );
};

export default DashBoardLayout;
