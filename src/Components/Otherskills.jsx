import html from "../assets/skills/html.png"
import css from "../assets/skills/css.png"
import js from "../assets/skills/js.png"
import react from "../assets/skills/react.png"
import tailwind from "../assets/skills/tailwind-css.svg"
const Otherskills = () => {
  return (
    <div>
      <div className="flex items-center gap-10">
        <label
          id="html"
          className="text-2xl md:w-[20%] font-semibold text-cyan-400"
        >
          <img src={html} className="w-20 h-16 p-1" alt="" />
        </label>
        <progress
          className="progress progress-success w-full"
          value={90}
          max="100"
          id="html"
        ></progress>
        <label id="html">90%</label>
      </div>
      <div className="flex items-center gap-10">
        <label
          id="html"
          className="text-2xl md:w-[20%] font-semibold text-cyan-400"
        >
          <img src={css} className="w-20 h-16 p-1" alt="" />
        </label>
        <progress
          className="progress progress-secondary w-full"
          value={80}
          max="100"
          id="html"
        ></progress>
        <label id="html">80%</label>
      </div>

      <div className="flex items-center gap-10">
        <label
          id="html"
          className="text-2xl md:w-[20%] font-semibold text-cyan-400"
        >
          <img src={tailwind} className="w-20 h-16 p-1" alt="" />
        </label>
        <progress
          className="progress progress-success w-full"
          value={85}
          max="100"
          id="html"
        ></progress>
        <label id="html">85%</label>
      </div>
      <div className="flex items-center gap-10">
        <label
          id="html"
          className="text-2xl md:w-[20%] font-semibold text-cyan-400"
        >
          <img src={js} className="w-20 h-16 p-1" alt="" />
        </label>
        <progress
          className="progress progress-success w-full"
          value={90}
          max="100"
          id="html"
        ></progress>
        <label id="html">90%</label>
      </div>
      <div className="flex items-center gap-10">
        <label
          id="html"
          className="text-2xl md:w-[20%] font-semibold text-cyan-400"
        >
          <img src={react} className="w-20 h-16 p-1" alt="" />
        </label>
        <progress
          className="progress progress-secondary w-full"
          value={80}
          max="100"
          id="html"
        ></progress>
        <label id="html">80%</label>
      </div>
    </div>
  );
};

export default Otherskills;
