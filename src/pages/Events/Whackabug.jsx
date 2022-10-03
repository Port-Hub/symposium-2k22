import React from 'react'
import Scroll from '../../assets/scroll.png'
import Bugs from "../../assets/thumb/whack-a-bug.png"

export default function Whackabug() {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-20 mx-auto'>
      <div className=''>
        <img src={Bugs} className="h-60 rounded-xl" />
      </div>
      <div className='space-y-10'>
        <h2 className="bg-gradient-to-r from-emerald-700  via-indigo-800 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent ">
          Description
        </h2>
        <p>
          Whack-A-Bug is a scenario based Debugging contest in which the participants<br /> will be given code snippets that contain one or more bugs in it.<br /> The participants must identify the bugs and debug the code .
        </p>
        <h2 className="bg-gradient-to-r from-emerald-700  via-indigo-800 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent ">
          Rules
        </h2>
        <ul className='list-disc'>
          <li>Each team with exactly 2 members</li>
          <li>Results of all rounds are not subjected to discussion and the judge's decision is final.</li>
          <li>Participants are not allowed to browse the Internet.</li>
          <li>Any malpractices will not be tolerated and if found will be disqualified.</li>
          <li>Participants must strictly abide to the timings</li>
        </ul>
      </div>
    </div>
  )
}
