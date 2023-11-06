import React from "react";

import { styles } from "../styles";

const Home = () => {

  return (
    <div
      className={`${styles.paddingX} ${styles.paddingY} h-screen flex justify-center items-end text-center bg-no-repeat bg-center bg-cover bg-hero-bg`}
    >
      <div className="text-left hero_content">
        <h1 className="font-[Agbalumo] text-white text-7xl max-w-2xl">
          turning ideas into real life{" "}
          <span className="bg-gradient-to-r from-pink-600 via-blue-500 to-pink-400 inline-block text-transparent bg-clip-text">
            products
          </span>
          !
        </h1>
      </div>
    </div>
  );
};

export default Home;
