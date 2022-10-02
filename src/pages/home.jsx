import React from 'react'
import { animated } from '@react-spring/web'
import { Link } from 'react-router-dom';

import Favicon from '../assets/icons/favicon.png'
import Logo from '../assets/icons/logo.png'
import Golf from '../assets/events/code-golfing.png';
import Wheel from '../assets/events/hack-wheel.png';
import Bugs from '../assets/events/hugs-bugs.png';
import Santa from '../assets/events/santa-maria-hunt.png';
import Scroll from '../assets/events/scroll-unveilling.png';
import Brainz from '../assets/events/select-from-brainz.png';
import Coat from '../assets/events/turn-coat.png';
import Whack from '../assets/events/whack-a-bug.png';
import Guvi from "../assets/sponsors/guvi-logo.png";
import Learners from "../assets/sponsors/learners-cortex.jpg";
import Magoosh from "../assets/sponsors/magoosh-logo.png";


const cards = 
[
  {
    "image":Golf,
    "link":"golfing"
  }, 
  {
    "image": Wheel,
    "link":"wheel"
  },
  {
    "image":Bugs,
    "link":"bugs"
  },
  {
    "image":Santa,
    "link":"hunt"
  },
  {
    "image":Scroll,
    "link":"scroll"
  },
  {
    "image":Brainz,
    "link":"brainz"
  },
  {
    "image":Coat,
    "link":"turncoat"
  },
  {
    "image":Whack,
    "link":"whackbug"
  }
];

const sponsor = 
[
  {
    "image": Guvi,
    "link": "https://www.guvi.in/"
  },
  {
    "image": Learners,
    "link": "https://learnerscortex.com/"
  },
  {
    "image": Magoosh,
    "link": "https://magoosh.com/"
  }
]

const About = () => {
  return (
    <div className="grid grid-cols-2 place-items-center">
      <div className='w-40 h-40'>
          <img src={Favicon} />
          <img src={Logo} />
        </div>
        <div className="p-10 space-y-10">
          <h2 className=' text-5xl'>About Xplore</h2>
          <p>
            A National Level Technical Symposium conducted by the Department of Computer Science and Engineering- Loyola-ICAM College Of Engineering and Technology.  The event is to unfold through 8 stages which are technical in nature and is to be held on the 8th of October, 2022. We welcome all the participants to benefit from this event
          </p>
          <ul>
            <li>
              <a href="https://forms.gle/z72CM5QPpQopoJhk8" className="btn btn-main-md">Register Now</a>
            </li>
          </ul>
        </div>
      </div>
  )
}

const Deck = () => {
 return (
    <>
      {cards.map(( item,index ) => (
        <animated.div className="bg-auto will-change-transform" key={index}>
          <animated.div
            style={{
              backgroundImage: `url(${item.image})`,
            }}
            className={ `bg-contain w-40 h-72 rounded-2xl will-change-transform shadow-lg shadow-primary `}
          />
          <Link to={item.link} className='btn btn-primary'>Know More</Link>
        </animated.div>
      ))}
    </>
  )
}

const Sponsors = () => {
  return (
     <>
       {sponsor.map(( item,index ) => (
         <animated.div className="will-change-transform" key={index}>
           <animated.div
             style={{
               backgroundImage: `url(${item.image})`,
             }}
             className={ `w-72 h-40 rounded-2xl will-change-transform shadow-lg shadow-primary `}
           />
         </animated.div>
       ))}
     </>
   )
 }

const Contained = () => {
  return (
    <>
      <About />
      <h2 className='text-5xl mt-20 text-center'>
        Events
      </h2>
      <div className="grid grid-cols-2 justify-items-center gap-y-40 md:grid-cols-4 lg:grid-cols-4 xl:grid-cold-4 pt-20">
        <Deck />
      </div>
      <h2 className='text-5xl mt-20 text-center'>
        Sponsors
      </h2>
      <div className="grid grid-cols-1 justify-items-center gap-y-40 md:grid-cols-3 lg:grid-cols-3 xl:grid-cold-3 pt-20">
        <Sponsors />
      </div>
    </>
  )
}

const Home = () => {
  return(
    <Contained />
  )
}

export default Home;
