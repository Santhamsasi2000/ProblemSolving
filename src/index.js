import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router";
import ScrollToTop from "./Components/ScrollToTop";
import ContactUs from "./Components/ContactUs/ContactUs";
import EasyNav from "./Components/NavBar/EasyNav";
import OurTeam from "./Components/About Us/OurTeam";
import Careers from "./Components/About Us/Careers";
import CaseStudies from "./Components/CaseStudies/CaseStudies";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ScrollToTop />
      <App/>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
