import SocialMedia from './SocialMedia';
import "../../Styles/Footer.css";
import { SlLocationPin } from "react-icons/sl";
import { IoMailOpenOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <section className='footer px-5 py-5 row gy-4 gy-sm-5 justify-content-between'>
       <div className='col- col-sm-6 col-lg-3'>
        {/* <img className="footer-img rounded-circle" src='/Images/Home/Logo1.jpg' alt='No-Image'/> */}
        <p className='fw-bold fs-3 mb-1 mt-2'>ZERO</p>
        <p className='fw-semibold'>Problem Solving Consultant</p>
        <SocialMedia/>
       </div>
       <div className='col-6 col-lg-4 d-none d-sm-flex flex-column align-items-end align-items-center'>
            <div className='fw-semibold fs-5 d-flex flex-column align-items-start'>
              <p className='fw-bold fs-4 text-decoration-underline'>Quick Links</p>
              <NavLink className="footer-Links text-decoration-none mb-2" to="/services">Our Services</NavLink>
              <NavLink className="footer-Links text-decoration-none mb-2" to="/studies">Case Studies</NavLink>
              <NavLink className="footer-Links text-decoration-none mb-2" to="faq">General Customer Questions</NavLink>
              <NavLink className="footer-Links text-decoration-none mb-2" to="careers">Careers</NavLink>
              <NavLink className="footer-Links text-decoration-none mb-2" to="contact">Contact Us</NavLink>
            </div>
       </div>
       <div className='col- col-lg-5 col-xl-4'>
         <p className='fw-bold fs-4 text-decoration-underline d-none d-sm-block'>Contact Us</p>
         <div className="mb-2 d-flex gap-3 align-items-center">
          <i className="fs-1"><SlLocationPin /></i>
          <a href="https://www.google.com/maps/dir//XMJ8%2BGGX+Shanthi+Rani+Matric+Hr+Sec+School,+Kallal,+Tamil+Nadu+630305/@9.9813563,78.6637704,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x3b005f5226f2ccfb:0x67377686d48a4335!2m2!1d78.6663527!2d9.9813513!3e0?entry=ttu&g_ep=EgoyMDI0MTExNy4wIKXMDSoASAFQAw%3D%3D"
          target="_blank" 
          rel="noopener noreferrer" className="footer-Links text-decoration-none lh-lg fw-semibold"><span className="">Problem Solving Consultant Service, Divine Square F6, Flyover, Pollachi, Mullupadi, Tamil Nadu 642001</span></a>
         </div>
         <div className="mb-3 d-flex gap-3 align-items-center">
              <i className="fs-1"><IoMailOpenOutline /></i>
              <a href={`mailto:problemsolving.consultancy1@gmail.com`} className="footer-Links mt-1 text-decoration-none fw-semibold">problemsolving.consultancy1@gmail.com</a>
         </div>
         <div className="d-flex gap-3 align-items-center">
              <i className="fs-2"><LuPhoneCall /></i>
              <a  href={`tel:9361868543`} className="footer-Links ms-sm-2 text-decoration-none fw-semibold">9361868543</a>
         </div>
       </div>
    </section>
  ) 
}

export default Footer
