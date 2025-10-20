import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const CounterItem = ({ targetNumber, label }) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 }); // Trigger when 50% in view

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = targetNumber;
      const duration = 2000; // 2 seconds for animation
      const increment = end / (duration / 10); // Calculate increment based on duration and update interval

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }
        setCurrentNumber(Math.floor(start));
      }, 10); // Update every 10ms

      return () => clearInterval(counter); // Cleanup on unmount
    }
  }, [isInView, targetNumber]); // Re-run effect if isInView or targetNumber changes

  return (
    <div ref={ref} className="counter-item">
      <motion.div 
        className="counter-number"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }} // Fade-in the number slightly after it starts counting
      >
        {currentNumber}
      </motion.div>
      <motion.p 
        className="counter-label"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }} // Fade-in the label after the number
      >
        {label}
      </motion.p>
    </div>
  );
};

export default CounterItem;