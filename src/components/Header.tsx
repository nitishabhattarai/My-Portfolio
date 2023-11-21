import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

import { styles } from "../styles";
import { menu } from "../assets/images";
import { navLinks } from "../constants";
import "../main.css";

const Header = () => {
  const [active, setActive] = useState("");
  const [toogle, setToogle] = useState(false);
  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#252734") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("8rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full 
  flex items-center py-5 fixed top-0 z-30`}
      style={{
        backgroundColor: navColor,
        height: navSize,
        transition: "all 1s",
      }}
    >
      <div
        className="w-full flex justify-between
    items-center xl:max-w-7xl mx-auto"
      >
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <h1 className="font-[Sacramento] text-6xl tracking-wider bg-gradient-to-r from-blue-600 via-white to-green-400 inline-block text-transparent bg-clip-text">
            Nitisha
          </h1>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-primary"
              }
              hover:text-white text-[18px] font-medium cursor-pointer
              `}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={menu}
            alt="menu"
            className="w-[28px] h-[28px]
        object-contain cursor-pointer"
            onClick={() => setToogle(!toogle)}
          />
          <div
            className={`${!toogle ? "hidden" : "flex"}
        p-6 bg-[#252734] absolute
        top-20 right-0 mx-4 my-2 min-w-[140px]
        z-10 rounded-xl `}
          >
            <ul
              className="list-none 
                  flex justify-end items-start flex-col gap-4"
            >
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  }
              font-poppins font-medium cursor-pointer text-[16px]
              `}
                  onClick={() => {
                    setToogle(!toogle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
