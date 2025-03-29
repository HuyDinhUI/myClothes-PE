import styles from "./shop.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import {
  TagIcon,
  CaretDownIcon,
  CaretRightIcon,
} from "@bitcoin-design/bitcoin-icons-react/outline";
import { motion } from "framer-motion";
const products = [
  {
    id: "MH001",
    name: "T-Shirt White Color",
    img: "https://i.imgur.com/sv6NPpI.jpg",
    priceOld: 9.0,
    priceNew: 8.9,
    sizes: ["S", "M", "X", "XL"],
    des: "Achieve the perfect blend of casual and stylish with this trendy streetwear outfit. Featuring a classic blue denim jacket layered over a simple white tee, this look is effortlessly cool. The oversized white wide-leg pants offer both comfort and a modern edge, while the black and white sneakers complete the ensemble with a touch of retro charm. A crossbody bag and a unique two-tone cap tucked into the pocket add functional yet fashionable details. Ideal for urban explorers who appreciate comfort and style in equal measure.",
  },
  {
    id: "MH002",
    name: "T-Shirt White Color ",
    img: "https://i.imgur.com/lT0mttW.jpg",
    priceOld: 9.0,
    priceNew: 8.9,
    sizes: ["S", "M", "X", "XL"],
    des: "Achieve the perfect blend of casual and stylish with this trendy streetwear outfit. Featuring a classic blue denim jacket layered over a simple white tee, this look is effortlessly cool. The oversized white wide-leg pants offer both comfort and a modern edge, while the black and white sneakers complete the ensemble with a touch of retro charm. A crossbody bag and a unique two-tone cap tucked into the pocket add functional yet fashionable details. Ideal for urban explorers who appreciate comfort and style in equal measure.",
  },
  {
    id: "MH003",
    name: "T-Shirt White Color",
    img: "https://i.imgur.com/2dT8iYD.jpg",
    priceOld: 9.0,
    priceNew: 8.9,
    sizes: ["S", "M", "X", "XL"],
    des: "Achieve the perfect blend of casual and stylish with this trendy streetwear outfit. Featuring a classic blue denim jacket layered over a simple white tee, this look is effortlessly cool. The oversized white wide-leg pants offer both comfort and a modern edge, while the black and white sneakers complete the ensemble with a touch of retro charm. A crossbody bag and a unique two-tone cap tucked into the pocket add functional yet fashionable details. Ideal for urban explorers who appreciate comfort and style in equal measure.",
  },
  {
    id: "MH004",
    name: "T-Shirt White Color",
    img: "https://i.imgur.com/2dT8iYD.jpg",
    priceOld: 9.0,
    priceNew: 8.9,
    sizes: ["S", "M", "X", "XL"],
    des: "Achieve the perfect blend of casual and stylish with this trendy streetwear outfit. Featuring a classic blue denim jacket layered over a simple white tee, this look is effortlessly cool. The oversized white wide-leg pants offer both comfort and a modern edge, while the black and white sneakers complete the ensemble with a touch of retro charm. A crossbody bag and a unique two-tone cap tucked into the pocket add functional yet fashionable details. Ideal for urban explorers who appreciate comfort and style in equal measure.",
  },
  {
    id: "MH005",
    name: "T-Shirt White Color",
    img: "https://i.imgur.com/sv6NPpI.jpg",
    priceOld: 9.0,
    priceNew: 8.9,
    sizes: ["S", "M", "X", "XL"],
    des: "Achieve the perfect blend of casual and stylish with this trendy streetwear outfit. Featuring a classic blue denim jacket layered over a simple white tee, this look is effortlessly cool. The oversized white wide-leg pants offer both comfort and a modern edge, while the black and white sneakers complete the ensemble with a touch of retro charm. A crossbody bag and a unique two-tone cap tucked into the pocket add functional yet fashionable details. Ideal for urban explorers who appreciate comfort and style in equal measure.",
  },
  {
    id: "MH006",
    name: "T-Shirt White Color",
    img: "https://i.imgur.com/lT0mttW.jpg",
    priceOld: 9.0,
    priceNew: 8.9,
    sizes: ["S", "M", "X", "XL"],
    des: "Achieve the perfect blend of casual and stylish with this trendy streetwear outfit. Featuring a classic blue denim jacket layered over a simple white tee, this look is effortlessly cool. The oversized white wide-leg pants offer both comfort and a modern edge, while the black and white sneakers complete the ensemble with a touch of retro charm. A crossbody bag and a unique two-tone cap tucked into the pocket add functional yet fashionable details. Ideal for urban explorers who appreciate comfort and style in equal measure.",
  },
  {
    id: "MH007",
    name: "T-Shirt White Color",
    img: "https://i.imgur.com/2dT8iYD.jpg",
    priceOld: 9.0,
    priceNew: 8.9,
    sizes: ["S", "M", "X", "XL"],
    des: "Achieve the perfect blend of casual and stylish with this trendy streetwear outfit. Featuring a classic blue denim jacket layered over a simple white tee, this look is effortlessly cool. The oversized white wide-leg pants offer both comfort and a modern edge, while the black and white sneakers complete the ensemble with a touch of retro charm. A crossbody bag and a unique two-tone cap tucked into the pocket add functional yet fashionable details. Ideal for urban explorers who appreciate comfort and style in equal measure.",
  },
  {
    id: "MH008",
    name: "T-Shirt White Color",
    img: "https://i.imgur.com/2dT8iYD.jpg",
    priceOld: 9.0,
    priceNew: 8.9,
    sizes: ["S", "M", "X", "XL"],
    des: "Achieve the perfect blend of casual and stylish with this trendy streetwear outfit. Featuring a classic blue denim jacket layered over a simple white tee, this look is effortlessly cool. The oversized white wide-leg pants offer both comfort and a modern edge, while the black and white sneakers complete the ensemble with a touch of retro charm. A crossbody bag and a unique two-tone cap tucked into the pocket add functional yet fashionable details. Ideal for urban explorers who appreciate comfort and style in equal measure.",
  },
  {
    id: "MH009",
    name: "T-Shirt White Color",
    img: "https://i.imgur.com/sv6NPpI.jpg",
    priceOld: 9.0,
    priceNew: 8.9,
    sizes: ["S", "M", "X", "XL"],
    des: "Achieve the perfect blend of casual and stylish with this trendy streetwear outfit. Featuring a classic blue denim jacket layered over a simple white tee, this look is effortlessly cool. The oversized white wide-leg pants offer both comfort and a modern edge, while the black and white sneakers complete the ensemble with a touch of retro charm. A crossbody bag and a unique two-tone cap tucked into the pocket add functional yet fashionable details. Ideal for urban explorers who appreciate comfort and style in equal measure.",
  },
  {
    id: "MH010",
    name: "T-Shirt White Color",
    img: "https://i.imgur.com/lT0mttW.jpg",
    priceOld: 9.0,
    priceNew: 8.9,
    sizes: ["S", "M", "X", "XL"],
    des: "Achieve the perfect blend of casual and stylish with this trendy streetwear outfit. Featuring a classic blue denim jacket layered over a simple white tee, this look is effortlessly cool. The oversized white wide-leg pants offer both comfort and a modern edge, while the black and white sneakers complete the ensemble with a touch of retro charm. A crossbody bag and a unique two-tone cap tucked into the pocket add functional yet fashionable details. Ideal for urban explorers who appreciate comfort and style in equal measure.",
  },
  {
    id: "MH011",
    name: "T-Shirt White Color",
    img: "https://i.imgur.com/2dT8iYD.jpg",
    priceOld: 9.0,
    priceNew: 8.9,
    sizes: ["S", "M", "X", "XL"],
    des: "Achieve the perfect blend of casual and stylish with this trendy streetwear outfit. Featuring a classic blue denim jacket layered over a simple white tee, this look is effortlessly cool. The oversized white wide-leg pants offer both comfort and a modern edge, while the black and white sneakers complete the ensemble with a touch of retro charm. A crossbody bag and a unique two-tone cap tucked into the pocket add functional yet fashionable details. Ideal for urban explorers who appreciate comfort and style in equal measure.",
  },
  {
    id: "MH012",
    name: "T-Shirt White Color",
    img: "https://i.imgur.com/2dT8iYD.jpg",
    priceOld: 9.0,
    priceNew: 8.9,
    sizes: ["S", "M", "X", "XL"],
    des: "Achieve the perfect blend of casual and stylish with this trendy streetwear outfit. Featuring a classic blue denim jacket layered over a simple white tee, this look is effortlessly cool. The oversized white wide-leg pants offer both comfort and a modern edge, while the black and white sneakers complete the ensemble with a touch of retro charm. A crossbody bag and a unique two-tone cap tucked into the pocket add functional yet fashionable details. Ideal for urban explorers who appreciate comfort and style in equal measure.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, 
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const Shop = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.navbar}>
            <h1 className={styles["slogan-title"]}>FOR ⟶ EVERYONE BUT NOTANYONE</h1>
          </div>
          <motion.div
            className={styles.products}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {products.map((pr, index) => {
              return (
                <motion.div 
                key={index} 
                className={styles["container-product"]}
                variants={itemVariants}
                >
                  <img className={styles["img-product"]} src={pr.img}></img>
                  <div className={styles["info-product"]}>
                    <h3 className={styles.name}>{pr.name}</h3>
                    <p className={styles.des}>{pr.des}</p>
                    <div className={styles.more}>
                      <div className={styles["more-icon"]}>
                        <CaretDownIcon />
                      </div>
                    </div>
                  </div>
                  <div className={styles.actions}>
                    <div className={styles["action-like"]}>
                      <FontAwesomeIcon icon={faHeart} />
                    </div>
                    <div className={styles["action-addcart"]}>
                      <FontAwesomeIcon icon={faPlus} />
                    </div>
                  </div>
                  <div className={styles.OnSale}>
                    <TagIcon />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
