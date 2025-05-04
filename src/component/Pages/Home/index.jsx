import styles from "./home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import Signup from "../Signup";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import {containerVariants, itemVariants} from "../../Animations/FadeInStagger/index"

const AutoplaySlider = withAutoplay(AwesomeSlider);

const list_collections = [
  {
    img: "https://i.pinimg.com/736x/9f/49/45/9f49453b3a0237e7ef460d0ebe3fe3bc.jpg",
    title: "Spring Collection",
  },
  {
    img: "https://i.pinimg.com/736x/4e/fd/82/4efd8259cc0febf14e42b0a90ad5dbd1.jpg",
    title: "Streetwear Essentials",
  },
  {
    img: "https://i.pinimg.com/736x/73/b7/6a/73b76acbc2c0440095507853c23ec77e.jpg",
    title: "Minimalist Wardrobe",
  },
  {
    img: "https://i.pinimg.com/736x/90/6c/79/906c79160a5a2d1534ff951f2ea924a4.jpg",
    title: "Office Wear Must-Haves",
  },
];

const Home = () => {
  const text = '"wear your story"';
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles["container-hero"]}>
            <div className={styles.title}>
              <svg
                viewBox="0 0 1200 200"
                className={styles["handwriting-svg"]}
                xmlns="http://www.w3.org/2000/svg"
              >
                {text.split("").map((char, index) => (
                  <text
                    key={index}
                    x={index * 70 + 30}
                    y="100"
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

          <motion.section
          ref={ref}
          className="collections-section"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          id={styles["collections"]}>
            <motion.h2
            variants={itemVariants}
            className={styles["collections-title"]}>
              This Season's Highlights
            </motion.h2>
            <div className={styles["grid-collections"]}>
              {list_collections.map((item) => {
                return (
                  <motion.div 
                  variants={itemVariants}
                  className={styles["card-collections"]}>
                    <img src={item.img}></img>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Home;
