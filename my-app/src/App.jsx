import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react'
import WeatherBox from './component/WeatherBox'
import WeatherButon from './component/WeatherButton';


// 기능 정리
// 1. 앱이 실행되자마자 현재 위치 기반 날씨 정보가 보인다
// 2. 날씨 정보에는 도시, 섭씨, 화씨, 날씨 상태 정보
// 3. 5개의 버튼이 있다 (1개는 현재 위치, 4개는 다른 도시)
// 4. 도시 버튼을 클릭하면 도시별 날씨가 나온다
// 5. 현재 위치 버튼을 누르면 다시 현재 위치 기반의 날씨가 나온다. 
// 6. 데이터를 들고오는 동안 로딩스피너가 돈다.
function App() {
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude
      let lon = position.coords.longitude
      getWeatherByCurrentLocation(lat, lon)
    });
  }

  const getWeatherByCurrentLocation= async (lat, lon) => {
    let url = 'https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid={}'
    let response = await fetch (url)
    let data = await response.json()
  }

  useEffect(() => {
    getCurrentLocation()
  },[]) // 배열 안에 아무것도 없으면 랜더 후 (앱이 실행되자마자) 바로 실행

  return (
    <div>
      <div class="container">
        <WeatherBox />
        <WeatherButton />
      </div>
    </div>
  );
}

export default App;

// 구글: get current location javascript 
// navigator = 자바스크립트 기본 객체 
// https://www.w3schools.com/html/html5_geolocation.asp