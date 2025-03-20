import React from 'react';
import { Link } from "react-router-dom";
import './CSS/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faGraduationCap, faAddressBook, faLayerGroup, faHandshake } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header className="horizontal-header">
      <nav className="horizontal-nav">
        <ul>
          <li>
            <Link to='/'><FontAwesomeIcon icon={faHome} /> Home</Link>
          </li>
          <li>
            <Link to='/about'><FontAwesomeIcon icon={faUser} /> About</Link>
          </li>
          <li>
            <Link to='/work'><FontAwesomeIcon icon={faBriefcase} /> Work</Link>
          </li>
          <li>
            <Link to='/qualification'><FontAwesomeIcon icon={faGraduationCap} /> Qualification</Link>
          </li>
          <li>
            <Link to='/contact'><FontAwesomeIcon icon={faAddressBook} /> Contact</Link>
          </li>
          <li>
            <Link to='/skills'><FontAwesomeIcon icon={faLayerGroup} /> Skills</Link>
          </li>
          <li>
            <Link to='/hire-me'><FontAwesomeIcon icon={faHandshake} /> Hire Me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
