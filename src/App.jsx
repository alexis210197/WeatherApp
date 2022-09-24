import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import { Loader } from './components/Loader'
import WeatherCards from './components/WeatherCard'
import video from "./assets/estrellas.mp4"

function App() {
  //-------PETICION DEL NAVEGADOR----------
  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temperature, setTemperature] = useState()
  
  useEffect(()=>{
    const success = pos => {
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
      setCoords(obj)
    }
  
    navigator.geolocation.getCurrentPosition(success)
  },[])

  

  //---------PETICION DEL CLIMA----------

  useEffect(()=>{
    if(coords){
      const APIKEY = "2497db075d6bf651c0e4dab9ca02b9ca"
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}`
      axios.get(URL)
        .then(res => {
          const celsius = (res.data.main.temp - 273.15).toFixed(0)
          const farenheit = (celsius  * 9 /5 + 32).toFixed(0)
          setTemperature({celsius, farenheit})
          setWeather(res.data)
        })
        .catch(err => console.log(err))
    }
  },[coords])

  


  return (
    <div className="App">
      <video className='video' autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      {
        weather ?
      <WeatherCards weather= {weather} temperature={temperature} />
      :
      <Loader/>
      }
    </div>
  )
}

export default App
