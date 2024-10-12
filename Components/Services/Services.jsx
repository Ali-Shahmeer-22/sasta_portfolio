import React from 'react';
import './Services.css';
import logo from './2B.png';
// import  S_Data  from './Services'; // ✅ Named import

const Service = () => {
  return (
    <div className="services" id='services'>
      <div className="services-title">
        <h1>My Expertise</h1>
        <img src={logo} alt="theme" />
      </div>
      
    </div>
  );
};

export default Service;
