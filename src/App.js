import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import SidebarToggle from './components/SidebarToggle';
import IntroScreen from './components/IntroScreen';
import WeatherDisplay from './components/WeatherDisplay';
import './index.css';
import Footer from './components/Footer';

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

  const startApp = async (inputCity) => {  const cityName = inputCity.trim();
  if (!cityName) return alert("Please enter a city");

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&appid=f0c14a2b617ee15e67b9c21cd5faee06&units=metric`);
    const data = await response.json();

    if (!data.main || !data.weather) throw new Error("Incomplete weather data");

    const weatherFormatted = {
      temp: data.main.temp,
      humidity: data.main.humidity,
      feels_like: data.main.feels_like,
      min_temp: data.main.temp_min,
      max_temp: data.main.temp_max,
      wind_speed: data.wind.speed,
      condition: data.weather[0].description,
    };

    setWeatherData(weatherFormatted);
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
