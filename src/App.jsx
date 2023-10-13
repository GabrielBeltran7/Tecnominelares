import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./Views/Home/Home";
import Contactenos from "./Views/Contactenos/Contactenos";
import Footer from "./components/Footer/Footer";
import Servicios from "./Views/Servicios/Servicios";
import AboutUs from "./Views/About Us/AboutUs";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactenos" element={<Contactenos />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/sobrenosotros" element={<AboutUs />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
