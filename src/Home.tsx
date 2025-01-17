const profileImage = 'images/profileImage.png';

const Home = () => {
    return (
    <div className="mx-auto h-screen max-w-[85rem]">
        <div className="h-full content-center border-2 border-yellow-300">
            <div className="flex max-600:h-fit min-1024:relative max-1024:flex-row-reverse items-center h-[28rem] w-full mx-auto md:border-red-300 xl:border-green-300 border-2 mt-12">
                <div className="flex items-end justify-center max-600:hidden mx-auto h-full w-[390px] border-2 border-default-purple shadow-profile-bs max-1024:m-[5%]">
                    <img 
                        className="w-[95%] h-[95%] object-contain"
                        src={profileImage} 
                        alt="Profile of the user" 
                    />;
                </div>
                <div className="absolute block text-largest top-[-2rem] left-[13%] max-1024:hidden between-1024-1200:left-[11%] between-1200-1360:left-[16%] max-1360:top-[-1.5rem] max-1360:text-large font-anton text-slate-200">
                    SOFTWARE
                </div>
                <div className="absolute block text-largest bottom-[-2.2rem] right-[14.5rem] max-1024:hidden between-1024-1200:right-[14%] between-1200-1360:right-[19%] max-1360:text-large font-anton text-slate-200">
                    ENGINEER
                </div>

                {/* Original layout width > 1024px */}
                <div className="absolute left-[6rem] bottom-[8rem] w-[23%] max-1024:hidden max-1360:left-[5%] max-1360:w-[20%]">
                    <p className="text-customPurple font-robotoCondensed font-medium tracking-tight">HELLO, I AM</p>
                    <p className="text-customWhite font-anton text-[2rem]">JOHN PATRICK</p>
                    <p className="text-customLightGray font-robotoCondensed font-normal text-2xl tracking-tight">AS A RECENT GRADUATE IN FULL-STACK DEVELOPMENT. I AM PASSIONATE ABOUT BOTH FRONT-END AND BACK-END TECHNOLOGIES</p>
                </div>
                <div className="absolute right-[6rem] top-[8rem] w-[23%] max-1024:hidden max-1360:right-[5%] max-1360:w-[20%]">
                    <p className="text-customLightGray text-right font-robotoCondensed font-normal text-2xl tracking-tight">IN MY PORTFOLIO, YOU WILL FIND A RANGE OF PROJECTS THAT HIGHLIGHT MY SKILLS AND SHOWCASE MY EXPERTISE</p>
                </div>

                {/* Combined layout width <= 1024px */}
                <div className="w-[50%] max-600:w-[100%] m-[5%] min-1024:hidden">
                    <p className="text-customPurple font-robotoCondensed font-medium tracking-tight">HELLO, I AM</p>
                    <p className="text-customWhite font-anton text-[2rem]">JOHN PATRICK</p>
                    <p className="text-customLightGray font-robotoCondensed font-normal text-2xl tracking-tight">
                        AS A RECENT GRADUATE IN FULL-STACK DEVELOPMENT. I AM PASSIONATE ABOUT BOTH FRONT-END AND 
                        BACK-END TECHNOLOGIES IN MY PORTFOLIO, YOU WILL FIND A RANGE OF PROJECTS THAT HIGHLIGHT 
                        MY SKILLS AND SHOWCASE MY EXPERTISE
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Home;