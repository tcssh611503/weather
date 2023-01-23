import React, {useState, useEffect} from 'react'
import style from './Ｗeather.module.scss';
import Rainy from '../Rainy';
import Snowy from '../Snowy';
import Sunny from './../Sunny';
import Cloudy from './../Cloudy';
import { WeatherType } from "../../interface";
import { getWeather } from "../../utils/util";

const Home = () => {
  
  const [values, setValues] = useState<WeatherType.DailyWeatherList>({
      temperature_2m_max: [],
      temperature_2m_min: [],
      weathercode: [],
      time: [],
  });

  const [today, setToday] = useState<string>("")
  const [todayMaximumTemperature, setTodayMaximumTemperature] = useState<string>("")
  const [todayMinimumTemperature, setTodayMinimumTemperature] = useState<string>("")
  const [weatherCode, setWeatherCode] = useState<string>("")

  useEffect(() => {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=35.69&longitude=139.69&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo', {method: 'GET'})
    .then(res => res.json())
    .then(data => {
        setValues({ ...values, 
          temperature_2m_max: data.daily.temperature_2m_max,
          temperature_2m_min: data.daily.temperature_2m_min,
          weathercode: data.daily.weathercode,
          time: data.daily.time,
        })
        console.log(data.daily);
        //console.log("222222");

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
              <div className={style.top}>
                <div className={style.dayWeather}>
                  {weatherCode === "sunny" ? <Sunny></Sunny> : null } 
                  {weatherCode === "rainy" ? <Rainy></Rainy> : null } 
                  {weatherCode === "snowy" ? <Snowy></Snowy> : null }
                  {weatherCode === "cloudy" ? <Cloudy></Cloudy> : null } 
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
                  <div className={style.time}>  {today} </div>
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
