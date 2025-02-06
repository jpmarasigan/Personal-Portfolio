import { useState, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { titleVariant, customTweenVariant } from '../hooks/useVariant';
import '../styles/Skills.css';

interface TechStack {
    src: string,
    name: string,
    animateDirection: "x" | "y",
    value: number
}

const initialTechStack: TechStack[] = [
    { src: "images/techskills/html-icon.svg", name: "HTML", animateDirection: 'x', value: -150},
    { src: "images/techskills/css-icon.svg", name: "CSS", animateDirection: 'x', value: -100},
    { src: "images/techskills/javascript-icon.svg", name: "JavaScript", animateDirection: 'x', value: -50},
    { src: "images/techskills/tailwind-icon.svg", name: "TailwindCSS", animateDirection: 'x', value: 50},
    { src: "images/techskills/reactjs-icon.svg", name: "ReactJS", animateDirection: 'x', value: 100},
    { src: "images/techskills/python-icon.svg", name: "Python", animateDirection: 'x', value: 150},
    { src: "images/techskills/php-icon.svg", name: "PHP", animateDirection: 'x', value: -150},
    { src: "images/techskills/sql-icon.svg", name: "SQL", animateDirection: 'x', value: -100},
    { src: "images/techskills/firebase-icon.svg", name: "Firebase", animateDirection: 'x', value: -50},
    { src: "images/techskills/mysql-icon.svg", name: "MySQL", animateDirection: 'x', value: 50},
    { src: "images/techskills/xampp-icon.svg", name: "XAMPP", animateDirection: 'x', value: 100},
];

const SkillShowcase = () => {
    const [techStack, setTechStack] = useState<TechStack[]>(initialTechStack);

    const updateTechStack = () => {
        const width = window.outerWidth;

        if (width < 744) {
            console.log("744");
            setTechStack(prevTechStack => prevTechStack.map((skill, index) => {
                return { ...skill, animateDirection: 'y', value: 50 };
            }));
        } else if (width < 912) {
            setTechStack(prevTechStack => prevTechStack.map((skill, index) => {
                const newValue = index % 4 === 0 ? -150 
                            : index % 4 === 1 ? -100 
                            : index % 4 === 2 ? 100
                            : 150;
                return { ...skill, animateDirection: 'x', value: newValue };
            }));
        } else if (width < 1304) {
            setTechStack(prevTechStack => prevTechStack.map((skill, index) => {
                const newValue = index % 5 === 0 ? -150 
                            : index % 5 === 1 ? -100 
                            : index % 5 === 2 ? 50
                            : index % 5 === 3 ? 100 
                            : 150;
                return { ...skill, animateDirection: 'x', value: newValue };
            }));
        } else {
            setTechStack(initialTechStack);
        }
    };

    useLayoutEffect(() => {
        updateTechStack(); // Call on initial load
        window.addEventListener('resize', updateTechStack);
        return () => {
            window.removeEventListener('resize', updateTechStack);
        };
    }, []);

    return (
        <div className="tech-stack-container"> 
            {techStack.map((skill, index) => {
                return (
                    <motion.div 
                        key={`${index}-${skill.animateDirection}-${skill.value}`} 
                        className="skill"
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={ customTweenVariant(skill.animateDirection, skill.value) }
                    >
                        <img src={skill.src} alt="skill icon" />
                        <p>{skill.name}</p>
                    </motion.div>
                )
            })}
        </div>
    )
}

const SkillTitle = () => {
    return (
        <motion.div 
            key="motion-tech-stack"
            className="title-container sectionObserver"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={ titleVariant }
        >
            <h3>Tech Stack</h3>
            <p>Discover the technologies and tools I've mastered through hands-on projects and certifications</p>
        </motion.div>
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