import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg py-4 px-5"
        style={{ backgroundColor: "#3B5D50" }}
      >
        {/* Logo */}
        <a href="" className="text-decoration-none px-5">
          <h2 className="text-light fw-bold" style={{ fontWeight: "400" }}>
            Furni.
          </h2>
        </a>

        {/* navbar toggler */}
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* nav menu */}
        <div className="navbar-collapse collapse" id="nav">
          <ul className="navbar-nav m-lg-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/shop" className="nav-link">
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/service" className="nav-link">
                Service
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/blog" className="nav-link">
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/signin" className="nav-link">
                Sign in
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/signup" className="nav-link">
                Create Account
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
