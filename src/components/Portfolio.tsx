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
    <div className="bg-[#1a1a1a] text-white px-10 py-28 xl:px-28 portfolio-page" id="portfolio">
      <motion.div
        ref={ref}
        animate={controls}
        initial={{ opacity: 0 }}
        // initial={{ opacity: 0, x: "100%" }}
        variants={titleVariant}
        className="text-center section-title"
      >
        PORTFOLIO
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        animate={controls}
        className="grid gap-5 mt-12 xl:grid-cols-2 portfolio"
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
                    <div className="mt-2 text-sm description">
                      {item.description}
                    </div>

                    <div className="mt-5 tags">
                      {item.tags &&
                        item.tags.map((tag, key) => {
                          return (
                            <span
                              key={key}
                              className="px-2 py-1 mr-2 border border-white rounded-lg"
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
