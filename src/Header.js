import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './CSS/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faGraduationCap, faAddressBook, faLayerGroup, faHandshake, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="horizontal-header">
      <nav className="horizontal-nav">
        
        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </div>

        <ul className={menuOpen ? 'active' : ''}>
          <li><Link to='/' onClick={toggleMenu}><FontAwesomeIcon icon={faHome} /> Home</Link></li>
          <li><Link to='/about' onClick={toggleMenu}><FontAwesomeIcon icon={faUser} /> About</Link></li>
          <li><Link to='/work' onClick={toggleMenu}><FontAwesomeIcon icon={faBriefcase} /> Work</Link></li>
          <li><Link to='/qualification' onClick={toggleMenu}><FontAwesomeIcon icon={faGraduationCap} /> Qualification</Link></li>
          <li><Link to='/contact' onClick={toggleMenu}><FontAwesomeIcon icon={faAddressBook} /> Contact</Link></li>
          <li><Link to='/skills' onClick={toggleMenu}><FontAwesomeIcon icon={faLayerGroup} /> Skills</Link></li>
          <li><Link to='/hire-me' onClick={toggleMenu}><FontAwesomeIcon icon={faHandshake} /> Hire Me</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
