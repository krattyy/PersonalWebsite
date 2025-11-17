import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import MainPage from "./components/MainPage/MainPage";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Video from "./components/backgroundvideo/video";
import QRGenerator from "./components/Portfolio/things/qr/QRGenerator";
import Weather from "./components/Portfolio/things/weatherapp/Weather";

function App() {
  return (
    <Router>
      <Video />
      <Navbar />
      <Routes>
        <Route path="/krattydevpage" element={<MainPage />} />
        <Route path="/krattydevpage/hakkimda" element={<About />} />
        <Route path="/krattydevpage/portfolyo" element={<Portfolio />} />
        <Route
          path="/krattydevpage/portfolyo/qrgenerator"
          element={<QRGenerator />}
        />
        <Route
          path="/krattydevpage/portfolyo/weatherapp"
          element={<Weather />}
        />
        <Route path="/krattydevpage/iletisim" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
