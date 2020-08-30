import React, { useState } from "react";
import useSWR from "swr";

// components
import { SearchBar, MovieCard } from "../components";

// api
import { API_URL, DEFAULT_MOVIE } from "../config";

const Home = () => {
  const [query, setQuery] = useState({
    type: "",
    title: DEFAULT_MOVIE,
  });

  const url = `${API_URL}&type=${query.type}&t=${query.title}`;

  const { data } = useSWR(url);

  return (
    <section className="section">
      <div className="container">
        <SearchBar
          placeholder="Type a movie"
          defaultValue={DEFAULT_MOVIE}
          onSearch={(q) => setQuery(q)}
        />
        <br />
        <div className="columns">
          <div className="column is-6">
            <MovieCard movie={data} />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Home };
