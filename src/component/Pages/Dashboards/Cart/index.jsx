import { useState } from "react";
import styles from "./cart.module.scss";
import { motion } from "framer-motion";

import {
  TrashIcon,
  CheckIcon,
  TagIcon,
  ExchangeIcon,
} from "@bitcoin-design/bitcoin-icons-react/outline";

const cart = [
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
    id: "MH002",
    name: "T-Shirt White Color",
    img: "https://i.imgur.com/lT0mttW.jpg",
    priceOld: 9.0,
    priceNew: 8.9,
    amount: 2,
    size: "XL",
  },
  {
    id: "MH003",
    name: "T-Shirt White Color",
    img: "https://i.imgur.com/2dT8iYD.jpg",
    priceOld: 9.0,
    priceNew: 8.9,
    amount: 2,
    size: "XL",
  },
  {
    id: "MH004",
    name: "T-Shirt White Color",
    img: "https://i.imgur.com/2dT8iYD.jpg",
    priceOld: 9.0,
    priceNew: 8.9,
    amount: 2,
    size: "XL",
  },
  {
    id: "MH005",
    name: "T-Shirt White Color",
    img: "https://i.imgur.com/sv6NPpI.jpg",
    priceOld: 9.0,
    priceNew: 8.9,
    amount: 2,
    size: "XL",
  },
  {
    id: "MH006",
    name: "T-Shirt White Color",
    img: "https://i.imgur.com/lT0mttW.jpg",
    priceOld: 9.0,
    priceNew: 8.9,
    amount: 2,
    size: "XL",
  },
  {
    id: "MH007",
    name: "T-Shirt White Color",
    img: "https://i.imgur.com/2dT8iYD.jpg",
    priceOld: 9.0,
    priceNew: 8.9,
    amount: 2,
    size: "XL",
  },
  {
    id: "MH008",
    name: "T-Shirt White Color",
    img: "https://i.imgur.com/2dT8iYD.jpg",
    priceOld: 9.0,
    priceNew: 8.9,
    amount: 2,
    size: "XL",
  },
  {
    id: "MH009",
    name: "T-Shirt White Color",
    img: "https://i.imgur.com/sv6NPpI.jpg",
    priceOld: 9.0,
    priceNew: 8.9,
    amount: 2,
    size: "XL",
  },
  {
    id: "MH010",
    name: "T-Shirt White Color",
    img: "https://i.imgur.com/lT0mttW.jpg",
    priceOld: 9.0,
    priceNew: 8.9,
    amount: 2,
    size: "XL",
  },
  {
    id: "MH011",
    name: "T-Shirt White Color",
    img: "https://i.imgur.com/2dT8iYD.jpg",
    priceOld: 9.0,
    priceNew: 8.9,
    amount: 2,
    size: "XL",
  },
  {
    id: "MH012",
    name: "T-Shirt White Color",
    img: "https://i.imgur.com/2dT8iYD.jpg",
    priceOld: 9.0,
    priceNew: 8.9,
    amount: 2,
    size: "XL",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Các item xuất hiện cách nhau 0.5s
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Cart = () => {
  const [selected, setSelected] = useState([]);
  console.log(selected);

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
            {cart.map((pr, index) => {
              return (
                <motion.div
                  onClick={() => {
                    if (selected.find((select) => select.id === pr.id)) {
                      setSelected(
                        selected.filter((select) => select.id !== pr.id)
                      );
                    } else
                      setSelected([
                        ...selected,
                        {
                          id: pr.id,
                          name: pr.name,
                          img: pr.img,
                          priceOld: pr.priceOld,
                          priceNew: pr.priceNew,
                          amount: pr.amount,
                          type: pr.type,
                        },
                      ]);
                  }}
                  style={
                    selected.find((select) => select.id === pr.id)
                      ? {
                          color: "white",
                          backgroundColor: "var(--begie)",
                        }
                      : {}
                  }
                  key={index}
                  className={styles["container-product"]}
                  variants={itemVariants}
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
        </div>
      </div>
      <div className={styles["payment-actions"]}>
        <div className={styles["actions-cart"]}>
          <div className={styles.delete}>
            <div className={styles["delete-icon"]}>
              <TrashIcon />
            </div>
            <p className={styles["delete-title"]}>Delete</p>
          </div>
          <div className={styles.vouchers}>
            <div className={styles["voucher-icon"]}>
              <TagIcon />
            </div>
            <input className={styles["voucher-title"]}></input>
          </div>
          <div
            onClick={() => {
              if (selected.length > 0) {
                setSelected([]);
              } else setSelected(cart);
            }}
            className={styles.selectAll}
          >
            <div className={styles["selectAll-icon"]}>
              <CheckIcon />
            </div>
            <p className={styles["selectAll-title"]}>Select All</p>
          </div>
          <div className={styles.sumPrice}>
            <div className={styles["sumPrice-icon"]}>
              <ExchangeIcon />
            </div>
            <p className={styles["sumPrice-title"]}>
              {selected
                .reduce((acc, curr) => acc + curr.priceNew * curr.amount, 0)
                .toFixed(2)}
              $
            </p>
          </div>
        </div>
        <div className={styles["btn-payment"]}>
          <p className={styles["payment-title"]}>Payment</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
