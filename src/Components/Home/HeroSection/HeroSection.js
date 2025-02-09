import React from 'react';

const HeroSection = () => {
  return (
    <div 
      className="d-flex align-items-center justify-content-center text-white"
      style={{ 
        height: '75vh', 
        backgroundImage: "url('/Images/1.jpg')",
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        position: 'relative' 
      }}
    >
      {/* Overlay */}
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        backgroundColor: 'rgba(0, 0, 0, 0.5)' 
      }}></div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }} className="text-center">
        <h1 className="display-4 fw-bold">Empowering Businesses to Achieve Growth and Success</h1>
        <p className="lead">We provide tailored business solutions to help startups and established companies thrive in competitive markets.</p>
        <a href="#services" className="btn btn-success btn-lg mt-3">Get a Free Consultation</a>
      </div>
    </div>
  );
};

export default HeroSection;

