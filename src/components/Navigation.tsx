import Hamburger from "../components/Hamburger";

const NavButton = () => {
    return (
        <div>
            <a className="absolute max-1140:static max-1140:transform-none max-1140:h-1/2 flex items-center justify-center top-1/2 right-0 transform -translate-y-1/2 text-white text-lg font-medium rounded-tr-xl rounded-bl-xl bg-gradient-to-r from-buttonColorStart to-buttonColorEnd p-4">
                <img 
                    src="/images/arrow-icon.svg" 
                    alt="Arrow Icon"
                    width={36}
                    className="mr-3">    
                </img>
                RECRUIT ME
            </a>
        </div>
    )
}
const Navigation = () => {
    return (
        <>
            <div className="fixed z-50 max-800:hidden w-full font-robotoCondensed max-w-[85rem] left-0 right-0 mx-auto">
                <div className="flex relative mx-[5rem] max-980:w-[90%] max-980:mx-auto max-1140:flex-initial items-center">
                    <nav className="flex justify-between mx-auto">
                        {/* Links */}
                        <ul className="flex gap-x-14 max-980:gap-x-10 p-8 mmin-1024:mx-auto text-customLightGray font-normal text-lg">
                            <li className="hover:underline"><a href="#home">HOME</a></li>
                            <li className="hover:underline"><a href="#services">SERVICES</a></li>
                            <li className="hover:underline"><a href="#portfolio">PORFOLIO</a></li>
                            <li className="hover:underline"><a href="#">SKILL</a></li>
                            <li className="hover:underline"><a href="#">CONTACT</a></li>
                        </ul>
                    </nav>
                    {/* Button for Recruit */}
                    <NavButton />
                </div>
            </div>
            <Hamburger />
        </>
    )
}

export default Navigation;