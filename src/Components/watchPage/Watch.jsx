import React from "react";

import Movielist from "../movieListCard/movieList";
import Navbar
 from "../navBar/navBar";
// import svg1 from "src/assets/home-line.svg";
// import svg2 from "src/assets/search-line.svg";

import "./Watch.css";



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
