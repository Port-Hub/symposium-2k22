import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import Favicon from "../assets/icons/favicon.png";
import Golf from "../assets/events/code-golfing.png";
import Wheel from "../assets/events/hack-wheel.png";
import Bugs from "../assets/events/hugs-bugs.png";
import Santa from "../assets/events/santa-maria-hunt.png";
import Scroll from "../assets/events/scroll-unveilling.png";
import Brainz from "../assets/events/select-from-brainz.png";
import Coat from "../assets/events/turn-coat.png";
import Whack from "../assets/events/whack-a-bug.png";
import Guvi from "../assets/sponsors/guvi-logo.png";
import Learners from "../assets/sponsors/learners-cortex.png";
import Magoosh from "../assets/sponsors/magoosh-logo.png";

const cards = [
  {
    image: Golf,
    link: "/events#golfing",
  },
  {
    image: Wheel,
    link: "/events#wheel",
  },
  {
    image: Bugs,
    link: "/events#hugs",
  },
  {
    image: Santa,
    link: "/events#santa",
  },
  {
    image: Scroll,
    link: "/events#scroll",
  },
  {
    image: Brainz,
    link: "/events#brainz",
  },
  {
    image: Coat,
    link: "/events#turn",
  },
  {
    image: Whack,
    link: "/events#bugs",
  },
];

const sponsor = [
  {
    image: Guvi,
    link: "https://www.guvi.in/",
  },
  {
    image: Learners,
    link: "https://learnerscortex.com/",
  },
  {
    image: Magoosh,
    link: "https://magoosh.com/",
  },
];

const About = () => {
  return (
    <div className="mx-auto flex flex-row flex-wrap items-center justify-center gap-x-10 z-40">
      <div className="shrink z-40 w-80 h-80">
        <img src={Favicon} />
      </div>
      <div className="basis-2/3 space-y-10 z-40 px-0 lg:px-10 ">
        <h2 className="bg-gradient-to-r from-emerald-700  via-indigo-800 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent font-poppins">
          About Xplore '22
        </h2>
        <p className="font-poppins font-black text-justify">
          A National Level Technical Symposium conducted by the Department of
          Computer Science and Engineering- Loyola-ICAM College Of Engineering
          and Technology. The event is to unfold through 8 stages which are
          technical in nature and is to be held on the 8th of October, 2022. We
          welcome all the participants to benefit from this event
        </p>
      </div>
    </div>
  );
};

const Deck = () => {
  return (
    <>
      {cards.map((item, index) => (
        <div className="bg-auto z-40" key={index}>
          <div
            style={{
              backgroundImage: `url(${item.image})`,
            }}
            className={`h-72 w-40 rounded-2xl bg-contain shadow-lg shadow-primary `}
          />
          <Link to={item.link} className="btn btn-primary left-1/2 mt-10 font-poppins">
            Know More
          </Link>
        </div>
      ))}
    </>
  );
};

const Sponsors = () => {
  return (
    <>
      {sponsor.map((item, index) => (
        <div key={index} className="z-40">
          <a href={item.link}>
            <div
              style={{
                backgroundImage: `url(${item.image})`,
              }}
              className={`h-28 w-80 bg-center bg-no-repeat bg-contain`}
            />
          </a>
        </div>
      ))}
    </>
  );
};

const Home = () => {
  return (
    <>
      <About />
      <h2 className="mx-auto max-w-3xl font-poppins border-zinc-900 bg-gradient-to-r from-emerald-500  via-indigo-800 to-purple-600 bg-clip-text text-center text-5xl font-extrabold text-transparent sm:text-5xl z-40 pt-10">
        Events
      </h2>
      <div className="xl:grid-cold-4 grid grid-cols-2 justify-items-center gap-y-40 pt-20 md:grid-cols-4 lg:grid-cols-4 z-40">
        <Deck />
      </div>
      <h2 className="mx-auto mt-20 mb-20 max-w-3xl font-poppins border-zinc-900 bg-gradient-to-r  from-emerald-500 via-indigo-800  to-purple-600 bg-clip-text text-center  text-5xl font-extrabold text-transparent sm:text-5xl ">
        Sponsors
      </h2>
      <div className="xl:grid-cold-3 grid grid-cols-1 justify-items-center gap-y-40 pb-20 md:grid-cols-3 lg:grid-cols-3">
        <Sponsors />
      </div>
    </>
  );
};

export default Home;
