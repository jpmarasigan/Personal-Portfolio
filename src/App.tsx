import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Spotlight from './components/Spotlight';
import Navigation from "./components/Navigation";
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from "./pages/Portfolio";
import ProjectDetails from "./pages/ProjectDetails";
import Skills from './pages/Skills';
import Background from './components/Background';

const Main: React.FC = () => {
    return (
        <div className="sticky top-0 left-0"
                style={{ backgroundColor: `var(--background-color1)` }}
        >
            <Navigation />
            <Home />
            <Services />
            <Portfolio />
            <Skills />
            <Background />
        </div>
    );
};

const App: React.FC = () => {
    // const [isSpotlightZoomedIn, setIsSpotlightZoomedIn] = useState(false);

    return (
        <div className="relative h-[100vh]">
            {/* <Spotlight isSpotlightZoomedIn={isSpotlightZoomedIn} setIsSpotlightZoomedIn={setIsSpotlightZoomedIn} /> */}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/projects/:projectId" element={<ProjectDetails bgParam={<Background />} />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
};

export default App;
