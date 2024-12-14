import React from 'react';
import { motion } from 'framer-motion';

const MotionWrapper = ({ children }) => {
  return (
    <motion.div
      className="container_body"
      initial={{ opacity: 0, y: 500 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: 'spring' }}
      exit={{
        y: -30000,
        transition: { duration: 0.3, type: 'spring', ease: 'easeInOut' },
      }}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
