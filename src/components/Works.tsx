import React, { useEffect } from "react";
import { titleVariant, works } from "../constants";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { rightArrow } from "../assets/images";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const Works = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div className="w-full py-28 text-white h-screen bg-[#1a1a1a]" id="works">
      <motion.div
        ref={ref}
        animate={controls}
        initial={{ opacity: 0 }}
        // initial={{ opacity: 0, x: "100%" }}
        variants={titleVariant}
        className="w-full text-center section-title"
      >
        WHAT I DO
      </motion.div>
      <div className="px-10 mx-auto mt-8 xl:max-w-6xl 2xl:max-w-7xl works">
        <div className="work">
          <motion.div
            variants={container}
            initial="hidden"
            animate={controls}
            className="grid gap-4 mt-3 text-base xl:grid-cols-2 description"
          >
            {works.map((work: string, key:number) => {
              return (
                <motion.div
                  variants={item}
                  key={key}
                  className="flex items-center gap-3 mb-2 text-lg"
                >
                  <img className="h-5" src={rightArrow} alt="arrow" />
                  {work}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Works;
