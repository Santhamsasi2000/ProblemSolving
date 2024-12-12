import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router';
import Services from './Components/Services/Services';
import Footer from './Components/Footer/Footer';
import Header from './Components/NavBar/Header';
import Career from './Components/Career/Career';
import OurTeam from './Components/About Us/OurTeam';
import CaseStudies from './Components/CaseStudies/CaseStudies';
import CaseSeparate from './Components/CaseStudies/CaseSeparate';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
     <React.StrictMode>
       {/* <CaseStudies/> */}
       <CaseSeparate/>
     </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
