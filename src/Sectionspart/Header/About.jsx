import img from "../../assets/banner/1.png"
const About = () => {
    return (
        <div id="about">
            <div style={{background: `linear-gradient(to bottom, rgba(0, 2, 25, .989), rgba(0, 2, 25, .989)), url(https://media.giphy.com/media/ccKEsBDAAQTrutQ9LA/giphy.gif)`, backgroundSize: "cover"}} className="min-h-screen ">
                <div className="flex gap-10 flex-col-reverse md:flex-row max-w-5xl mx-auto justify-between items-center">
                    <div className="space-y-4">
                        <h2 className="text-2xl text-orange-200 font-semibold">Thank You sir, for visit my profile.</h2>
                        <h1  className="text-4xl text-cyan-500 font-bold">I'm Atik Rahad.</h1>
                        <p className="text-slate-400">I'm a MERN stack web developer although I am comfortable as a Frontent developer. Rect and tailwind I have used in almost my all projects. But I'm learning Next.js, mongoose, MUI.</p>
                        <div className="flex flex-col md:flex-row gap-3">
                            <div style={{boxShadow: '2px 4px 16px #2e5354'}} className="bg-slate-600 w-[70%] md:w-full mx-auto p-3 rounded-md">
                                <h1 className="text-white text-center text-3xl">04+</h1>
                                <h3 className="text-cyan-200 text-center">Months of experiance</h3>
                            </div>
                            <div style={{boxShadow: '2px 4px 16px #2e5354'}} className="bg-slate-600 w-[70%] md:w-full mx-auto p-3 rounded-md">
                                <h1 className="text-white text-center text-3xl">05+</h1>
                                <h3 className="text-cyan-200 text-center">Total projects</h3>
                            </div>
                            
                        </div>
                    </div>
                    <div>
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
