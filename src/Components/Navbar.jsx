import React from 'react'
import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import '../Styles/Navbar.css'

const links = [
  { path: '/', text: 'Home' },
  { path: 'Categories', text: 'Categories' },
];

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
    };
  }, [dropdown]);

  return (
    <nav className="navbar">
    <ul className='navbarList'>
      {links.map((link) => {
        return (
          <li key={link.text} className='navbarPath'>
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        );
      })}
    </ul>
  </nav>
  );
};
export default Navbar;
