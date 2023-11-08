import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { portfolio, titleVariant } from "../constants/index";

const Portfolio = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div className="bg-[#1a1a1a] text-white p-20 portfolio-page" id="portfolio">
      <motion.div
        ref={ref}
        animate={controls}
        initial={{ opacity: 0, x: "-100vh" }}
        variants={titleVariant}
        className="text-center section-title"
      >
        PORTFOLIO
      </motion.div>
      <div className="mt-8 grid grid-cols-2 gap-10 portfolio">
        {portfolio.map((item, key) => {
          return (
            <div
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
                  <div className="p-10 hidden transition-all duration-700 ease-[ease-out] flex-col justify-center text-center bg-primary absolute top-0 z-20 h-full content">
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
