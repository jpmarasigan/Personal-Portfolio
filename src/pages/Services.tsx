import { motion, Variants } from 'framer-motion';
import { titleVariant, descSpringVariant, customTweenVariant, containerTweenVariant } from '../hooks/useVariant';
import '../styles/Services.css';

const Statistics = () => {
    return (
        <motion.div 
            key="motion-statistics"
            className="statistics"
        >
            <motion.div 
                className="stats"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                variants={ customTweenVariant("x", 100, 0.5) }
            >
                <span>03</span> years of experience
            </motion.div>
            <motion.div 
                className="stats"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                variants={ customTweenVariant("x", -100, 0.5) }
            >
                <span>06</span> projects completed
            </motion.div>
            <motion.div 
                className="stats"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                variants={ customTweenVariant("x", 100, 0.5) }
            >
                <span>01</span> satisfied clients
            </motion.div>
        </motion.div>
    )
}

const DevelopmentField = () => {
    return (
        <motion.div 
            key="motion-development" 
            className="development-container"
        >
            <motion.div 
                className="development" 
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }} 
                variants={ containerTweenVariant }
            >
                <motion.h3 
                    className="development-title" 
                    variants={ descSpringVariant }
                >
                    Front-end Web Development
                </motion.h3>
                <motion.span
                    variants={ descSpringVariant }
                >
                    HTML, CSS, JavaScript, TailwindCSS
                </motion.span>
                <motion.p 
                    variants={ descSpringVariant }
                >
                    I have developed responsive websites using HTML, CSS, JavaScript,
                    and TailwindCSS through various school projects. My experience includes
                    creating user-friendly interfaces and ensuring compatibility across
                    different devices. I enjoy applying best practices in web development 
                    and bringing creative designs to life.
                </motion.p>
            </motion.div>
            
            <motion.div 
                className="development"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }} 
                variants={ containerTweenVariant }
            >
                <motion.h3
                    className="development-title" 
                    variants={ descSpringVariant }
                >
                    Back-end Web Development
                </motion.h3>
                <motion.span
                    variants={ descSpringVariant }
                >
                    Python, PHP, SQL, XAMPP, MariaDB, Firebase
                </motion.span>
                <motion.p
                    variants={ descSpringVariant }
                >
                    I have hands-on experience gained through school projects and
                    personal learning. I focus on creating functional server-side
                    applications such as managing databases, and connecting back-end
                    systems to the front-end.
                </motion.p>
            </motion.div>
            
            <motion.div 
                className="development"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }} 
                variants={ containerTweenVariant }
            >
                <motion.h3
                    variants={ descSpringVariant }
                >
                    Python Development
                </motion.h3>
                <motion.span
                    variants={ descSpringVariant }
                >
                    Python, Flask, PyGame
                </motion.span>
                <motion.p
                    variants={ descSpringVariant }
                >
                    I have worked with Python and Flask through school projects,
                    developing back-end functionality and integrating ML/DL model to
                    web applications. My experience includes handling server-side logic,
                    utilizing models, and integrating databases.
                </motion.p>
            </motion.div>
        </motion.div>
    )
}

const ServicesSection = () => {
    return (
        <>
            <DevelopmentField />
            <Statistics />
        </>
    )
}

const ServicesTitle = () => {
    return (
        <motion.div 
            key="motion-title"
            className="title-container"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.4 }}
            variants={ titleVariant }
        >
            <span className="title">
                Your Services
            </span>
        </motion.div>
    )
}

const Services = () => {
    return (
        <div id="services" className="services-section">
            <div className="services-container">
                <div className="services">
                    <ServicesTitle />
                    <ServicesSection />
                </div>
            </div>
        </div>
    )
}

export default Services;