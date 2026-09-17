import { Link, useLoaderData, useLocation } from "react-router-dom";
import { formatPrice } from "../utils";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ProductsList = () => {
  const { products } = useLoaderData();
  const location = useLocation();

  return (
    <motion.div 
      key={location.search}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="mt-12 grid gap-y-6"
    >
      {products.map((product) => {
        const { title, price, image, company } = product.attributes;
        const dollarsAmount = formatPrice(price);
        return (
          <motion.div key={product.id} variants={itemVariants}>
            <Link
              to={`/products/${product.id}`}
              className="p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row gap-y-4 flex-wrap bg-base-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-base-200 group"
            >
              <div className="overflow-hidden rounded-xl h-32 w-32 sm:h-36 sm:w-36 shadow-md shrink-0">
                <img
                  src={image}
                  alt={title}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="ml-0 sm:ml-8 flex flex-col justify-center">
                <h3 className="capitalize font-bold text-2xl tracking-wide text-base-content">{title}</h3>
                <h4 className="capitalize text-md text-neutral-content font-medium mt-1">
                  {company}
                </h4>
              </div>

              <p className="font-extrabold text-primary ml-0 sm:ml-auto text-xl self-center pt-4 sm:pt-0">
                {dollarsAmount}
              </p>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default ProductsList;
