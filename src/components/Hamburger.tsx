import { useEffect, useState } from 'react';
import '../styles/Hamburger.css';

interface HamburgerProps {
    isVisible: boolean,
    scrolling: boolean,
    lastScrollY: number,
    setScrolling: (value: boolean) => void;
    setLastScrollY: (value: number) => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ isVisible, scrolling, lastScrollY, setScrolling, setLastScrollY}) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Remove navigation background if at the top of webpage
            if (window.scrollY > 0)
                setScrolling(true);
            else
                setScrolling(false);

            setLastScrollY(currentScrollY);
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <div className={
            `hamburger-container 
            ${scrolling ? "scrolled" : ""}
            ${isVisible ? "translate-y-0" : "-translate-y-full"}`
        }
        >
            <div id="nav-icon" 
                className={`${isActive ? "active" : ""}`} 
                onClick={() => {setIsActive(!isActive)}}
            >
                <span className="w-10"></span>
                <span className="w-10"></span>
                <span className="w-10"></span>
            </div>
            <div className={`overlay ${isActive ? "active" : ""}`}>
                <div className={`menu ${isActive ? "active" : ""}`}>
                    <ul>
                        <li><a href="#home" onClick={() => setIsActive(!isActive)}>Home</a></li>
                        <div className="nav-divider"></div>
                        <li><a href="#services" onClick={() => setIsActive(!isActive)}>Services</a></li>
                        <div className="nav-divider"></div>
                        <li><a href="#portfolio" onClick={() => setIsActive(!isActive)}>Portfolio</a></li>
                        <div className="nav-divider"></div>
                        <li><a href="#" onClick={() => setIsActive(!isActive)}>Skill</a></li>
                        <div className="nav-divider"></div>
                        <li><a href="#" onClick={() => setIsActive(!isActive)}>Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Hamburger;