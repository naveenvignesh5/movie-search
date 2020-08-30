import React, { useState } from "react";

// libs
import { getItem } from "../../libs/storage";

import "./MovieCard.css";

const movie = {
  Title: "Titanic",
  Year: "1997",
  Rated: "PG-13",
  Released: "19 Dec 1997",
  Runtime: "194 min",
  Genre: "Drama, Romance",
  Director: "James Cameron",
  Writer: "James Cameron",
  Actors: "Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates",
  Plot:
    "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
  Language: "English, Swedish, Italian, French",
  Country: "USA, Mexico, Australia, Canada",
  Awards: "Won 11 Oscars. Another 113 wins & 83 nominations.",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
  Ratings: [
    {
      Source: "Internet Movie Database",
      Value: "7.8/10",
    },
    {
      Source: "Rotten Tomatoes",
      Value: "89%",
    },
    {
      Source: "Metacritic",
      Value: "75/100",
    },
  ],
  Metascore: "75",
  imdbRating: "7.8",
  imdbVotes: "1,022,060",
  imdbID: "tt0120338",
  Type: "movie",
  DVD: "10 Sep 2012",
  BoxOffice: "N/A",
  Production: "Paramount Pictures",
  Website: "N/A",
  Response: "True",
};

const isFavourite = (id) => {
  const favs = getItem("Fav") || [];
  return favs.includes(id);
};

export const MovieCard = () => {
  const [fav, setFav] = useState(movie && isFavourite(movie.imdbID));

  const toggleFav = () => {
    setFav((fav) => {
      let _fav = !fav;

      // if (_fav) {

      // } else {

      // }

      return !_fav;
    });
  };

  if (!movie) return <p>Loading...</p>;

  if (movie.Error) {
    return (
      <div className="card">
        <div className="card-content">
          <p className="has-text-danger has-text-centered has-text-weight-bold">
            {movie.Error}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">
          {movie.Title}&nbsp;
          <span className="has-text-weight-normal has-text-grey">
            ({movie.Year})
          </span>
        </p>
        <a
          onClick={toggleFav}
          className={`card-header-icon ${fav ? "is-active" : ""}`}
          aria-label="more options"
        >
          <span className="icon">
            <i className="fas fa-heart" aria-hidden="true" />
          </span>
        </a>
      </header>
      {movie.Poster && (
        <div className="card-image">
          <figure className="image">
            <img className="poster" src={movie.Poster} alt="poster" />
          </figure>
        </div>
      )}
      <div className="card-content">
        <div className="content">{movie.Plot}</div>
        <p>
          <strong>Rating:</strong> {movie.imdbRating}
        </p>
        <p>
          <strong>Released:</strong> {movie.Released}
        </p>
        <p>
          <strong>Director:</strong> {movie.Director}
        </p>
      </div>
    </div>
  );
};
