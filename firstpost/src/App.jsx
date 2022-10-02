import Nav from "./Components/Nav";
import "./App.css";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Pages/AllRoutes";
import Footer from "./Components/Footer";
import SideBar from "./Components/SideBar";
import Login from "./Components/Login";
import HamSide from "./Components/HamSide";


function App() {
  return (
    <div className="App">
      <div style={{ marginBottom: "20px" }}>
        {/* <HamSide /> */}
        <Nav />
        <Navbar />
        {/* < SliderShow slides={SliderData} /> */}
        <AllRoutes />
        <Login />
        <SideBar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
