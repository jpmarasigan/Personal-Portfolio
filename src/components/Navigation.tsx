import Hamburger from "../components/Hamburger";

const Navigation = () => {
    return (
        <>
            <div className="fixed max-800:hidden w-full font-robotoCondensed max-w-[85rem] left-0 right-0 mx-auto py-3">
                <div className="flex relative mx-[5rem] max-980:w-[90%] max-980:mx-auto max-1140:flex-initial items-center border-2 border-green-400">
                    <nav className="flex justify-between mx-auto">
                        {/* Links */}
                        <ul className="flex gap-x-14 max-980:gap-x-10 p-8 mmin-1024:mx-auto text-customLightGray font-normal text-lg">
                            <li className="hover:underline">HOME</li>
                            <li className="hover:underline">SERVICES</li>
                            <li className="hover:underline">RESUME</li>
                            <li className="hover:underline">SKILL</li>
                            <li className="hover:underline">CONTACT</li>
                        </ul>
                    </nav>
                    {/* Button for Recruit */}
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
            </div>
            <Hamburger />
        </>
    )
}

export default Navigation;