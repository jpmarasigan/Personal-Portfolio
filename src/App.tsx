import React from "react";
import Navigation from "./components/Navigation";
import Home from './Home';

const App: React.FC = () => {
    return (
        <div 
            className="relative bg-cover bg-no-repeat bg-center"
            style={{ 
                backgroundImage: `url('images/background.png')`,
            }}
        >
            <Navigation />
            <Home />
        </div>
    )
}

export default App;