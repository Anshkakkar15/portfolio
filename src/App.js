import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/MainLayout/Navbar";
import About from "./Components/About/About";
import Resume from "./Components/Resume/Resume";
import Projects from "./Components/Projects/Projects";
import ContactUs from "./Components/ContactUs/ContactUs";
import Footer from "./Components/MainLayout/Footer";
// import Footer from "./Components/MainLayout/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route exact path="project" element={<Projects />} />
          <Route exact path="resume" element={<Resume />} />
          <Route exact path="contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
