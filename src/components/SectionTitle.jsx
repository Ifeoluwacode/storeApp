import { motion } from "framer-motion";

const SectionTitle = ({ text }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="border-b border-base-300 pb-5"
    >
      <h2 className="text-3xl font-bold tracking-wider capitalize bg-clip-text text-transparent bg-gradient-to-r from-base-content to-base-content/40">
        {text}
      </h2>
    </motion.div>
  );
};
export default SectionTitle;
