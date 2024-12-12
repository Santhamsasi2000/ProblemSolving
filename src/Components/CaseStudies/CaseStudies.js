import { CaseStudiesData } from "../../Data/CaseStudiesData";
import "../../Styles/Casestudies.css";
const CaseStudies = () => {
  return (
    <section>
       <div className="page-title">CASE STUDIES</div>
       <div className="p-5 row gy-5 w-100">
         {
          CaseStudiesData.map(({id,image,title})=>(
          <div className="col-6">
             <div className="p-1 card w-100" key={id}>
              <img src={image} alt="No-Image" className="casestudy-img"/>
              <p className="mt-4 fw-bold fs-4">{title}</p>
              <button className="btn common-btn fw-semibold">Read the CaseStudy</button>
             </div>
          </div>
          ))
         }
       </div>
    </section>
  )
}

export default CaseStudies
