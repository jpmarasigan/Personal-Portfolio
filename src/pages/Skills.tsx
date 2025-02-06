import { useState, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { titleVariant, customTweenVariant } from '../hooks/useVariant';
import { useTechStack } from '../hooks/useTechStack'; // Ensure correct import path
import '../styles/Skills.css';

interface TechStack {
    src: string,
    name: string,
    animateDirection: "x" | "y",
    value: number
}

const SkillShowcase = () => {
    const techStack = useTechStack();
    
    return (
        <div className="tech-stack-container"> 
            {techStack.map((skill: TechStack, index: number) => { // Explicitly type 'skill' as 'TechStack'
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
            viewport={{ once: true, amount: 0.7 }}
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