import React, { useState, useContext } from 'react';
import './navbar.scss';
import { data1 } from './data';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowUp, MdMenu, MdClose } from 'react-icons/md';
import { ThemeContext } from '../../../Components/main/Theme/ThemeProvider';
import { FaSun, FaMoon } from 'react-icons/fa'; // Import sun and moon icons

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className='nav'>
        <div className='title'>
          {data1.map((props, index) => (
            <img src={props.img} alt='logo' className='logo' key={index} />
          ))}
          ModelKos
        </div>
        <div className='links'>
          <Link to='/' className='nav-link'>Home</Link>
          <Link to='/' className='nav-link'>Our Work<MdKeyboardArrowUp /></Link>
          <Link to='/about' className='nav-link'>About<MdKeyboardArrowUp /></Link>
          <Link to='/' className='nav-link'>Models<MdKeyboardArrowUp /></Link>
          <Link to='/' className='nav-link'>Academy<MdKeyboardArrowUp /></Link>
          <Link to='/' className='nav-link'>Blog</Link>
        </div>
        <div className='auth'>
          <Link to='/apply'>Apply now</Link>
          <Link to='/' className='signup'>Contacts</Link>
        </div>
        <div className='theme-toggle'>
          <button onClick={toggleTheme} className="theme-button">
            {theme === 'light' ? <FaMoon /> : <FaSun />} {/* Display moon or sun icon */}
          </button>
        </div>
        <MdMenu className='hamburger' onClick={toggleMenu} />
        <div className={`mobile-menu ${isMenuOpen ? 'show' : ''}`}>
          <MdClose className='hamburger' onClick={toggleMenu} />
          <div className='mobile-links'>
            <Link to='/' onClick={toggleMenu}>Home</Link>
            <Link to='/' onClick={toggleMenu}>Our Work<MdKeyboardArrowUp /></Link>
            <Link to='/about' onClick={toggleMenu}>About<MdKeyboardArrowUp /></Link>
            <Link to='/' onClick={toggleMenu}>Models<MdKeyboardArrowUp /></Link>
            <Link to='/' onClick={toggleMenu}>Academy<MdKeyboardArrowUp /></Link>
            <Link to='/' onClick={toggleMenu}>Blog</Link>
          </div>
          <div className='mobile-auth'>
            <Link to='/apply' onClick={toggleMenu}>Apply now</Link>
            <Link to='/' className='signup' onClick={toggleMenu}>Contacts</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
