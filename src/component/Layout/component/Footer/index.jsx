import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.shop}>
            <h2>Shop</h2>
            <a>Best Seller</a>
            <a>Sales</a>
            <a>Register</a>
          </div>
          <div className={styles.resoures}>
            <h2>Resoures</h2>
            <a>Social</a>
            <a>Help Center</a>
            <a></a>
          </div>
          <div className={styles.community}>
            <h2>Community</h2>
            <a>Twitter</a>
            <a>Facebook</a>
            <a>Instagram</a>
          </div>
          <div className={styles.company}>
            <h2>Company</h2>
            <a>About Us</a>
            <a>Careers</a>
            <a>Legal</a>
            <div>
              <h3>Contact Us</h3>
              <a>dinhvanhuy.04032019@gmail.com</a>
            </div>
          </div>
          <div className={styles.brand}>
            <h2 className={styles.logo}>MyClothes</h2>
            <p>
              &#169;Copyright 2025 <br></br>MyClothes, Inc.<br></br>All right
              reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
