import { createContext, useContext, useState } from "react";
import styles from "./itemuser.module.scss";
import {
  HomeIcon,
  ContactsIcon,
  TransferIcon,
  CartIcon,
  TagIcon,
  GearIcon,
  ExitIcon,
} from "@bitcoin-design/bitcoin-icons-react/outline";
import { ContentContext } from "../../../../utils/ContentContext";
const Item = [
  {
    title: "Home",
    icon: <HomeIcon />,
  },
  {
    title: "Info",
    icon: <ContactsIcon />,
  },
  {
    title: "Cart",
    icon: <CartIcon />,
  },
  {
    title: "Orders",
    icon: <TransferIcon />,
  },
  {
    title: "Vouchers",
    icon: <TagIcon />,
  },
  {
    title: "Setting",
    icon: <GearIcon />,
  },
  {
    title: "Log out",
    icon: <ExitIcon />,
  },
];
const ItemUser = () => {
  const { Content, setContent } = useContext(ContentContext);
  return (
    <div className={styles["item-user"]}>
      {Item.map((item, index) => {
        return (
          <button
            style={
              Content === item.title
                ? {
                    color: "var(--white)",
                    backgroundColor: "black",
                  }
                : {}
            }
            onClick={() => setContent(item.title)}
            key={index}
            className={styles["btn-item"]}
          >
            <div className={styles.icon}>{item.icon}</div>
            <p className={styles.title}>{item.title}</p>
          </button>
        );
      })}
    </div>
  );
};

export default ItemUser;
