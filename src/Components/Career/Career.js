import "../../Styles/Careers.css";
import { BsPerson } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { CareerTitle } from "../../Data/CareerData";
const Career = () => {
  return (
    <section className="">
      <div className="page-title">CAREERS</div>
      <div className="py-5 career-cards d-flex justify-content-center flex-wrap gap-5">
       {
        CareerTitle.map(({id,title,location,vacancy})=>(
            <div className="card border-0 rounded-5 d-flex flex-column justify-content-between h-100 p-5" key={id}>
            <p className="fw-bold fs-3 mb-4">{title}</p>
            <p className="mb-4 fs-5"><span className="me-3 career-icon px-2 pt-1 pb-2 rounded-circle fs-4"><IoLocationOutline /></span>{location}</p>
            <p className="mb-5 fs-5"><span className="me-3 career-icon px-2 pt-1 pb-2 rounded-circle fs-4"><BsPerson /></span>{vacancy}</p>
            <button className="btn common-btn fw-semibold">MORE DETAILS</button>
          </div>
        ))
       }
      </div>
    </section>
  )
}

export default Career
