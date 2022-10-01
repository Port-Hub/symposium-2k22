import Flakes from "./flakes"
import Navbar from "./navbar";

const Layout = (props) => {
    return(
        <div>
            <Navbar />
            <Flakes />
            {props.children}
        </div>
    )
}

export default Layout;