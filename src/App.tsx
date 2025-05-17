import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from "./pages/Portfolio";
import ProjectDetails from "./pages/ProjectDetails";
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Background from './components/Background';

const Main: React.FC = () => {
    return (
        <div className="relative"
                style={{ backgroundColor: `var(--background-color1)` }}
        >
            <Navigation />
            <Home />
            <Services />
            <Portfolio />
            <Skills />
            <Contact />
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
