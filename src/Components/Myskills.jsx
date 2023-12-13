import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Frontend from "./Frontend";
import Headline from "../Shared/Headline";
import Backend from "./Backend";
import Otherskills from "./Otherskills";

const Myskills = () => {
  return (
    <div className="pt-20">
        <Headline subheading="My skills"></Headline>
      <Tabs className="w-[95%] md:w-[50%] mx-auto">
        <TabList className="text-center pb-10 flex justify-between items-center ">
          <Tab className="text-xl p-3   rounded-md text-cyan-400 font-bold cursor-pointer">Front End</Tab>
          <Tab className="text-xl p-3  rounded-md text-cyan-400 font-bold cursor-pointer">Back End</Tab>
          <Tab className="text-xl p-3  rounded-md text-cyan-400 font-bold cursor-pointer">Others</Tab>
        </TabList>

        <TabPanel>
          <h2 className=""><Frontend></Frontend></h2>
        </TabPanel>
        <TabPanel>
          <h2><Backend></Backend></h2>
        </TabPanel>
        <TabPanel>
          <h2><Otherskills></Otherskills></h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Myskills;
