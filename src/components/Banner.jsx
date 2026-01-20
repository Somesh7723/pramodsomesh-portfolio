import "../styles/banner.css"
import Socials from "./ui/Socials";

const Banner = () => {
    return (
        <div id="bannerContainer">
            <div id="bannerContent">
                <div id="bannerTitle">PRAMOD SOMESH</div>
                <div id="bannerSubTitle">Recent Computer Engineering graduate who loves turning coffee into code and ideas into apps. From building smart recommenders to sleek web and mobile apps, I enjoy creating solutions that are as practical as they are fun. Always curious, always learning — and yes, I promise my code usually works on the first try (after debugging 😅).</div>
                {/* <a href="" id="projectsRedirect">Projects Redirect</a> */}
            </div>
            <Socials />
        </div>
    );
}

export default Banner;