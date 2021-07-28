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

        <div className="weather__location-container">
        <p  className="weather__temp"> {temp} <span>&#176;</span></p>
          <p className="weather__location">{data.name}</p>
        </div>
 
        <div className="weather__image-container">
          <img src={iconurl} alt="weather" className="weather__image" />
          <p>{data.weather[0].description}</p>
          
        </div>

        {/* <div className="weather__information">
          <p>Humidity: {data.main.humidity}% </p>
          <p>Wind Speed: {data.wind.speed} Mps </p>
        </div>  */}
      </div>
    </section>
  );
}
