import "../../styles/projectcard.css"
import SkillBadge from "./SkillBadge";

const ProjectCard = ({skills, title, objective, url, img}) => {
    return (
        <div id="projectCardContainer">
            {console.log(title, skills, objective, img)}
            <div id="projectImage">
                <img src={img} alt="project Image" className="projectImg" />
            </div>
            <div id="projectContent">
                <div id="projectTitleSkills">
                    <a href={url} target="_blank" id="projectTitle">{title}</a>
                    <div id="projectSkills">
                        {skills.map((skillItem, index) => (
                            <SkillBadge key={index} skill = {skillItem} />
                        ))}
                    </div>
                </div>
                <div id="projectObj">{objective}</div>
            </div>
        </div>
    );
}

export default ProjectCard;