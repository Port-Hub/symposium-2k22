import Logo from "../assets/icons/logo.png";

const Navbar = () => {
    return(
      <>
           <div className="sticky top-0 navbar z-10">
              <div className="navbar-start">
                <a className="btn btn-ghost normal-case text-xl"><img src={Logo} /></a>
              </div>

              {/* <div className="navbar-center hidden xl:flex lg:flex">
                <ul className="menu menu-horizontal p-0">
                  <li><a>Code Golfing</a></li>
                  <li><a>Hack Wheel</a></li>
                  <li><a>Hugs & Bugs</a></li>
                  <li><a>Santa Maria Hunt</a></li>
                  <li><a>Scroll Unveilling</a></li>
                  <li><a>Select From Brainz</a></li>
                  <li><a>TurnCoat</a></li>
                  <li><a>Whack-A-Bug</a></li>
                </ul>
              </div> */}

              <div className="navbar-end">
                <a href="https://forms.gle/z72CM5QPpQopoJhk8" className="btn">Register Now!</a>
              </div>
            </div>
      </>
    )
}

export default Navbar;