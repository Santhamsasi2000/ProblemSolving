import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router";
import Services from "./Components/Services/Services";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/NavBar/Header";
import OurTeam from "./Components/About Us/OurTeam";
import CaseStudies from "./Components/CaseStudies/CaseStudies";
import CaseSeparate from "./Components/CaseStudies/CaseDesc1";
import CaseDesc1 from "./Components/CaseStudies/CaseDesc1";
import CaseDesc2 from "./Components/CaseStudies/CaseDesc2";
import ContactUs from "./Pages/ContactUs";
import Menus from "./Components/NavBar/Menus";
import ScrollToTop from "./Components/ScrollToTop";
import Careers from "./Components/About Us/Careers";
import AboutUs from "./Components/About Us/AboutUs";
import FAQ from "./Pages/FAQ";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ScrollToTop />
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
