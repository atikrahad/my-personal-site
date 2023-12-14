import { AiOutlineHome, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import Headline from "../Shared/Headline";
const Contact = () => {
  return (
    <div
      id="contact"
      style={{
        background: `linear-gradient(to bottom, rgba(0, 2, 25, .985), rgba(0, 2, 25, .985)), url(https://media.giphy.com/media/ccKEsBDAAQTrutQ9LA/giphy.gif)`,
        backgroundSize: "cover",
      }}
      className="min-h-screen py-20"
    >
        <Headline subheading="For project" heading="Contact me"></Headline>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-10 justify-between">
        <div className="flex items-center w-full rounded-lg flex-col bg-slate-600 p-10">
          <AiOutlineHome className="text-2xl text-white"></AiOutlineHome>
          <h1 className="text-2xl font-bold text-slate-200">Location</h1>
          <p className="text-cyan-400">Sapahar, Rājshāhi, Bangladesh</p>
        </div>
        <div className="flex items-center w-full rounded-lg flex-col bg-slate-600 p-10">
          <AiOutlinePhone className="text-2xl text-white"></AiOutlinePhone>
          <h1 className="text-2xl font-bold text-slate-200">Phone</h1>
          <p className="text-cyan-400">+8801615406742</p>
        </div>
        <div className="flex items-center w-full rounded-lg flex-col bg-slate-600 p-10">
          <AiOutlineMail className="text-2xl text-white"></AiOutlineMail>
          <h1 className="text-2xl font-bold text-slate-200">E-Mail</h1>
          <p className="text-cyan-400">atikrahad1@gmail.com</p>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;
