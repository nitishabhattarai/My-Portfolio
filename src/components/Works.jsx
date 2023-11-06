import React from "react";
import { web_dev } from "../assets/images";

const Works = () => {
  return (
    <div className="h-[50vh] w-full py-14 text-white bg-[#1a1a1a]" id="works">
      <h2 className="w-full text-center section-title">WHAT I DO</h2>
      <div className="mt-12 flex max-w-5xl items-center justify-center mx-auto works">
        <div className="border-2 cursor-pointer flex justify-center items-center hover:bg-white hover:border-gray-500 transition-[bg] duration-500 ease-in mr-4 w-16 h-16 rounded-full border-white icon">
          <img src={web_dev} alt="web-icon" className="w-8 h-8" />
        </div>
        <div className="max-w-xs work">
          <div className="text-2xl title">Responsive Web Development</div>
          <div className="mt-3 text-base description">
            Specializing in building exceptional website and web applications, fully
            responsive.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
