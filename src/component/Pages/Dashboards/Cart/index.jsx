import { useState } from "react";
import styles from "./cart.module.scss";
import { TrashIcon, CheckIcon } from "@bitcoin-design/bitcoin-icons-react/outline";

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

const Cart = () => {
  const [selected, setSelected] = useState([]);
  console.log(selected);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.products}>
            {cart.map((pr, index) => {
              return (
                <div
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
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles["payment-actions"]}>
        <div className={styles["actions-cart"]}>
          <div className={styles.delete}>
            <div className={styles["delete-icon"]}><TrashIcon/></div>
            <p className={styles["delete-title"]}>Delete</p>
          </div>
          <div className={styles.selectAll}>
            <div className={styles["selectAll-icon"]}><CheckIcon/></div>
            <p className={styles["selectAll-title"]}>Select All</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
