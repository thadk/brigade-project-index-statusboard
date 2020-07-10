import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

function Nav() {
  return (
    <nav role="navigation" aria-label="Main">
      <ul className="navigation__desktop">
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/brigades">Projects by Brigade</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
      <div className="navigation__mobile">
        <input type="checkbox" />
        <span />
        <span />
        <span />
        <ul>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/brigades">Projects by Brigade</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
