import { Link } from "react-router-dom";

const Drawer = (props) => {
    return (
    <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer" className="sticky top-10 left-1/2 btn btn-square btn-ghost drawer-button">
            <h2 className=" text-2xl btn btn-accent bg-transparent border-none">Events</h2>
          </label>
          {props.content}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label> 
          <ul className="menu p-4 overflow-y-auto w-64 items-center bg-sea-theme bg-cover">
            <li><Link to="golfing">Code Golfing</Link></li>
            <li><Link to="wheel">Hack Wheel</Link></li>
            <li><Link to="bugs">Hugs & Bugs</Link></li>
            <li><Link to="hunt">Santa Maria Hunt</Link></li>
            <li><Link to="scroll">Scroll Unveilling</Link></li>
            <li><Link to="brainz">Select From Brainz</Link></li>
            <li><Link to="turncoat">TurnCoat</Link></li>
            <li><Link to="whackbug">Whack-A-Bug</Link></li>
          </ul>
        </div>   
    </div>
  )
}

export default Drawer;