import React from "react";
import "./movieCard.css";


function MovieCard({ poster_path, title, overview, vote_average }) {

  let imgSrc = `https://image.tmdb.org/t/p/original${poster_path}`;
  return (
    <div className="mv-card">
      <div>{title}</div>
      <img src={imgSrc}></img>
      <p className="hidden">{overview}</p>
      <p className="hidden">Rating: {vote_average}</p>
    </div>
  );
}

export default MovieCard;
