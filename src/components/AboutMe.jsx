import "../styles/aboutme.css"
import SkillBadge from "./ui/SkillBadge";
import resumeFile from "../../public/Resume_SomeshKolluru.pdf"
import profilePic from "../assets/profilePic.jpeg"

const AboutMe = () => {
    const skills = ["React","Node.js", "SQL", "Express.js", "MongoDB", "Pandas", "SciKit Learn", "RESTful API", "CSS"]
    return (
        <div id="aboutMeContainer">
            <div id="aboutMeHeading">
                <div id="aboutMeTitle">ABOUT ME</div>
            </div>
            <div id="aboutMeContent">
                <div id="aboutMeSkillsPara">
                    <div id="objective">
                        <h3 id="objTitle">In a para</h3>
                        <div id="objContent">Hi, I’m Somesh — a Computer Engineering graduate with a strong foundation in full-stack development, data science, and machine learning. I’ve worked on projects ranging from fake news detection to recommendation systems, gaining experience with React, Redux, MongoDB, Python, and SQL. With a growing passion for the data domain, my goal is to build applications that are not only functional but also intelligent and scalable.</div>
                    </div>
                    <div id="skills">
                        <h3 id="skillsTitle">Skills</h3>
                        <div id="skillsList">
                            {skills.map(skill => (<SkillBadge skill={skill} />))}
                        </div>
                    </div>
                </div>
                <div id="myPic">
                    <div id="picContainer">
                        <img src={profilePic} alt="my pic" id="profilePic" />
                    </div>
                </div>
            </div>
            <a href={resumeFile} download="Resume_SomeshKollur" id="resumeDownload"><button id="resume">Resume</button></a>
        </div>
    );
}

export default AboutMe;