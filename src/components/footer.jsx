import Favicon from "../assets/icons/favicon.png"
import { UilLinkedin, UilInstagramAlt } from "@iconscout/react-unicons";

const Footer = () => {
    return(
        <footer className="flex flex-row flex-wrap footer justify-between p-5 font-poppins">
            <div className="grid-flow-col items-center">
                <img className="h-5" src={Favicon} />
                <p className="font-poppins text-xs"> © 2022 LICET - All right reserved</p>
            </div>
            {/* <div className="gap-4 grid-flow-col">
                <p>Designed by</p>
            </div>  */}
            <div className="gap-4 grid-flow-col">
                <a href="https://www.instagram.com/cse_eicon/" target="_blank">
                    <UilInstagramAlt />
                </a> 
                <a href="" target="_blank">
                    <UilLinkedin />
                </a>
            </div>
        </footer>
    )
}

export default Footer;