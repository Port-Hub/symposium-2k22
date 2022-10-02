import React, { useState } from 'react'
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from 'react-use-gesture'
import Flakes from "../components/flakes.jsx"

import Drawer from "../components/drawer.jsx"
import Golf from '../assets/events/code-golfing.png';
import Wheel from '../assets/events/hack-wheel.png';
import Bugs from '../assets/events/hugs-bugs.png';
import Santa from '../assets/events/santa-maria-hunt.png';
import Scroll from '../assets/events/scroll-unveilling.png';
import Brainz from '../assets/events/select-from-brainz.png';
import Coat from '../assets/events/turn-coat.png';
import Whack from '../assets/events/whack-a-bug.png';


const cards = [Golf, Wheel, Bugs, Santa, Scroll, Brainz, Coat, Whack];

const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
})
const from = (_i ) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })

const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

function Deck() {
  const [gone] = useState(() => new Set()) 
  const [props, api] = useSprings(cards.length, i => ({
    ...to(i),
    from: from(i),
  })) 
  
  const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2 
    const dir = xDir < 0 ? -1 : 1 
    if (!down && trigger) gone.add(index) 
    api.start(i => {
      if (index !== i) return 
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0 
      const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0) 
      const scale = down ? 1.1 : 1 
      return {
        x,
        rot,
        scale,
        delay: undefined,
        config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
      }
    })
    if (!down && gone.size === cards.length)
      setTimeout(() => {
        gone.clear()
        api.start(i => to(i))
      }, 600)
  })
 return (
    <>
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div className="bg-auto w-80 h-52 will-change-transform justify-center" key={i} style={{ x, y }}>
          <animated.div
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
              backgroundImage: `url(${cards[i]})`,
            }}
            className="bg-contain w-40 h-72 rounded-2xl will-change-transform shadow-lg shadow-primary hover:origin-top"
          />
        </animated.div>
      ))}
    </>
  )
}

const Contained = () => {
  return (
    <div className='container mx-auto'>
      <Flakes />
      <div className="flex flex-row pt-20">
        <Deck />
      </div>
    </div>
  )
}

const Events = () => {
  return(
    <Drawer content={<Contained />} />
  )
}

export default Events;
