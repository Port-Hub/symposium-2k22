import React, { useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { config } from "react-spring";
import Sky from "../assets/parallax/Proper/PNG/1sky.png";
import Cloud from "../assets/parallax/Proper/SVG/2cloud.svg";
import Sea from "../assets/parallax/Proper/PNG/3sea.png";
import MainIsl from "../assets/parallax/Proper/SVG/4 Main Island.svg";
import Ship from "../assets/parallax/Proper/SVG/5ship.svg";
import Rocks from "../assets/parallax/Proper/SVG/6rocks.svg";
import xplore from "../assets/parallax/Proper/SVG/8Explore.svg";
// // Little helpers ...
// const url = (name, wrap) =>
//   `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
const ParaX = () => {
  const parallax = useRef();
  return (
    <div className="h-screen w-screen">
      <Parallax ref={parallax} pages={6}>
        <ParallaxLayer
          offset={0}
          speed={0.5}
          sticky={{ start: 0, end: 6 }}
          onClick={() => parallax.current.scrollTo(1)}
        >
          <img src={Sky} className="h-screen w-screen" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={1}
          sticky={{ start: 1, end: 6 }}
          onClick={() => parallax.current.scrollTo(2)}
        >
          <img src={Cloud} className="h-full w-full" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={1}
          sticky={{ start: 2, end: 6 }}
          onClick={() => parallax.current.scrollTo(3)}
        >
          <img src={Sea} className="h-full w-full" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          speed={1}
          sticky={{ start: 3, end: 6 }}
          onClick={() => parallax.current.scrollTo(4)}
        >
          <img src={MainIsl} className="h-full w-full" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={4}
          speed={1}
          sticky={{ start: 4, end: 6 }}
          onClick={() => parallax.current.scrollTo(5)}
        >
          <img src={Ship} className="h-full w-full" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={5}
          speed={1}
          sticky={{ start: 5, end: 6 }}
          onClick={() => parallax.current.scrollTo(6)}
        >
          <img src={Rocks} className="h-full w-full" />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1} sticky={{ start: 5, end: 6 }}>
          <img
            src={xplore}
            className="  m-auto w-5/6 hover:translate-y-12 transition-all delay-200 duration-100 hover:opacity-0 "
          />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default ParaX;
