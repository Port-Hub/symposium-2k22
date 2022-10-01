import React, { useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Sky from "../assets/parallax/Proper/PNG/1sky.png";
import Cloud from "../assets/parallax/Proper/PNG/2clouds.png";
import Sea from "../assets/parallax/Proper/PNG/3sea.png";
import MainIsl from "../assets/parallax/Proper/PNG/4Main Island.png";
import Ship from "../assets/parallax/Proper/PNG/5ship.png";
import Rocks from "../assets/parallax/Proper/PNG/6rocks.png";
import Island from "../assets/parallax/Proper/PNG/7Island.png";

// // Little helpers ...
// const url = (name, wrap) =>
//   `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

const ParaX = () => {
  const parallax = useRef();
  return (
    <div style={{ width: "100%", height: '100%' }} className="bg-blue-200" >
      <Parallax ref={parallax} pages={2}>
        <ParallaxLayer offset={1} speed={1} >
          <img src={Sky} className="w-full h-fit"/>
           </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1} style={{ backgroundColor: '#87BCDE' }} />


        <ParallaxLayer offset={0.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={Cloud} style={{ width: '15%', marginLeft: '70%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={MainIsl} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={MainIsl} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={0.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={MainIsl} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={MainIsl} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={MainIsl} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={MainIsl} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={0.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={MainIsl} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={MainIsl} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src={MainIsl} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={MainIsl} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img src={MainIsl} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={-0.4}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}>
          <img src={Ship} style={{ width: '60%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={-0.3}
          style={{
            backgroundSize: '80%',
            backgroundPosition: 'center',
            backgroundImage: {Rocks},
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <img src={Island} style={{ width: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={-0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => parallax.current.scrollTo(0)}>
          <img src={Sea} style={{ width: '40%' }} />
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default ParaX;
