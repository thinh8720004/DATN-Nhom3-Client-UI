import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <a href className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" >Admin Panel</a>
      <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"/>
      <ul className="navbar-nav px-3">
        <li className="nav-item text-nowrap">
          <a className="nav-link" href>Sign out</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
