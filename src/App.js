import { Routes, Route } from "react-router";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import Services from "./Components/Services/Services";
import CaseStudies from "./Components/CaseStudies/CaseStudies";
import Career from "./Components/Career/Career";
import FAQ from "./Pages/FAQ";
import CaseDesc1 from "./Components/CaseStudies/CaseDesc1";
import CaseDesc2 from "./Components/CaseStudies/CaseDesc2";
import CaseDesc3 from "./Components/CaseStudies/CaseDesc3";
import ScrollToTop from "./Components/ScrollToTop";
import ContactUs from "./Pages/ContactUs";

function App() {
  return (
    <>
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/casestudies" element={<CaseStudies />} />
        <Route path="/casestudy1" element={<CaseDesc1/>} />
        <Route path="/casestudy2" element={<CaseDesc2/>} />
        <Route path="/casestudy3" element={<CaseDesc3/>} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/contact" element={<ContactUs/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
