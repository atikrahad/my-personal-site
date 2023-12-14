/* eslint-disable react/jsx-no-target-blank */
import { Swiper, SwiperSlide } from "swiper/react";
import blogpic1 from "../assets/portfolio/blogsite/Screenshot_2.png";
import blogpic2 from "../assets/portfolio/blogsite/Screenshot_3.png";
import blogpic3 from "../assets/portfolio/blogsite/Screenshot_1.png";
import blogpic4 from "../assets/portfolio/blogsite/Screenshot_4.png";
import { Zoom, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/zoom";

const Blog = () => {
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
                src={blogpic1}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="md:swiper-zoom-container">
              <img
                className="md:h-96 "
                src={blogpic2}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="md:swiper-zoom-container">
              <img
                className="md:h-96 "
                src={blogpic3}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="md:swiper-zoom-container">
              <img
                className="md:h-96 "
                src={blogpic4}
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="flex pt-5 gap-5">
            <a href="https://blog-site-68835.web.app/" target="_blank"><button className="btn">Live Preview</button></a>
            <a href="https://github.com/atikrahad/write-article-clientside" target="_blank"><button className="btn">Fron End</button></a>
            <a href="https://github.com/atikrahad/write-article-server" target="_blank"><button className="btn">Back End</button></a>
        </div>
      </div>
      <div className=" md:absolute rounded-sm space-y-2 bg-slate-600 p-5 right-0 z-10 bottom-0 md:w-[45%] ">
        <h1 className="text-4xl text-white">Article writing site.</h1>
        <p className="text-cyan-400">
          This is a full stack article writing website. User can write article about programing, sport, health, and tour.
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
export default Blog;
