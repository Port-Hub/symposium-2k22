const Drawer = (props) => {
    return (
    <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer" className="btn btn-square btn-ghost drawer-button">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
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