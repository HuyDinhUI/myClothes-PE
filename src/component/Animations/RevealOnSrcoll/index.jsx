import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { containerVariants } from "../FadeInStagger";

const RevealOnScroll = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce:true });

  

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      style={{ willChange: "opacity, transform" }} // tăng hiệu suất
    >
      {children}
    </motion.div>
  );
};

export default RevealOnScroll;