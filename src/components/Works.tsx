import React, { useEffect } from "react";
import { brightest, rightArrow, web_dev } from "../assets/images";
import { titleVariant, works } from "../constants";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
    <div className="w-full py-28 text-white bg-[#1a1a1a]" id="works">
      <motion.div
        ref={ref}
        animate={controls}
        initial={{ opacity: 0, x: "-100vh" }}
        variants={titleVariant}
        className="w-full text-center section-title"
      >
        WHAT I DO
      </motion.div>
      <div className="mt-12 px-10 xl:max-w-6xl 2xl:max-w-7xl mx-auto works">
        <div className="work">
          <motion.div
            variants={container}
            initial="hidden"
            animate={controls}
            className="mt-3 grid xl:grid-cols-2 gap-4 text-base description"
          >
            {works.map((work: string, key:number) => {
              return (
                <motion.div
                  variants={item}
                  key={key}
                  className="flex gap-3 mb-2 text-lg items-center"
                >
                  {/* <img className="h-5" src={rightArrow} alt="arrow" /> */}
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
