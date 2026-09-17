import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const CartItemsList = () => {
  const cartItems = useSelector((state) => state.cartState.cartItems);

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      {cartItems.map((item) => {
        return <CartItem key={item.cartID} cartItem={item} />;
      })}
    </motion.div>
  );
};
export default CartItemsList;
