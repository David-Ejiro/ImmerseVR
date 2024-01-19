import React from "react";
import "./movieCard.css";


function MovieCard({ poster_path, title, overview, vote_average }) {

  let imgSrc = `https://image.tmdb.org/t/p/original${poster_path}`;
  return (
    <div className="mv-card">
      <img src={imgSrc} alt="Movie Poster"></img>
      <div id="descr">
        <h3 className="hidden">{title}</h3>
        <p className="hidden">{overview}</p>
        <p className="hidden">Rating: {vote_average}</p>
      </div>
      <hr></hr>
    </div>
  );
}

export default MovieCard;
