import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import flakeIcon from "./Flake.svg";

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
              enable: true,
              mode: "bounce",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 1,
            },
            repulse: {
              distance: 100,
            },
          },
        },
        particles: {
          color: {
            value: "#000",
          },
          collisions: {
            enable: true,
            mode: "destroy",
          },
          move: {
            directions: "bottom",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: true,
          },
          number: {
            value: 30,
          },
          opacity: {
            value: 1,
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
            value: { min: 1, max: 6 },
          },
        },
      }}
    />
  );
};
export default Flakes;