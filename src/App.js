import React, { useState, useEffect } from "react";
import Weather from "./components/weather/Weather";
import Search from "./components/search/Search";

export default function App() {
  const [weather, setWeather] = useState([]);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=new york&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;

  useEffect(() => {
    async function SearchWeather() {
      const response = await fetch(url);
      const result = await response.json();
      setWeather(result);
    }
    SearchWeather();
  }, [url]);

  console.log(weather.weather);

  return (
    <>
      <Search />
      <Weather />
    </>
  );
}
