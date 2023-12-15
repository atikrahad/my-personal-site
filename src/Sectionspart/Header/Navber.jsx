import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import img from "../../assets/navber/1.png"

const Navber = () => {
  
  const navItem = (
    <>
      <Link to="app" spy={true} smooth={true} activeClass="active" activeStyle={{color: 'red'}} className="m-4 cursor-pointer font-medium">Home</Link>
      <Link to="about" spy={true} activeStyle={{color: 'red'}}  smooth={true} activeClass="active" className="m-4 cursor-pointer font-medium">About</Link>
      <Link to="services" spy={true} activeStyle={{color: 'red'}}  smooth={true} activeClass="active" className="m-4 cursor-pointer font-medium">Services</Link>
      <Link to="portfolio" spy={true} activeStyle={{color: 'red'}}  smooth={true} activeClass="active" className="m-4 cursor-pointer font-medium">Portfolio</Link>
      <Link to="contact" spy={true} activeStyle={{color: 'red'}}  smooth={true} activeClass="active" className="m-4 cursor-pointer font-medium">Contact</Link>
      
    </>
  );
  return (
    <div  className=" bg-slate-600 bg-opacity-90 fixed z-50 mx-auto py-4 md lg:w-full w-[95%]">
      <div className="flex items-center max-w-5xl mx-auto justify-between">
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
          <button className="btn bg-stone-600">Resume</button>
        </div>
      </div>
    </div>
  );
};

export default Navber;
