import React from "react";
import Navigation from "./components/Navigation";
import Home from './pages/Home'; 
import Services from './pages/Services';
import Portfolio from "./pages/Portfolio";
import Background from './components/Background';

const App: React.FC = () => {
    return (
        <div 
            className="relative"
            style={{ 
                backgroundColor: `var(--background-color1)`,
            }}
        >   
            <Background />
            <Navigation />
            <Home />
            <Services />
            <Portfolio />
        </div>
    )
}

export default App;