import Navbar from "./navbar";
import Flakes from "./flakes";

const Layout = (props) => {
    return(
        <div className="bg-sea-theme bg-cover">
            <Flakes />
            <Navbar />
            {props.children}
        </div>
    )
}

export default Layout;