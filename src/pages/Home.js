import React, { useState } from "react";
import useSWR from "swr";

// components
import { SearchBar, MovieCard } from "../components";

// api
import { API_URL } from "../config";

const Home = () => {
  const [query, setQuery] = useState({
    type: "",
    title: "",
  });

  const url = `${API_URL}&type=${query.type}&t=${query.title}`;

  const { data } = useSWR(url);

  return (
    <section className="section">
      <div className="container">
        <SearchBar onSearch={(q) => setQuery(q)} />
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
