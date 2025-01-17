import './Hamburger.css';

const Hamburger = () => {
    return (
        <div className="fixed w-full h-[80px] min-800:hidden flex items-center justify-end px-5">
            <div id="nav-icon">
                <span className="w-full"></span>
                <span className="w-full"></span>
                <span className="w-full"></span>
            </div>
        </div>
    )
}

export default Hamburger;