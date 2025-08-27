import React, { useEffect, useState } from "react";
import { getWeather } from "../../services/weatherService";

const MainSection = ({ city }) => {
  const [weather, setWeather] = useState(null);
  const [Loading, setloading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setloading(true);
      const data = await getWeather(city);
      setWeather(data);
      setloading(false);
    }
    fetchData();
  }, [city]);

  if (Loading) {
    return <div className="main-content">Loading...</div>;
  }
  if (!weather) {
    return <div className="main-content">No data available.</div>;
  }

  return (
    <div className="main-content">
      <div className="header">
        <div className="location-info">
          <h1>
            {weather.location.name}, {weather.location.country}
          </h1>
          <p>{weather.current.condition.text}</p>
        </div>
        <div className="temperature">
          <h2>{weather.current.temp_c}°C</h2>
        </div>
      </div>

      {/* Forecast Section */}
      <div className="forecast-section">
        <h2>3-Day Forecast</h2>
        <div className="forecast-cards">
          {weather.forecast.forecastday.map((day) => (
            <div className="forecast-card" key={day.date}>
              <img src={day.day.condition.icon} alt={day.day.condition.text} />
              <h3>{day.date}</h3>
              <p>{day.day.condition.text}</p>
              <div className="temp-range">
                {day.day.maxtemp_c}° / {day.day.mintemp_c}°
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainSection;
