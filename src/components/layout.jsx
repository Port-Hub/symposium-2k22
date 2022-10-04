import Navbar from "./navbar";
import Flakes from "./flakes";

const Layout = (props) => {
    return(
        <div className="bg-gradient-to-r from-cyan-300 to-[#47B5FF]">
            <Flakes />
            <Navbar />
            {props.children}
        </div>
    )
}

export default Layout;