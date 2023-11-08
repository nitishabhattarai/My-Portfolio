import React, { useEffect } from "react";
import { brightest, rightArrow, web_dev } from "../assets/images";
import { titleVariant, works } from "../constants";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Works = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div className="w-full py-14 text-white bg-[#1a1a1a]" id="works">
      <motion.div
        ref={ref}
        animate={controls}
        initial={{ opacity: 0, x: "-100vh" }}
        variants={titleVariant}
        className="w-full text-center section-title"
      >
        WHAT I DO
      </motion.div>
      <div className="mt-8 max-w-6xl 2xl:max-w-7xl mx-auto works">
        <div className="work">
          <div className="mt-3 grid grid-cols-2 gap-4 text-base description">
            {works.map((work: string) => {
              return (
                <div className="flex gap-3 mb-2 text-lg items-center">
                  <img className="h-5" src={rightArrow} alt="arrow" />
                  {work}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
