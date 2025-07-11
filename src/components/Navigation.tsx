import { useState, useEffect } from "react";
import Hamburger from "./Hamburger";
import "../styles/Navigation.css";

const NavButton = () => {
    return (
        <div>
            <a 
                className="download-button hover:animate-wave" 
                href="/images/resume/resume.pdf"
                download="Resume-Marasigan_John_Patrick.pdf">
                <img 
                    src="/images/assets/arrow-icon.svg" 
                    alt="Arrow Icon"
                    width={36}
                    className="mr-3">    
                </img>
                MY RESUME
            </a>
        </div>
    )
}

const Navigation = () => {
    const [scrolling, setScrolling] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (!isHovered) {
                if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 10)
                    setIsVisible(false);    // Not visible only when scrolling down quickly
                else if (currentScrollY < lastScrollY)
                    setIsVisible(true);     // Visible only when scrolling up
            }

            // Remove navigation background if at the top of webpage
            if (window.scrollY > 0) 
                setScrolling(true);
            else
                setScrolling(false);

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY, isHovered]);


    const handleNavClick = (e:React.MouseEvent<HTMLAnchorElement>, targetId:string) => {
        e.preventDefault();
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
        <div 
            className={`navbar z-50
                ${scrolling ? "scrolled" : ""} 
                ${isVisible ? "translate-y-0" : "-translate-y-full"}`
            }
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            data-testid="navbar"
        >
            <div className="nav-container">
                <div className="flex relative mx-[5rem] max-980:w-[90%] max-980:mx-auto max-1140:flex-initial items-center z-50">
                    <nav className="flex justify-between mx-auto">
                        {/* Links */}
                        <ul className="flex gap-x-14 max-980:gap-x-10 p-8 mmin-1024:mx-auto text-customLightGray font-normal text-lg">
                            {['home', 'services', 'portfolio', 'skills', 'contact'].map((section) => (
                                <li key={section} className="relative group">
                                    <a 
                                        href={`#${section}`}
                                        onClick={(e) => handleNavClick(e, section)}
                                    >
                                        {section.toUpperCase()}
                                        <span className="underline-hover"></span>
                                    </a>
                                </li>
                            ))}                            
                        </ul>
                    </nav>
                    {/* Button for Recruit */}
                    <NavButton />
                </div>
            </div>
            <Hamburger 
                isVisible={isVisible}
                scrolling={scrolling}
                setScrolling={setScrolling}
                lastScrollY={lastScrollY}
                setLastScrollY={setLastScrollY}
            />
        </div>
    )
}

export default Navigation;