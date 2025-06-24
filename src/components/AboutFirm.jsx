import { useState, useRef, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";

const features = [
  {
    id: 1,
    title: "Our Story",
    description:
      "Every great brand begins with a simple idea — ours started with a passion to make everyday shopping better, more personal, and more meaningful. LoveStore was born out of a desire to create a space where quality meets affordability, and where every product tells a story of care, craftsmanship, and connection. What began as a small dream has grown into a trusted destination for customers who value thoughtful selections and genuine service. We’re not just about selling — we’re about building a community of people who appreciate good things, made well. From our humble beginnings to where we are now, your support has been part of our journey every step of the way. Thank you for being part of our story.",

    image: "/images/Cloth.jpg",
  },
  {
    id: 2,
    title: "Our Vision",
    description:
      "Our vision is to redefine the shopping experience by creating a platform where quality, trust, and inspiration come together. We aim to be the go-to destination for those seeking unique, well-crafted products that enrich everyday life. We believe in a future where every purchase supports a story, a maker, and a community.",

    image: "/images/furniture.jpg",
  },
  {
    id: 3,
    title: "Our Mission",
    description:
      "Our mission is to connect people with products that matter. We carefully curate our selection to ensure every item meets our standards for quality, value, and design. Through exceptional service and a commitment to our customers, we strive to make every interaction meaningful and memorable.",

    image: "/images/kid.jpg",
  },
  {
    id: 4,
    title: "Our Values",
    description:
      "Integrity, creativity, and community are at the heart of everything we do. We value honest relationships with our customers and partners, celebrate innovation, and believe in giving back to the communities we serve. These values guide us as we grow and evolve.",

    image: "/images/kids_shopping.jpg",
  },
];

const textVariants = {
  initial: { opacity: 0.2, y: 10 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0.2, y: -10, transition: { duration: 0.2, ease: "easeIn" } },
};

const imageVariants = {
  initial: { opacity: 0, y: 50, scale: 0.95 },
  whileInView: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function AboutFirm() {
  const [activeIndex, setActiveIndex] = useState(0);
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "end center"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latestValue) => {
      const newIndex = Math.min(
        Math.floor(latestValue * features.length),
        features.length - 1
      );
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    });
    return unsubscribe;
  }, [scrollYProgress, activeIndex]);

  const activeFeature = features[activeIndex];

  return (
    <div ref={targetRef} className={`relative w-full  py-8 min-h-[100vh]`}>
      <div className="max-w-[1300px] mx-auto ">
        <div className="lg:grid lg:grid-cols-2 lg:gap-10">
          {/* Left Column (Sticky) */}
          <div className="lg:sticky lg:top-0 h-screen flex flex-col justify-center">
            {/* Sticky border line */}

            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature.id}
                variants={textVariants}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <div className="">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center font-sans text-primary-black mb-5">
                    {activeFeature.title}
                  </h1>
                  <p className="text-xl font-mono leading-9 tracking-tighter lg:max-w-[550px] whitespace-pre-line">
                    {activeFeature.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column (Scrolling) */}
          <div className="max-lg:hidden relative pt-16 lg:pt-0">
            <div className="flex flex-col items-center gap-16">
              {features.map((feature) => (
                <motion.div
                  key={feature.id}
                  className="w-full h-[100vh] flex justify-center items-center"
                  variants={imageVariants}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of item is visible
                >
                  <img
                    src={feature.image}
                    alt="image"
                    className="rounded-2xl max-h-[75vh] w-full  "
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
