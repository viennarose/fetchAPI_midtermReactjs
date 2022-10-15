import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Navbar = ({ children }) => {
  return (
    <div>
      <nav className="navbar bg-dark">
        <div className="m-2 float-center">
          <h3 className="logo text-white px-5 m-2 float-center">DC 302: Reactjs Midterm Project</h3>
        </div>
        <div>
          <Link className="btn btn-outline-primary ms-3 btn-sm" to="/">Home</Link>
          <Link className="btn btn-outline-primary ms-3 btn-sm" to="/venues">Venues</Link>
          <Link className="btn btn-outline-primary ms-3 btn-sm" to="/blogs">Blogs</Link>
          <Link className="btn btn-outline-primary ms-3 btn-sm me-5" to="/about">About</Link>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Navbar;
