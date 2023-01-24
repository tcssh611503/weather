import React  from "react";
import style from './WeekWeatherList.module.scss';
import Rainy from '../WeekWeather/Rainy';
import Snowy from '../WeekWeather/Snowy';
import Sunny from '../WeekWeather/Sunny';
import Cloudy from '../WeekWeather/Cloudy';
import { getWeather, getWeekDay, formatTime } from "../../utils/util";

const WeekWeatherList: React.FC<any> = props => {
	const { DailyWeatherList} = props;

	let day = DailyWeatherList.time.map((time: string, idx: string) => 
		<div key={idx} className="p-4 mt-4 w-72">
			<h3 className={style.time}>{formatTime(time)}{getWeekDay(time)}
			</h3>
		</div>
	);
	
	let weather = DailyWeatherList.weathercode.map((weatherCode: string, idx: string) => {
		let icon = getWeather(weatherCode);
        return (
			<div key={idx} className="p-4 ml-6 w-72" >
				{icon === "sunny" ? <Sunny></Sunny> : null } 
				{icon === "rainy" ? <Rainy></Rainy> : null } 
				{icon === "snowy" ? <Snowy></Snowy> : null }
				{icon === "cloudy" ? <Cloudy></Cloudy> : null } 
			</div>
		)
	});

	let temperature_max = DailyWeatherList.temperature_2m_max.map((temperature: string, idx: string) => 
		<div key={idx} className="mt-4 w-72">
			<div className="">
				<div className={style.max}>
					<h3>{temperature}°C</h3>
				</div>
			</div>
			<div className={style.info}>
				<span>/</span>
			</div>
		</div>
	)

	let temperature_min = DailyWeatherList.temperature_2m_min.map((temperature: string, idx: string) => 
		<div  key={idx} className="w-72">
			<div className={style.min}>
				<h3>{temperature}°C</h3>
			</div>
		</div>	
	)
	
	return (
		<div>
			<div>
				<div className="flex flex-row justify-evenly items-center">
					{day}
				</div>
				<div className="flex flex-row justify-evenly items-center mt-6">
					{weather}
				</div>
				<div className="mt-12">
					<div className="flex flex-row justify-evenly items-center mt-2">
						{temperature_max}
						</div>
					<div className="flex flex-row justify-evenly items-center mt-2"> 
						{temperature_min}
					</div>
				</div>
			</div>
		</div> 
	);
};
  
export default WeekWeatherList;

