import React from 'react'
import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import style from '../Styles/Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

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
    <nav className={style.navbar}>
      <span className={style.BookstoreCMS}>Bookstore CMS</span>
      <ul className={style.list}>
      {links.map((link) => {
        return (
          <li key={link.text} className={style.BOOKS}>
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        );
      })}
    </ul>
    <div className={style.Oval}><FontAwesomeIcon icon={faUser} /></div>
  </nav>
  );
};
export default Navbar;
