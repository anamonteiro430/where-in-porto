import React from "react";
import logo from "./../images/logo.svg";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <Link to={`/`} className="logo-link">
            {/* <img src={logo} width='250' className='logo' alt='logo' /> */}
            <h3>whereinPorto</h3>
          </Link>
        </div>
        <div className="menu-links">
          <Link to={`/food`}>Food</Link>
          <Link to={`/stay`}>Stay</Link>
          <Link to={`/visit`}>Visit</Link>
          <Link to={`/nightlife`}>Nightlife</Link>
          <Link to={`/activities`}>Activities</Link>
          <Link to={`/stores`}>Stores</Link>
          <Link to={`/contactus`}>Contact</Link>
        </div>
      </nav>
      <div className="second-nav">s</div>
    </>
  );
};
