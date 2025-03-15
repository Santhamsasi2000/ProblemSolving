import { LazyLoadImage } from "react-lazy-load-image-component";
import { NavLink } from "react-router";

const para1 = "At Problem Solving Consultancy, we combine industry expertise with innovative strategies to help businesses overcome challenges and achieve sustainable growth. Our team of experienced consultants is dedicated to delivering results-driven solutions tailored to your needs.";
const AboutHome = () => {
  return (
    <section className='p-3 p-sm-5 row align-items-center justify-content-center gap-4 gx-0 mb-5 mb-sm-0'>
       <div className='col-lg-5 text-center'>
          <LazyLoadImage className="rounded w-100 homeabout-img" src='/Images/HomeAbout.jpg' alt='Near school in Kallal,Kalayarkovil' effect="blur" threshold={200}/>
       </div>
       <div className='col-lg-6'>
         <p className='abouthome-title mb-2'>About Us</p>
         <p className="lh-lg text-justify">{para1}</p>
         <NavLink to="/aboutus" className="abouthome-btn">Know More</NavLink>
       </div>
    </section>
  )
}

export default AboutHome;