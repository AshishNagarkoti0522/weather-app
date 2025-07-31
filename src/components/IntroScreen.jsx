import React, { useState, useEffect } from 'react';

function IntroScreen({ startApp }) {
  const [inputCity, setInputCity] = useState("");
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
        setShowLogo(true); // After short delay, enable animation
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    startApp(inputCity);
  };

  return (
    <div id="introScreen">
      <h1 id="introLogo" className={showLogo ? "intro-logo-visible" : ""}>Weather App</h1>
      <div id="introForm">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="introCityInput"
            placeholder="Enter city..."
            value={inputCity}
            onChange={(e) => setInputCity(e.target.value)}
          />
          <button type="submit">Get Weather</button>
        </form>
      </div>
    </div>
  );
}

export default IntroScreen;
