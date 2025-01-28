import { useParams } from "react-router-dom";
import '../styles/ProjectDetails.css';

const allProjectDetails = [
    {
        id: "jp-ecommerce-rbac",
        title: "E-Commerce RBAC System",
        thumbnail: "thumbnail",
        details: "An E-Commerce Role-Based Access Control (RBAC) System designed to manage users, orders, products, and a MySQL database through an Admin and User interface. It offers two types of roles: Admin and User. The system allows the Admin to manage products, users, and orders, while the User can browse and place orders.",
        liveDemo: "liveDemo",
        githubLink: "githubLink",
        technologyUsed: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL', 'XAMPP', 'MySQL'],  
        image: "/images/sample1.jfif",
        keyFeatures: [
            'Key feature 1Key feature 1Key feature 1vKey feature 1vvvKey feature 1vv', 
            'Key feature 2', 'Key feature 3', 'Key feature 4'],
    }
]

const ProjectDetails = ({bgParam} : {bgParam:JSX.Element}) => {
    const { projectId } = useParams();
    const projectDetails = allProjectDetails.find((project) => project.id === projectId);

    if (!projectDetails) {
        return (
            <div>
                <p>Project Not Found</p>
            </div>
        );
    }

    return (
        <div>
            <div className="nav-col">
                <div className="back-button">Button</div>
            </div>
            <div className='project-details-container'>
                <div className="col col-1">
                    <h1>{projectDetails.title}</h1>
                    <div className="border-bottom-design"></div>
                    <p>{projectDetails.details}</p>

                    <div className="link-container">
                        <div className="button-link">
                            <img src="/images/link-icon.svg" />
                            <p>Live Demo</p>
                        </div>
                        <div className="button-link">
                            <img src="/images/github-icon.svg" />
                            <p>GitHub</p>
                        </div>
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
                    <img src={projectDetails.image} alt="project image" />
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
    )
}

export default ProjectDetails;
