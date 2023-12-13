import Headline from "../../Shared/Headline";
import mern from "../../assets/services/mern.png"
import frontend from "../../assets/services/frontend.png"
import backend from "../../assets/services/backend.png"

const Services = () => {
  return (
    <div
      id="services"
      style={{
        background: `linear-gradient(to bottom, rgba(0, 2, 25, .985), rgba(0, 2, 25, .985)), url(https://media.giphy.com/media/ccKEsBDAAQTrutQ9LA/giphy.gif)`,
        backgroundSize: "cover",
      }}
      className="min-h-screen py-20"
    >
      <Headline subheading="What I offer" heading="Services"></Headline>
      <div className="max-w-5xl flex gap-5 flex-col w-[95%] md:w-full md:flex-row mx-auto">
        <div className="card rounded-md bg-base-100 shadow-xl">
          <div className="flex flex-col justify-between items-center p-8">
            <div className="flex flex-col items-center">
            <img src={mern} className="w-16" alt="" />
            <h2 className="card-title">MERN Stack</h2>
            </div>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="">
              <button className="btn btn-primary">Read more</button>
            </div>
          </div>
        </div>
        <div className="card rounded-md bg-base-100 shadow-xl">
          <div className="flex flex-col justify-between items-center p-8">
            <div className="flex flex-col items-center">
            <img src={frontend} className="w-16" alt="" />
            <h2 className="card-title">Front End</h2>
            </div>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="">
              <button className="btn btn-primary">Read more</button>
            </div>
          </div>
        </div>
        <div className="card rounded-md bg-base-100 shadow-xl">
          <div className="flex flex-col justify-between items-center p-8">
            <div className="flex flex-col items-center">
            <img src={backend} className="w-16" alt="" />
            <h2 className="card-title">Back End</h2>
            </div>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="">
              <button className="btn btn-primary">Read more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
