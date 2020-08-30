import React, { useState } from "react";
import { SWRConfig } from "swr";

// pages
import { Home, Fav } from "./pages";

// components
import { Navbar } from "./components";

const fetcher = (...args) => fetch(...args).then((r) => r.json());

function App() {
  const [showFav, setShowFav] = useState(false);

  const toggleFav = () => {
    setShowFav((f) => !f);
  };

  return (
    <SWRConfig value={{ fetcher }}>
      <Navbar showFav={showFav} onItemPress={toggleFav} />
      {showFav ? <Fav /> : <Home />}
    </SWRConfig>
  );
}

export default App;
