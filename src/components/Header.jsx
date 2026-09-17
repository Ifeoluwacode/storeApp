import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearCart } from "../features/cart/cartSlice";
import { logoutUser } from "../features/user/userSlice";
import { motion } from "framer-motion";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userState.user);

  const handleLogout = () => {
    dispatch(clearCart());
    dispatch(logoutUser());
    navigate("/");
  };
  return (
    <motion.header 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-neutral/95 py-2 text-neutral-content z-50 relative shadow-sm"
    >
      <div className="flex justify-center sm:justify-end mx-auto max-w-6xl px-8">
        {user ? (
          <div className="flex gap-x-2 sm:gap-x-8 items-center">
            <p className="text-xs sm:text-sm tracking-wider font-medium">Hello, <span className="text-primary font-bold">{user.username}</span></p>
            <button
              className="btn btn-xs btn-outline btn-primary hover:scale-105 transition-transform"
              onClick={handleLogout}
            >
              logout
            </button>
          </div>
        ) : (
          <div className="flex gap-x-6 justify-center items-center">
            <Link to="/login" className="link link-hover text-sm sm:text-sm hover:text-primary transition-colors duration-300">
              Sign in / Guest
            </Link>
            <Link to="/register" className="link link-hover text-sm sm:text-sm hover:text-primary transition-colors duration-300">
              Create Account
            </Link>
          </div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
