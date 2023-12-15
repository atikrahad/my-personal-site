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
        <div className="flex flex-col md:flex-row items-center gap-10 justify-between">
          <div style={{ boxShadow: "2px 4px 16px #2e5354" }}
           className="flex items-center w-full rounded-lg flex-col bg-slate-600 py-10">
            <AiOutlineHome className="text-2xl text-white"></AiOutlineHome>
            <h1 className="text-2xl font-bold text-slate-200">Location</h1>
            <p className="text-cyan-400">Sapahar, Rājshāhi, Bangladesh</p>
          </div>
          <div style={{ boxShadow: "2px 4px 16px #2e5354" }}
           className="flex items-center w-full rounded-lg flex-col bg-slate-600 py-10">
            <AiOutlinePhone className="text-2xl text-white"></AiOutlinePhone>
            <h1 className="text-2xl font-bold text-slate-200">Phone</h1>
            <p className="text-cyan-400">+8801615406742</p>
          </div>
          <div style={{ boxShadow: "2px 4px 16px #2e5354" }}
           className="flex items-center w-full rounded-lg flex-col bg-slate-600 py-10">
            <AiOutlineMail className="text-2xl text-white"></AiOutlineMail>
            <h1 className="text-2xl font-bold text-slate-200">E-Mail</h1>
            <p className="text-cyan-400">atikrahad1@gmail.com</p>
          </div>
        </div>
        <div>
          <form className="space-y-3 text-slate-300 py-10" action="">
            <div className="flex gap-5 items-center justify-between">
              <input className="px-4 py-3 w-full rounded-lg border-cyan-400 bg-transparent border-2 outline-none" type="text" placeholder="Name" />
              <input className="px-4 py-3 w-full rounded-lg border-cyan-400 bg-transparent border-2 outline-none" type="email" placeholder="Email" />
            </div>
            <div className="flex gap-5 items-center justify-between">
              <input className="px-4 py-3 w-full rounded-lg border-cyan-400 bg-transparent border-2 outline-none" type="number" placeholder="Number" />
              <input className="px-4 py-3 w-full rounded-lg border-cyan-400 bg-transparent border-2 outline-none" type="text" placeholder="Project" />
            </div>
            <textarea placeholder="Message" className="px-4 py-3 w-full rounded-lg border-cyan-400 bg-transparent border-2 outline-none" name="" id="" cols="30" rows="5"></textarea>
            <input style={{ boxShadow: "2px 4px 16px #2e5354" }} type="submit"  className="btn bg-slate-600 rounded-md border-none text-cyan-400  hover:text-slate-800"/>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
