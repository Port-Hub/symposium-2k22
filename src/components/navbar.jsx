import Logo from "../assets/icons/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
      <>
           <div className="sticky top-0 navbar z-50">
              <div className="navbar-start">
                <Link to="/home" className="btn btn-ghost normal-case text-xl"><img src={Logo} /></Link>
              </div>

              <div className="navbar-end">
                <a href="https://forms.gle/z72CM5QPpQopoJhk8" target="_blank" className="btn">Register Now!</a>
              </div>
            </div>
      </>
    )
}

export default Navbar;