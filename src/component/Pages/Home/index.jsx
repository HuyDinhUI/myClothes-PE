import styles from "./home.module.scss";
import {} from "@fortawesome/free-regular-svg-icons";
import "react-awesome-slider/dist/styles.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import {
  containerVariants,
  itemVariants,
} from "../../Animations/FadeInStagger/index";
import RevealOnScroll from "../../Animations/RevealOnSrcoll";
import { Link } from "react-router-dom";
import hero from "../../../assets/Image/hero.png";

const list_collections = [
  {
    img: "https://i.pinimg.com/736x/d4/40/42/d4404246f3f0b006461404fb84650bcc.jpg",
    title: "L",
  },
  {
    img: "https://i.pinimg.com/736x/83/fd/a5/83fda52afe031a93987aa00f2b25f0ec.jpg",
    title: "G",
  },
  {
    img: "https://i.pinimg.com/736x/40/06/36/400636664a67274c1ca339950eb1fe07.jpg",
    title: "B",
  },
  {
    img: "https://i.pinimg.com/736x/6e/df/30/6edf306f34e1155ac57fd90518172eb4.jpg",
    title: "T",
  },
];

const new_arrivals = [
  {
    img: "https://i.pinimg.com/736x/17/cd/53/17cd53f606a485f421fac3abe4bab2c8.jpg",
    name: "Ultimate Comfort Oversized Hooded Puffer Jacket",
  },
  {
    img: "https://i.pinimg.com/736x/e8/a7/8f/e8a78f65553353bd41db31b2a1f417a6.jpg",
    name: "Cozy Chic Oversized Zipper Knit Cardigan",
  },
  {
    img: "https://i.pinimg.com/736x/19/8a/c1/198ac17ad07a7abcc679da7116dca7ad.jpg",
    name: "Cozy Luxe Oversized Fur Neck Zipper Hoodie Jacket",
  },
  {
    img: "https://i.pinimg.com/736x/16/34/9c/16349c9b4608d6cf846eeda7f6fedd3e.jpg",
    name: "Cozy Luxe Oversized Short Puffer Jacket",
  },
];

const trending = [
  {
    img: "https://i.pinimg.com/736x/f0/4d/cf/f04dcf7ba83e994fe83563d249681420.jpg",
    name: "Ultimate Comfort Oversized Hooded Puffer Jacket",
  },
  {
    img: "https://i.pinimg.com/736x/70/b7/b5/70b7b5e2e7597708abbcd333e9cbd86d.jpg",
    name: "Ultimate Comfort Oversized Hooded Puffer Jacket",
  },
  {
    img: "https://i.pinimg.com/736x/e2/87/cf/e287cf6f217b653742e249087091bd78.jpg",
    name: "Ultimate Comfort Oversized Hooded Puffer Jacket",
  },
  {
    img: "https://i.pinimg.com/736x/ff/89/35/ff8935c472010f3b949b672655a5f1c9.jpg",
    name: "Ultimate Comfort Oversized Hooded Puffer Jacket",
  },
  {
    img: "https://i.pinimg.com/736x/e8/a7/8f/e8a78f65553353bd41db31b2a1f417a6.jpg",
    name: "Cozy Chic Oversized Zipper Knit Cardigan",
  },
  {
    img: "https://i.pinimg.com/736x/19/8a/c1/198ac17ad07a7abcc679da7116dca7ad.jpg",
    name: "Cozy Luxe Oversized Fur Neck Zipper Hoodie Jacket",
  },
  {
    img: "https://i.pinimg.com/736x/16/34/9c/16349c9b4608d6cf846eeda7f6fedd3e.jpg",
    name: "Cozy Luxe Oversized Short Puffer Jacket",
  },
];

const Home = () => {
  const text = "WEAR YOUR STORY";

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <RevealOnScroll>
            <div className={styles["container-hero"]}>
              <div id={styles["brand"]} className={styles["brand"]}>
                <div className={styles["brand-title"]}>
                  <svg
                    viewBox="-100 0 1600 200"
                    className={styles["handwriting-svg"]}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {"MYCLOTHES".split("").map((char, index) => (
                      <text
                        key={index}
                        x={index * 170 + 40}
                        y="70"
                        dominantBaseline="middle"
                        textAnchor="middle"
                        className={styles["handwriting-letter"]}
                        style={{ "--delay": `${index * 0.3}s` }}
                      >
                        {char}
                      </text>
                    ))}
                  </svg>
                </div>
              </div>
              <div className={styles["hero-background"]}>
                <p>{text}</p>
              </div>
              <motion.img variants={itemVariants} src={hero}></motion.img>
            </div>
          </RevealOnScroll>

          {/* SEASON HIGHLIGHT */}

          <RevealOnScroll>
            <section
              className={styles["collections-section"]}
              id={styles["collections"]}
            >
              <motion.div
                variants={itemVariants}
                className={styles["collections-title"]}
              >
                <h2>collections</h2>
              </motion.div>
              <div className={styles["grid-collections"]}>
                {list_collections.map((item) => {
                  return (
                    <motion.div
                      variants={itemVariants}
                      className={styles["card-collections"]}
                    >
                      <img src={item.img}></img>
                    </motion.div>
                  );
                })}
              </div>
            </section>
          </RevealOnScroll>

          {/* NEW ARRIVALS */}

          <RevealOnScroll>
            <section
              className={styles["arrivals-section"]}
              id={styles["Arrivals"]}
            >
              <motion.div
                variants={itemVariants}
                className={styles["arrivals-title"]}
              >
                <h2>new arrivals</h2>
              </motion.div>
              <div className={styles["grid-arrivals"]}>
                {new_arrivals.map((item, index) => {
                  return (
                    <motion.div
                      variants={itemVariants}
                      className={styles["card-arrivals"]}
                    >
                      <img src={item.img}></img>
                      <p>{item.name}</p>
                    </motion.div>
                  );
                })}
              </div>
            </section>
          </RevealOnScroll>

          {/* TRENDING */}

          <RevealOnScroll>
            <section
              id={styles["trending"]}
              className={styles["trending-section"]}
            >
              <motion.div
                variants={itemVariants}
                className={styles["trending-title"]}
              >
                <h2>trending</h2>
              </motion.div>
               <div className={styles["scroll-trending"]}>
                 <div className={styles["grid-trending"]}>
                  {trending.map((item, index) => {
                    return (
                      <motion.div
                        variants={itemVariants}
                        className={styles["card-trending"]}
                      >
                        <img src={item.img}></img>
                        <p>{item.name}</p>
                      </motion.div>
                    );
                  })}
                </div>
               </div>
            </section>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
};

export default Home;
