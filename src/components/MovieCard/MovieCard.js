import React, { useState } from "react";

// libs
import { getItem, setItem } from "../../libs/storage";

// movies
import "./MovieCard.css";

export const MovieCard = ({ movie }) => {
  if (!movie)
    return (
      <p className="has-text-centered has-text-weight-bold has-text-black">
        Loading...
      </p>
    );

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

  return <MovieCardContent movie={movie} />;
};

export const MovieCardContent = ({ movie }) => {
  const isFavourite = (id) => {
    const favs = getItem("Fav") || [];

    const favIds = favs.map((o) => o.id);

    return favIds.includes(id);
  };

  const [fav, setFav] = useState(movie && isFavourite(movie.imdbID));

  const addFav = () => {
    const favs = getItem("Fav") || [];

    favs.push({ id: movie.imdbID, title: movie.Title });

    setItem("Fav", favs);
  };

  const removeFav = () => {
    let favs = getItem("Fav") || [];

    if (favs.length === 0) return;

    favs = favs.filter((o) => o.id !== movie.imdbID);

    setItem("Fav", favs);
  };

  const toggleFav = () => {
    setFav((fav) => {
      let _fav = !fav;

      if (_fav) {
        addFav();
      } else {
        removeFav();
      }

      return _fav;
    });
  };

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
