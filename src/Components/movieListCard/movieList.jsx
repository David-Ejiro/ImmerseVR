import React from "react";
import "./movieList.css"

import img1 from "/src/assets/image 90.png";
import img3 from "/src/assets/image 81.png"; // girl svg for home page
import img4 from "/src/assets/image 93.png";
import img5 from "/src/assets/image 91.png";

const Movielist = () => {
    return (
      <div className="movieSlideContainer">
        <p className="slideTitle">New Movie</p>
        <ul className="movieSlide">
          <li>
            <img src={img1}></img>
          </li>
          <li>
            {/* <img src={img3}></img> */}
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
  export default Movielist;