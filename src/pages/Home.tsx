import '../styles/Home.css'; // Import the new CSS file

const profileImage = 'images/profileImage.png';

const ProfileInfoSection = () => {
    return (
        <>
            {/* Original layout width > 1024px */}
            <div className="profile-info-left">
                <p className="hello-text">HELLO, I AM</p>
                <p className="name-text">JOHN PATRICK</p>
                <p className="description-text">AS A RECENT GRADUATE IN FULL-STACK DEVELOPMENT. I AM PASSIONATE ABOUT BOTH FRONT-END AND BACK-END TECHNOLOGIES</p>
            </div>
            <div className="profile-info-right">
                <p className="description-text-right">IN MY PORTFOLIO, YOU WILL FIND A RANGE OF PROJECTS THAT HIGHLIGHT MY SKILLS AND SHOWCASE MY EXPERTISE</p>
            </div>

            {/* Combined layout width <= 1024px */}
            <div className="profile-info-combined">
                <p className="hello-text">HELLO, I AM</p>
                <p className="name-text">JOHN PATRICK</p>
                <p className="description-text">
                    AS A RECENT GRADUATE IN FULL-STACK DEVELOPMENT. I AM PASSIONATE ABOUT BOTH FRONT-END AND 
                    BACK-END TECHNOLOGIES IN MY PORTFOLIO, YOU WILL FIND A RANGE OF PROJECTS THAT HIGHLIGHT 
                    MY SKILLS AND SHOWCASE MY EXPERTISE
                </p>
            </div>
        </>
    )
}

const ProfileImageSection = () => {
    return (
        <>
            <div className="profile-image-container">
                <img 
                    className="profile-image"
                    src={profileImage} 
                    alt="Profile of the user" 
                />
            </div>
            <div className="backdropDesign"></div>
            <div className="software-text">
                SOFTWARE
            </div>
            <div className="engineer-text">
                ENGINEER
            </div>
        </>
    )
}

const Home = () => {
    return (
    <div className="home-section">
        <div className="content-container">
            <div className="profile-container">
                <ProfileImageSection />                
                <ProfileInfoSection />
            </div>
        </div>
    </div>
    )
}

export default Home;