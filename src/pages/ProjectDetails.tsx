import { useNavigate, useParams } from "react-router-dom";
import '../styles/ProjectDetails.css';

const allProjectDetails = [
    {
        id: "jp-ecommerce-rbac",
        title: "E-Commerce RBAC System",
        thumbnail: "/images/project_thumbnails/rbac-detail-image.jpg",
        details: "An E-Commerce Role-Based Access Control (RBAC) System designed to manage users, orders, products, and a MySQL database through an Admin and User interface. It offers two types of roles: Admin and User. The system allows the Admin to manage products, users, and orders, while the User can browse and place orders.",
        liveDemo: "liveDemo",
        githubLink: "https://github.com/jpmarasigan/E-Commerce-Role-Based-Access-Control-System",
        technologyUsed: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL', 'XAMPP', 'MySQL'],  
        keyFeatures: [
            'Assigns different capabilities to Admin and User roles, ensuring secure and managed access to various functionalities', 
            'Provides a comprehensive overview of metrics and data using Chart.js', 
            'Allows Admins to add, update, and delete product information seamlessly',
            'Enables users to browse products, place orders, view order history and status, and update personal information'
        ],
    },
    {
        id: "jp-youtube-transcript-summarizer",
        title: "Youtube Transcript Summarizer",
        thumbnail: "/images/project_thumbnails/youtube-detail-image.jpg",
        details: "A web application built with Flask designed to summarize YouTube video content. By taking a YouTube video link as input, it provides a concise summary of the video’s content. This is especially useful for users who want to quickly understand key points without watching the entire video.",
        liveDemo: "liveDemo",
        githubLink: "https://github.com/jpmarasigan/Youtube-Link-Content-Summarizer",
        technologyUsed: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask Framework', 'DJAngular', 'NLTK', 'Youtube API'],  
        keyFeatures: [
            'Simplifies the process by allowing users to input a YouTube video link directly into the application', 
            'Leverages advanced NLP techniques to generate concise and accurate video summaries', 
            'Provides an intuitive and accessible interface for users to input links and view summaries easily',
            'Responsive and consistent experience across all devices'
        ],
    }
]

const ProjectDetails = ({bgParam} : {bgParam:JSX.Element}) => {
    const { projectId } = useParams();
    const projectDetails = allProjectDetails.find((project) => project.id === projectId);

    let navigate = useNavigate();

    if (!projectDetails) {
        return (
            <div>
                <p>Project Not Found</p>
            </div>
        );
    }

    const handleBackClick = () => { navigate("/") };

    return (
        <div className="project-details-section">
            <div className="nav-col">
                <div 
                    className="back-button" onClick={handleBackClick}>
                    <img src="/images/arrow-icon.svg" />
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
                            <a className="button-link">
                                <img src="/images/link-icon.svg" />
                                <p>Live Demo</p>
                            </a>
                            <a href={projectDetails.githubLink} target="_blank" className="button-link">
                                <img src="/images/github-icon.svg" />
                                <p>GitHub</p>
                            </a>
                        </div>

                        <div className="technology-used-container">
                            <div className="title">
                                <img src="/images/technology-icon.svg" />
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
                        <img src={projectDetails.thumbnail} alt="project image" />
                        </div>
                        <div className="key-features-container">
                            <div className="title">
                                <img src="/images/link-icon.svg"/>
                                <h3>Key Features</h3>
                            </div>
                            <ul>
                                {projectDetails.keyFeatures.map((feature, index) => {
                                    return (
                                        <div className="feature">
                                            <img src="/images/star-icon.svg" alt="star icon" />
                                            <li key={index}>{feature}</li> 
                                        </div>  
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                {bgParam}
            </div>
        </div>
    )
}

export default ProjectDetails;
