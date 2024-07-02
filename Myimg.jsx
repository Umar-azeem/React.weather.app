import React, { useState, useEffect } from "react";
import clear from "../img/clear.png";
import humidity from "../img/humidity.png";
import wind from "../img/wind.png";
import drizzle from "../img/drizzle.png";
import mist from "../img/mist.png";
import rain from "../img/rain.png";
import snow from "../img/snow.png";
import clouds from "../img/clouds.png";
import App from "../App";


export function Myimg({img, weather }) {
  return (
    <>
      <div className="flex flex-col justify-center">
        {img === "Clear" && <img src={clear} alt="Clear" width={80} height={60} />}
        {img === "Clouds" && <img src={clouds} alt="Clouds" width={80} height={60} />}
        {img === "Drizzle" && <img src={drizzle} alt="Drizzle" width={80} height={60} />}
        {img === "Humidity" && <img src={humidity} alt="Humidity" width={80} height={60} />}
        {img === "Rain" && <img src={rain} alt="Rain" width={80} height={60} />}
        {img === "Snow" && <img src={snow} alt="Snow" width={80} height={60} />}
        {img === "Mist" && <img src={mist} alt="Mist" width={80} height={60} />}
        {img === "Wind" && <img src={wind} alt="Wind" width={80} height={60} />}
        
      </div>
      
    </>
  );
}
