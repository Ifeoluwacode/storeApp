import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/user/userSlice";
import { motion } from "framer-motion";

const Navbar = () => {
  const theme = useSelector((state) => state.userState.theme);
  const numItemsInCart = useSelector((state) => state.cartState.numItemsIncart);

  const dispatch = useDispatch();
  const isDarkTheme = theme === "dracula";

  const handleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
      className="bg-base-100/80 backdrop-blur-md sticky top-0 z-40 shadow-sm border-b border-base-200/50"
    >
      <div className="navbar mx-auto max-w-6xl px-8">
        <div className="navbar-start">
          {/* title */}
          <NavLink
            to="/"
            className="hidden lg:flex items-center hover:scale-105 transition-transform duration-300"
          >
            {/* <Logo /> */}
            <img src="/images/love-logo.png" className="w-20" alt="logo" />
          </NavLink>
          {/* Dropdown */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden hover:bg-base-200 transition-colors">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-4 z-[1] p-2 shadow-lg bg-base-100/95 backdrop-blur-md rounded-box w-56 border border-base-200"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-1">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          <label className="swap swap-rotate btn btn-ghost btn-circle btn-sm md:btn-md hover:bg-base-200 transition-colors">
            <input
              type="checkbox"
              onChange={handleTheme}
              defaultChecked={isDarkTheme}
            />
            <BsSunFill className="swap-on h-4 w-4 md:h-5 md:w-5" />
            <BsMoonFill className="swap-off h-4 w-4 md:h-5 md:w-5" />
          </label>
          <NavLink to="/cart" className="btn btn-ghost btn-circle btn-sm md:btn-md ml-2 hover:bg-base-200 transition-colors group">
            <div className="indicator">
              <BsCart3 className="h-5 w-5 md:h-6 md:w-6 group-hover:scale-110 transition-transform" />
              <span className="badge badge-xs badge-primary indicator-item shadow-sm">
                {numItemsInCart}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
