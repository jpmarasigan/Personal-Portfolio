import { useState, useLayoutEffect } from 'react';

interface TechStack {
    src: string,
    name: string,
    animateDirection: "x" | "y",
    value: number
}

const initialTechStack: TechStack[] = [
    { src: "images/techskills/html-icon.svg", name: "HTML", animateDirection: 'x', value: -150},
    { src: "images/techskills/css-icon.svg", name: "CSS", animateDirection: 'x', value: -100},
    { src: "images/techskills/javascript-icon.svg", name: "JavaScript", animateDirection: 'x', value: -50},
    { src: "images/techskills/tailwind-icon.svg", name: "TailwindCSS", animateDirection: 'x', value: 50},
    { src: "images/techskills/reactjs-icon.svg", name: "ReactJS", animateDirection: 'x', value: 100},
    { src: "images/techskills/python-icon.svg", name: "Python", animateDirection: 'x', value: 150},
    { src: "images/techskills/php-icon.svg", name: "PHP", animateDirection: 'x', value: -150},
    { src: "images/techskills/sql-icon.svg", name: "SQL", animateDirection: 'x', value: -100},
    { src: "images/techskills/firebase-icon.svg", name: "Firebase", animateDirection: 'x', value: -50},
    { src: "images/techskills/mysql-icon.svg", name: "MySQL", animateDirection: 'x', value: 50},
    { src: "images/techskills/xampp-icon.svg", name: "XAMPP", animateDirection: 'x', value: 100},
];

export const useTechStack = () => {
    const [techStack, setTechStack] = useState<TechStack[]>(initialTechStack);

    const updateTechStack = () => {
        const width = window.innerWidth;

        if (width < 912) {
            console.log("enter 911");
            setTechStack(prevTechStack => prevTechStack.map((skill, index) => {
                return { ...skill, animateDirection: 'y', value: 50 };
            }));
        // } else if (width < 912) {
        //     setTechStack(prevTechStack => prevTechStack.map((skill, index) => {
        //         const newValue = index % 4 === 0 ? -150 
        //                     : index % 4 === 1 ? -100 
        //                     : index % 4 === 2 ? 100
        //                     : 150;
        //         return { ...skill, animateDirection: 'x', value: newValue };
        //     }));
        } else if (width < 1304) {
            setTechStack(prevTechStack => prevTechStack.map((skill, index) => {
                const newValue = index % 5 === 0 ? -150 
                            : index % 5 === 1 ? -100 
                            : index % 5 === 2 ? 50
                            : index % 5 === 3 ? 100 
                            : 150;
                return { ...skill, animateDirection: 'x', value: newValue };
            }));
        } else {
            setTechStack(initialTechStack);
        }
    };

    useLayoutEffect(() => {
        updateTechStack(); // Call on initial load
        window.addEventListener('resize', updateTechStack);
        return () => {
            window.removeEventListener('resize', updateTechStack);
        };
    }, []);

    return techStack;
};