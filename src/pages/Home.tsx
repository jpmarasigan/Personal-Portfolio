import '../styles/Home.css'; // Import the new CSS file

const profileImage = 'images/assets/profileImage.png';

const ProfileInfoSection = () => {
    return (
        <>
            {/* Original layout width > 1024px */}
            <div className="profile-info-left">
                <p className="hello-text">HELLO, I AM</p>
                <p className="name-text">JOHN PATRICK</p>
                <p className="description-text">
                    A GRADUATING STUDENT IN FULL-STACK DEVELOPMENT, PASSIONATE ABOUT 
                    BOTH FRONT-END AND BACK-END TECHNOLOGIES
                </p>
            </div>
            <div className="profile-info-right">
                <p className="description-text-right">
                    IN MY PORTFOLIO, YOU WILL FIND A RANGE OF PROJECTS THAT HIGHLIGHT 
                    MY SKILLS AND SHOWCASE MY EXPERTISE
                </p>
            </div>

            {/* Combined layout width <= 1024px */}
            <div className="profile-info-combined">
                <p className="hello-text">HELLO, I AM</p>
                <p className="name-text mb-2">JOHN PATRICK</p>
                <p className="description-text">
                    A graduating student in full-stack development, passionate about both 
                    front-end and back-end technologies. In my portfolio, you will find a 
                    range of projects that highlight my skills and showcase my expertise
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
    <div id="home" className="home-section">
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