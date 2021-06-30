import React, { useState } from "react";
import Weather from "../weather/Weather"

import "./Search.css";

export default function Search() {
  const [weather, setWeather] = useState([])
  const [stateSearched, setStateSearched] = useState("")
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${stateSearched}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;


async function getWeatherReport(e) {
  e.preventDefault();
  if (stateSearched === "") {
    alert("Add values");
  } else {
    const data = await fetch(
      url
    )
      .then((res) => res.json())
      .then((data) => data);

    setWeather( { data: data });
    setStateSearched("")
  }
}



  return (
    <main>
      <div className="search__container">
      <div className="search__title">
          <h1>Weather forcast</h1>
        </div>
        <form className="seach__form" onSubmit={(e) => getWeatherReport(e)}>
        <input
          type="text"
          onChange={(e) => setStateSearched(e.target.value)}
          placeholder="Search State"
          value={stateSearched}
        />
      <button className="search__button"><i className="fas fa-search search-icon"></i></button>
     
        </form>
      </div>

    {weather.data !== undefined ? (
     
      <Weather data={weather.data} />
     
    ) : null}
    </main>

    
  );
}
