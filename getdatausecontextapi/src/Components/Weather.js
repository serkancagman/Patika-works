import React from "react";
import WeatherContext from "../Context/WeatherContext";

export const Weather = () => {
  const { cityNames, city, cityHandler, weatherData, handleDays, getIcon } =
    React.useContext(WeatherContext);
   console.log(weatherData)
  return (
    <>
      <div className="container my-5">
        <div className="weatherMain text-dark">
          <select value={city} onChange={cityHandler}>
            {cityNames.map((allCityName, i) => {
              return <option key={i}>{allCityName.cityInner}</option>;
            })}
          </select>

          <div className="d-flex bg-light justify-content-center align-items-center my-3">


            {weatherData.map((weatherInner, i) => {
              return ( 
            
                  <div key={i} className="d-flex mx-1 flex-column align-items-center justify-content-center weatherArea">
                  <span className="dayName">{handleDays(weatherInner.dt)}</span>
                  <img src={getIcon(weatherInner.weather[0].icon)} alt="Loading" />
                  <p className="tempMain text-muted fs-4 my-2">{Math.floor(weatherInner.main.temp)}°C</p>
                  <p className="my-2">{weatherInner.weather[0].main}</p>
                  <div className="minMAx text-center">
                    <span> {Math.ceil(weatherInner.main.temp_max)}° </span>  
                    <span className="text-muted"> {Math.floor(weatherInner.main.temp_min)}°</span>
                  </div>
                </div>
              )
            })}

          </div>
        </div>
      </div>
    </>
  );
};
