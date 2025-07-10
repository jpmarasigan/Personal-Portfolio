import { motion } from 'framer-motion';
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
                <span>00</span> years of experience
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
                    Web Development
                </motion.h3>
                <motion.span
                    variants={ descSpringVariant }
                >
                    HTML, CSS, JavaScript, React, TailwindCSS
                </motion.span>
                <motion.p 
                    variants={ descSpringVariant }
                >
                    I have developed responsive websites through various academic and 
                    personal projects. My experience includes creating user-friendly 
                    interfaces and ensuring compatibility across different devices. I enjoy 
                    applying best practices in web development and bringing creative designs 
                    to life.
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
                    Back-end Development
                </motion.h3>
                <motion.span
                    variants={ descSpringVariant }
                >
                    Python, Flask, Django, PHP, SQL, RDBMS
                </motion.span>
                <motion.p
                    variants={ descSpringVariant }
                >
                    I develop functional server-side applications using Python frameworks 
                    (Flask, Django) from school projects and certifications. My expertise 
                    includes back-end development, ML/DL model integration, ORMs, server-side 
                    logic, and database management for web applications.
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
                    Cloud Computing
                </motion.h3>
                <motion.span
                    variants={ descSpringVariant }
                >
                    AWS, GCP
                </motion.span>
                <motion.p
                    variants={ descSpringVariant }
                >
                    I have hands-on experience deploying dynamic web applications using AWS 
                    EC2 and RDS, and deploying React application with AWS Amplify. On GCP, 
                    I've leveraged Cloud Functions for server-side automation and Cloud Storage 
                    for data management.
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