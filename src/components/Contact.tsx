import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";

import { callChat, emailIcon, location } from "../assets/images";
import { titleVariant } from "../constants";

const Contact = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const form = useRef<HTMLFormElement>();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tn7rptp",
        "template_oj7ixlt",
        form.current,
        "_wI-TzSPfqG_ig6jD"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="px-10 text-white bg-black py-28 xl:px-28 contact-section" id="contact">
      <motion.div
        ref={ref}
        animate={controls}
        // initial={{ opacity: 0, x: "100%" }}
        initial={{ opacity: 0 }}
        variants={titleVariant}
        className="text-center section-title"
      >
        CONTACT ME
      </motion.div>
      <div className="flex flex-col w-full mt-12 xl:flex-row">
        <div className="xl:w-1/2">
          <div className="mt-12 text-gray-400 contact-info">
            <div className="flex items-center mb-8">
              <div className="border-2 cursor-pointer flex items-center justify-center hover:bg-white hover:border-gray-500 transition-[bg] duration-500 ease-in mr-4 w-16 h-16 rounded-full border-white icon">
                <img src={callChat} alt="web-icon" className="w-8 h-8" />
              </div>
              <div>+9779816315905</div>
            </div>
            <div className="flex items-center mb-8">
              <div className="border-2 cursor-pointer flex items-center justify-center hover:bg-white hover:border-gray-500 transition-[bg] duration-500 ease-in mr-4 w-16 h-16 rounded-full border-white icon">
                <img src={emailIcon} alt="web-icon" className="w-8 h-8" />
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
        <div className="mt-20 xl:w-1/2 xl:pl-5 contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-3 py-3 mb-5 text-base bg-transparent border border-gray-500"
            />
            <input
              type="text"
              name="email"
              placeholder="Your Email"
              className="w-full px-3 py-3 mb-5 text-base bg-transparent border border-gray-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full px-3 py-3 mb-5 text-base bg-transparent border border-gray-500"
            />
            <input
              value="SEND"
              type="submit"
              className="w-full py-3 text-white bg-secondary"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
