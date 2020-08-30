import React from "react";
import { SWRConfig } from "swr";

import { Home } from "./pages";

const fetcher = (...args) => fetch(...args).then((r) => r.json());

function App() {
  return (
    <SWRConfig value={{ fetcher }}>
      <Home />
    </SWRConfig>
  );
}

export default App;
