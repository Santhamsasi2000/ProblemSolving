import { NavLink} from "react-router";
import { CaseStudiesData } from "../../Data/CaseStudiesData";
import "../../Styles/Casestudies.css";
const CaseStudies = () => {
  return (
    <section>
       <div className="page-title">CASE STUDIES</div>
       <div className="p-5 row gy-5 w-100">
       {
          CaseStudiesData.map(({id,image,title,link})=>(
          <div className="col-md-6" key={id}>
             <div className="card w-100 border-success border-5 h-100">
                <img src={image} alt="No-Image" className="casestudy-img"/>
                <p className="mt-4 fw-bold fs-4 mx-3">{title}</p>
                <NavLink to={link} className="btn common-btn fw-semibold m-2 fs-5">Read the CaseStudy</NavLink>
             </div>
          </div>
          ))
         } 
       </div>
    </section>
  )
}

export default CaseStudies