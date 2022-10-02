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
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
            <li><a>Code Golfing</a></li>
            <li><a>Hack Wheel</a></li>
            <li><a>Hugs & Bugs</a></li>
            <li><a>Santa Maria Hunt</a></li>
            <li><a>Scroll Unveilling</a></li>
            <li><a>Select From Brainz</a></li>
            <li><a>TurnCoat</a></li>
            <li><a>Whack-A-Bug</a></li>
          </ul>
        </div>   
    </div>
    )
}

export default Drawer;