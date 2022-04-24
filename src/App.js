import React, {useState} from 'react'
import axios from 'axios';

function App() {
  const [data, setData] = useState({})
  const [location, useLocation]
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=phoenix&appid=5ca424da57a921f39815ec62e1ffd863`

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Phoenix</p>
          </div>
          <div className="temp">
            <h1>60 ºƒ</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>65 ºƒ</p>
          </div>
          <div className="humidity">
            <p>20%</p>
          </div>
          <div className="wind">
            12 MPH
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
