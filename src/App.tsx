import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from './pages/Home'; 
import Services from './pages/Services';
import Portfolio from "./pages/Portfolio";
import ProjectDetails from "./pages/ProjectDetails";
import Skills from "./pages/Skills";
import Background from './components/Background';

const Main = () => {    
    return (
        <div 
            className="relative"
            style={{ 
                backgroundColor: `var(--background-color1)`,
            }}
        >   
            <Navigation />
            <Home />
            <Services />
            <Portfolio />
            <Skills />
            <Background />
        </div>
    )
}

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/projects/:projectId" element={<ProjectDetails bgParam={<Background />} />} />
            </Routes>
        </BrowserRouter>    
    )
}

export default App;