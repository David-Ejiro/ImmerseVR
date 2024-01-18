import React from "react";
import "./navBar.css"
import homeicon from "../../assets/home-icon.png"
import playicon from "../../assets/play.png"
import streamicon from "../../assets/stream.png"
import downloadicon from "../../assets/download.png"
import plusicon from "../../assets/plus.png"


const Navbar = () => {
    return (
      <div className="navbarContainer">
        <ul>
          <li><img src={homeicon}></img></li>
          <li><img src={playicon}></img></li>
          <li><img src={plusicon}></img></li>
          <li><img src={streamicon}></img></li>
          <li><img src={downloadicon}></img></li>
        </ul>
      </div>
    );
  };

  export default Navbar;