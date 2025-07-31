import React from 'react';

function WeatherDisplay({ city, weatherData }) {
  if (!weatherData) return null;

  const sunrise = new Date(weatherData.sunrise * 1000).toLocaleTimeString();
  const sunset = new Date(weatherData.sunset * 1000).toLocaleTimeString();

  return (
    <div id="weather" className="weather-info">
      <h2 key={city}>Weather for {city}</h2>
      <div className="weather-cards">

        <div className="card">
          <div className="card-content-left">
            <h3>Temperature</h3>
            <p className="value">{weatherData.temp}°C</p>
          </div>
          <div className="card-content-right">
            <p>Feels Like {weatherData.feels_like}°C</p>
            <p>Min Temperature is {weatherData.min_temp}°C</p>
            <p>Max Temperature is {weatherData.max_temp}°C</p>
            <button className="card-btn">Check more</button>
          </div>
        </div>

        <div className="card">
          <div className="card-content-left">
            <h3>Humidity Info</h3>
            <p className="value">{weatherData.humidity}%</p>
          </div>
          <div className="card-content-right">
            <p>Feels Like {weatherData.feels_like}°C</p>
            <p>Cloud Cover is {weatherData.cloud_pct}%</p>
            <p>Wind Speed is {weatherData.wind_speed} km/hr</p>
            <button className="card-btn">Details</button>
          </div>
        </div>

        <div className="card">
          <div className="card-content-left">
            <h3>Wind Speed</h3>
            <p className="value">{weatherData.wind_speed} km/hr</p>
          </div>
          <div className="card-content-right">
            <p>Wind Degree is {weatherData.wind_degrees}°</p>
            <p>Sunrise Time is {sunrise}</p>
            <p>Sunset Time is {sunset}</p>
            <button className="card-btn">More Info</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default WeatherDisplay;
