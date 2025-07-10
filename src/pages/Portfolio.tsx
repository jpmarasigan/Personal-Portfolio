import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { titleVariant, customSpringVariant } from '../hooks/useVariant';
import '../styles/Portfolio.css';

const myprojects = [
    {
        id: "jp-ecommerce-rbac",
        title: "E-Commerce RBAC System",
        summary: "Developed a personal e-commerce web application with role-based access control for both admin and user functionalities.",
        image: "images/projects/rbac-thumbnail.jpg",
    },
    {
        id: "jp-youtube-transcript-summarizer",
        title: "Youtube Transcript Summarizer",
        summary: "This Flask-based web application summarizes YouTube video content by taking a video link as input and providing a concise summary.",
        image: "images/projects/youtube-thumbnail.jpg",
    },
    {
        id: "tweetpulse",
        title: "Tweet Sentiment Analysis",
        summary: "This web application provides real-time sentiment analysis on uploaded public tweets, all while ensuring user-friendly interaction.",
        image: "images/projects/tweetpulse-thumbnail.jpg",
    },
    {
        id: "w2eat-discord-bot",
        title: "Discord Voting Bot System",
        summary: "This Python script enables a simple yet effective voting system within a Discord bot.",
        image: "images/projects/discord-thumbnail.jpg",
    },
    {
        id: "wumpus-world",
        title: "Wumpus World: Knowledge-Based AI",
        summary: "An AI-controlled Wumpus World Game where an agent navigates a grid, avoiding dangers and seeking gold using perceptions for decision-making.",
        image: "images/projects/wumpus-thumbnail.jpg",
    },
    // {
    //     id: "6",
    //     title: "Discord Voting Bot System",
    //     summary: "This Python script enables a simple yet effective voting system within a Discord bot.",
    //     image: "images/projects/skeleton.jpg",
    // },
]

const mycertificates = [
    {
        id: "cert1",
        title: "Meta Advanced React",
        summary: "I gained in-depth knowledge of advanced React concepts, such as advanced and custom hooks, context API, and performance optimization strategies. This certification highlights my ability to build efficient and scalable React applications using modern development practices.",
        image: "images/certificates/meta-advanced-react.png",
        url: "https://www.coursera.org/account/accomplishments/records/WC22QAS4G964"
    },
    {
        id: "cert2",
        title: "Meta Django Framework",
        summary: "I gained hands-on experience in building dynamic web applications using Django, working with essential components such as models, views, and templates. This certification highlights my knowledge of Django's core features, including template inheritance, user authentication, and access control.",
        image: "images/certificates/meta-django-framework.png",
        url: "https://www.coursera.org/account/accomplishments/records/HQ80NHYZ54BG",
    },
    {
        id: "cert3",
        title: "Responsive Web Design",
        summary: "I gained hands-on experience in HTML, CSS, and media queries, ensuring optimal viewing across devices from desktops to mobile phones. This certification highlights my knowledge of mobile-first design principles, flexbox, and CSS grid layout.",
        image: "images/certificates/responsive-web-design.png",
        url: "https://www.freecodecamp.org/certification/jay_peez/responsive-web-design",
    },
    {
        id: "cert4",
        title: "Introduction to Front-End Development",
        summary: "I gained hands-on experience in HTML and Bootstrap, enabling me to create responsive and visually appealing web pages. This certification highlights my understanding of foundational front-end technologies essential for building user-friendly interfaces.",
        image: "images/certificates/meta-introduction-to-front-end.png",
        url: "https://www.coursera.org/account/accomplishments/records/3HOXL82Z2F6B",
    },
    {
        id: "cert5",
        title: "Introduction to Python",
        summary: "I gained hands-on experience in writing Python programs, working with data types, control structures, functions, and basic data structures like lists and dictionaries. This certification highlights my foundational understanding of Python programming.",
        image: "images/certificates/datacamp-introduction-to-python.png",
        url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/5d134d09e3068b21033d887cffbe7dcf23536990",
    }
]

type ContentType = {
    projects: JSX.Element;
    certifications: JSX.Element;
};

const handleProjectClick = () => {
    sessionStorage.setItem("currentScrollPosition", window.scrollY.toString());
}

const content: ContentType = {
    projects: 
        <motion.div 
            className="projects-container"
            variants={ customSpringVariant('x', 100) }
        >
            {myprojects.map((project, index) => (
                <motion.div 
                    key={project.id} 
                    className='project'
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={ customSpringVariant('x', 50, index * 0.03) }
                >
                    <div className="details">
                        <img src={project.image} alt="project thumbnail" />
                        <h3>{project.title}</h3>
                        <p>{project.summary}</p>
                    </div>
                    <div className='nav'>
                        <div className="nav-button" onClick={handleProjectClick}>
                            <Link to={`/projects/${project.id}`}>
                                <p>Details<span>&gt;</span></p>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            ))}
        </motion.div>,
    certifications: 
    <div className="certificates-container">
        {mycertificates.map((certificate, index) => (
            <motion.div 
                key={certificate.id} 
                className='certificate'
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3}}
                variants={ customSpringVariant('x', 50, index * 0.03) }
            >
                <div className="details">
                    <img src={certificate.image} alt="certificate thumbnail" />
                    <h3>{certificate.title}</h3>
                    <p>{certificate.summary}</p>
                </div>
                <div className='nav'>
                    <a className="nav-button" onClick={handleProjectClick} href={certificate.url} target="_blank" rel="noopener noreferrer">
                        <p>View Certificate<span>&gt;</span></p>
                    </a>
                </div>
            </motion.div>
        ))}
    </div>
};

const PortfolioShowcase = () => {
    const [activeContent, setActiveContent] = useState<keyof ContentType>('projects');  
    
    useEffect(() => {
        const savedScrollPosition = sessionStorage.getItem('currentScrollPosition');

        if (savedScrollPosition) {
            window.scrollTo(0, parseInt(savedScrollPosition, 10));
            sessionStorage.removeItem('currentScrollPosition');
        }
    }, []);

    return (
        <div className='portfolio-showcase'>
            <div className="nav-section">
                <nav className='portfolio-navbar'>
                    <ul>  
                        <li>
                            <button 
                                onClick={() => setActiveContent('projects')}
                                className={activeContent === 'projects' ? 'active' : ''}
                                >
                                    <img 
                                        src="images/assets/projects-icon.svg" 
                                        alt="Project Icon"
                                        width={20}
                                        >    
                                    </img>
                                    Projects
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={() => setActiveContent('certifications')}
                                className={activeContent === 'certifications' ? 'active' : ''}
                                >
                                <img
                                    src="images/assets/certificate-icon.svg"
                                    alt="Certication Icon"
                                    width={25}
                                    >
                                </img>
                                Certifications
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
            {/* Display the active content */}
            <div>
                {content[activeContent]}
            </div>
        </div>
    )
}

const PortfolioTitle = () => {
    return (
        <motion.div 
            key="motion-portfolio-title"
            className="title-container"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.4 }}
            variants={ titleVariant }
        >
            <h3>Portfolio</h3>
            <p>Explore my journey through projects and certifications</p>
        </motion.div>
    )
}

const Portfolio = () => {


    return (
        <div id="portfolio" className="portfolio-section">
            <div className="portfolio-container">
                <PortfolioTitle />
                <PortfolioShowcase />
            </div>
        </div>
    )
}

export default Portfolio;