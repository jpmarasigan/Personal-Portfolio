import '../styles/Background.css';

const Background = () => {
    return (
        <div className="animated-background" data-testid="background">
            <div data-testid="circles" className="circles c-1"></div>
            <div data-testid="circles" className="circles c-2 delay1"></div>
            <div data-testid="circles" className="circles c-3 delay2"></div>
            <div data-testid="circles" className="circles c-4 "></div>
        </div>
    )
}

export default Background;