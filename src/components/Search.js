import React from "react";

const Search = ({ search, setSearch }) => {
  return (
    <div className="search">
      <h1>😎 Emoji Search 😎</h1>
      <form action="">
        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
