import React from "react";
import { motion, MotionConfig } from "framer-motion";

const Gestures = () => {
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <MotionConfig transition={{ duration: 0.1, ease: "circInOut" }}>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9, rotate: 10 }}
          className="example-button">Click me</motion.button>

        <motion.button
        style={{ background: "black" }}
          whileHover={{ scale: 1.2 }}
          whileFocus={{ scale: 1.2 }}
          whileTap={{ scale: 0.9, rotate: 10 }}
          className="example-button">Click me</motion.button>

      </MotionConfig>
    </div>
  );
};

export default Gestures;
