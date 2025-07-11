import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import VideoModal from "../components/VideoModal";
import '../styles/ProjectDetails.css';

const allProjectDetails = [
    {
        id: "jp-ecommerce-rbac",
        title: "E-Commerce RBAC System",
        thumbnail: "/images/projects/rbac-detail-image.jpg",
        details: "An E-Commerce Role-Based Access Control (RBAC) System designed to manage users, orders, products, and a MySQL database through an Admin and User interface. It offers two types of roles: Admin and User. The system allows the Admin to manage products, users, and orders, while the User can browse and place orders",
        liveDemo: "/videos/Demo_RBAC.mp4",
        githubLink: "https://github.com/jpmarasigan/E-Commerce-Role-Based-Access-Control-System",
        technologyUsed: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL', 'REST API', 'XAMPP', 'MySQL'],  
        keyFeatures: [
            'Assigns different capabilities to Admin and User roles, ensuring secure and managed access to various functionalities', 
            'Provides a comprehensive overview of metrics and data using Chart.js', 
            'Allows Admins to add, update, and delete product information seamlessly',
            'Enables users to browse products, place orders, view order history and status, and update personal information'
        ],
    },
    {
        id: "jp-youtube-transcript-summarizer",
        title: "Insight: Youtube Transcript Summarizer",
        thumbnail: "/images/projects/youtube-detail-image.jpg",
        details: "A web application built with Flask designed to summarize YouTube video content. By taking a YouTube video link as input, it provides a concise summary of the video’s content. This is especially useful for users who want to quickly understand key points without watching the entire video",
        liveDemo: "",
        githubLink: "https://github.com/jpmarasigan/Youtube-Link-Content-Summarizer",
        technologyUsed: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask Framework', 'DJAngular', 'NLTK', 'Youtube API'],  
        keyFeatures: [
            'Simplifies the process by allowing users to input a YouTube video link directly into the application', 
            'Leverages advanced NLP techniques to generate concise and accurate video summaries', 
            'Provides an intuitive and accessible interface for users to input links and view summaries easily',
            'Responsive and consistent experience across all devices'
        ],
    },
    {
        id: "tweetpulse",
        title: "TweetPulse: Tweet Sentiment Analysis",
        thumbnail: "/images/projects/tweetpulse-detail-image.jpg",
        details: "A web application build with Flask that performs sentiment analysis on public tweets from Twitter, but due to the constraints of the Twitter API introduced under Elon Musk's ownership in 2023, it becomes unavailable as the API is now a paid service, no longer free",
        liveDemo: "/videos/Demo_TweetPulse.mp4",
        githubLink: "https://github.com/jpmarasigan/TweetPulse",
        technologyUsed: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask Framework', 'RoBERTa Model'],  
        keyFeatures: [
            'Performs real-time sentiment analysis on public tweets uploaded by users',
            'Utilizes Roberta machine learning algorithm to provide accurate sentiment scores',
            'User-friendly interface for easy upload and analysis of tweets',
        ],
    },
    {
        id: "w2eat-discord-bot",
        title: "W2Eat: Discord Bot Voting System",
        thumbnail: "/images/projects/discord-detail-image.jpg",
        details: "A discord bot that integrates Instant-Runoff Voting System to help indecisive groups decide what to eat by allowing users to list, rank, and vote on food course preferences. This approach ensures a fair and just outcome by accounting for players' preferences and offers valuable insights into decision-making process",
        liveDemo: "",
        githubLink: "https://github.com/jpmarasigan/Voting-Discord-Bot",
        technologyUsed: ['Python', 'Discord API'],  
        keyFeatures: [
            'Easily ties in with the Discord API for direct interaction within server channels',
            'Allows users to join and create new votes effortlessly',
            'Utilizes buttons and replies within Discord for managing votes and instructions',
            'Ensures vote integrity with immediate updates and results',
        ],
    },
    {
        id: "wumpus-world",
        title: "Wumpus World: Knowledge-Based AI",
        thumbnail: "/images/projects/wumpus-detail-image.jpg",
        details: "A Wumpus World Game where an agent automatically navigates through a 3 x 3 grid-based environment using AI, avoiding dangers like pits and the wumpus, while seeking gold. The project integrates a Knowledge-Based AI using Rule of Inferences to maximize survival and success by making decisions based on the agent's gathered perceptions",
        liveDemo: "/videos/Demo_Wumpus_AI.mp4",
        githubLink: "https://github.com/jpmarasigan/Wumpus-World-Knowledge-Based-AI",
        technologyUsed: ['Python', 'PyGame'],  
        keyFeatures: [
            'Agent automatically navigating through an 3 x 3 grid',
            'Knowledge-Based AI uses Rule of Inferences to interpret perceptions and make informed decisions',
            'Agent gathers information from adjacent squares to avoid dangers and find gold',
            'Prioritizes survival by avoiding pits and the wumpus, with the ultimate goal of discovering gold or neutralizing the wumpus',
        ],
    }
]

