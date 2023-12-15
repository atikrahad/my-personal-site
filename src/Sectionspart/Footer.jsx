/* eslint-disable react/jsx-no-target-blank */
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
    return (
        <div style={{background: `linear-gradient(to bottom, rgba(0, 2, 25, .98), rgba(25, 0, 10, .9)), url(https://media.giphy.com/media/ccKEsBDAAQTrutQ9LA/giphy.gif)`, backgroundSize: "cover"}} className="py-20 md:py-32 ">
            <div className="max-w-5xl mx-auto text-center">
                <div className="space-y-3">
                    <p className="text-slate-400">copyright © 2023 | Atik Rahad</p>
                    <h2 className="text-xl font-bold text-slate-300">Sapahar, Rajshahi, Bangladesh</h2>
                    <div className="flex justify-center items-center gap-3 flex-wrap">
                    <a target="_blank" href="https://www.facebook.com/atik.rahat.10"><BsFacebook className="text-3xl text-cyan-500"/></a>
                        <a target="_blank" href="https://www.instagram.com/atik_rahad1/"><BsInstagram className="text-3xl text-cyan-500"/></a>
                        <a target="_blank" href="https://www.linkedin.com/in/atik-rahad/"><BsLinkedin className="text-3xl text-cyan-500"/></a>
                        <a target="_blank" href="https://github.com/atikrahad"><BsGithub className="text-3xl text-cyan-500"/></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;