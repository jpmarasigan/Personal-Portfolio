import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
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
        title: "Responsive Web Design",
        summary: "I gained hands-on experience in HTML, CSS, and media queries, ensuring optimal viewing across devices from desktops to mobile phones. This certification highlights my knowledge of mobile-first design principles, flexbox, and CSS grid layout.",
        image: "images/certificates/responsive-web-design.png",
        url: "https://www.freecodecamp.org/certification/jay_peez/responsive-web-design",
    }
]

type ContentType = {
    projects: JSX.Element;
    certifications: JSX.Element;
};

const handleProjectClick = () => {
    sessionStorage.setItem("scrollPosition", window.scrollY.toString());
}

const content: ContentType = {
    projects: 
        <div className="projects-container">
            {myprojects.map((project) => (
                <div key={project.id} className='project'>
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
                </div>
            ))}
        </div>,
    certifications: 
    <div className="certificates-container">
        {mycertificates.map((certificate) => (
            <div key={certificate.id} className='certificate'>
                <div className="details">
                    <img src={certificate.image} alt="certificate thumbnail" />
                    <h3>{certificate.title}</h3>
                    <p>{certificate.summary}</p>
                </div>
                <div className='nav'>
                    <a className="nav-button" onClick={handleProjectClick} href={certificate.url} target="_blank">
                        <p>View Certificate<span>&gt;</span></p>
                    </a>
                </div>
            </div>
        ))}
    </div>
};

const PortfolioShowcase = () => {
    const [activeContent, setActiveContent] = useState<keyof ContentType>('projects');  
    
    useEffect(() => {
        const savedPosition = sessionStorage.getItem("scrollPosition");
        if (savedPosition) { window.scroll(0, parseInt(savedPosition, 10))};
    })

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
            whileTap={{ scale: 1.1 }}
            className="title-container"
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