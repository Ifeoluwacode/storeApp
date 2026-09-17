import AboutFirm from "../components/AboutFirm";
import OurTeam from "../components/OurTeam";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex gap-2 sm:gap-x-6 items-center justify-center text-4xl font-extrabold leading-none tracking-tight sm:text-6xl pt-8 pb-4"
      >
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">About US</h1>
      </motion.div>
      <AboutFirm />
      <OurTeam />
    </>
  );
};

export default About;
