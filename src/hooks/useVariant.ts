import { Variants } from "framer-motion";

export const titleVariant: Variants = {
    offscreen: {
        y: 30,
        opacity: 0
    },
    onscreen: {         
        y: 0,
        opacity: 1,
        transition: {
            type: 'tween',
            ease: 'easeOut',
            duration: 1,
        }
    }
}

export const descSpringVariant: Variants = {
    offscreen: {
        y: 50,
        opacity: 0,
    },
    onscreen: { 
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 120,
            bounce: 0.4,
            duration: 1.2,
        }
    }
}

export const containerTweenVariant: Variants = {
    offscreen: {
        y: 50,
        opacity: 0,
    },
    onscreen: { 
        y: 0,
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            type: "tween",
            ease: 'easeOut',
            duration: 0.8,
        }
    }
}

export const staggerContainerVariant: Variants = {
    offscreen: {
        opacity: 0,
    },
    onscreen: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            duration: 1,
        }
    }
};

export const customTweenVariant = (direction: "x" | "y", value: number, delay: number=0):Variants => ({
    offscreen: {
        [direction]: value,
        opacity: 0,
    },
    onscreen: {
        [direction]: 0,
        opacity: 1,
        transition: {
            type: "tween",
            ease: "easeOut",
            duration: 0.6,  
            delay: delay,    
        }
    }
}) as Variants;


export const customSpringVariant = (direction: "x" | "y", value: number, delay: number=0):Variants => ({
    offscreen: {
        [direction]: value,
        opacity: 0,
    },
    onscreen: {
        [direction]: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 120,
            bounce: 0.4,
            duration: 0.6,  
            delay: delay,    
        }
    }
}) as Variants;


export const customVariant = (direction: "x" | "y", value: number):Variants => ({
    offscreen: {
        [direction]: value,
        opacity: 0,
    },
    onscreen: {
        [direction]: 0,
        opacity: 1,
        transition: {
            type: "tween",
            ease: "easeOut",
            duration: 0.6,      
        }
    }
}) as Variants;

