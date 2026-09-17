import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const carouselImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="max-w-2xl text-4xl font-extrabold tracking-tight sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary pb-2">
          We are changing the way people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-base-content/80">
          We’re redefining shopping by blending comfort, style, and convenience
          — all in one place. Discover our exclusive collections today.
        </p>
        <div className="mt-10 flex gap-4">
          <Link to="/products" className="btn btn-primary shadow-lg hover:shadow-primary/50 transition-all duration-300">
            Our Products
          </Link>
          <Link to="/about" className="btn btn-outline btn-secondary hover:shadow-lg transition-all duration-300">
            Learn More
          </Link>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral/80 backdrop-blur-sm rounded-box shadow-lg border border-neutral/50"
      >
        {carouselImages.map((image) => {
          return (
            <div className="carousel-item relative group overflow-hidden rounded-box" key={image}>
              <img
                src={image}
                className="h-full w-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Hero;
