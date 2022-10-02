import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { config } from "react-spring";
import Sky from "../assets/parallax/Proper/PNG/1sky.png";
import Cloud from "../assets/parallax/Proper/SVG/2cloud.svg";
import Sea from "../assets/parallax/Proper/PNG/3sea.png";
import MainIsl from "../assets/parallax/Proper/SVG/4 Main Island.svg";
import Ship from "../assets/parallax/Proper/SVG/5ship.svg";
import Rocks from "../assets/parallax/Proper/SVG/6rocks.svg";
import xplore from "../assets/parallax/Proper/SVG/8Explore.svg";
import { Link } from "react-router-dom";
import scroll from "../assets/parallax/Proper/SVG/scroll.gif";

const Landing = () => {
  const parallax = useRef();
  return (
    <div className="h-screen w-screen">
      <Parallax ref={parallax} pages={6} config={config.stiff} style={{backgroundColor:"#C2DFFF"}}>


      <ParallaxLayer
          offset={0}
          speed={0.5}
          onClick={() => parallax.current.scrollTo(1)}        >
          <img src={scroll} className="m-auto h-fit w-fit " />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.5}
          sticky={{ start: 1, end: 8 }}
          onClick={() => parallax.current.scrollTo(2)}
        >
          <img src={Sky} className="h-screen w-screen" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={1}
          sticky={{ start: 2, end: 8 }}
          onClick={() => parallax.current.scrollTo(3)}
        >
          <img src={Cloud} className="h-full w-full" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={1}
          sticky={{ start: 3, end: 8 }}
          onClick={() => parallax.current.scrollTo(4)}
          style={{
            display: 'flex',
            alignItems: "center",
            justifyContent: 'center',
          }}
        >
          <img src={Sea} className="h-full w-full " />
        </ParallaxLayer>

        <ParallaxLayer
          offset={4}
          speed={1}
          sticky={{ start: 4, end: 8 }}
          onClick={() => parallax.current.scrollTo(5)}
        >
          <img src={MainIsl} className="h-full w-full" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={5}
          speed={1}
          sticky={{ start: 5, end: 8 }}
          onClick={() => parallax.current.scrollTo(6)}
        >
          <img src={Ship} className="h-full w-full" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={6}
          speed={1}
          sticky={{ start: 6, end: 8 }}
          onClick={() => parallax.current.scrollTo(7)}
        >
          <img src={Rocks} className="h-full w-full" />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={1} sticky={{ start: 6, end: 8 }} onClick={() => parallax.current.scrollTo(8)}>
          <img
            src={xplore}
            className="  m-auto w-5/6 hover:translate-y-12 transition-all delay-200 duration-100"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={7} speed={1} sticky={{ start: 7, end: 8 }} style={{
            display: 'flex',
            alignItems: "center",
            justifyContent: 'center',
            backgroundSize: 'cover'
                      }}>
          <Link to="home"><button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4  border-blue-700 hover:border-blue-500 rounded  mt-96 h-25 w-80 text-4xl font-sans ">Explore Events</button></Link>
        </ParallaxLayer>

      </Parallax>
      
    </div>
  );
};

export default Landing;
