import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import flakeIcon from "./fish.png";

const Flakes = () => {
  
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="z-30"
      loaded={particlesLoaded}
      options={{
        fpsLimit: 75,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: false,
              mode: "bounce",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 1,
            },
            trail: {
              delay: 0.005,
              quantity: 5,
              pauseOnStop: true
            },
          },
        },
        particles: {
          move: {
            direction: "right",
            enable: true,
            outModes: {
              default: "out"
            },
            size: true,
            speed: {
              min: 3,
              max: 4
            }
          },
          number: {
            value: 5,
          },
          opacity: {
            value: 1,
            animation: {
              enable: false,
              startValue: "max",
              destroy: "min",
              speed: 0.3,
              sync: true
            }
          },
          shape: {
            image: [
              {
                src: flakeIcon,
                width: 20,
                height: 20,
              },
            ],
            type: 'image',
          },
          size: {
            value: {
              min: 15,
              max: 20
            }
          },
        },
      }}
    />
  );
};
export default Flakes;