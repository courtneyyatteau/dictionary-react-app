import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  function handleSearch(response) {
    console.log(response.data[0]);
    setSearchResults(response.data[0]);
    //response.data[0].meanings[0].definitions[0].definition
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

  if (searchResults) {
    return (
      <div className="dictionary">
        <form onSubmit={search}>
          <input
            type="search"
            onChange={handleSearchValueChange}
            className="search-input"
            placeholder="Search for a new word... 🔍︎"
          />
        </form>
        <Results results={searchResults} />
      </div>
    );
  } else {
    return (
      <div className="dictionary">
        <div className="title">English Dictionary</div>
        <h5 className="subtitle">Give meaning to words</h5>
        <form onSubmit={search}>
          <input
            type="search"
            onChange={handleSearchValueChange}
            className="search-input"
            placeholder="Search for a word... 🔍︎"
          />
        </form>
      </div>
    );
  }
}
