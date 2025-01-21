import '../styles/Portfolio.css';

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
            </div>
        </div>
    )
}

export default Portfolio;