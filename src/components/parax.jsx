import React, { useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Sky from "../assets/parallax/Proper/PNG/1sky.png";
import Cloud from "../assets/parallax/Proper/SVG/2cloud.svg";
import Sea from "../assets/parallax/Proper/PNG/3sea.png";
import MainIsl from "../assets/parallax/Proper/SVG/4 Main Island.svg";
import Ship from "../assets/parallax/Proper/SVG/5ship.svg";
import Rocks from "../assets/parallax/Proper/SVG/6rocks.svg";
import Island from "../assets/parallax/Proper/SVG/7Island.svg";

// // Little helpers ...
// const url = (name, wrap) =>
//   `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

const ParaX = () => {
  const parallax = useRef();
  return (
    <div  className="w-screen h-screen" >
      <Parallax ref={parallax} pages={6.5}>
        <ParallaxLayer offset={0} speed={1} sticky={{start:0,end:7}}>
          <img src={Sky} className="w-screen h-screen"/>
           </ParallaxLayer>
           <ParallaxLayer offset={1} speed={1} sticky={{start:1,end:7}}>
          <img src={Cloud} className="w-full h-full"/>
           </ParallaxLayer>
           <ParallaxLayer offset={2} speed={1} sticky={{start:2,end:7}}>
          <img src={Sea} className="w-full h-full"/>
           </ParallaxLayer>
           <ParallaxLayer offset={3} speed={1} sticky={{start:3,end:7}}>
          <img src={MainIsl} className="w-full h-full"/>
           </ParallaxLayer>
           <ParallaxLayer offset={4} speed={1} sticky={{start:4,end:7}}>
          <img src={Ship} className="w-full h-full"/>
           </ParallaxLayer>
           <ParallaxLayer offset={5} speed={1} sticky={{start:5,end:7}}>
          <img src={Rocks} className="w-full h-full"/>
           </ParallaxLayer>
           <ParallaxLayer offset={6} speed={1} sticky={{start:6,end:6.5}}>
          <img src={Island} className="w-full h-full"/>
           </ParallaxLayer>
          
           {/* <ParallaxLayer offset={1} speed={1} sticky={{start:1,end:7}}>
          <img src={Cloud} className="w-full h-full"/>
           </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#87BCDE' }} />


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
        </ParallaxLayer> */}
      </Parallax>
    </div>
  )
}

export default ParaX;
