import { useEffect } from "react";

// Intersection Observer on viewport to trigger scroll animation
const useSectionObserver = () => {  
    useEffect(() => {       // to make sure trigger once component mounts on DOM
        let observer = new IntersectionObserver(
            (entries, observer) => {  // callback function
                entries.filter(entry => entry.isIntersecting).forEach(entry => {
                    entry.target.classList.add("intersected");
                    observer.unobserve(entry.target);
                    // console.log("intersected at", entry.target);
                })
            }, 
            { 
                threshold: 0.3, 
            }
        );

        document.querySelectorAll('.sectionObserver').forEach(e => {
            observer.observe(e);
        });
    }, []);
}

export default useSectionObserver;