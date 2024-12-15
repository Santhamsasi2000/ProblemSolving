import "../../Styles/Careers.css";
import { BsPerson } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { CareerTitle } from "../../Data/CareerData";
import { NavLink } from "react-router";
const Careers = () => {
  return (
    <section>
      <div className="page-title">CAREERS</div>
      <div className="common-bg mt-0 p-3 p-sm-5 career-cards row gy-5">
       {
        CareerTitle.map(({id,title,skill,qualification,experience,location,vacancy})=>(
           <div className="col-md-6">
              <div className="card p-5 border-0 rounded-5 w-100 h-100" key={id}>
                <p className="fw-bold fs-3 mb-4">{title}</p>
                <div className="careers-list">
                  <p className="fw-semibold">Skill Required:</p>
                  <p>{skill}</p>
                </div>
                <div className="careers-list">
                  <p className="fw-semibold">Qualification:</p>
                  <p>{qualification}</p>
                </div>
                <div className="careers-list">
                  <p className="fw-semibold">Years Of Experience:</p>
                  <p>{experience}</p>
                </div>
                <div className="career-icons d-flex gap-5 mt-3">
                  <p className="mb-4 fs-5"><span className="me-3 career-icon px-2 pt-1 pb-2 rounded-circle fs-4"><IoLocationOutline /></span>{location}</p>
                  <p className="mb-5 fs-5"><span className="me-3 career-icon px-2 pt-1 pb-2 rounded-circle fs-4"><BsPerson /></span>{vacancy}</p>
                </div>
                <NavLink to="/contact" className="btn btn-success">APPLY NOW</NavLink>
              </div>
           </div>
        ))
       }
      </div>
    </section>
  )
}

export default Careers
