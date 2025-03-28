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
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

const Item = [
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
    <motion.div
      className={styles["item-user"]}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {Item.map((item, index) => {
        return (
          <motion.button
            variants={itemVariants}
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
          </motion.button>
        );
      })}
    </motion.div>
  );
};

export default ItemUser;
