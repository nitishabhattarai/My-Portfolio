import React, { useEffect } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { titleVariant } from "../constants";

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div className="bg-black py-20 text-white about-section" id="about">
        <motion.div
          ref={ref}
          animate={controls}
          initial={{ opacity: 0, x: "-100vh" }}
          variants={titleVariant}
          className="section-title text-center"
        >
          ABOUT ME
        </motion.div>
      <div className="2xl:max-w-6xl mt-8 flex mx-auto gap-20 content">
      
        <div className="pl-20 w-1/2">
          <div className="mt-3 max-w-xl mx-auto text-xl intro">
            I am Nitisha Bhattarai, an enthusiastic Software Engineer, based on
            Nepal, aspiring to develop quality products. My expertise is
            developing next-level websites and web applications including full
            frontend design. Besides I love to sing and travel around.
          </div>
        </div>

        <div className="w-1/2 pr-20 font-[Signika] skills">
          <div>
            <div className="flex justify-between">
              <label>HTLM5</label>
              <span className="text-sm">90%</span>
            </div>
            <ProgressBar
              completed={90}
              bgColor={"#6183a8"}
              height="7px"
              isLabelVisible={false}
            />
          </div>
          <div className="mt-5">
            <div className="flex justify-between">
              <label>CSS3</label>
              <span className="text-sm">85%</span>
            </div>
            <ProgressBar
              completed={85}
              bgColor={"#6183a8"}
              height="7px"
              isLabelVisible={false}
            />
          </div>
          <div className="mt-5">
            <div className="flex justify-between">
              <label>REACT</label>
              <span className="text-sm">65%</span>
            </div>
            <ProgressBar
              completed={65}
              bgColor={"#6183a8"}
              height="7px"
              isLabelVisible={false}
            />
          </div>
          <div className="mt-5">
            <div className="flex justify-between">
              <label>JAVASCRIPT</label>
              <span className="text-sm">70%</span>
            </div>
            <ProgressBar
              completed={70}
              bgColor={"#6183a8"}
              height="7px"
              isLabelVisible={false}
            />
          </div>
          <div className="mt-5">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
