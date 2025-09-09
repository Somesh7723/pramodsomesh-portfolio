import "../styles/projects.css"
import ProjectCard from "./ui/ProjectCard"
import randoMovieImg from "../assets/randomovieimg.jpeg"
import expenseTrackerImg from "../assets/expenseTrackerImg.jpeg"
import energyDemandPredictionImg from "../assets/energyDemandPredictionImg.jpeg"

const Projects = () => {
    const projects = [
        {
            title: "SQL based Expense Tracker",
            skills: ["MySQL", "Node.js", "Express.js", "React"],
            url: "",
            img: expenseTrackerImg,
            obj: "Designed a full-stack expense tracking system using SQL and RESTful APIs to connect backend data with a dynamic dashboard UI."
        },
        {
            title: "RandoMovie Suggestions",
            skills: ["Node.js", "Express.js", "React", "API handling"],
            url: "https://somesh7723.github.io/RandoMovie/",
            img: randoMovieImg,            
            obj: "Developed a dynamic web app that allows users to explore movies by genre, language, and date with a randomized selection process using the TMDb API"
        },
        {
            title: "Energy Demand Prediction",
            skills: ["Python", "SciKit Learn", "Time-series data", "data modelling"],
            url: "",
            img: energyDemandPredictionImg,
            obj: "Built a system to analyze past consumption patterns and forecast future electricity demand using machine learning models. Predicted demand trends with accuracy and reliability."
        }
    ]

    return (
        <div id="projectsContainer">
            <div id="projectsHeading">
                <div id="projectsTitle">PROJECTS</div>
            </div>
            <div id="projectCards">
                {projects.map((projectItem, index) => (
                    <ProjectCard key={index} title={projectItem.title} skills={projectItem.skills} objective={projectItem.obj} url={projectItem.url} img={projectItem.img} />

                ))}
            </div>
            <div id="githubRedirect">Visit my <a href="https://github.com/Somesh7723" target="_blank" id="github">github</a>  to see more of my projects!</div>
        </div>
    );
}

export default Projects;