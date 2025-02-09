import "../../Styles/Careers.css";
import { BsPerson } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { NavLink } from "react-router";
import { CareerData } from "../../Data/CareerData";
const Careers = () => {
  return (
    <section className="p-3 p-sm-5 common-bg">
      <div className="page-title">CAREERS</div>
      <div className="mt-0 career-cards row gy-5">
       {
        CareerData.map(({id,department,skillCategories,qualification,description,vacancy,experience,location})=>(
           <div className="col-md-6">
              <div className="important-component card p-3 p-sm-5 border-0 rounded-5 w-100 h-100" key={id}>
                <p className="subtitle fs-4 mb-4">{department}</p>
                <p className="fw-semibold mb-2">Skill Required:</p>
                  <p className="justify-text">{skillCategories.join(", ")}</p>
                <div className="careers-list">
                  <p className="fw-semibold">Qualification:</p>
                  <p>{qualification}</p>
                </div>
                <div className="careers-list">
                  <p className="fw-semibold">Years Of Experience:</p>
                  <p>{experience}</p>
                </div>
                <p className="fw-semibold mb-2 justify-text">Description:</p>
                <p>{description}</p>
                <div className="career-icons d-flex gap-5 mt-3">
                  <p className="mb-4"><span className="career-icon px-2 pt-1 pb-2 fs-4"><IoLocationOutline /></span>{location}</p>
                  <p className="mb-5"><span className="career-icon px-2 pt-1 pb-2 fs-4"><BsPerson /></span>{vacancy}</p>
                </div>
                <NavLink to="/contact" className="form-btn">APPLY NOW</NavLink>
              </div>
           </div>
        ))
       }
      </div>
    </section>
  )
}

export default Careers
