import { Link, useLoaderData, useLocation } from "react-router-dom";
import { formatPrice } from "../utils";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

const ProductsGrid = () => {
  const { products } = useLoaderData();
  const location = useLocation();

  return (
    <motion.div 
      key={location.search}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="pt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      {products.map((product) => {
        const { title, price, image, company } = product.attributes;
        const dollarsAmount = formatPrice(price);
        return (
          <motion.div key={product.id} variants={itemVariants}>
            <Link
              to={`/products/${product.id}`}
              className="card w-full bg-base-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-base-200 group"
            >
              <figure className="px-4 pt-4 overflow-hidden rounded-t-xl">
                <img
                  src={image}
                  alt={title}
                  className="rounded-xl h-64 md:h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title capitalize tracking-wider">{title}</h2>
                <h4 className="capitalize text-md text-neutral-content/80 font-medium">
                  {company}
                </h4>
                <span className="text-primary font-bold mt-2">{dollarsAmount}</span>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default ProductsGrid;
