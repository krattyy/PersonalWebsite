import React, { useEffect } from "react";
import "./Weather.css";
import { FaSearchLocation } from "react-icons/fa";
import {
  TiWeatherCloudy,
  TiWeatherDownpour,
  TiWeatherPartlySunny,
  TiWeatherShower,
  TiWeatherSnow,
  TiWeatherStormy,
  TiWeatherSunny,
  TiWeatherWindy,
} from "react-icons/ti";
import { WiHumidity } from "react-icons/wi";

export default function Weather() {
  const [weatherData, setWeatherData] = useState(false);
  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {}
  };

  useEffect(() => {
    search("London");
  }, []);

  return (
    <div className="weather-app">
      <h2>Hava Durumu Uygulaması</h2>
      <p className="deneme">
        API kullanarak aldığım verilerle istediğiniz lokasyonda hava durumuna
        bakabilirsiniz.
      </p>

      <div className="search-row">
        <input type="text" placeholder="Şehir adı girin" />
        <button className="search-button">
          <FaSearchLocation size={35} />
        </button>
      </div>
      <TiWeatherSunny size={120} color="#f39c12" />
      <div className="weather-info">
        <p className="temperature">25°C</p>
        <h3 className="location">İstanbul, TR</h3>
      </div>

      <div className="weather-data">
        <div className="col">
          <WiHumidity size={60} />
          <div>
            <p>Nem</p>
            <h4>%60</h4>
          </div>
        </div>
        <div className="col">
          <TiWeatherWindy size={60} />
          <div>
            <p>Rüzgar Hızı</p>
            <h4>15 km/s</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
