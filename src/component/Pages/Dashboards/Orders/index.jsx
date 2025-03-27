import styles from "./orders.module.scss";
import { motion } from "framer-motion";
import OrderDetail from "./OrderDetail";
import { useState } from "react";

const orders = [
  {
    id: "DH001",
    shipCode: "VC001",
    address: "35/8 Nguyen Huu Tien",
    telephone: "0354382607",
    status: "Delivered",
    cost: 30,
    products: [
      {
        id: "MH001",
        name: "T-Shirt White Color",
        img: "https://i.imgur.com/sv6NPpI.jpg",
        priceOld: 9.0,
        priceNew: 8.9,
        amount: 2,
        size: "XL",
      },
      {
        id: "MH001",
        name: "T-Shirt White Color",
        img: "https://i.imgur.com/sv6NPpI.jpg",
        priceOld: 9.0,
        priceNew: 8.9,
        amount: 2,
        size: "XL",
      },
      {
        id: "MH001",
        name: "T-Shirt White Color",
        img: "https://i.imgur.com/sv6NPpI.jpg",
        priceOld: 9.0,
        priceNew: 8.9,
        amount: 2,
        size: "XL",
      },
    ],
  },
  {
    id: "DH002",
    shipCode: "VC002",
    address: "35/8 Nguyen Huu Tien",
    telephone: "0354382607",
    status: "Cancle",
    cost: 30,
    products: [
      {
        id: "MH003",
        name: "T-Shirt White Color",
        img: "https://i.imgur.com/2dT8iYD.jpg",
        priceOld: 9.0,
        priceNew: 8.9,
        amount: 2,
        size: "XL",
      },
    ],
  },
  {
    id: "DH003",
    shipCode: "VC003",
    address: "35/8 Nguyen Huu Tien",
    telephone: "0354382607",
    status: "On Delivery",
    cost: 30,
    products: [
      {
        id: "MH002",
        name: "T-Shirt White Color",
        img: "https://i.imgur.com/lT0mttW.jpg",
        priceOld: 9.0,
        priceNew: 8.9,
        amount: 2,
        size: "XL",
      },
    ],
  },
  {
    id: "DH004",
    shipCode: "VC003",
    address: "35/8 Nguyen Huu Tien",
    telephone: "0354382607",
    status: "Delivered",
    cost: 30,
    products: [
      {
        id: "MH001",
        name: "T-Shirt White Color",
        img: "https://i.imgur.com/sv6NPpI.jpg",
        priceOld: 9.0,
        priceNew: 8.9,
        amount: 2,
        size: "XL",
      },
    ],
  },
];

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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};



const Orders = () => {

  const [idOrder,setIdOrder] = useState(null)
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div
            className={styles.Orders}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {orders.map((or, index) => {
              return (
                <motion.div
                  key={index}
                  className={styles["container-order"]}
                  variants={itemVariants}
                  onClick={()=>idOrder===null ? setIdOrder(or.id):setIdOrder(null)}
                >
                  <div className={styles["container-product"]}>
                    <img
                      src={or.products[0].img}
                      className={styles["img-product"]}
                    ></img>
                    <div className={styles["info-product"]}>
                      <h2 className={styles.title}>{or.products[0].name}</h2>
                      <div className={styles.prices}>
                        <p className={styles["priceOld"]}>
                          {or.products[0].priceOld}$
                        </p>
                        <p className={styles["priceNew"]}>
                          {or.products[0].priceNew}$
                        </p>
                      </div>
                      <p className={styles.amount}>{or.products[0].amount}x</p>
                      <p className={styles.size}>{or.products[0].size}</p>
                    </div>
                  </div>
                  <div className={styles["info-ship"]}>
                    <div className={styles["total-amount"]}>
                      <p className={styles["total-amount-title"]}>Amount:</p>
                      <p className={styles["total-amount-value"]}>
                        {or.products.reduce(
                          (acc, curr) => acc + curr.amount,
                          0
                        )}
                        x
                      </p>
                    </div>
                    <div className={styles["total-cost"]}>
                      <p className={styles["total-cost-title"]}>Cost:</p>
                      <p className={styles["total-cost-value"]}>{or.cost}$</p>
                    </div>
                    <div className={styles["ship-status"]}>
                      <p className={styles["ship-status-title"]}>
                        Ship Status:
                      </p>
                      <p
                        className={styles["ship-status-value"]}
                        style={
                          or.status === "Cancle"
                            ? { color: "var(--fail-color)" }
                            : { color: "var(--success-color)" }
                        }
                      >
                        {or.status}
                      </p>
                    </div>
                    <div className={styles["ship-actions"]}>
                      <button
                        disabled={
                          or.status === "Cancle" || or.status === "Delivered"
                        }
                        className={styles["ship-actions-cancle"]}
                        style={
                          or.status === "Cancle" || or.status === "Delivered"
                            ? { opacity: "50%" }
                            : { opacity: "100%" }
                        }
                      >
                        Cancle
                      </button>
                      <button className={styles["ship-actions-contact"]}>
                        Contact
                      </button>
                      <button
                        disabled={
                          or.status === "Cancle" ||
                          or.status === "On Delivery" ||
                          or.status === "Comfirmation"
                        }
                        className={styles["ship-actions-rate"]}
                        style={
                          or.status === "Delivered"
                            ? { opacity: "100%" }
                            : { opacity: "50%" }
                        }
                      >
                        Rate
                      </button>
                    </div>
                  </div>
                  {or.id === idOrder ? <OrderDetail Order={or}/>:""}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
