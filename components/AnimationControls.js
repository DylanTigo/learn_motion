import React from "react";
import { motion, useAnimation } from "framer-motion";

const AnimationControls = () => {
  const controls = useAnimation();
  const variants = {
    initial: { rotate: 0},
    flip: { rotate: 360},
  }

  const handleClick = () => {
    controls.start(variants.flip);
    // controls.start("flip");
  }
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <button onClick={handleClick} className="example-button">
        Flip it!
      </button>
      <motion.div
        style={{
          width: 150,
          height: 150,
          background: "black",
        }}
        variants={variants}
        animate={controls}
      ></motion.div>
    </div>
  );
};

export default AnimationControls;
