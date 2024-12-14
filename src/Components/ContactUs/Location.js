import { SlLocationPin } from "react-icons/sl";
import { IoMailOpenOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import Direction from "./Direction";

const Location = () => {
  return (
    <section className='contact'>
      <div className="mb-5">
        <div className="">
          <p className="fw-bold fs-4 title mb-0">PROBLEM SOLVING</p>
          <p className="fw-semibold title">CONSULTANT SERVICE</p>
          <div className="d-flex gap-3 mb-4 align-items-center">
            <i className="fs-2 border border-0 text-primary bg-primary bg-opacity-10 p-3 rounded"><SlLocationPin /></i>
            <a href="https://maps.app.goo.gl/XvnSZMZZacdKTBnw5"
          target="_blank" 
          rel="noopener noreferrer" className="email text-decoration-none text-secondary lh-lg fw-semibold"><span>Divine Square F6, Flyover, Pollachi, Mullupadi, Tamil Nadu 6420017</span></a>
            
          </div>
          <div className="d-flex gap-3 mb-4 align-items-center">
            <i className="fs-2 border border-0 text-primary bg-primary bg-opacity-10 p-3 rounded"><IoMailOpenOutline /></i>
            <a href={`mailto:problemsolving.consultancy1@gmail.com`} className="email text-secondary text-decoration-none fw-semibold">problemsolving.consultancy1@gmail.com</a>
          </div>
          <div className="d-flex gap-3 align-items-center mb-4">
            <i className="fs-3 border border-0 text-primary bg-primary bg-opacity-10 p-3 rounded"><LuPhoneCall /></i>
            <a  href={`tel:9361868543`} className="email text-secondary text-decoration-none fw-semibold">9361868543</a>
          </div>
        </div>
      </div>  
      <Direction/>
    </section>
  )
}

export default Location
