import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import SidebarToggle from './components/SidebarToggle';
import IntroScreen from './components/IntroScreen';
import WeatherDisplay from './components/WeatherDisplay';
import Footer from './components/Footer';
import './index.css';

const weatherAPIKey = "6df2361bc8mshb9cc009348e5f7bp14f854jsn00f7237528e9";
const geoAPIKey = "b54dd9fab610407b804b7c8dbed30a69";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const [showIntro, setShowIntro] = useState(true);
  
  useEffect(() => {
    if (showIntro) {
      setTimeout(() => {
        const intro = document.getElementById("introScreen");
        if (intro) {
          intro.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [showIntro]);

  const startApp = async (inputCity) => {
    const cityName = inputCity.trim();
    if (!cityName) return alert("Please enter a city");

    try {
      const geoUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(cityName)}&key=${geoAPIKey}`;
      const geoRes = await fetch(geoUrl);
      const geoData = await geoRes.json();
      if (!geoData.results.length) throw new Error("City not found");

      const { lat, lng } = geoData.results[0].geometry;
      const weatherUrl = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?lat=${lat}&lon=${lng}`;
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': weatherAPIKey,
          'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
      };

      const weatherRes = await fetch(weatherUrl, options);
      const data = await weatherRes.json();
      if (!data.temp) throw new Error("Weather data missing");

      setWeatherData(data);
      setCity(cityName);
      setShowIntro(false);
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please check the city name or try again.");
    }
  };

  const resetWeather = () => {
    setCity("");
    setWeatherData(null);
    setShowIntro(true);
  };

  return (
      <div className="app-wrapper">
        <header>
          <Navbar resetWeather={resetWeather} startApp={startApp} className={!showIntro ? "show" : ""}/>
        </header>
        <div className="Toggles">
          <ThemeToggle />
          <SidebarToggle resetWeather={resetWeather} />
        </div>
        {showIntro ? (
          <IntroScreen startApp={startApp} />
        ) : (
          <main>
            <WeatherDisplay city={city} weatherData={weatherData} />
          </main>
        )}
        <Footer />
      </div>
  );
}

export default App;
