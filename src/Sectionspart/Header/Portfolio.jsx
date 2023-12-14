import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Headline from "../../Shared/Headline";
import blog from "../../assets/portfolio/blogsite/Screenshot_3.png";
import brand from "../../assets/portfolio/brandsite/Screenshot_5.png";
import medical from "../../assets/portfolio/medicalcamp/Screenshot_10.png"
import Blog from "../../Projects/Blog";
import Brand from "../../Projects/Brand";
import Medical from "../../Projects/Medical";

const Portfolio = () => {
  return (
    <div
      id="portfolio"
      style={{
        background: `linear-gradient(to bottom, rgba(0, 2, 25, .985), rgba(0, 2, 25, .985)), url(https://media.giphy.com/media/ccKEsBDAAQTrutQ9LA/giphy.gif)`,
        backgroundSize: "cover",
      }}
      className="py-20"
    >
      <div>
        <Headline
          subheading="My recent projects"
          heading="Portfolio"
        ></Headline>
        <Tabs className="w-[95%] max-w-5xl md:w-[100%] mx-auto">
          <TabList className="text-center pb-10 flex flex-col md:flex-row justify-between items-center ">
            <Tab className="text-xl p-3   rounded-md text-cyan-400 font-bold cursor-pointer">
              <img src={blog} className="rounded-lg" alt="" />
              <h1>Article Writing site</h1>
            </Tab>
            <Tab className="text-xl p-3  rounded-md text-cyan-400 font-bold cursor-pointer">
              <img src={brand} className="rounded-lg" alt="" />
              <h1>Brand shop site</h1>
            </Tab>
            <Tab className="text-xl p-3  rounded-md text-cyan-400 font-bold cursor-pointer">
              <img src={medical} className="rounded-lg" alt="" />
              <h1>Medical camp site</h1>
            </Tab>
          </TabList>

          <TabPanel >
            <h2 className=""><Blog></Blog></h2>
          </TabPanel>
          <TabPanel>
            <h2><Brand></Brand></h2>
          </TabPanel>
          <TabPanel>
            <h2><Medical></Medical></h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Portfolio;