const ProjectDetails = ({bgParam} : {bgParam:JSX.Element}) => {
    const { projectId } = useParams();
    const projectDetails = allProjectDetails.find((project) => project.id === projectId);
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
    let navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!projectDetails) {
        return (
            <div>
                <p>Project Not Found</p>
            </div>
        );
    }

    const handleBackClick = () => { 
        navigate("/");
    }; 
    
    const handleDemoClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsVideoModalOpen(true);
    }

    return (
        <>
            <div className="project-details-section">
                <div className="nav-col">
                    <div 
                        className="back-button" onClick={handleBackClick}>
                        <img src="/images/assets/arrow-icon.svg" alt="Return Arrow" />
                        <p>Back</p>
                    </div>
                </div>
                <div>
                    <div className='project-details-container'>
                        <div className="col col-1">
                            <h1>{projectDetails.title}</h1>
                            <div className="border-bottom-design"></div>
                            <p>{projectDetails.details}</p>

                            <div className="link-container">
                                {projectDetails.liveDemo ? (
                                    <button className="button-link" onClick={handleDemoClick}>
                                        <img src="/images/assets/link-icon.svg" alt="Open Live Demo" />
                                        <p>Live Demo</p>
                                    </button>
                                ) : (
                                    <div className="button-link disabled">
                                        <img src="/images/assets/link-icon.svg" alt="Demo Unavailable" />
                                        <p>Demo Unavailable</p>
                                    </div>
                                )}
                                <a href={projectDetails.githubLink} target="_blank" rel="noopener noreferrer" className="button-link">
                                    <img src="/images/assets/github-icon.svg" alt="Github" />
                                    <p>GitHub</p>
                                </a>
                            </div>

                            <div className="technology-used-container">
                                <div className="title">
                                    <img src="/images/assets/technology-icon.svg" alt="Technology Icon" />
                                    <p>Technologies Used</p>
                                </div>
                                <div className="technologies">
                                    {projectDetails.technologyUsed.map((tech, index) => {
                                        return (
                                            <div key={index} className="technology-item">{tech}</div>
                                        )
                                    })} 
                                </div>
                            </div>
                        </div>
                        <div className="col col-2">
                            <div className="thumbnail-container">
                                <img src={projectDetails.thumbnail} alt="Project Icon" />
                            </div>
                            <div className="key-features-container">
                                <div className="title">
                                    <img src="/images/assets/link-icon.svg" alt="Key Features Icon" />
                                    <h3>Key Features</h3>
                                </div>
                                <ul>
                                    {projectDetails.keyFeatures.map((feature, index) => {
                                        return (
                                            <div key={index} className="feature">
                                                <img src="/images/assets/star-icon.svg" alt="Star Icon" />
                                                <li key={index}>{feature}</li> 
                                            </div>  
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <VideoModal 
                isOpen={isVideoModalOpen}
                onClose={() => setIsVideoModalOpen(false)}
                videoSrc={projectDetails.liveDemo}
                title={projectDetails.title}
            />

            {bgParam}
        </>
    )
}

export default ProjectDetails;
