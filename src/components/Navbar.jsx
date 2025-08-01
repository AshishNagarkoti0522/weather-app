import React, { useState } from 'react';

function Navbar({ startApp, resetWeather, className }) {
  const [cityInput, setCityInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cityInput.trim() !== "") {
      startApp(cityInput);
      setCityInput("");

      setTimeout(() => {
        const main = document.querySelector("main");
        if (main) {
          main.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          // fallback if main not found
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 300);
    }
  };

  const handleLogoClick = () => {
    resetWeather();
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
  };

  return (
    <nav id="navbar" className={className}>
      <div id="logo" onClick={handleLogoClick}>Weather App</div>
      
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
