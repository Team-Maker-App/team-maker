import { motion } from "framer-motion";

const loadingContainer = {
  margin: " 0 auto",
  marginTop: "2rem",
  width: "2rem",
  height: "2rem",
  display: "flex",
  justifyContent: "space-around",
};

const loadingCircle = {
  display: "block",
  width: "0.5rem",
  height: "0.5rem",
  backgroundColor: "white",
  borderRadius: "0.25rem",
};

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: "0%",
  },
  end: {
    y: "100%",
  },
};

const loadingCircleTransition = {
  duration: 0.4,
  yoyo: Infinity,
  ease: "easeInOut",
};

const LoadingIcon = () => {
  return (
    <motion.div style={loadingContainer} variants={loadingContainerVariants} initial="start" animate="end">
      <motion.span style={loadingCircle} variants={loadingCircleVariants} transition={loadingCircleTransition} />
      <motion.span style={loadingCircle} variants={loadingCircleVariants} transition={loadingCircleTransition} />
      <motion.span style={loadingCircle} variants={loadingCircleVariants} transition={loadingCircleTransition} />
    </motion.div>
  );
};

export default LoadingIcon;
