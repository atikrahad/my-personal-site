import "./App.css";
import About from "./Sectionspart/Header/About";
import Banner from "./Sectionspart/Header/Banner";
import Navber from "./Sectionspart/Header/Navber"
import Services from "./Sectionspart/Header/Services";

function App() {
  return (
    <div style={{ backgroundSize: "cover"}}>
      <Navber></Navber>
      <Banner></Banner>
      <About></About>
      <Services></Services>
    </div>
  );
}

export default App;
