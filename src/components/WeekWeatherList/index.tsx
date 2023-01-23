import React from "react";
import style from './WeekWeatherList.module.scss';

 interface DailyWeatherList {
	temperature_2m_max: string[];
	temperature_2m_min: string[];
	time: string[];
	weathercode: string[];
}

import Rainy from '../Rainy';
import Snowy from '../Snowy';
import Sunny from '../Sunny';
import Cloudy from '../Cloudy';
import { getWeather } from "../../utils/util";

// const WeekWeatherList: React.FC<any> = props => {
const WeekWeatherList: React.FC<any> = props => {
	const { DailyWeatherList} = props;
	let weather = DailyWeatherList.weathercode.map((weatherCode: string) => {
		let icon = getWeather(weatherCode);
        return (
			<div className="p-4 ml-6 w-72" >
				{icon === "sunny" ? <Sunny></Sunny> : null } 
				{icon === "rainy" ? <Rainy></Rainy> : null } 
				{icon === "snowy" ? <Snowy></Snowy> : null }
				{icon === "cloudy" ? <Cloudy></Cloudy> : null } 
			</div>
		)
	})

	let temperature_max = DailyWeatherList.temperature_2m_max.map((temperature: String) => <div className="p-4 mt-9 w-72"><h3 className="">{temperature}°C</h3></div>)
	let temperature_min = DailyWeatherList.temperature_2m_min.map((temperature: String) => <div className="p-4 mt-4 w-72"><h3 className="">{temperature}°C</h3></div>)
	let day = DailyWeatherList.time.map((time: String) => <div className="p-4 mt-4 w-72"><h3 className="">{time}</h3></div>)
	return (
		<div className="">
			<div className="">
				<div className="flex flex-row">
					{day}
				</div>
				<div className="flex flex-row">
					{weather}
				</div>
		`		<div className="mt-12">
					<div className="flex flex-row">
						{temperature_max}
					</div>
					<div className="flex flex-row">
						{temperature_min}
					</div>
				</div>
		   </div>
		</div> 
	);
  };
  
  export default WeekWeatherList;
