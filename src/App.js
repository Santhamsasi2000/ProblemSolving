import {Routes, Route } from 'react-router';
import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import Services from './Components/Services/Services';
import CaseStudies from './Components/CaseStudies/CaseStudies';
import Contact from './Pages/Contact';
import Career from './Components/Career/Career';
import FAQ from './Pages/FAQ';

function App() {
  return (
    <>
     <Navbar/>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/studies' element={<CaseStudies/>}/>
        <Route path='/faq' element={<FAQ/>}/>
        <Route path='/careers' element={<Career/>}/>
        <Route path='/contact' element={<Contact/>}/>
     </Routes>
     <Footer/>
    </>
  );
}

export default App;
