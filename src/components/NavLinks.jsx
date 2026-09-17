import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const links = [
  { id: 1, url: "/", text: "home" },
  { id: 2, url: "about", text: "about" },
  { id: 3, url: "products", text: "products" },
  { id: 4, url: "cart", text: "cart" },
  { id: 5, url: "checkout", text: "checkout" },
  { id: 6, url: "orders", text: "orders" },
];

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const NavLinks = () => {
  const user = useSelector((state) => state.userState.user);
  return (
    <>
      {links.map((link, index) => {
        const { url, text, id } = link;
        if ((url === "checkout" || url === "orders") && !user) return null;
        return (
          <motion.li 
            key={id}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.05 }}
          >
            <NavLink 
              to={url} 
              className={({ isActive }) => 
                `capitalize font-medium transition-all duration-300 rounded-lg px-4 py-2 hover:bg-base-200 hover:text-primary ${isActive ? 'bg-base-200/50 text-primary font-bold shadow-sm' : 'text-base-content/80'}`
              }
            >
              {text}
            </NavLink>
          </motion.li>
        );
      })}
    </>
  );
};

export default NavLinks;
