import { useState } from 'react';
import './App.css';

const api = {
  key: '03b234130a743444a38c212a4233c4dd',
  base: 'https://api.openweathermap.org/data/2.5/weather?q='
}
function App() {
  const [search,setSearch] = useState('')
  const[weather,setWeather] = useState({})

  const searchPressed = () => {
    fetch(`${api.base}${search}&appid=${api.key}&units=metric`)
    .then((res) => res.json())
    .then((result) => {
      setWeather(result)
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>WEATHER</h1>
        <div>
          <input type='text' placeholder='Enter city/town...' 
          onChange={(e)=>setSearch(e.target.value)}/>
          <button onClick={searchPressed}>search</button>
        </div>
        {
        weather !== undefined &&
        weather !== null &&
        weather.main &&
        weather.weather ? (
        <div>
        <p>{weather.name}</p>
        {weather.main.temp}°C
        <br/>
        {weather.main.temp * 9/5 + 32} 
        <br/>
        {weather.weather[0].description}
        </div>
      ):(
        weather.message
      )}
      </header>
    </div>
  );
}

export default App;
