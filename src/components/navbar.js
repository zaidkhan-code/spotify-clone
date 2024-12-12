import React from "react";
import "./navbar.css";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="main-nav">
      <div className="navbar">
        <div className="nav">
          <div className="nav-child">
            <img src={assets.arrow_left} alt="" onClick={() => navigate(-1)} />
          </div>
          <div className="nav-child">
            {" "}
            <img src={assets.arrow_right} alt="" onClick={() => navigate(1)} />
          </div>
        </div>
        <div className="nav-2">
          <p className="ok">Explore premium</p>
          <p className="install">Install App</p>
          <p className="g">G</p>
        </div>
      </div>
      <div className="main-2">
        <p className="all">All</p>
        <p className="music">Music</p>
        <p className="podcasts">Podcasts</p>
      </div>
    </div>
  );
}

export default Navbar;
