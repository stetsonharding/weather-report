import React from "react";

import "./Search.css";

export default function Search() {
  return (
    <main>
      <div className="search__container">
        <div className="search__title">
          <h1>5 day weather forcast</h1>
        </div>
        <input
          type="text"
          onChange=""
          placeholder="Find a weather report"
          value=""
        />
        <button>Search</button>
      </div>
    </main>
  );
}
