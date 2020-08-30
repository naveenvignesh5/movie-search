import React, { useState } from "react";
import { Navbar } from "../components";

const Home = () => {
  const [showFav, setShowFav] = useState(false);

  const toggleFavourite = () => {
    setShowFav((f) => !f);
  };

  return (
    <>
      <Navbar onItemPress={toggleFavourite} showFav={showFav} />

      {showFav ? (
        <section className="section">Favourite Page</section>
      ) : (
        <section className="section">Home Page</section>
      )}
    </>
  );
};

export { Home };
