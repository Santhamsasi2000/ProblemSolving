import { SlLocationPin } from "react-icons/sl";
import { IoMailOpenOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import Direction from "./Direction";
import "./Location.css";

const Location = () => {
  return (
    <section className="contact">
      <div className="mb-5">
        <div className="">
          <p className="subtitle">Location</p>
          <div className="d-flex gap-3 mb-4 align-items-center">
            <i className="location-icons">
              <SlLocationPin />
            </i>
            <a
              href="https://www.google.com/maps/dir//Problem+Solving+Consultant+Service,+Divine+Square+F6,+Flyover,+Pollachi,+Mullupadi,+Tamil+Nadu+642001/@10.7608591,77.0200615,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x3ba84939d731406b:0xa8a867d4bd3b19ed!2m2!1d77.0200615!2d10.7608591!3e0?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="email text-decoration-none text-dark lh-lg"
            >
              <span>
                Divine Square F6, Flyover, Pollachi, Mullupadi, Tamil Nadu
                6420017
              </span>
            </a>
          </div>
          <div className="d-flex gap-3 mb-4 align-items-center">
            <i className="location-icons">
              <IoMailOpenOutline />
            </i>
            <a
              href={`mailto:problemsolving.consultancy1@gmail.com`}
              className="email text-decoration-none text-dark"
            >
              problemsolving.consultancy1@gmail.com
            </a>
          </div>
          <div className="d-flex gap-3 align-items-center mb-4">
            <i className="location-icons">
              <LuPhoneCall />
            </i>
            <a
              href={`tel:9361868543`}
              className="email text-decoration-none text-dark"
            >
              9361868543
            </a>
          </div>
        </div>
      </div>
      <Direction />
    </section>
  );
};

export default Location;
