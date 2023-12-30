import React from "react";
import img1 from "../assets/image 84.png";
import img3 from "../assets/image 91.png";
import img4 from "../assets/image 93.png";
import img5 from "../assets/image 94.png";
import svg1 from "../assets/home-line.svg";
import svg2 from "../assets/search-line.svg";

import "./Watch.css";

const Movielist = () => {
  return (
    <div className="movieSlideContainer">
      <p className="slideTitle">New Movie</p>
      <ul className="movieSlide">
        <li>
          <img src={img1}></img>
        </li>
        <li>
          <img src={img3}></img>
        </li>
        <li>
          <img src={img4}></img>
        </li>
        <li>
          <img src={img5}></img>
        </li>
      </ul>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <ul>
        <li>H</li>
        <li>P</li>
        <li>+</li>
        <li>C</li>
        <li>DL</li>
      </ul>
    </div>
  );
};
const Watch = () => {
  return (
    <div className="moviePage">
      <Navbar />
      <div className="searchBar">
        <form action="/search" method="get">
          <input
            type="text"
            id="search"
            name="q"
            placeholder="Search Movie"
          ></input>
          {/* <button type="submit">Search</button> */}
        </form>
      </div>

      <div className="immersePage">
      <h2>What would you like to watch?</h2>
        <Movielist />
        <Movielist />
      </div>
    </div>
  );
};
export default Watch;
