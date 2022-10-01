import React, { useRef } from 'react'

import { Parallax, ParallaxLayer} from '@react-spring/parallax';
import { config } from 'react-spring'
import Sky from "../assets/parallax/Proper/PNG/1sky.png";
import Cloud from "../assets/parallax/Proper/SVG/2cloud.svg";
import Sea from "../assets/parallax/Proper/PNG/3sea.png";
import MainIsl from "../assets/parallax/Proper/SVG/4 Main Island.svg";
import Ship from "../assets/parallax/Proper/SVG/5ship.svg";
import Rocks from "../assets/parallax/Proper/SVG/6rocks.svg";
// // Little helpers ...
// const url = (name, wrap) =>
//   `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

const ParaX = () => {
  const parallax = useRef();
  return (
    <div  className="w-screen h-screen" >
      <Parallax ref={parallax} pages={6.5} config={config.stiff}>
        <ParallaxLayer offset={0} speed={1} sticky={{start:0,end:7}} onClick={() => parallax.current.scrollTo(1)}>
          <img src={Sky} className="w-screen h-screen"/>
           </ParallaxLayer>
           <ParallaxLayer offset={1} speed={1} sticky={{start:1,end:7}} onClick={() => parallax.current.scrollTo(2)}>
          <img src={Cloud} className="w-full h-full"/>
           </ParallaxLayer>
           <ParallaxLayer offset={2} speed={1} sticky={{start:2,end:7}}onClick={() => parallax.current.scrollTo(3)}>
          <img src={Sea} className="w-full h-full"/>
           </ParallaxLayer>
           <ParallaxLayer offset={3} speed={1} sticky={{start:3,end:7}} onClick={() => parallax.current.scrollTo(4)}>
          <img src={MainIsl} className="w-full h-full"/>
           </ParallaxLayer>
           <ParallaxLayer offset={4} speed={1} sticky={{start:4,end:7}} onClick={() => parallax.current.scrollTo(5)}>
          <img src={Ship} className="w-full h-full"/>
           </ParallaxLayer>
           <ParallaxLayer offset={5} speed={1} sticky={{start:5,end:7}} onClick={() => parallax.current.scrollTo(6)}>
          <img src={Rocks} className="w-full h-full"/>
           </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default ParaX;
