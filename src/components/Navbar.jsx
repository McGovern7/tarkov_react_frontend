import { useRef } from 'react';
import { FaBars, FaHome, FaUserCog, FaUserPlus, FaWpforms } from 'react-icons/fa';
import {  } from "react-icons/fa";
import './components.css';


function Navbar() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <header>
      <h3 className='app-title'>Tarkov App</h3>
      <nav ref={navRef}>
        <a href="/home"><FaHome alt="" /> Home</a>
        <a href="/profile"><FaUserCog alt="" /> Profile</a>
        <a href="/register"><FaUserPlus alt="" /> Register</a>
        <a href="/protected"><FaWpforms alt="" /> Entries</a>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaBars />
        </button>
      </nav>

      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar
