import styles from "./shoplayout.module.scss";
import Navbar from "../component/Navbar/index";
import Footer from "../component/Footer";
import Header from "../component/Header/index";
import ItemShop from "./ItemShop";
import { FilterProvider } from "../../../utils/FilterContext";

const ShopLayout = ({ children }) => {
  return (
    <FilterProvider>
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.container}>
          <Navbar classname={"navbarShop"}>
            <ItemShop/>
          </Navbar>
          <div className={styles.content}>{children}</div>
        </div>
        <Footer />
      </div>
    </FilterProvider>
  );
};

export default ShopLayout;
