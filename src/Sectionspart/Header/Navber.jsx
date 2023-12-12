import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

const Navber = () => {
  const navItem = (
    <>
      <NavLink className="m-4 font-medium">home</NavLink>
      <NavLink className="m-4 font-medium">home</NavLink>
      <NavLink className="m-4 font-medium">home</NavLink>
      <NavLink className="m-4 font-medium">home</NavLink>
    </>
  );
  return (
    <div className="max-w-6xl mx-auto md lg:w-full w-[95%]">
      <div className="flex items-center justify-between">
        <div className="lg:hidden">
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
        <div>
          <img
            src="https://scontent.fdac22-1.fna.fbcdn.net/v/t31.18172-8/28698719_608489529499785_778988473233943968_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7a1959&_nc_eui2=AeGrVIHLsTtOGbyVe-wPDjxUTIftpxoLWapMh-2nGgtZqtZcH6JCOsTPIg0ximaZTAmwfMMNJmvqxSZlk8w6fKQL&_nc_ohc=Zh7paL-wz5QAX_kK9G5&_nc_ht=scontent.fdac22-1.fna&oh=00_AfBwJFIZvQ0EeCTQWtYWIadf8N-lFPvpofxhp2hTL-qJkQ&oe=659F585C"
            alt=""
            className="w-24 rounded-full"
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
