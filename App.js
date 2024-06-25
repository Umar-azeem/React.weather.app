import React, { useState } from "react";
import  Img1  from "./img/clear.png";
import  Img2  from "./img/humidity.png";
import  Img3  from "./img/wind.png";
import  Img4  from "./img/drizzle.png";
import  Img5  from "./img/mist.png";
import  Img6  from "./img/rain.png";
import  Img7  from "./img/snow.png";
import  Img8 from "./img/clouds.png";
import './App.css';
function App() {
  const [input, setinput] = useState(0);
  const [Api, setApi] = useState();
  const [wavalue, setWavalue] = useState({
    humidity: "35",
    wind: "20",
    C: "35",
    F: "20",
    C1: "20",
    C2: "20",
    C3: "20",
    C4: "20",
    C5: "20",
    C6: "20",
    C7: "20",
  });
  return (
  <>
  <section>
  <div className="flex center justify-center ">
  
    <div className="w-3/12 bg-teal-500 h-auto flex flex-col text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
    <div className="relative w-full">
    <div className="absolute flex items-center ps-3 pointer-events-none">
    <svg className="w-4 h-4 mt-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg> 
            </div>
            <input type="search"  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="City , country" required />
            <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
    <div className="flex flex-col justify-center w-full h-auto px-10">
      <div className="flex justify-between mt-10">
      <h1 className="text-3xl font-samibold">Faisalbad</h1>
      <h1 className="text-2xl font-samibold">{wavalue.C}°C |{wavalue.F}°F</h1>
      </div>
     <img src={ Img1 } width={250} height={60}></img>
    </div>
    <div className="flex center justify-between w-full h-auto px-10">
     <div className="flex justify-center">
      <img src={Img2} width={50} height={20}></img>
      <h4 className="px-2">Humidity<br></br>{wavalue.humidity}%</h4>
     </div>
     <div className="flex justify-center">
      <img src={Img3} width={50} height={20}></img>
      <h4 className="px-2">Wind <br></br>{wavalue.wind} km/h</h4>
     </div>
    </div>
    <div className="flex justify-center w-full h-auto px-10">
    <div className="flex flex-col justify-between mt-5 px-2">
      <h1 className="text-sm font-samibold">Mon</h1>
      <img src={ Img1 } width={30} height={30}></img>
      <h1 className="text-sm font-samibold">{wavalue.C1}°C</h1>
      </div>
      <div className="flex flex-col justify-between mt-5 px-2">
      <h1 className="text-sm font-samibold">Tus</h1>
      <img src={ Img1 } width={30} height={30}></img>
      <h1 className="text-sm font-samibold">{wavalue.C2}°C</h1>
      </div>
      <div className="flex flex-col justify-between mt-5 px-2">
      <h1 className="text-sm font-samibold">Wen</h1>
      <img src={ Img1 } width={30} height={30}></img>
      <h1 className="text-sm font-samibold">{wavalue.C3}°C</h1>
      </div>
      <div className="flex flex-col justify-between mt-5 px-2">
      <h1 className="text-sm font-samibold">Thu</h1>
      <img src={ Img1 } width={30} height={30}></img>
      <h1 className="text-sm font-samibold">{wavalue.C4}°C</h1>
      </div>
      <div className="flex flex-col justify-between mt-5 px-2">
      <h1 className="text-sm font-samibold">Fri</h1>
      <img src={ Img1 } width={30} height={30}></img>
      <h1 className="text-sm font-samibold">{wavalue.C5}°C</h1>
      </div>
      <div className="flex flex-col justify-between mt-5 px-2">
      <h1 className="text-sm font-samibold">Sat</h1>
      <img src={ Img1 } width={30} height={30}></img>
      <h1 className="text-sm font-samibold">{wavalue.C6}°C</h1>
      </div>
      <div className="flex flex-col justify-between mt-5 px-2">
      <h1 className="text-sm font-samibold">Sun</h1>
      <img src={ Img1 } width={30} height={30}></img>
      <h1 className="text-sm font-samibold">{wavalue.C7}°C</h1>
      </div>
    </div>
    <div className="w-full h-auto  bg-stone-50 mt-6 text-black border-4 border-blue-600 ">
      <p className="text-sm text-center mt-2 hover:text-blue-600  ">
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
