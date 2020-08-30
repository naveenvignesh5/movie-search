import React, { useState } from "react";
import { MovieCard } from "../components";
import useSWR from "swr";
import { API_URL } from "../config";
import { getItem } from "../libs/storage";

export const Fav = () => {
  const favs = getItem("Fav") || [];

  const [id, setId] = useState(favs[0] ? favs[0].id : "");

  const url = `${API_URL}&i=${id}`;

  const { data } = useSWR(url);

  if (favs.length === 0) {
    return (
      <section className="section">
        <div className="container">
          <p className="has-text-info has-text-weight-bold">
            No favourites marked.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <p className="title is-3 has-text-info">Favourites</p>
            {favs.map((obj) => (
              <>
                <a
                  key={obj.id}
                  className="title is-5"
                  onClick={() => setId(obj.id)}
                >
                  {obj.title}
                </a>
                <div style={{ marginBottom: 20 }} />
              </>
            ))}
          </div>
          <div className="column">
            <MovieCard movie={data} />
          </div>
        </div>
      </div>
    </section>
  );
};
