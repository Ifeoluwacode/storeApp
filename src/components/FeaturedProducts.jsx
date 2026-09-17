import ProductsGrid from "./ProductsGrid";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";

const FeaturedProducts = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="pt-24"
    >
      <SectionTitle text="featured products" />
      <ProductsGrid />
    </motion.div>
  );
};
export default FeaturedProducts;
