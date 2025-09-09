import "../styles/footer.css"
import Socials from "./ui/Socials";

const Footer = () => {
    return (
        <div id="footerWrapper">
            <div id="footerContainer">
                <div id="footerContent">
                    Engineer of code, caffeine, and occasionally good ideas
                </div>
                <Socials direction="row" />
            </div>
            <div id="hrLine"></div>
            <div id="madeBy">Made by <span id="nameSpan">SOMESH PRAMOD KOLLURU</span></div>
        </div>
    );
}

export default Footer;