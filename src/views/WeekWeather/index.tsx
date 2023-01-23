import React, {useState, useEffect} from 'react'
import WeekWeatherList from "../../components/WeekWeatherList"
import { WeatherType } from "../../interface";

const WeekWeather = () => {
  const [values, setValues] = useState<WeatherType.DailyWeatherList>({
      temperature_2m_max: [],
      temperature_2m_min: [],
      weathercode: [],
      time: [],
  });

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
    })
},[])

  return (
    <>
        <div className="row">
            <WeekWeatherList  
                DailyWeatherList={values}
            />
        </div>
    </>
  );
};

// skip re-rendering the component
export default React.memo(WeekWeather, () => true);
