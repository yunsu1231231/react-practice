import React from 'react'

const WeatherBox = ({weather}) => {
  return (
    <div className ="weather-box">
      <div>{weather && weather.name}</div>
      <h2>{weather?.main.temp} / 230화씨</h2>
      <h3>{weather?.weather[0].description}</h3>
    </div>
  )
}

export default WeatherBox

// {weather} = props.weather만 가지고 오는 것

// <div>{weather && weather.name}</div>
// weather?.name