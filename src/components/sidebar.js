import React from "react";
import "./sidebar.css";
import { assets } from "../assets/assets";
function Sidebar() {
  return (
    <div className="side-bar">
      <div className="first-bar">
        <div className="bar-first">
          <img src={assets.home_icon} alt="" />
          <p>Home</p>
        </div>
        <div className="bar-first">
          <img src={assets.search_icon} alt="" />
          <p>Search</p>
        </div>
      </div>
      <div className="second-bar">
        <div className="second-1">
          <div className="second-1-1">
            <img src={assets.stack_icon} alt="" />
            <p>Your Library</p>
          </div>
          <div className="second-1-2">
            <img src={assets.arrow_icon} alt="" />
            <img src={assets.plus_icon} alt="" />
          </div>
        </div>
        <div className="second-2">
          <div>Create your first playlist</div>
          <p>it's easy we will help</p>
          <button className="btn">Create playlist</button>
        </div>
        <div className="second-2">
          <div>Let's find some podcost</div>
          <p>we will keep you update on new podcost</p>
          <button className="btn">Browse podcost</button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
