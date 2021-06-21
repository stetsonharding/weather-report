import React from "react";

import "./Weather.css";

export default function Weather(props) {
  return (
    <section className="weather__container">
      <main className="weather__full-weather-report">
        <div className="weather__information">
          <h2>Day of week</h2>
          <p>Date</p>
        </div>
        <div className="weather__image">
          <img src="" alt="weather" />
        </div>
        <div className="weather__information">
          <p>Dagrees</p>
          <p>Kind of weather</p>
        </div>
      </main>
    </section>
  );
}
