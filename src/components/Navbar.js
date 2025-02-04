import React from "react";
import PropTypes from "prop-types";
import {useLocation, Link } from "react-router-dom";

export default function Navbar(props) {
  const location = useLocation();
  return (
    <>
    <nav className={`navbar  navbar-dark navbar-expand-lg  sticky-top ${props.mode === "Dark" ? "my-nav-d" : "my-nav-l"}`}>
      <div className="container-fluid">
        <Link className={`navbar-brand ${props.mode === "Dark" ? "navbar-brand-d" : "navbar-brand-l"}`} to="/" >
          {props.title}
        </Link>

        <button
          className={`navbar-toggler ${props.mode === "Dark" ? "navbar-toggler-d" : "navbar-toggler-l"}` }
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        <svg className={` navbar-toggler-icon  ${props.mode === "Dark" ? "navbar-toggler-icon-d" : "navbar-toggler-icon-l"} `} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> 
         {/* <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
         <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  m-sm-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
               className={`nav-link ${props.mode === "Dark" ? "nav-link-d" : "nav-link-l"} ${location.pathname === "/textanaylzer/" ? (props.mode === "Dark" ? "active-d" : "active-l") : ""}`}
                aria-current="page"
                to="/textanaylzer/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item ">
              <Link className={`nav-link ${props.mode === "Dark" ? "nav-link-d" : "nav-link-l"} ${location.pathname === "/about" ? (props.mode === "Dark" ? "active-d" : "active-l") : ""}`} to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>

          <div className="toggle">
           <label className="ui-switch">
          <input onClick={props.togglemode} type="checkbox"/>
         <div className="slider">
        <div className="circle"></div>
       </div>
       </label>

         
          </div>
        </div>
      </div>
    </nav>
    
  
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};


