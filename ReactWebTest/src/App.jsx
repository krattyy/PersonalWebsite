import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import MainPage from "./components/MainPage/MainPage";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Video from "./components/backgroundvideo/video";

function App() {
  return (
    <Router>
      <Video />
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/hakkimda" element={<About />} />
        <Route path="/portfolyo" element={<Portfolio />} />
        <Route path="/iletisim" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
