import { useRef, useState } from 'react';
import './Navbar.css';
import logo from './logo.png';
import AnchorLink from 'react-anchor-link-smooth-scroll'; // Ensure correct import
import { IoMdMenu } from "react-icons/io";
// import { IoCloseSharp } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Navbar = () => {
  const [Menu, setMenu] = useState("home");
  const menuRef=useRef();

  const openMenu=()=>{
    menuRef.current.style.right="0";
  }
  const closeMenu=()=>{
    menuRef.current.style.right="-350px";
  }
  
  return (
    <div className="navbar">
      <img className="image" src={logo} alt="Logo" />
      <span className='nav-mob-open' onClick={openMenu}><IoMdMenu /></span>
      <ul ref={menuRef} className="nav-menu">
        <span className="nav-mob-close" onClick={closeMenu}><IoIosCloseCircleOutline /></span>
        <li>
          <AnchorLink 
            className='anchor-link'
            href="#home" 
            onClick={() => setMenu('home')}
          >
            Home
          </AnchorLink>
        </li>
        <li>
          <AnchorLink 
            className="anchor-link" 
            offset={50} 
            href="#about" 
            onClick={() => setMenu('about')}
          >
            About Me
          </AnchorLink>
        </li>
        <li>
          <AnchorLink 
            className="anchor-link" 
            offset={50} 
            href="#services" 
            onClick={() => setMenu('services')}
          >
            Services
          </AnchorLink>
        </li>
        <li>
          <AnchorLink 
            className="anchor-link" 
            offset={50} 
            href="#work" 
            onClick={() => setMenu('work')}
          >
            Portfolio
          </AnchorLink>
        </li>
        <li>
          <AnchorLink 
            className="anchor-link" 
            offset={50} 
            href="#contact" 
            onClick={() => setMenu('contact')}
          >
            Contact
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect">
      <AnchorLink 
            className="anchor-link" 
            offset={50} 
            href="#contact" 
            onClick={() => setMenu('contact')}
          >
             Connect with me
          </AnchorLink>
      </div>
    </div>
  );
}

export default Navbar;
