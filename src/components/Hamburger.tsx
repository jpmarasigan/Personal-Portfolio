import '../styles/Hamburger.css';

const Hamburger = () => {
    return (
        <div className="fixed w-full h-[80px] min-800:hidden flex items-center justify-end max-600:px-6 px-9">
            <div id="nav-icon">
                <span className="w-12"></span>
                <span className="w-12"></span>
                <span className="w-12"></span>
            </div>
        </div>
    )
}

export default Hamburger;