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
        className="flex items-center justify-between w-full mx-auto xl:max-w-7xl"
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
        <ul className="flex-row hidden gap-10 list-none sm:flex">
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
        <div className="flex items-center justify-end flex-1 sm:hidden">
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
              className="flex flex-col items-start justify-end gap-4 list-none"
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
