import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  const [searchValue, setSearchValue] = useState("");

  function handleSearch(response) {
    console.log(response);
  }

  function search(event) {
    event.preventDefault();
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`)
      .then(handleSearch);
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
