const apikey ="792c3d464a0cc74abde03d9f4c375f1e&units=metric";
 const getWeather = async (city)=>{
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
    .then((res) => res.json())
    .then((json)=>{
        return json;
    })
 }
 
 export default getWeather;