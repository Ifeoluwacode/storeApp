import { useSelector } from "react-redux";
import { formatPrice } from "../utils";
import { motion } from "framer-motion";

const CartTotals = () => {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cartState
  );

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="card bg-base-100 shadow-md border border-base-200"
    >
      <div className="card-body">
        {/* SUBTOTAL */}
        <p className="flex justify-between text-sm border-b border-base-200 pb-2">
          <span className="text-base-content/80">Subtotal</span>
          <span className="font-medium">{formatPrice(cartTotal)}</span>
        </p>
        {/* SHIPPING */}
        <p className="flex justify-between text-sm border-b border-base-200 pb-2 pt-2">
          <span className="text-base-content/80">Shipping</span>
          <span className="font-medium">{formatPrice(shipping)}</span>
        </p>
        {/* Tax */}
        <p className="flex justify-between text-sm border-b border-base-200 pb-2 pt-2">
          <span className="text-base-content/80">Tax</span>
          <span className="font-medium">{formatPrice(tax)}</span>
        </p>
        {/* Total */}
        <p className="mt-4 flex justify-between text-lg pb-2 pt-2">
          <span className="font-bold text-base-content">Order Total</span>
          <span className="font-extrabold text-primary">{formatPrice(orderTotal)}</span>
        </p>
      </div>
    </motion.div>
  );
};
export default CartTotals;
