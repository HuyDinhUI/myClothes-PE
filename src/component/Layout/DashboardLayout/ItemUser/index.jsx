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
import { useParams, useNavigate } from "react-router-dom";

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
    title: "Account Settings",
  },
  {
    title: "Order History",
  },
  {
    title: "Vouchers",
  },
  {
    title: "Setting",
  },
  {
    title: "Log out",
  },
];

const ItemUser = () => {
  const { page } = useParams();
  const navigate = useNavigate();

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
              page === item.title
                ? {
                    textDecorationLine: "underline",
                  }
                : {}
            }
            onClick={() => navigate(`/dashboards/${item.title}`)}
            key={index}
            className={styles["btn-item"]}
          >
            <p className={styles.title}>{item.title}</p>
            
          </motion.button>
        );
      })}
    </motion.div>
  );
};

export default ItemUser;
