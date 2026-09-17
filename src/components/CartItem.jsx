import { formatPrice } from "../utils";
import { removeCart, editCart } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { generateAmountOptions } from "../utils/Helpers";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const { cartID, title, price, image, amount, company, productColor } =
    cartItem;

  const removeItemFromTheCart = () => {
    dispatch(removeCart({ cartID }));
  };
  const handleAmount = (e) => {
    dispatch(editCart({ cartID, amount: parseInt(e.target.value) }));
  };

  return (
    <motion.article
      variants={itemVariants}
      key={cartID}
      className="mb-8 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0 group hover:bg-base-200/30 p-4 rounded-xl transition-colors duration-300"
    >
      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover group-hover:scale-105 transition-transform duration-500 shadow-md"
      />
      {/* INFO */}
      <div className="sm:ml-8 sm:w-48 flex flex-col justify-center">
        {/* TITLE */}
        <h3 className="capitalize font-bold text-lg text-base-content">{title}</h3>
        {/* COMPANY */}
        <h4 className="capitalize text-sm text-neutral-content mt-1">
          {company}
        </h4>
        {/* COLOR */}
        <p className="mt-3 text-sm capitalize flex items-center gap-x-2 font-medium">
          color :
          <span
            className="badge badge-sm shadow-sm"
            style={{ backgroundColor: productColor }}
          ></span>
        </p>
      </div>
      <div className="sm:ml-auto flex flex-row sm:flex-col justify-between items-center sm:items-end gap-4 sm:gap-2">
        {/* AMOUNT */}
        <div className="form-control max-w-xs">
          <label htmlFor="amount" className="label p-0">
            <span className="label-text sr-only">Amount</span>
          </label>
          <select
            name="amount"
            id="amount"
            className="select select-base select-bordered select-sm shadow-sm hover:border-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
            value={amount}
            onChange={handleAmount}
          >
            {generateAmountOptions(amount + 5)}
          </select>
        </div>
        {/* REMOVE */}
        <button
          className="link link-error link-hover text-sm font-medium mt-1"
          onClick={removeItemFromTheCart}
        >
          remove
        </button>
      </div>

      {/* PRICE */}
      <p className="font-extrabold text-primary sm:ml-8 self-center sm:self-start sm:mt-2 text-lg">
        {formatPrice(price)}
      </p>
    </motion.article>
  );
};
export default CartItem;
