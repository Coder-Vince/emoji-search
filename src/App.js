import "./App.css";
import React, { useState } from "react";
import Search from "./components/Search";
import Line from "./components/Line";
import Footer from "./components/Footer";

function App() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <Search search={search} setSearch={setSearch} />
      <Line search={search} />
      <Footer />
    </div>
  );
}

export default App;
