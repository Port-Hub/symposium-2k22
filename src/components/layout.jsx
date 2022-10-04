import Navbar from "./navbar";
import Flakes from "./flakes";
import Footer from "./footer";

const Layout = (props) => {
    return(
        <div className="bg-gradient-to-r from-cyan-300 to-[#47B5FF]">
            <Flakes />
            <Navbar />
                {props.children}
            <Footer />
        </div>
    )
}

export default Layout;