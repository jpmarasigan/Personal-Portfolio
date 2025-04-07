import { useEffect, useState } from "react";

interface SpotlightProps {
    isSpotlightZoomedIn: boolean;
    setIsSpotlightZoomedIn: (value: boolean) => void;
}

const Spotlight: React.FC<SpotlightProps> = ({ isSpotlightZoomedIn, setIsSpotlightZoomedIn }) => {
    const [scrollY, setScrollY] = useState(0);
    const max_hole_size = 1200;  // Max size of the spotlight hole

    // Track scroll position
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);     // Remove when component unmounted
        };
    }, []);

    // Calculate hole size based on scroll position
    const holeSize = scrollY > 100 ? Math.min((scrollY - 100) * 2, max_hole_size) : 0;

    // Update zoom state based on hole size
    useEffect(() => {
        console.log(holeSize, max_hole_size);
        if (holeSize >= max_hole_size) {
            setIsSpotlightZoomedIn(true); 
        } else {
            setIsSpotlightZoomedIn(false); 
        }
    }, [holeSize, setIsSpotlightZoomedIn]);

    
    return (
        <div 
             className="fixed h-screen w-screen bg-transparent z-[9999]"
             style={{ pointerEvents: 'none' }}      // Allow interactions through the spotlight  
        >
            <svg width="100%" height="100%">
                <defs>
                    <mask id="spotlight-mask">
                        {/* Fill the entire screen, except for the circle */}
                        <rect 
                            width="100%" 
                            height="100%" 
                            fill="white"    
                        />
                        <circle cx="50%" cy="50%" r={holeSize} fill="black" />
                    </mask>
                </defs>
                <rect width="100%" height="100%" fill="#13091f" mask="url(#spotlight-mask)" />
                {scrollY < 50 && (
                    <text
                        x="50%"
                        y="50%"
                        dominantBaseline="middle"
                        textAnchor="middle"
                        fill="white"
                        fontWeight="semibold"
                        fontSize="48"
                        style={{
                            opacity: 1 - scrollY / 100,
                        }}
                    >
                        Hi!
                    </text>
                )}
            </svg>
        </div>
    );
};

export default Spotlight;


