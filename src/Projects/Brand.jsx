import { Swiper, SwiperSlide } from "swiper/react";
import brandpic1 from "../assets/portfolio/brandsite/Screenshot_5.png";
import brandpic2 from "../assets/portfolio/brandsite/Screenshot_6.png";
import brandpic3 from "../assets/portfolio/brandsite/Screenshot_7.png";
import brandpic4 from "../assets/portfolio/brandsite/Screenshot_8.png";
import brandpic5 from "../assets/portfolio/brandsite/Screenshot_9.png";
import { Zoom, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/zoom";

const Brand = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse relative md:justify-between">
      <div className="md:w-[70%]">
        <Swiper
          className=""
          zoom={true}
          loop={true}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          modules={[Zoom, Autoplay]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="md:swiper-zoom-container">
              <img
                className="md:h-96 "
                src={brandpic1}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="md:swiper-zoom-container">
              <img
                className="md:h-96 "
                src={brandpic2}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="md:swiper-zoom-container">
              <img
                className="md:h-96 "
                src={brandpic3}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="md:swiper-zoom-container">
              <img
                className="md:h-96 "
                src={brandpic4}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="md:swiper-zoom-container">
              <img
                className="md:h-96 "
                src={brandpic5}
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="flex pt-5 gap-5">
            <a href=""><button className="btn">Live Preview</button></a>
            <a href=""><button className="btn">Fron End</button></a>
            <a href=""><button className="btn">Back End</button></a>
        </div>
      </div>
      <div className=" md:absolute rounded-sm space-y-2 bg-slate-600 p-5 right-0 z-10 bottom-0 md:w-[45%] ">
        <h1 className="text-4xl text-white">Brand shop website.</h1>
        <p className="text-cyan-400">
          This is a full stack brand item shoping site. User can add products with this brsnds like apple, google, samsung, redmi, sony, intel.
        </p>
          <ul className="text-slate-200" style={{listStyle: 'initial'}}>
            <li className="list-inside">For read and write article must register or login.</li>
            <li className="list-inside">Only user can read and write article.</li>
            <li className="list-inside">User can comment although can't comment in own article.</li>
            <li className="list-inside">User can select article for read later in wishlist.</li>
          </ul>
        
      </div>
    </div>
  );
};
export default Brand;
