import React, { useState } from 'react'
import {GiWhirlwind} from "react-icons/gi"
import {BsCloudsFill} from "react-icons/bs"
import {WiThermometer} from "react-icons/wi"

const WeatherCards = ({weather, temperature}) => {
    const [isCelsius, setIsCelsius] = useState(true)

    const changeTemperature = () => setIsCelsius(!isCelsius)
    const upper = weather.weather[0].description.toUpperCase()
    

    return (
    <article className='card'>
        <h1 className='card__title'>Weather App</h1>
        <h2 className='card__subtitle'>{`${weather?.name}, ${weather?.sys.country}`}</h2>
        <section className='card__first-section'>
            <img className='card__icon' src={weather && `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="iconTime" />
            
        </section>
        <section className='card__second-section'>
            <h3 className='second__title'>{upper}</h3>
            <ul className='second__list'>
                <li className='second__item'><span className='second__span'><GiWhirlwind /> Wind speed: </span> {weather?.wind.speed} m/s</li>
                <li className='second__item'><span className='second__span'><BsCloudsFill /> Clouds: </span> {weather?.clouds.all} %</li>
                <li className='second__item'><span className='second__span'><WiThermometer /> Pressure: </span> {weather?.main.pressure} hPa </li>
            </ul>
            </section>
            <h2 className='card__temperature'>{isCelsius ? `${temperature?.celsius} °C` : `${temperature?.farenheit} °f`}</h2>
        <button className='card__btn' onClick={changeTemperature}>{isCelsius ? 'Change to °f' : 'Change to °C'}</button>
    </article>
    
  )
}

export default WeatherCards