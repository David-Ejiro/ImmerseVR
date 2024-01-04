import React, { useState, useEffect } from "react";
import MovieCard from "../movieCard/movieCard";
import "./movieList.css";

import img3 from "/src/assets/image 81.png"; // girl svg for home page

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?api_key=c52dd2eabf30a065e9530b26a4e48214";
const API_SEARCH =
  "https://api.themoviedb.org/3/movie/695721?api_key=c52dd2eabf30a065e9530b26a4e48214";

const Movielist = () => {
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
        console.log(movies.id);
      });
  }, []);

  const [movies, setMovies] = useState([]);
  // console.log(movies[2].id)
  return (
    <div className="movieSlideContainer">
      {movies.map((movieReq) => (
        <MovieCard key={movieReq.id} {...movieReq} />
      ))}
    </div>
  );
};
export default Movielist;
