import React, { useState, useEffect } from "react";
import getWeather from "./api/Api";
import clear from "./img/clear.png";
import humidity from "./img/humidity.png";
import wind from "./img/wind.png";
import drizzle from "./img/drizzle.png";
import mist from "./img/mist.png";
import rain from "./img/rain.png";
import snow from "./img/snow.png";
import clouds from "./img/clouds.png";
import './App.css';
import { Myimg } from "./image/Myimg";

function App() {

  const [city, setCity] = useState("london");
  const [weather, setWeather] = useState({});
  const [img, setImg] = useState("");

  useEffect(() => {
    // if (weather?.weather?.[0]?.main) {
    //   setImg(weather?.weather[0]?.main);
    // }
    getWeatherbyCity()
  }, []);

  const getWeatherbyCity = async () => {
    const weatherData = await getWeather(city);
    setWeather(weatherData);
    setImg(weatherData?.weather[0]?.main);
    console.log(weatherData);
    setCity("");
  }

  return (
    <>
      <section>
        <div className="flex center justify-center">
          <div className="w-3/12 bg-teal-500 h-auto flex flex-col text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">

            <div className="relative w-full">
              <div className="absolute flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 mt-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="search" value={city} onChange={(e) => setCity(e.target.value)} className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="City, country" required />
              <button type="submit" onClick={getWeatherbyCity} className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>

            <div className="flex flex-col justify-center w-full h-auto px-10">
              <div className="flex justify-between mt-10">
                <h1 className="text-3xl font-semibold">{weather.name}</h1>
                <h1 className="text-2xl font-semibold">{weather?.main?.temp}°C</h1>
              </div>
             <Myimg img={img} weather={weather} />
             {/* this should be written is this format only no need to change that */}

              <div className="flex justify-between mt-3 mb-4">
                <h1 className="text-3xl font-semibold">Feels like</h1>
                <h1 className="text-2xl font-semibold">{weather?.main?.feels_like}</h1>
              </div>
            </div>

            <div className="flex center justify-between w-full h-auto px-10">
              <div className="flex justify-center">
                <img src={humidity} alt="Humidity" width={50} height={20} />
                <h4 className="px-2">Humidity<br />{weather?.main?.humidity}%</h4>
              </div>
              <div className="flex justify-center">
                <img src={wind} alt="Wind Speed" width={50} height={20} />
                <h4 className="px-2">Wind speed<br />{weather?.wind?.speed} km/h</h4>
              </div>
            </div>

            <div className="w-full h-auto bg-stone-50 mt-6 text-black border-4 border-blue-600">
              <p className="text-sm text-center mt-2 hover:text-blue-600">
                © 2024 AccuWeather, Inc. All Rights Reserved.
              </p>
              <p className="text-sm text-center mb-1 hover:text-blue-600">Terms of Use | Privacy Policy | Cookie Policy</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
