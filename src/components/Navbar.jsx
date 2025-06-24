import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/user/userSlice";
import Logo from "./Logo";

const Navbar = () => {
  const theme = useSelector((state) => state.userState.theme);
  const numItemsInCart = useSelector((state) => state.cartState.numItemsIncart);

  const dispatch = useDispatch();
  const isDarkTheme = theme === "dracula";

  const handleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <nav className="bg-base-200 sticky top-0 z-10">
      <div className="navbar mx-auto max-w-6xl px-8">
        <div className="navbar-start">
          {/* title */}
          <NavLink
            to="/"
            className="hidden lg:flex btn  text-3xl items-center bg-white"
          >
            {/* <Logo /> */}
            <img src="/src/assets/love-logo.png" className="w-20" alt="" />
          </NavLink>
          {/* Dropdown */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-4 z-[1] p-2 shadow bg-base-200 rounded-b-box w-56"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              onChange={handleTheme}
              defaultChecked={isDarkTheme}
            />
            <BsSunFill className="swap-on h-4 w-4" />
            <BsMoonFill className="swap-off h-4 w-4" />
          </label>
          <NavLink to="/cart" className="btn btn-ghost btn-circle btn-md ml-4">
            <div className="indicator">
              <BsCart3 className="h-6 w-6" />
              <span className="badge badge-xs badge-primary indicator-item">
                {numItemsInCart}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
