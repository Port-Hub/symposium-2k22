import Flakes from "./flakes"

const Layout = (props) => {
    return(
        <div>
            <Flakes />
            {props.children}
        </div>
    )
}

export default Layout;