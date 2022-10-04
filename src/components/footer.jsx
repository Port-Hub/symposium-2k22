import Favicon from "../assets/icons/favicon.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faR, faL, faA } from "@fortawesome/free-solid-svg-icons"


const Footer = () => {
    return(
        <footer className="flex flex-row flex-wrap footer justify-between p-5 font-poppins">
            <div className="grid-flow-col items-center">
                <img className="h-5" src={Favicon} />
                <p className="font-poppins text-xs"> © 2022 LICET - All right reserved</p>
            </div>
            <div className="gap-4 grid-flow-col">
                <p>Shoutouts to </p>
                <a href ="https://github.com/RahulRST">
                <FontAwesomeIcon icon={faR} /> 
            </a>
            <a href ="https://github.com/RomarioKavin1">
                <FontAwesomeIcon icon={faR} /> 
            </a>
            <a href ="https://github.com/LeoFranklin015">
                <FontAwesomeIcon icon={faL} /> 
            </a>
            <a href ="https://github.com/Adelin-Brianna">
                <FontAwesomeIcon icon={faA} /> 
            </a>
            </div> 
            <div className="gap-4 grid-flow-col">
                <a href="https://www.instagram.com/cse_eicon/" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} />
                </a> 
                <a href="" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>
        </footer>
    )
}

export default Footer;