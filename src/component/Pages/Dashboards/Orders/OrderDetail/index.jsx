import styles from "./OrderDetail.module.scss";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const OrderDetail = ({ Order }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div
            className={styles.products}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {Order.products.map((pr, index) => {
              return (
                <motion.div
                  variants={itemVariants}
                  key={index}
                  className={styles["container-product"]}
                >
                  <img src={pr.img} className={styles["img-product"]}></img>
                  <div className={styles["info-product"]}>
                    <h2 className={styles.title}>{pr.name}</h2>
                    <div className={styles.prices}>
                      <p className={styles["priceOld"]}>{pr.priceOld}$</p>
                      <p className={styles["priceNew"]}>{pr.priceNew}$</p>
                    </div>
                    <p className={styles.amount}>{pr.amount}x</p>
                    <p className={styles.size}>{pr.size}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
          <div className={styles["info-order"]}>
            <div className={styles["CodeOrder"]}>
              <p>Code Order:</p>
              <p>{Order.id}</p>
            </div>
            <div className={styles["CodeShip"]}>
              <p>Code Ship:</p>
              <p>{Order.shipCode}</p>
            </div>
            <div className={styles.address}>
              <p>Address:</p>
              <p>{Order.address}</p>
            </div>
            <div className={styles.telephone}>
              <p>Telephone:</p>
              <p>{Order.telephone}</p>
            </div>
            <div className={styles.status}>
              <p>Status:</p>
              <p>{Order.status}</p>
            </div>
            <div className={styles["total-amount"]}>
              <p>Amount:</p>
              <p>
                {Order.products.reduce((acc, curr) => acc + curr.amount, 0)}x
              </p>
            </div>
            <div className={styles["total-cost"]}>
              <p>Cost:</p>
              <p>{Order.cost}$</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
