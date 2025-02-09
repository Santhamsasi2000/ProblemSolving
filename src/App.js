import { Routes, Route } from "react-router";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Services from "./Components/Services/Services";
import CaseStudies from "./Components/CaseStudies/CaseStudies";
import FAQ from "./Components/FAQ/FAQ";
import ContactUs from "./Components/ContactUs/ContactUs";
import OurTeam from "./Components/About Us/OurTeam";
import Careers from "./Components/About Us/Careers";
import AboutUs from "./Components/About Us/AboutUs";
import EasyNav from "./Components/NavBar/EasyNav";
import EachStudy from "./Components/CaseStudies/EachStudy/EachStudy";
import { DataStudy } from "./Components/CaseStudies/EachStudy/DataStudy";
import Home from "./Components/Home/Home";

function App() {
  return (
    <>
      <EasyNav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/teams" element={<OurTeam />} />
        <Route path="/services" element={<Services />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        {DataStudy.map(({ id, link, ...rest }) => (
          <Route
            key={id}
            path={link}
            element={<EachStudy {...rest} />}
          />
        ))}
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
