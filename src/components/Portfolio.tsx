import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { portfolio, titleVariant } from "../constants/index";

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

const portfolioItem = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const Portfolio = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div className="bg-[#1a1a1a] text-white p-28 portfolio-page" id="portfolio">
      <motion.div
        ref={ref}
        animate={controls}
        initial={{ opacity: 0, x: "-100vh" }}
        variants={titleVariant}
        className="text-center section-title"
      >
        PORTFOLIO
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="mt-12 grid grid-cols-2 gap-10 portfolio"
      >
        {portfolio.map((item, key) => {
          return (
            <motion.div
              variants={portfolioItem}
              key={key}
              className="text-white shadow-md cursor-pointer portfolio-card"
            >
              <a href={item.link} target="_blank">
                <div className="relative overflow-hidden bg-gray-400">
                  <div className="aspect-[12/6]"></div>
                  <img
                    className="absolute top-0 left-0 object-cover w-full h-full transition-opacity duration-500 opacity-100 cursor-pointer"
                    src={item.src}
                    alt={item.alt}
                  />
                  <div className="p-10 invisible flex flex-col justify-center text-center bg-primary absolute top-0 z-20 h-full transition-all duration-[2s] ease-out content">
                    <div className="text-3xl project-title">{item.title}</div>
                    <div className="text-sm mt-2 description">
                      {item.description}
                    </div>

                    <div className="mt-5 tags">
                      {item.tags &&
                        item.tags.map((tag, key) => {
                          return (
                            <span
                              key={key}
                              className="border border-white py-1 px-2 rounded-lg mr-2"
                            >
                              {tag}
                            </span>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Portfolio;
