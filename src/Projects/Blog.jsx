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
    <div className="flex relative justify-between">
      <div className="w-[70%]">
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
            <div className="swiper-zoom-container">
              <img
                className="h-96 "
                src={blogpic1}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="swiper-zoom-container">
              <img
                className="h-96 "
                src={blogpic2}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="swiper-zoom-container">
              <img
                className="h-96 "
                src={blogpic3}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="swiper-zoom-container">
              <img
                className="h-96 "
                src={blogpic4}
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="absolute bg-slate-800 p-5 right-0 z-10 top-1/3 w-[45%] bg-opacity-70">
        <h1 className="text-4xl text-white">Article writing site.</h1>
        <p className="text-slate-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          laudantium officia debitis ullam ipsa ut architecto expedita, eius
          tempore impedit mollitia temporibus sunt delectus doloremque, totam
          qui aliquam ab aliquid. Soluta perspiciatis veritatis ipsum nisi
          natus, a nulla libero. Expedita quos obcaecati voluptates ullam amet
          pariatur quas qui distinctio reiciendis.
        </p>
        <div className="flex gap-5">
            <a href=""><button className="btn">Live Preview</button></a>
            <a href=""><button className="btn">Fron End</button></a>
            <a href=""><button className="btn">Back End</button></a>
        </div>
      </div>
    </div>
  );
};
export default Blog;
