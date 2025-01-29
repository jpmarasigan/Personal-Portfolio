import { useEffect, useState } from 'react';
import '../styles/Hamburger.css';

const Hamburger = () => {
    const [isActive, setIsActive] = useState(false);
    const [scrolling, setScrolling] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) 
                setIsVisible(false);    // Scrolling down
            else 
                setIsVisible(true);     // Scrolling up

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
        }>
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
                        <li><a href="#home" onClick={() => {setIsActive(!isActive)}}>Home</a></li>
                        <li><a href="#services" onClick={() => {setIsActive(!isActive)}}>Services</a></li>
                        <li><a href="#portfolio" onClick={() => {setIsActive(!isActive)}}>Portfolio</a></li>
                        <li><a href="#" onClick={() => {setIsActive(!isActive)}}>Skill</a></li>
                        <li><a href="#" onClick={() => {setIsActive(!isActive)}}>Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Hamburger;