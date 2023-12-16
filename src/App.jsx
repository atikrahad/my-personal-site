import "./App.css";

import Contact from "./Sectionspart/Contact";
import Footer from "./Sectionspart/Footer";
import About from "./Sectionspart/Header/About";
import Banner from "./Sectionspart/Header/Banner";
import Navber from "./Sectionspart/Header/Navber"
import Portfolio from "./Sectionspart/Header/Portfolio";
import Services from "./Sectionspart/Header/Services";

function App() {
  

  return (
    <div onMouseMove={()=>console.log()} style={{ backgroundSize: "cover"}}>
      <Navber></Navber>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
