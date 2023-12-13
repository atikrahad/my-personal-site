import node from "../assets/skills/nodejs.png"
import express from "../assets/skills/express.png"
import mongodb from "../assets/skills/mongodb.png"
const Backend = () => {
  return (
    <div>
      <div className="flex items-center gap-10">
        <label
          id="html"
          className="text-2xl md:w-[20%] font-semibold text-cyan-400"
        >
          <img src={node} className="w-20 h-16 p-1" alt="" />
        </label>
        <progress
          className="progress progress-success w-full"
          value={75}
          max="100"
          id="html"
        ></progress>
        <label id="html">75%</label>
      </div>
      <div className="flex items-center gap-10">
        <label
          id="html"
          className="text-2xl md:w-[20%] font-semibold text-cyan-400"
        >
          <img src={express} className="w-20 h-16 p-1" alt="" />
        </label>
        <progress
          className="progress progress-secondary w-full"
          value={70}
          max="100"
          id="html"
        ></progress>
        <label id="html">70%</label>
      </div>

      <div className="flex items-center gap-10">
        <label
          id="html"
          className="text-2xl md:w-[20%] font-semibold text-cyan-400"
        >
          <img src={mongodb} className="w-20 h-16 p-1" alt="" />
        </label>
        <progress
          className="progress progress-success w-full"
          value={70}
          max="100"
          id="html"
        ></progress>
        <label id="html">70%</label>
      </div>
      
    </div>
  );
};

export default Backend;
