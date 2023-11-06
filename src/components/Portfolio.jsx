import React from "react";
import { images } from "../constants/index";

const Portfolio = () => {
  return (
    <div className="bg-[#1a1a1a] text-white p-20 portfolio-page" id="portfolio">
      <div className="text-center section-title">PORTFOLIO</div>
      <div className="mt-8 grid grid-cols-2 gap-10 portfolio">
        {images.map((item, key) => {
          return (
            <div key={key} className="text-white shadow-md portfolio-card">
              <a href={item.link} target="_blank">
                <div className="relative overflow-hidden bg-gray-400">
                  <div className="aspect-[12/6]"></div>
                  <img
                    className="absolute top-0 left-0 object-cover w-full h-full transition-opacity duration-500 opacity-100 cursor-pointer"
                    src={item.src}
                    alt={item.alt}
                  />
                  <div className="p-10 hidden flex-col justify-center text-center bg-blue-400 absolute top-0 z-20 h-full content">
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
