import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({ cities, setCity }) => {
  return (
    <div>
      <Button variant="warning">Current Location</Button>

      {cities.map((item) => (
        <Button 
          variant="warning" 
          key={item}
          onClick = {() => setCity(item)}
          >{item}</Button>
      ))}
    </div>
  )
}

export default WeatherButton

// cities.map() // Array 함수

// 도시 바뀔때마다 -> API 재호출 -> 값 다시 받아오기