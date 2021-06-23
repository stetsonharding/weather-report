import React from "react";

import "./Weather.css";

export default function Weather(props) {
const {data} = props

 const iconurl =`http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
 const temp = Math.trunc((( data.main.temp - 273.15) * 9/5) + 32)
//  const time = 
 
console.log(data)



  return (
    <section className="weather__container">
      <div className="weather__full-weather-report">
        <div className="weather__image">
          <img src={iconurl} alt="weather" />
        </div>
        <div className="weather__information">
          <p>{data.weather[0].description}</p>
          <p>Location: {data.name}</p>
          <p>Tempature: {temp} <sup>o</sup></p>
          <p>Humidity: {data.main.humidity}% </p>
          <p>Wind Speed: {data.wind.speed} Mps </p>
          {/* <p>Sunrise: {data.sys.} </p> */}
        </div>
      </div>
    </section>
  );
}
