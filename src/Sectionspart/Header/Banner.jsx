/* eslint-disable react/jsx-no-target-blank */
import { TypeAnimation } from "react-type-animation";
import img from "../../assets/banner/1.png"
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin  } from "react-icons/bs";

const Banner = () => {
    return (
        <div id="app"
        style={{background: `linear-gradient(to bottom, rgba(25, 0 , 0, .9), rgba(0, 2, 25, .99)), url(https://media.giphy.com/media/ccKEsBDAAQTrutQ9LA/giphy.gif)`, backgroundSize: "cover"}} className=" py-20 md:py-32 w-full">
            
            <div className="flex items-baseline gap-10 justify-center py-20">
                <div className="flex flex-col items-center">
                    <div className="w-5 h-5 rounded-full bg-cyan-700"/>
                    <div className="w-2 h-52 -mt-2 bg-gradient-to-b from-cyan-700 to-green-500"/>
                </div>
                <div className="space-y-5">
                    <h3 className="text-2xl md:text-3xl font-medium text-white">Hello, I'm</h3>
                    <h1 className="text-4xl md:text-5xl text-white font-bold">Atik Rahad</h1>
                    <h2 className="text-2xl md:text-4xl text-cyan-200 font-semibold">
                        <TypeAnimation
                            repeat={Infinity}
                            speed={1}
                            sequence={[
                                'Web Developer',
                                2000,
                                'MERN Stack Developer',
                                2000,
                                'Front End Developer',
                                2000,
                                'Back Developer',
                                2000,
                            ]}
                        />
                    </h2>
                    <div className="flex gap-5">
                        <a target="_blank" href="https://www.facebook.com/atik.rahat.10"><BsFacebook className="text-4xl text-cyan-500"/></a>
                        <a target="_blank" href="https://www.instagram.com/atik_rahad1/"><BsInstagram className="text-4xl text-cyan-500"/></a>
                        <a target="_blank" href="https://www.linkedin.com/in/atik-rahad/"><BsLinkedin className="text-4xl text-cyan-500"/></a>
                        <a target="_blank" href="https://github.com/atikrahad"><BsGithub className="text-4xl text-cyan-500"/></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;