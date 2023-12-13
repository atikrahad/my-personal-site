import "./App.css";
import About from "./Sectionspart/Header/About";
import Banner from "./Sectionspart/Header/Banner";
import Navber from "./Sectionspart/Header/Navber"

function App() {
  return (
    <div id="app" style={{ backgroundSize: "cover"}}>
      <Navber></Navber>
      <Banner></Banner>
      <About></About>
    </div>
  );
}

export default App;
