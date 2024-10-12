import React from 'react';
// import arrow from './arrow.png';
import Navbar from '../Components/Navbar/Navbar';  // Ensure this path is correct
import Hero from '../Components/Hero/Hero';        // Verify this path too
import About from '../Components/About/About';     // Double-check for typos
import Services from '../Components/Services/Services'; 
import Work from '../Components/Work/Work';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import S_Data from './Services'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services/>
      <div className="services-container">
        {S_Data.map((service,index)=>{
          return <div key={index} className='services-format'>
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            <div className="services-readmore">
              <p>Read More</p>
              {/* <img src={arrow} alt="" /> */}
            </div>
          </div>
        })}
      </div>
      <Work/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default App;


