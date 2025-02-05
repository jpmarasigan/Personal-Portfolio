import '../styles/Services.css';
import { motion, Variants } from 'framer-motion';

// Define variants
const titleVariants: Variants = {
    offscreen: {
        y: 30,
        opacity: 0
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'tween',
            ease: 'easeOut',
            duration: 1,
        }
    }
}

const devContainerVariant: Variants = {
    offscreen: {
        y: 50,
        opacity: 0,
    },
    onscreen: { 
        y: 0,
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            type: "tween",
            ease: 'easeOut',
            duration: 0.8,
        }
    }
}

const springVariant:Variants = {
    offscreen: {
        y: 50,
        opacity: 0,
    },
    onscreen: { 
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 120,
            bounce: 0.4,
            duration: 1.2,
        }
    }
}

const customVariant = (direction: "x" | "y", value: number):Variants => ({
    offscreen: {
        [direction]: value,
        opacity: 0,
    },
    onscreen: {
        [direction]: 0,
        opacity: 1,
        transition: {
            type: "tween",
            ease: "easeOut",
            duration: 0.6,      
        }
    }
}) as Variants;


const Statistics = () => {
    return (
        <motion.div 
            className="statistics"
            key="statistics"
        >
            <motion.div 
                className="stats"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={ customVariant("x", 100) }
            >
                <span>03</span> years of experience
            </motion.div>
            <motion.div 
                className="stats"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={ customVariant("x", -100) }
            >
                <span>06</span> projects completed
            </motion.div>
            <motion.div 
                className="stats"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={ customVariant("x", 100) }
            >
                <span>01</span> satisfied clients
            </motion.div>
        </motion.div>
    )
}

const DevelopmentField = () => {
    return (
        <motion.div 
            className="development-container"
            key="development" 
        >
            <motion.div 
                className="development" 
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }} 
                variants={ devContainerVariant }
            >
                <motion.h3 
                    className="development-title" 
                    variants={ springVariant }
                >
                    Front-end Web Development
                </motion.h3>
                <motion.span
                    variants={ springVariant }
                >
                    HTML, CSS, JavaScript, TailwindCSS
                </motion.span>
                <motion.p 
                    variants={ springVariant }
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
                variants={ devContainerVariant }
            >
                <motion.h3
                    className="development-title" 
                    variants={ springVariant }
                >
                    Back-end Web Development
                </motion.h3>
                <motion.span
                    variants={ springVariant }
                >
                    Python, PHP, SQL, XAMPP, MariaDB, Firebase
                </motion.span>
                <motion.p
                    variants={ springVariant }
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
                variants={ devContainerVariant }
            >
                <motion.h3
                    variants={ springVariant }
                >
                    Python Development
                </motion.h3>
                <motion.span
                    variants={ springVariant }
                >
                    Python, Flask, PyGame
                </motion.span>
                <motion.p
                    variants={ springVariant }
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
            className="title-container"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.4 }}
            variants={ titleVariants }
            key="title" // Add unique key
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