import React from "react";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="results">
        <h2>{props.results.word}</h2>
        <div>
          {props.results.meanings.map(function (meaning, index) {
            return meaning.definitions[0].definition;
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
