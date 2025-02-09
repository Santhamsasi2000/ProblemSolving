import React from 'react'
import { ServicesData } from '../../Data/ServicesData'
import "../../Styles/Services.css";

const Services = () => {
  return (
    <section className='common-bg p-3 p-sm-5'>
      <div className="page-title mb-0 mb-md-5">SERVICES</div>
       <div className='row justify-content-md-around justify-content-center'>
       {
        ServicesData.map(({id,image,title,subtitle,desc})=>(
            <div className='col- col-md-5 mb-sm-5' key={id}>
                <p className='d-block d-md-none subtitle mt-4 order-2'>{title}</p>
                <img src={image} alt={title} className='service-img w-100 rounded-5 order-1'/>
                <p className='d-none d-md-block mt-4 order-2 subtitle mb-2'>{title}</p>
                <p className='fw-semibold mb-2 mt-3 mt-md-0'>{subtitle}</p>
                <p className='justify-text'>{desc}</p>
            </div>
        ))
       }
       </div>
    </section>
  )
}

export default Services
