import { useState } from 'react';
import '../styles/Hamburger.css';

const Hamburger = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="hamburger-container">
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