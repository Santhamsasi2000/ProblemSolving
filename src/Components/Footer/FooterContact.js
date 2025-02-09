import { SlLocationPin } from "react-icons/sl";
import { IoMailOpenOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
const FooterContact = () => {
  return (
    <div>
       <p className='fw-bold fs-4'>Contact Us</p>
         <div className="mb-2 d-flex gap-3 align-items-center">
          <i className="fs-2"><SlLocationPin /></i>
          <a href="https://www.google.com/maps/dir//Divine+Square+F6,+Flyover,+Pollachi,+Mullupadi,+Tamil+Nadu+642001/@10.7608482,76.9376596,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba84939d731406b:0xa8a867d4bd3b19ed!2m2!1d77.0200615!2d10.7608591?hl=en-IN&entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D"
          target="_blank" 
          rel="noopener noreferrer" className="footer-Links text-decoration-none">Problem Solving Consultant Service, Divine Square F6, Flyover, Pollachi, Mullupadi, Tamil Nadu 642001</a>
         </div>
         <div className="mb-3 d-flex gap-3 align-items-center">
              <i className="fs-2"><IoMailOpenOutline /></i>
              <a href={`mailto:problemsolving.consultancy1@gmail.com`} className="footer-Links mt-1 text-decoration-none">problemsolving.consultancy1@gmail.com</a>
         </div>
         <div className="d-flex gap-3 align-items-center">
              <i className="fs-3"><LuPhoneCall /></i>
              <a  href={`tel:9361868543`} className="footer-Links ms-sm-2 text-decoration-none">9361868543</a>
         </div>
    </div>
  )
}

export default FooterContact
