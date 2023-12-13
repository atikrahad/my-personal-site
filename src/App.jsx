import "./App.css";
import About from "./Sectionspart/Header/About";
import Banner from "./Sectionspart/Header/Banner";
import Navber from "./Sectionspart/Header/Navber"

function App() {
  return (
    <div style={{ backgroundSize: "cover"}}>
      <Navber></Navber>
      <Banner></Banner>
      <About></About>
    </div>
  );
}

export default App;
