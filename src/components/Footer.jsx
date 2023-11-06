import React from "react";
import { facebook, instagram, linkedin } from "../assets/images";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-black text-center text-gray-400 pt-1 pb-4">
      &copy; {currentYear} Nitisha Bhattarai. All rights reserved!
      <div className="mt-3 flex items-center justify-center social-icons">
        <a href="https://www.facebook.com/nitisha.bhattarai.3/" target="_blank">
          <img className="h-4 mr-5" src={facebook} alt="facebook" />
        </a>
        <a
          href="https://www.linkedin.com/in/nitisha-bhattarai-45ab2619a/"
          target="_blank"
        >
          <img className="h-4 mr-5" src={linkedin} alt="linkedin" />
        </a>
        <a href="https://www.instagram.com/nitisha.bhattarai/" target="_blank">
          <img className="h-4 mt-1 mr-5" src={instagram} alt="instagram" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
