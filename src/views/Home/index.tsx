import React, {useState, useEffect} from 'react'
import style from './Ｗeather.module.scss';
import Rainy from '../../components/TodayWeather/Rainy';
import Snowy from '../../components/TodayWeather/Snowy';
import Sunny from '../../components/TodayWeather/Sunny';
import Cloudy from '../../components/TodayWeather/Cloudy';
import { getWeather, getWeekDay, formatTime } from "../../utils/util";

const Home = () => {

  const [today, setToday] = useState<string>("")
  const [todayMaximumTemperature, setTodayMaximumTemperature] = useState<string>("")
  const [todayMinimumTemperature, setTodayMinimumTemperature] = useState<string>("")
  const [weatherCode, setWeatherCode] = useState<string>("")

  useEffect(() => {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=35.69&longitude=139.69&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo', {method: 'GET'})
    .then(res => res.json())
    .then(data => {
        setToday(data.daily.time[0])
        setTodayMaximumTemperature(data.daily.temperature_2m_max[0])
        setTodayMinimumTemperature(data.daily.temperature_2m_min[0])
        setWeatherCode(getWeather(data.daily.weathercode[0]))
    })
},[])

  return (
    <>
      <section data-name="Weather">
        <div className={style.daybox}>
          <div className={style.top}>
            <div className={style.dayWeather}>
              {weatherCode === "sunny" ? <Sunny></Sunny> : null } 
              {weatherCode === "rainy" ? <Rainy></Rainy> : null } 
              {weatherCode === "snowy" ? <Snowy></Snowy> : null }
              {weatherCode === "cloudy" ? <Cloudy></Cloudy> : null } 
            </div>
            <div className={style.text_area}>
              <div className={style.time}>  
                {formatTime(today)} {getWeekDay(today)}
              </div>
              <div className={style.title}>
                  Tokyo
              </div>
              <div className="flex flex-row">
                <div className={style.temperature}>
                  {todayMaximumTemperature}°C
                </div>
                <div className={style.info}>
                  <span>～</span>
                </div>
                <div className={style.temperature2}>
                  {todayMinimumTemperature}°C
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// skip re-rendering the component
export default React.memo(Home, () => true);
