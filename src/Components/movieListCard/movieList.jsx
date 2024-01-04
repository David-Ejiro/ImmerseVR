import React, {useState} from "react";
import "./movieList.css"

import img3 from "/src/assets/image 81.png"; // girl svg for home page



const Movielist = () => {

  const [movies, setMovies] = useState([null]);


    return (

      <div className="movieSlideContainer">
        {movies.map((movieReq) => <MovieCard key={'9'}/>)}
      </div>
    );
  };
  export default Movielist;