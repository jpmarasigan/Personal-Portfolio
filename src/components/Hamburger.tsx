import { useEffect, useState, useRef } from 'react';
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
    const overlayRef = useRef<HTMLDivElement>(null);
    const hamburgerRef = useRef<HTMLDivElement>(null);

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

    // Check if click outside the mobile view overlay menu
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            // if click outside the nav overlay container or the hamburger button, 
            // close the nav overlay
            if (
                overlayRef.current && !overlayRef.current.contains(e.target as Node) &&
                hamburgerRef.current && !hamburgerRef.current.contains(e.target as Node)
            ) {
                setIsActive(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isActive]);

    const handleNavClick = (e:React.MouseEvent<HTMLAnchorElement>, targetId:string) => {
        e.preventDefault();
        
        setIsActive(!isActive)

        const targetNavSection = document.getElementById(targetId);
        if(targetNavSection) {
            const offset = 50;     // Adjust value as needed
            const navPosition = targetNavSection.getBoundingClientRect().top + window.scrollY;
            let finalPosition = navPosition - offset;
            finalPosition = finalPosition < 0 ? 0 : finalPosition;

            window.scrollTo({            // Scroll to designated section
                top: finalPosition,
                behavior: "smooth",
            });
        }
    }

    return (
        <div className={
            `hamburger-container 
            ${scrolling ? "scrolled" : ""}
            ${isVisible ? "translate-y-0" : "-translate-y-full"}`
        }
        >
            <div ref={hamburgerRef} id="nav-icon" 
                className={`${isActive ? "active" : ""}`} 
                onClick={() => {setIsActive(!isActive)}}
            >
                <span className="w-10"></span>
                <span className="w-10"></span>
                <span className="w-10"></span>
            </div>
            <div className={`overlay ${isActive ? "active" : ""}`}>
                <div ref={overlayRef} className={`menu ${isActive ? "active" : ""}`}>
                    <ul>
                        {['Home', 'Services', 'Portfolio', 'Skills', 'Contact'].map((nav, index) => (
                            <li key={index}>
                                <a 
                                    href={`#${nav.toLowerCase()}`}
                                    onClick={(e) => handleNavClick(e, nav.toLowerCase())}
                                >
                                    {nav}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a 
                        href="/images/resume/resume.pdf" 
                        download="Resume-Marasigan_John_Patrick.pdf" 
                        className="resume-button"
                    >
                        My Resume
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hamburger;