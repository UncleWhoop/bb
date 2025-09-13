import { motion } from "framer-motion";

const AnimatedDiv = ({ className = "", children }) => {
  return (
    <motion.div
      
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }} // Parent fades in when 60% visible
      viewport={{ once: true, amount: 0.6 }} // Trigger animation when 60% of the parent is visible
      transition={{ duration: 0.5 }}
    >
      {/* Children are animated one by one with stagger */}
      <motion.div
        className={className}
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default AnimatedDiv;
