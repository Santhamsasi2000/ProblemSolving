import React from 'react'
import { ServicesData } from '../../Data/ServicesData'
import "../../Styles/Services.css";

const Services = () => {
  return (
    <section className='service'>
      <div className="page-title">SERVICES</div>
       <div className='common-bg p-4 p-sm-5 row justify-content-md-around justify-content-center'>
       {
        ServicesData.map(({id,image,title,subtitle,desc})=>(
            <div className='col- col-md-5 mb-sm-5' key={id}>
                <p className='d-block d-md-none fw-bold fs-3 mt-4 order-2'>{id}) {title}</p>
                <img src={image} alt={title} className='service-img w-100 rounded-5 order-1'/>
                <p className='d-none d-md-block fw-bold fs-3 mt-4 order-2'>{title}</p>
                <p className='fw-semibold fs-5 mb-2 mt-3 mt-md-0'>{subtitle}</p>
                <p className='fs-5'>{desc}</p>
            </div>
        ))
       }
       </div>
    </section>
  )
}

export default Services
