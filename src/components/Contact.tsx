import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { callChat, email, location } from "../assets/images";
import { titleVariant } from "../constants";

const Contact = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div className="bg-black text-white p-28 contact-section" id="contact">
      <motion.div
        ref={ref}
        animate={controls}
        initial={{ opacity: 0, x: "-100vh" }}
        variants={titleVariant}
        className="text-center section-title"
      >
        CONTACT ME
      </motion.div>
      <div className="flex mt-12 w-full">
        <div className="w-1/2">
          <div className="mt-12 text-gray-400 contact-info">
            <div className="mb-4 flex items-center">
              <div className="border-2 cursor-pointer flex items-center justify-center hover:bg-white hover:border-gray-500 transition-[bg] duration-500 ease-in mr-4 w-16 h-16 rounded-full border-white icon">
                <img src={callChat} alt="web-icon" className="w-8 h-8" />
              </div>
              <div>+9779816315905</div>
            </div>
            <div className="mb-4 flex items-center">
              <div className="border-2 cursor-pointer flex items-center justify-center hover:bg-white hover:border-gray-500 transition-[bg] duration-500 ease-in mr-4 w-16 h-16 rounded-full border-white icon">
                <img src={email} alt="web-icon" className="w-8 h-8" />
              </div>
              <div>nitishaabhattarai@gmail.com</div>
            </div>
            <div className="flex items-center">
              <div className="border-2 cursor-pointer flex items-center justify-center hover:bg-white hover:border-gray-500 transition-[bg] duration-500 ease-in mr-4 w-16 h-16 rounded-full border-white icon">
                <img src={location} alt="web-icon" className="w-8 h-8" />
              </div>
              <div>Itahari-5, Sunsari, Nepal</div>
            </div>
          </div>
        </div>
        <div className="w-1/2 pl-5 contact-form">
          <input
            type="text"
            placeholder="Your Name"
            className="mb-5 text-base w-full py-3 px-3 border border-gray-500 bg-transparent"
          />
          <input
            type="text"
            placeholder="Your Email"
            className="mb-5 text-base w-full py-3 px-3 border border-gray-500 bg-transparent"
          />
          <textarea
            placeholder="Your Message"
            className="mb-5 text-base w-full py-3 px-3 border border-gray-500 bg-transparent"
          />
          <button className="bg-secondary text-white w-full py-3">
            SEND ME
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
