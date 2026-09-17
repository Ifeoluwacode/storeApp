import { Link, useLoaderData } from "react-router-dom";
import { customFetch, formatPrice } from "../utils";
import { useState } from "react";
import { generateAmountOptions } from "../utils/Helpers";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
import { motion } from "framer-motion";

export const loader = async ({ params }) => {
  const response = await customFetch(`products/${params.id}`);

  return { product: response.data.data };
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SingleProduct = () => {
  const { product } = useLoaderData();
  const dispatch = useDispatch();

  const { image, title, price, description, colors, company } =
    product.attributes;
  const dollarsAmount = formatPrice(price);
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const cartProduct = {
    cartID: product.id + productColor,
    productID: product.id,
    image,
    title,
    price,
    amount,
    productColor,
    company,
  };
  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }));
  };

  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };

  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
          </li>
        </ul>
      </div>
      {/* PRODUCT */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-2xl overflow-hidden shadow-lg"
        >
          <img
            src={image}
            alt={title}
            className="w-96 h-96 object-cover lg:w-full hover:scale-105 transition-transform duration-700"
          />
        </motion.div>
        {/* PRODUCT INFO */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants} className="capitalize text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary pb-1">
            {title}
          </motion.h1>
          <motion.h4 variants={itemVariants} className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </motion.h4>

          <motion.p variants={itemVariants} className="mt-3 text-2xl font-bold text-base-content/80">
            {dollarsAmount}
          </motion.p>

          <motion.p variants={itemVariants} className="mt-6 leading-8 text-lg">
            {description}
          </motion.p>

          {/* COLORS */}
          <motion.div variants={itemVariants} className="mt-6">
            <h4 className="text-md font-medium tracking-wider capitalize">
              colors
            </h4>
            <div className="mt-2 flex gap-2">
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    type="button"
                    className={`badge w-8 h-8 rounded-full shadow-sm hover:scale-110 transition-transform ${
                      color === productColor ? "border-2 border-secondary scale-110 shadow-md ring-2 ring-offset-2 ring-secondary/50" : ""
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}
                  ></button>
                );
              })}
            </div>
          </motion.div>
          {/* AMOUNT */}
          <motion.div variants={itemVariants} className="form-control w-full max-w-xs mt-6">
            <label className="label">
              <h4 className="text-md font-medium tracking-wider capitalize">
                amount
              </h4>
            </label>
            <select
              className="select select-secondary select-bordered select-md shadow-sm hover:border-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
              value={amount}
              onChange={handleAmount}
            >
              {generateAmountOptions(30)}
            </select>
          </motion.div>
          {/* CART BUTTON */}
          <motion.div variants={itemVariants} className="mt-10">
            <button className="btn btn-secondary btn-md shadow-lg hover:shadow-secondary/50 hover:-translate-y-1 transition-all duration-300" onClick={addToCart}>
              Add to bag
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SingleProduct;
