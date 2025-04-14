import React, { useState } from "react";
import SearchInput from "./components/SearchInput";
import WeatherCard from "./components/WeatherCard";
import { useFetch } from "./hooks/useFetch";

const API_KEY = "9faa2da8d83d505c1c942aa17a9aef50";

const App = () => {
  const [city, setCity] = useState("");
  const [query, setQuery] = useState("");

  const API_URL = query
    ? `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`
    : null;

  const { data: weatherData, loading, error } = useFetch(API_URL);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(city);
  };

  const handleSearch = (input) => {
    if (input.trim()) {
      setQuery(input.trim());
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-700 py-12 px-4">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Weather App</h1>
            <p className="mt-2 text-gray-600">
              Get current weather information
            </p>
          </div>

          <SearchInput
            city={city}
            setCity={setCity}
            handleSubmit={handleSubmit}
            loading={loading}
          />

          {loading && (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
              <p className="mt-2 text-gray-600">Loading weather data...</p>
            </div>
          )}

          {error && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded">
              <p>Error: {error}</p>
            </div>
          )}

          {weatherData && <WeatherCard weatherData={weatherData} />}
        </div>
      </div>
    </div>
  );
};

export default App;
