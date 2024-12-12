import React from 'react';
import "../../Styles/Header.css";
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <section className='header d-flex flex-column flex-sm-row align-items-center justify-content-around'>
      <div className='d-flex align-items-center justify-content-center gap-2'>
        {/* <img className="header-img" src='/Images/Home/Logo1.jpg' alt='No-Image'/> */}
        <div className='mt-2'>
          <p className='fw-semibold mb-1'>Problem Solving</p>
          <p className='fw-semibold mb-1'>Consultant Service</p>
        </div>
      </div>
      <NavLink to="/admissionform" className='btn btn-dark py-2 px-3 fw-semibold rounded-pill border-0 text-decoration-none'>BOOK CONSULTATION</NavLink>
    </section>
  )
}

export default Header;
