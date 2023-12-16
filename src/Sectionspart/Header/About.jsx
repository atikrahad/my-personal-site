import Myskills from "../../Components/Myskills";
import Headline from "../../Shared/Headline";
import Tilt from 'react-parallax-tilt';

import img from "../../assets/about/20231209224717_IMG_8063-PhotoRoom.png-PhotoRoom.png";
const About = () => {
  return (
    <div id="about">
      <div
        style={{
          background: `linear-gradient(to bottom, rgba(0, 2, 25, .987), rgba(0, 2, 25, .985)), url(https://media.giphy.com/media/ccKEsBDAAQTrutQ9LA/giphy.gif)`,
          backgroundSize: "cover",
        }}
        className=" py-20 md:py-32"
      >
        <div className="max-w-5xl mx-auto">
            <Headline subheading="My histry" heading="About me"></Headline>
          <div className="flex gap-10 flex-col-reverse md:flex-row  justify-between items-center">

            <Tilt className="space-y-4">
              <h2 className="text-2xl text-orange-200 font-semibold">
                Thank You sir, for visit my profile.
              </h2>
              <h1 className="text-4xl text-cyan-500 font-bold">
                I'm Atik Rahad.
              </h1>
              <p className="text-slate-400">
                I'm a MERN stack web developer although I am expert as a
                front end developer. Rect and tailwind I have used in almost my
                all projects. But I'm comfortable node.js, express.js, and mongodb. Now I'm learning Next.js, mongoose, MUI.
              </p>
              <div className="flex flex-col md:flex-row gap-3">
                <div
                  style={{ boxShadow: "2px 4px 16px #2e5354" }}
                  className="bg-slate-600 w-[70%] md:w-full mx-auto p-3 rounded-md"
                >
                  <h1 className="text-white text-center text-3xl">04+</h1>
                  <h3 className="text-cyan-200 text-center">
                    Months of experiance
                  </h3>
                </div>
                <div
                  style={{ boxShadow: "2px 4px 16px #2e5354" }}
                  className="bg-slate-600 w-[70%] md:w-full mx-auto p-3 rounded-md"
                >
                  <h1 className="text-white text-center text-3xl">05+</h1>
                  <h3 className="text-cyan-200 text-center">Total projects</h3>
                </div>
              </div>
            </Tilt>


            <Tilt className="relative">
                
              <img src={img} className="rounded-b-full border-b  border-dashed border-cyan-300 " alt="" />
            </Tilt>
          </div>
          <Myskills></Myskills>
        </div>
      </div>
    </div>
  );
};

export default About;
