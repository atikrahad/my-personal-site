import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

import img from "../../assets/navber/1.png"
import resume from "../../assets/navber/resume.pdf"
import { useEffect, useState } from "react";

const Navber = () => {
  const [stickyclass, setStickyclass] = useState("fixed")
  const [shadow, setShadow] = useState("none")
  useEffect(()=>{
    window.addEventListener('scroll', fixdNav);
    return ()=> {
      window.removeEventListener("scroll", fixdNav)
    }
  },[])

  const fixdNav = ()=> {
    if(window !== undefined){
      let windowHight = window.scrollY;
      if(windowHight > 70){
        setStickyclass('bg-[#000219fa]  top-0 left-0 fixed bg-opacity-60')
        setShadow("2px 4px 16px #2e5354")
      }
      else{
        setStickyclass('fixed')
        setShadow("0px 0px 0px #2e5354")
      }
    }
  }
  
  const navItem = (
    <>
      <Link to="app" spy={true} smooth={true} activeClass="active" activeStyle={{color: '#22d3ee', borderBottom: '1px solid  #22d3ee',}} className="m-4 cursor-pointer font-medium">Home</Link>
      <Link to="about" spy={true} activeStyle={{color: '#22d3ee', borderBottom: '1px solid  #22d3ee',}}  smooth={true} activeClass="active" className="m-4 cursor-pointer font-medium">About</Link>
      <Link to="services" spy={true} activeStyle={{color: '#22d3ee', borderBottom: '1px solid  #22d3ee',}}  smooth={true} activeClass="active" className="m-4 cursor-pointer font-medium">Services</Link>
      <Link to="portfolio" spy={true} activeStyle={{color: '#22d3ee', borderBottom: '1px solid  #22d3ee',}}  smooth={true} activeClass="active" className="m-4 cursor-pointer font-medium">Portfolio</Link>
      <Link to="contact" spy={true} activeStyle={{color: '#22d3ee', borderBottom: '1px solid  #22d3ee',}}  smooth={true} activeClass="active" className="m-4 cursor-pointer font-medium">Contact</Link>
      
    </>
  );
  return (
    <div  style={{ boxShadow:`${shadow}`}} className={`${stickyclass} z-50 mx-auto py-2 text-slate-400 shadow-md shadow-cyan-600 w-full`}>
      <div className="flex items-center w-[95%] md:w-full max-w-5xl mx-auto justify-between">
        <div className="md:hidden">
          {/* <ul className="flex flex-col">
                {
                    navItem
                }
            </ul> */}
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer"
                className="text-3xl"
              >
                <AiOutlineMenu />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="flex flex-col w-[50%] bg-slate-600 h-full">
                {/* Sidebar content here */}
                {navItem}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <img
            src={img}
            alt=""
            className="w-16 h-16 rounded-full"
          />
        </div>
        <div>
          <ul className="md:contents hidden">{navItem}</ul>
          <a href={resume} download><button style={{ boxShadow: "2px 4px 16px #2e5354" }} className="btn bg-slate-600 rounded border-none text-cyan-400  hover:text-slate-800">Resume</button></a>
        </div>
      </div>
    </div>
  );
};

export default Navber;
