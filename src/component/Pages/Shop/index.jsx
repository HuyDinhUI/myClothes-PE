import styles from "./shop.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import {
  TagIcon,
  CaretDownIcon,
  CaretRightIcon,
  CaretLeftIcon,
  CartIcon
} from "@bitcoin-design/bitcoin-icons-react/outline";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { FilterContext } from "../../../utils/FilterContext";
import HalfRating from "../../HalfRating"
import { Link, useNavigate } from "react-router-dom";

const products = [
  {
    id: "MH001",
    name: "T-Shirt White Color",
    img: "https://i.imgur.com/sv6NPpI.jpg",
    priceOld: 9.0,
    priceNew: 8.9,
    sizes: ["S", "M", "X", "XL"],
    category:'T-Shirt',
    des: "Achieve the perfect blend of casual and stylish with this trendy streetwear outfit. Featuring a classic blue denim jacket layered over a simple white tee, this look is effortlessly cool. The oversized white wide-leg pants offer both comfort and a modern edge, while the black and white sneakers complete the ensemble with a touch of retro charm. A crossbody bag and a unique two-tone cap tucked into the pocket add functional yet fashionable details. Ideal for urban explorers who appreciate comfort and style in equal measure.",
  },
  {
    id: "MH002",
    name: "T-Shirt White Color ",
    img: "https://i.imgur.com/lT0mttW.jpg",
    priceOld: 9.0,
    priceNew: 8.9,
    sizes: ["S", "M", "X", "XL"],
    category:'T-Shirt',
    des: "Achieve the perfect blend of casual and stylish with this trendy streetwear outfit. Featuring a classic blue denim jacket layered over a simple white tee, this look is effortlessly cool. The oversized white wide-leg pants offer both comfort and a modern edge, while the black and white sneakers complete the ensemble with a touch of retro charm. A crossbody bag and a unique two-tone cap tucked into the pocket add functional yet fashionable details. Ideal for urban explorers who appreciate comfort and style in equal measure.",
  },
  {
    id: "MH003",
    name: "T-Shirt White Color",
    img: "https://i.imgur.com/2dT8iYD.jpg",
    priceOld: 9.0,
    priceNew: 8.9,
    sizes: ["S", "M", "X", "XL"],
    category:'T-Shirt',
    des: "Achieve the perfect blend of casual and stylish with this trendy streetwear outfit. Featuring a classic blue denim jacket layered over a simple white tee, this look is effortlessly cool. The oversized white wide-leg pants offer both comfort and a modern edge, while the black and white sneakers complete the ensemble with a touch of retro charm. A crossbody bag and a unique two-tone cap tucked into the pocket add functional yet fashionable details. Ideal for urban explorers who appreciate comfort and style in equal measure.",
  },
  {
    id: "MH004",
    name: "T-Shirt White Color",
    img: "https://i.imgur.com/2dT8iYD.jpg",
    priceOld: 9.0,
    priceNew: 8.9,
    sizes: ["S", "M", "X", "XL"],
    category:'Pants',
    des: "Achieve the perfect blend of casual and stylish with this trendy streetwear outfit. Featuring a classic blue denim jacket layered over a simple white tee, this look is effortlessly cool. The oversized white wide-leg pants offer both comfort and a modern edge, while the black and white sneakers complete the ensemble with a touch of retro charm. A crossbody bag and a unique two-tone cap tucked into the pocket add functional yet fashionable details. Ideal for urban explorers who appreciate comfort and style in equal measure.",
  },
  {
    id: "MH005",
    name: "T-Shirt White Color",
    img: "https://i.imgur.com/sv6NPpI.jpg",
    priceOld: 9.0,
    priceNew: 8.9,
    sizes: ["S", "M", "X", "XL"],
    category:'Pants',
    des: "Achieve the perfect blend of casual and stylish with this trendy streetwear outfit. Featuring a classic blue denim jacket layered over a simple white tee, this look is effortlessly cool. The oversized white wide-leg pants offer both comfort and a modern edge, while the black and white sneakers complete the ensemble with a touch of retro charm. A crossbody bag and a unique two-tone cap tucked into the pocket add functional yet fashionable details. Ideal for urban explorers who appreciate comfort and style in equal measure.",
  },
  {
    id: "MH006",
    name: "T-Shirt White Color",
    img: "https://i.imgur.com/lT0mttW.jpg",
    priceOld: 9.0,
    priceNew: 8.9,
    sizes: ["S", "M", "X", "XL"],
    category:'Pants',
    des: "Achieve the perfect blend of casual and stylish with this trendy streetwear outfit. Featuring a classic blue denim jacket layered over a simple white tee, this look is effortlessly cool. The oversized white wide-leg pants offer both comfort and a modern edge, while the black and white sneakers complete the ensemble with a touch of retro charm. A crossbody bag and a unique two-tone cap tucked into the pocket add functional yet fashionable details. Ideal for urban explorers who appreciate comfort and style in equal measure.",
  },
  {
    id: "MH007",
    name: "T-Shirt White Color",
    img: "https://i.imgur.com/2dT8iYD.jpg",
    priceOld: 9.0,
    priceNew: 8.9,
    sizes: ["S", "M", "X", "XL"],
    category:'Pants',
    des: "Achieve the perfect blend of casual and stylish with this trendy streetwear outfit. Featuring a classic blue denim jacket layered over a simple white tee, this look is effortlessly cool. The oversized white wide-leg pants offer both comfort and a modern edge, while the black and white sneakers complete the ensemble with a touch of retro charm. A crossbody bag and a unique two-tone cap tucked into the pocket add functional yet fashionable details. Ideal for urban explorers who appreciate comfort and style in equal measure.",
  },
  {
    id: "MH008",
    name: "T-Shirt White Color",
    img: "https://i.imgur.com/2dT8iYD.jpg",
    priceOld: 9.0,
    priceNew: 8.9,
    sizes: ["S", "M", "X", "XL"],
    category:'Pants',
    des: "Achieve the perfect blend of casual and stylish with this trendy streetwear outfit. Featuring a classic blue denim jacket layered over a simple white tee, this look is effortlessly cool. The oversized white wide-leg pants offer both comfort and a modern edge, while the black and white sneakers complete the ensemble with a touch of retro charm. A crossbody bag and a unique two-tone cap tucked into the pocket add functional yet fashionable details. Ideal for urban explorers who appreciate comfort and style in equal measure.",
  },
  {
    id: "MH009",
    name: "T-Shirt White Color",
    img: "https://i.imgur.com/sv6NPpI.jpg",
    priceOld: 9.0,
    priceNew: 8.9,
    sizes: ["S", "M", "X", "XL"],
    category:'Shoes',
    des: "Achieve the perfect blend of casual and stylish with this trendy streetwear outfit. Featuring a classic blue denim jacket layered over a simple white tee, this look is effortlessly cool. The oversized white wide-leg pants offer both comfort and a modern edge, while the black and white sneakers complete the ensemble with a touch of retro charm. A crossbody bag and a unique two-tone cap tucked into the pocket add functional yet fashionable details. Ideal for urban explorers who appreciate comfort and style in equal measure.",
  },
  {
    id: "MH010",
    name: "T-Shirt White Color",
    img: "https://i.imgur.com/lT0mttW.jpg",
    priceOld: 9.0,
    priceNew: 8.9,
    sizes: ["S", "M", "X", "XL"],
    category:'Shoes',
    des: "Achieve the perfect blend of casual and stylish with this trendy streetwear outfit. Featuring a classic blue denim jacket layered over a simple white tee, this look is effortlessly cool. The oversized white wide-leg pants offer both comfort and a modern edge, while the black and white sneakers complete the ensemble with a touch of retro charm. A crossbody bag and a unique two-tone cap tucked into the pocket add functional yet fashionable details. Ideal for urban explorers who appreciate comfort and style in equal measure.",
  },
  {
    id: "MH011",
    name: "T-Shirt White Color",
    img: "https://i.imgur.com/2dT8iYD.jpg",
    priceOld: 9.0,
    priceNew: 8.9,
    sizes: ["S", "M", "X", "XL"],
    category:'Shoes',
    des: "Achieve the perfect blend of casual and stylish with this trendy streetwear outfit. Featuring a classic blue denim jacket layered over a simple white tee, this look is effortlessly cool. The oversized white wide-leg pants offer both comfort and a modern edge, while the black and white sneakers complete the ensemble with a touch of retro charm. A crossbody bag and a unique two-tone cap tucked into the pocket add functional yet fashionable details. Ideal for urban explorers who appreciate comfort and style in equal measure.",
  },
  {
    id: "MH012",
    name: "T-Shirt White Color",
    img: "https://i.imgur.com/2dT8iYD.jpg",
    priceOld: 9.0,
    priceNew: 8.9,
    sizes: ["S", "M", "X", "XL"],
    category:'Shoes',
    des: "Achieve the perfect blend of casual and stylish with this trendy streetwear outfit. Featuring a classic blue denim jacket layered over a simple white tee, this look is effortlessly cool. The oversized white wide-leg pants offer both comfort and a modern edge, while the black and white sneakers complete the ensemble with a touch of retro charm. A crossbody bag and a unique two-tone cap tucked into the pocket add functional yet fashionable details. Ideal for urban explorers who appreciate comfort and style in equal measure.",
  },
  {
    id: "MH013",
    name: "T-Shirt White Color",
    img: "https://i.imgur.com/sv6NPpI.jpg",
    priceOld: 9.0,
    priceNew: 8.9,
    sizes: ["S", "M", "X", "XL"],
    category:'Shoes',
    des: "Achieve the perfect blend of casual and stylish with this trendy streetwear outfit. Featuring a classic blue denim jacket layered over a simple white tee, this look is effortlessly cool. The oversized white wide-leg pants offer both comfort and a modern edge, while the black and white sneakers complete the ensemble with a touch of retro charm. A crossbody bag and a unique two-tone cap tucked into the pocket add functional yet fashionable details. Ideal for urban explorers who appreciate comfort and style in equal measure.",
  },
  {
    id: "MH014",
    name: "T-Shirt White Color ",
    img: "https://i.imgur.com/lT0mttW.jpg",
    priceOld: 9.0,
    priceNew: 8.9,
    sizes: ["S", "M", "X", "XL"],
    category:'Shoes',
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
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const Shop = () => {
  const [indexcurrent, setIndexCurrent] = useState(12);
  const [Products, setProducts] = useState(products);
  const { Content, setContent } = useContext(FilterContext);
  const {Cate, setCate} = useContext(FilterContext)
  const navigate = useNavigate()

  var array = [];
  const renderPage = () => {
    for (let i = 1; i <= Math.ceil(Products.length / 12); i++) {
      array.push(i);
    }

    return array.map((p) => (
      <div onClick={() => setIndexCurrent(12 * p)}>{p}</div>
    ));
  };

  useEffect(() => {
    console.log(Content);
    const pr = [...products];

    setProducts(() =>
      pr.filter((pr) => pr.name.toLowerCase().includes(Content))
    );
  }, [Content]);

  useEffect(() => {
    console.log(Cate);
    const pr = [...products];

    setProducts(() => 
      Cate.length ? pr.filter((pr) => Cate.includes(pr.category)):products
    );
  }, [Cate]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.router}>
            <Link to='/'>Home</Link>
            <p>{'>'}</p>
            <Link className={styles["router-current"]}>Shop</Link>
          </div>
          <motion.div
            className={styles.products}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {Products.map(
              (pr, index) =>
                index >= indexcurrent - 12 &&
                index < indexcurrent && (
                  <motion.div
                    key={index}
                    className={styles["container-product"]}
                    variants={itemVariants}
                    onClick={()=> navigate(`/product/${pr.id}`)}
                  >
                    <img className={styles["img-product"]} src={pr.img}></img>
                    <div className={styles["info-product"]}>
                      <h3 className={styles.name}>{pr.name}</h3>
                      <div className={styles.rank}>
                        <HalfRating p={true}/>
                      </div>
                      <div className={styles.des}>
                        <p>{pr.des}</p>
                      </div>
                      <div className={styles.prices}>
                        <p className={styles.priceOld}>{pr.priceOld.toFixed(2)} USD</p>
                        <p className={styles.priceNew}>{pr.priceNew.toFixed(2)} USD</p>
                      </div>
                      <button className={styles["add-to-cart"]}>
                        <div className={styles["cart-icon"]}>
                          <CartIcon/>
                        </div>
                        <p>Add to cart</p>
                      </button>
                    </div>
                    <div className={styles.actions}>
                      <div className={styles["action-like"]}>
                        <FontAwesomeIcon icon={faHeart} />
                      </div>
                    </div>
                    <div className={styles.OnSale}>
                      <TagIcon />
                    </div>
                  </motion.div>
                )
            )}
            {Products.length === 0 && (
              <div className={styles["no_product"]}>
                There are no matching results
              </div>
            )}
          </motion.div>
          <div className={styles.PageProduct}>
            <button
              disabled={indexcurrent == 12}
              onClick={() => {
                setIndexCurrent(indexcurrent - 12);
              }}
              className={styles.prev}
            >
              <CaretLeftIcon />
            </button>
            <div className={styles.page}>{renderPage()}</div>
            <button
              disabled={indexcurrent >= Products.length}
              onClick={() => {
                setIndexCurrent(indexcurrent + 12);
              }}
              className={styles.prev}
            >
              <CaretRightIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
