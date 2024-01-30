import React, { useCallback, useEffect, useRef } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Container, Engine } from "tsparticles-engine";
import Typed from "typed.js";

const Home = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {},
    []
  );
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [`turning ideas into products!`], // Strings to display
      // Speed settings, try different values until you get good results
      startDelay: 300,
      typeSpeed: 200,
      backSpeed: 150,
      backDelay: 100,
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="relative h-screen text-center bg-black bg-center bg-no-repeat bg-cover">
      <Particles
        id="tsparticles"
        height="100vh"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: false,
          fpsLimit: 500,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#D43F52",
            },
            links: {
              color: "#ffffff",
              distance: 100,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 4,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="absolute text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 hero_content">
        <div
          className="inline-block max-w-5xl text-transparent bg-gradient-to-r from-secondary via-blue-500 to-pink-400 bg-clip-text text-7xl"
          ref={el}
        ></div>
      </div>
    </div>
  );
};

export default Home;
