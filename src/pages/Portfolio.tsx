import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/Portfolio.css';

const myprojects = [
    {
        id: "jp-ecommerce-rbac",
        title: "E-Commerce RBAC System",
        summary: "Developed a personal e-commerce web application with role-based access control for both admin and user functionalities.",
        image: "images/sample1.jfif",
    },
    {
        id: "jp-youtube-transcript-summarizer",
        title: "Youtube Transcript Summarizer",
        summary: "This Flask-based web application summarizes YouTube video content by taking a video link as input and providing a concise summary.",
        image: "images/sample1.jfif",
    },
    {
        id: "jp-discord-bot-voting-system",
        title: "Discord Voting Bot System",
        summary: "This Python script enables a simple yet effective voting system within a Discord bot.",
        image: "images/sample1.jfif",
    },
    {
        id: "4",
        title: "Discord Voting Bot System",
        summary: "This Python script enables a simple yet effective voting system within a Discord bot.",
        image: "images/sample1.jfif",
    },
    {
        id: "5",
        title: "Discord Voting Bot System",
        summary: "This Python script enables a simple yet effective voting system within a Discord bot.",
        image: "images/sample1.jfif",
    },
    {
        id: "6",
        title: "Discord Voting Bot System",
        summary: "This Python script enables a simple yet effective voting system within a Discord bot.",
        image: "images/sample1.jfif",
    },
]

type ContentType = {
    projects: JSX.Element;
    certifications: JSX.Element;
};

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
                        <div className="nav-button">
                            <Link to={`/projects/${project.id}`}>
                                <p>Details<span>&gt;</span></p>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>,
    certifications: 
        <div>
            Certifications Content
        </div>
};

const PortfolioShowcase = () => {
    const [activeContent, setActiveContent] = useState<keyof ContentType>('projects');

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
                                        src="images/projects-icon.svg" 
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
                                    src="images/certificate-icon.svg"
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
        <div className="title-container">
            <h3>Portfolio</h3>
            <p>Explore my journey through projects and certifications</p>
        </div>
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