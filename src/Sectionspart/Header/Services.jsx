import Headline from "../../Shared/Headline";
import mern from "../../assets/services/mern.png";
import frontend from "../../assets/services/frontend.png";
import backend from "../../assets/services/backend.png";
import { Link } from "react-scroll";

const Services = () => {
  return (
    <div
      id="services"
      style={{
        background: `linear-gradient(to bottom, rgba(0, 2, 25, .985), rgba(0, 2, 25, .985)), url(https://media.giphy.com/media/ccKEsBDAAQTrutQ9LA/giphy.gif)`,
        backgroundSize: "cover",
      }}
      className="py-20"
    >
      <Headline subheading="What I offer" heading="Services"></Headline>
      <div className="max-w-5xl flex gap-5 flex-col w-[95%] md:w-full md:flex-row mx-auto">
        <div
          style={{ boxShadow: "2px 4px 16px #2e5354" }}
          className=" rounded-md bg-slate-400 w-full"
        >
          <div className="flex flex-col md:h-[450px] lg:h-96 justify-between items-center py-3">
            <div className="flex space-y-2 flex-col items-center">
              <img src={mern} className="w-16 h-16" alt="" />
              <h2 className="text-3xl font-bold text-slate-700">MERN Stack</h2>
            <p className="text-justify px-3">
              As a MERN stack developer, I specialize in crafting dynamic and
              responsive web applications using MongoDB, Express.js, React.js,
              and Node.js. With a keen eye for user-centric design and a strong
              foundation in both front-end and back-end technologies, I bring
              your ideas to life.
            </p>
            </div>
            <Link
              style={{ boxShadow: "2px 4px 16px #2e5354" }}
              to="contact"
              className="font-bold border-none hover:text-slate-800 bg-slate-600 rounded-md text-cyan-400 btn"
            >
              Contact me
            </Link>
          </div>
        </div>

        <div
          style={{ boxShadow: "2px 4px 16px #2e5354" }}
          className=" rounded-md bg-slate-400 w-full"
        >
          <div className="flex flex-col md:h-[450px] lg:h-96 justify-between items-center py-3">
            <div className="flex space-y-2 flex-col items-center">
              <img src={frontend} className="w-16 h-16 border border-slate-500" alt="" />
              <h2 className="text-3xl font-bold text-slate-700">Front End</h2>
            <p className="text-justify px-3">
              Transforming visions into captivating digital experiences! I'm a
              front-end wizard, weaving magic with HTML, CSS, and JavaScript.
              Elevate your brand with visually stunning and user-friendly
              interfaces. Let's bring your ideas to life in the digital realm!
            </p>
            </div>

            <Link
              style={{ boxShadow: "2px 4px 16px #2e5354" }}
              to="contact"
              className="font-bold border-none hover:text-slate-800 bg-slate-600 rounded-md text-cyan-400 btn"
            >
              Contact me
            </Link>
          </div>
        </div>
        <div
          style={{ boxShadow: "2px 4px 16px #2e5354" }}
          className=" rounded-md  bg-slate-400 w-full"
        >
          <div className="flex flex-col md:h-[450px] lg:h-96 justify-between items-center py-3">
            <div className="flex space-y-2 flex-col items-center">
              <img src={backend} className="w-16 h-16" alt="" />
              <h2 className="text-3xl font-bold text-slate-700">Back End</h2>
            <p className="text-justify px-3">
              Powerful solutions, seamless experiences. As a back-end developer,
              I specialize in crafting robust server-side architectures. From
              database design to API development, I ensure your applications run
              smoothly. Let's build a strong foundation for your digital
              success.
            </p>
            </div>
            <Link
              style={{ boxShadow: "2px 4px 16px #2e5354" }}
              to="contact"
              className="font-bold border-none hover:text-slate-800 bg-slate-600 rounded-md text-cyan-400 btn"
            >
              Contact me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
