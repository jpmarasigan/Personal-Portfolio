import { useState } from 'react';
import '../styles/Portfolio.css';

type ContentType = {
    projects: JSX.Element;
    certifications: JSX.Element;
};

const content: ContentType = {
    projects: 
        <div className="projects-container">
            <div className="project">
                <div className="details">
                    <img src="images/sample1.jfif" alt="project image"/>
                    <h3>E-Commerce RBAC System</h3>
                    <p>
                        Developed a personal e-commerce web application with 
                        role-based access control for both admin and user 
                        functionalities.
                    </p>
                </div>
                <div className='nav'>
                    <div className="nav-button">
                        <p>Details<span>&gt;</span></p>
                    </div>
                </div>
            </div>
            <div className="project">
                <div className="details">
                    <img src="images/sample2.jpg" alt="project image"/>
                    <h3>Youtube Transcript Summarizer</h3>
                    <p>
                        This Flask-based web application summarizes YouTube 
                        video content by taking a video link as input and 
                        providing a concise summary.
                    </p>
                </div>
                <div className='nav'>
                    <div className="nav-button">
                        <p>Details<span>&gt;</span></p>
                    </div>
                </div>
            </div>
            <div className="project">
                <div className="details">
                    <img src="images/sample1.jfif" alt="project image"/>
                    <h3>Discord Voting Bot System</h3>
                    <p>
                        This Python script enables a simple yet effective 
                        voting system within a Discord bot. 
                    </p>
                </div>
                <div className='nav'>
                    <div className="nav-button">
                        <p>Details<span>&gt;</span></p>
                    </div>
                </div>
            </div>
            <div className="project">
                <div className="details">
                    <img src="images/sample1.jfif" alt="project image"/>
                    <h3>Discord Voting Bot System</h3>
                    <p>
                        This Python script enables a simple yet effective 
                        voting system within a Discord bot. 
                    </p>
                </div>
                <div className='nav'>
                    <div className="nav-button">
                        <p>Details<span>&gt;</span></p>
                    </div>
                </div>
            </div>
            <div className="project">
                <div className="details">
                    <img src="images/sample1.jfif" alt="project image"/>
                    <h3>Discord Voting Bot System</h3>
                    <p>
                        This Python script enables a simple yet effective 
                        voting system within a Discord bot. 
                    </p>
                </div>
                <div className='nav'>
                    <div className="nav-button">
                        <p>Details<span>&gt;</span></p>
                    </div>
                </div>
            </div>
            <div className="project">
                <div className="details">
                    <img src="images/sample1.jfif" alt="project image"/>
                    <h3>Discord Voting Bot System</h3>
                    <p>
                        This Python script enables a simple yet effective 
                        voting system within a Discord bot. 
                    </p>
                </div>
                <div className='nav'>
                    <div className="nav-button">
                        <p>Details<span>&gt;</span></p>
                    </div>
                </div>
            </div>
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