import React, { useState, useEffect } from "react";
import useSWR from "swr";

// components
import { Navbar, SearchBar, MovieCard } from "../components";

// api
import { API_URL } from "../config";

const Home = () => {
  const [showFav, setShowFav] = useState(false);

  const [query, setQuery] = useState({
    type: "",
    title: "",
  });

  const { data, error } = useSWR(
    `${API_URL}&type=${query.type}&t=${query.title}`
  );

  const toggleFavourite = () => {
    setShowFav((f) => !f);
  };

  useEffect(() => {
    console.log(JSON.stringify(data));
  }, [data]);

  return (
    <>
      <Navbar onItemPress={toggleFavourite} showFav={showFav} />
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
    </>
  );
};

export { Home };
