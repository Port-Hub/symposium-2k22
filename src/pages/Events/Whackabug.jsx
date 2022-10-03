import React from 'react'
import Scroll from '../../assets/scroll.png'

export default function Whackabug() {
  return (
    <div className='grid grid-cols-2 mx-auto'>
      <div></div>
      <div className='relative'>
        <img src={Scroll} className="" />
        <div className='absolute top-1/4 p-52'>
        <h1 className='text-3xl text-primary py-2'>Description</h1>
        Whack-A-Bug is a scenario based Debugging contest in which the participants will be given code snippets that contain one or more bugs in it. The participants must identify the bugs and debug the code .
          <h1>Rules</h1>
          <li>Each team with exactly 2 members</li>
          <li>Results of all rounds are not subjected to discussion and the judge's decision is final.</li>
          <li>Participants are not allowed to browse the Internet.</li>
          <li>Any malpractices will not be tolerated and if found will be disqualified.</li>
          <li>Participants must strictly abide to the timings</li>
        </div>
      </div>
    </div>
  )
}
