import React, {useState, useEffect} from 'react'
import style from './Ｗeather.module.scss';
import Rainy from '../Rainy';
import Snowy from '../Snowy';
import Sunny from './../Sunny';
import Cloudy from './../Cloudy';


import { getWeather } from "../../utils/util";

const Weather = () => {
  
  const [posts, setPosts] = useState([])
  const [today, setToday] = useState("")
  const [todayMaximumTemperature, setTodayMaximumTemperature] = useState("")
  const [todayMinimumTemperature, setTodayMinimumTemperature] = useState("")
  const [weatherCode, setWeatherCode] = useState("")

  useEffect(() => {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=35.69&longitude=139.69&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo', {method: 'GET'})
    .then(res => res.json())
    .then(data => {
        setPosts(data.daily)
        console.log(data.daily);
        setToday(data.daily.time[0])
        setTodayMaximumTemperature(data.daily.temperature_2m_max[0])
        setTodayMinimumTemperature(data.daily.temperature_2m_min[0])
        setWeatherCode(getWeather(data.daily.weathercode[0]))
    })
},[])

  return (
    <>
      <section data-name="Weather">
        <div className="row">
          <div className={style.daybox}>
            <label>
              <input id="switch_night" type="checkbox"/>
               <div className={style.top}>
                  <div className={style.dayWeather}>
                    {weatherCode == "sunny" ? <Sunny></Sunny> : null } 
                    {weatherCode == "rainy" ? <Rainy></Rainy> : null } 
                    {weatherCode == "snowy" ? <Snowy></Snowy> : null }
                    {weatherCode == "cloudy" ? <Cloudy></Cloudy> : null } 
                   </div>
                  <div className={style.text_area}>
                    <div className={style.temperature}>
                      {todayMaximumTemperature}°C
                    </div>
                    <div className={style.temperature}>
                      {todayMinimumTemperature}°C
                    </div>
                  <div className={style.infos}>
                    <div className={style.address}>
                      Tokyo
                      </div>
                    <div className={style.time}>  {today}  </div>
                  </div>
                  </div>
                </div>
            </label>
          </div>
        </div>
      </section>
    </>
  );
};

// skip re-rendering the component
export default React.memo(Weather, () => true);
