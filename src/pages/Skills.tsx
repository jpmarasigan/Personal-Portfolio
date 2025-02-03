import '../styles/Skills.css';

const techStack = [
    { src: "images/techskills/html-icon.svg", name: "HTML" },
    { src: "images/techskills/css-icon.svg", name: "CSS"},
    { src: "images/techskills/javascript-icon.svg", name: "JavaScript"},
    { src: "images/techskills/tailwind-icon.svg", name: "TailwindCSS"},
    { src: "images/techskills/reactjs-icon.svg", name: "ReactJS"},
    { src: "images/techskills/python-icon.svg", name: "Python"},
    { src: "images/techskills/php-icon.svg", name: "PHP"},
    { src: "images/techskills/sql-icon.svg", name: "SQL"},
    { src: "images/techskills/firebase-icon.svg", name: "Firebase"},
    { src: "images/techskills/mysql-icon.svg", name: "MySQL"},
    { src: "images/techskills/xampp-icon.svg", name: "XAMPP"},
]

const SkillShowcase = () => {
    return (
        <div className="tech-stack-container"> 
            {techStack.map((skill, index) => {
                return (
                    <div key={index} className="skill">
                        <img src={skill.src} alt="skill icon" />
                        <p>{skill.name}</p>
                    </div>
                )
            })}
        </div>
    )
}

const SkillTitle = () => {
    return (
        <div className="title-container">
            <h3>Tech Stack</h3>
            <p>Discover the technologies and tools I've mastered through hands-on projects and certifications</p>
        </div>
    )
}

const Skills = () => {
    return (
        <div id="skills" className="skills-section">
            <div className="skills-container">
                <SkillTitle />
                <SkillShowcase />
            </div>
        </div>
    )
}

export default Skills;