import '../assets/css/slider-rotate.css'


const Hero = () => {
    return (
        <main className="relative">
            <div className="banner">
                {/* Rotating slider */}
                <div className="slider" style={{ ["--quantity" as any]: 16 }}>
                    {["E", "B", "I", "K", "E", "M", "E", ".", ".", ".", "E", "S", "E", ".", ".", "."].map((char, index) => (
                        <div className="item" style={{ ["--position" as any]: index + 1 }} key={index}>
                        <h1 data-content={char} className="slider-text">{char}</h1>
                        </div>
                    ))}
                </div>

                {/* Content section */}
                <div className="content">
                    <h1 data-content="DEVELOPER" className="bottom-50">DEVELOPER</h1>
                    <div className="author xl:left-7 lg:left-6 md:left-7 left-[50%]">
                        <h2>Ebikeme Ese</h2>
                        <p>
                            <b>Full-Stack Developer</b>
                        </p>

                        <p>
                            Delivering full‑stack solutions from concept to deployment.
                        </p>
                    </div>

                    <div className="model">
                        {/* <img 
                            src="/src/assets/images/full-copy.png" 
                            alt="Profile picture" 
                            // width={100}
                            // height={75}
                            className='left-[29.8%] scale-118 bottom-0 absolute'
                        /> */}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Hero;
