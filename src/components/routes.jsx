import { Route } from "react-router-dom";

import Codegolfing from "../pages/Events/Codegolfing";
import Hackwheel from "../pages/Events/Hackwheel";
import HugsandBugs from "../pages/Events/HugsandBugs";
import Santamariahunt from "../pages/Events/Santamariahunt";
import Scrollunveilling from "../pages/Events/Scrollunveilling";
import Selectfrombrainz from "../pages/Events/Selectfrombrainz";
import Turncoat from "../pages/Events/Turncoat";
import Whackabug from "../pages/Events/Whackabug";
import Home from "../pages/home";



const mapRoute = (param) => {
    return (
        param.map((item, index) => (
            <Route key={index} exact path={"/"+ item.to} element={item.func}></Route>
        )
    )
)
}

const routeArray = [
    {
        name: "Home",
        to: "home",
        func: <Home />
    },
    {
      name: "Santa Maria Hunt",
      to: "home/hunt",
      func: <Santamariahunt />
    },
    {
      name: "Hack Wheel",
      to: "home/wheel",
      func: <Hackwheel />
    },
    {
      name: "Code Golfing",
      to: "home/golfing",
      func: <Codegolfing />
    },
    {
        name: "Hugs & Bugs",
        to: "home/bugs",
        func: <HugsandBugs />
    },
    {
        name: "Scroll Unveilling",
        to: "home/scroll",
        func: <Scrollunveilling />
    },
    {
        name: "Select from Brainz",
        to: "home/brainz",
        func: <Selectfrombrainz />
    },
    {
        name: "Turn Coat",
        to: "home/turncoat",
        func: <Turncoat />
    },
    {
        name: "Whack-A-Bug",
        to: "home/whackbug",
        func: <Whackabug />
    }
];

const routeList = mapRoute(routeArray);
export default routeList;