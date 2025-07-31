import React, { useState } from 'react';

function Navbar({ startApp, resetWeather, className }) {
  const [cityInput, setCityInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cityInput.trim() !== "") {
      startApp(cityInput);
      setCityInput("");
    }
  };

  return (
    <nav id="navbar" className={className}>
      <div id="logo" onClick={resetWeather}>Weather App</div>
      
      <form id="getWeather" onSubmit={handleSubmit} className={className}>
        <input
          id="cityInput"
          type="text"
          placeholder="Enter city"
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
        />
        <button id="fetchWeather" type="submit">Get Weather</button>
      </form>
    </nav>
  );
}

export default Navbar;
