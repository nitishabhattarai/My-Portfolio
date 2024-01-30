import React, { useEffect } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { titleVariant } from "../constants";

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

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div className="bg-black py-28 about-section" id="about">
      <motion.div
        ref={ref}
        animate={controls}
        // initial={{ opacity: 0, x: "100%" }}
        initial={{ opacity: 0 }}
        variants={titleVariant}
        className="text-center text-white section-title"
      >
        ABOUT ME
      </motion.div>
      <div className="flex flex-col gap-20 px-10 mx-auto mt-12 text-gray-400 2xl:max-w-6xl xl:px-0 xl:flex-row content">
        <div className="xl:pl-20 xl:w-1/2">
          <div className="mx-auto mt-3 text-xl xl:max-w-xl intro">
            I am Nitisha Bhattarai, an enthusiastic Software Engineer, based on
            Nepal, aspiring to develop quality products. My expertise is
            developing next-level websites and web applications including full
            frontend design. Besides I love to sing and travel around.
          </div>
        </div>

        <div className="xl:w-1/2 xl:pr-20 font-[Signika] skills">
          <motion.div variants={container} initial="hidden" animate={controls}>
            <motion.div variants={item}>
              <div className="flex justify-between">
                <label>HTLM5</label>
                <span className="text-sm">95%</span>
              </div>
              <ProgressBar
                completed={95}
                bgColor={"#6183a8"}
                height="7px"
                isLabelVisible={false}
              />
            </motion.div>
            <motion.div variants={item} className="mt-5">
              <div className="flex justify-between">
                <label>CSS3</label>
                <span className="text-sm">90%</span>
              </div>
              <ProgressBar
                completed={90}
                bgColor={"#6183a8"}
                height="7px"
                isLabelVisible={false}
              />
            </motion.div>
            <motion.div variants={item} className="mt-5">
              <div className="flex justify-between">
                <label>REACT</label>
                <span className="text-sm">75%</span>
              </div>
              <ProgressBar
                completed={75}
                bgColor={"#6183a8"}
                height="7px"
                isLabelVisible={false}
              />
            </motion.div>
            <motion.div variants={item} className="mt-5">
              <div className="flex justify-between">
                <label>JAVASCRIPT</label>
                <span className="text-sm">80%</span>
              </div>
              <ProgressBar
                completed={80}
                bgColor={"#6183a8"}
                height="7px"
                isLabelVisible={false}
              />
            </motion.div>
            <motion.div variants={item} className="mt-5">
              <div className="flex justify-between">
                <label>ANGULAR</label>
                <span className="text-sm">50%</span>
              </div>
              <ProgressBar
                completed={50}
                bgColor={"#6183a8"}
                height="7px"
                isLabelVisible={false}
              />
            </motion.div>
            <motion.div variants={item} className="mt-5">
              <div className="flex justify-between">
                <label>TYPESCRIPT</label>
                <span className="text-sm">80%</span>
              </div>
              <ProgressBar
                completed={80}
                bgColor={"#6183a8"}
                height="7px"
                isLabelVisible={false}
              />
            </motion.div>
            <motion.div variants={item} className="mt-5">
              <div className="flex justify-between">
                <label>TAILWIND CSS</label>
                <span className="text-sm">90%</span>
              </div>
              <ProgressBar
                completed={90}
                bgColor={"#6183a8"}
                height="7px"
                isLabelVisible={false}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
