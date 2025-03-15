import { LazyLoadImage } from "react-lazy-load-image-component";
import { NavLink } from "react-router";

const title = "Services Overview";
const serviceList = ["Spying Your Business","New Business Development","People Surveys","Manpower Supply",
  "Management Representative","Lean Training & Transformation","Lean Layout Preparation",
"Auditing Services","Website Development & Social Media Growth",
"Creative Expansion Strategies","Loan Assistance","Investment Facilitation"];
const serviceList2 = ["Lean Layout Preparation",
"Auditing Services","Website Development & Social Media Growth",
"Creative Expansion Strategies","Loan Assistance","Investment Facilitation"];

const ServicesHome = () => {
  return (
    <section className='p-3 p-sm-5 row justify-content-center mb-5 mb-sm-0 gx-0'>
      <div className='col-lg-4 order-2 order-lg-1'>
        <p className='subtitle text-start'>{title}</p>
        <div className="d-flex">
          <ul>
            {
              serviceList.map((service, index) => (
                <li key={index}>{service}</li>
              ))
            }
          </ul>
        </div>
        <NavLink to="/services" className="servicehome-btn">Find Out More</NavLink>
      </div>
      <div className='col-lg-8 order-1 order-lg-2 text-center'>
         <LazyLoadImage className="rounded w-100 common-border mb-4 mb-lg-0" src='/Images/SevicesHome.jpeg' alt='Best Smart Classroom School is Shanthi Rani' effect="blur" threshold={200}/>
      </div>
    </section>
  )
}

export default ServicesHome;
