import '../styles/Services.css';

const Statistics = () => {
    return (
        <div className="statistics sectionObserver">
            <div className="stats">
                <span>03</span> years of experience
            </div>
            <div className="stats">
                <span>06</span> projects completed
            </div>
            <div className="stats">
                <span>01</span> satisfied clients
            </div>
        </div>
    )
}

const DevelopmentField = () => {
    return (
        <div className="development-container sectionObserver">
            <div className="development">
                <h3 className="development-title">Front-end Web Development</h3>
                <span>HTML, CSS, JavaScript, TailwindCSS</span>
                <p>
                    I have developed responsive websites using HTML, CSS, JavaScript,
                    and TailwindCSS through various school projects. My experience includes
                    creating user-friendly interfaces and ensuring compatibility across
                    different devices. I enjoy applying best practices in web development 
                    and bringing creative designs to life.
                </p>
            </div>
            <div className="development">
                <h3>Back-end Web Development</h3>
                <span>Python, PHP, SQL, XAMPP, MariaDB, Firebase</span>
                <p>
                    I have hands-on experience gained through school projects and
                    personal learning. I focus on creating functional server-side
                    applications such as managing databases, and connecting back-end
                    systems to the front-end.
                </p>
            </div>
            <div className="development">
                <h3>Python Development</h3>
                <span>Python, Flask, PyGame</span>
                <p>
                    I have worked with Python and Flask through school projects,
                    developing back-end functionality and integrating ML/DL model to
                    web applications. My experience includes handling server-side logic,
                    utlizing models, and integrating databases.
                </p>
            </div>
        </div>
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
        <div className="title-container sectionObserver">
            <span className="title">
                Your Services
            </span>
        </div>
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