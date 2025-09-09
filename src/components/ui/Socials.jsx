import "../../styles/socials.css"
import linkedinIcon from "../../assets/linkedin.png"
import linkedinLogo from "../../assets/linkedinLogo.png"
import github from "../../assets/github.png"
import githubLogo from "../../assets/githubLogo.png"
import gmail from "../../assets/gmail1.png"
import gmailLogo from "../../assets/gmailLogo.png"
import SocialBlock from "./SocialBlock"
import leetcode from "../../assets/leetcode.png"
import leetcodeLogo from "../../assets/leetcodeLogo.png"

const Socials = () => {
    return (
        <div id="socialsContainer" >
            <SocialBlock icon={linkedinIcon} logo={linkedinLogo} url="https://www.linkedin.com/in/somesh-kolluru-95958b234" />
            <SocialBlock icon={leetcode} logo={leetcodeLogo} url="https://leetcode.com/u/Somesh723/" />
            <SocialBlock icon={github} logo={githubLogo} url="https://github.com/Somesh7723" />
            <SocialBlock icon={gmail} logo={gmailLogo} url="mailto:someshkolluru723@gmail.com" />
        </div>
    );
}

export default Socials;