import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [searchValue, setSearchValue] = useState("");

  function search(event) {
    event.preventDefault();
  }

  function handleSearchValueChange(event) {
    setSearchValue(event.target.value);
  }

  return (
    <div className="dictionary">
      <h5 className="subtitle">Give meaning to words</h5>
      <form onSubmit={search}>
        <input
          type="search"
          onChange={handleSearchValueChange}
          className="search-input"
        />
      </form>
      <div>Searching for ... {searchValue}</div>
    </div>
  );
}
