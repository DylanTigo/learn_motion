import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BasicsOfMotion = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }} 
    >
        <motion.button
          onClick={() => setIsVisible(!isVisible)}
          className="example-button"
          transition={{
            duration: 0.5,
            type: "spring",
            bounce: 0.5,
          }}
          layout
        >
          Show/Hide
        </motion.button>
      <AnimatePresence mode="popLayout">
        {isVisible && (
          <motion.div
            initial={{ rotate: 0, scale: 0 , y: 0}}
            animate={{ rotate: 180, scale: 1, y: [0, 150, -150, -150, 0] }} 
            exit={{ rotate: 0, scale: 0, y: 0 }}
            transition={{
              duration: 0.5,
              type: "spring",
              bounce: 0.3,
              times: [0, 0.2, 0.5, 0.8, 1],
            }}
            style={{
              width: 150,
              height: 150,
              background: "pink",
            }}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BasicsOfMotion;
