import Navbar from "./navbar";
import Flakes from "./flakes";

const Layout = (props) => {
    return(
        <div className="bg-gradient-to-r from-cyan-400 to-cyan-600">
            <Flakes />
            <Navbar />
            {props.children}
        </div>
    )
}

export default Layout;