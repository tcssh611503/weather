/**
 * @description Get weather
 * @param {String} weatherCode WMO Weather interpretation codes (WW)
 * @return string
 * 
 * Code	Description
 *   0	Clear sky
 *   1, 2, 3 Mainly clear, partly cloudy, and overcast 
 *   45, 48	Fog and depositing rime fog
 *   51, 53, 55	Drizzle: Light, moderate, and dense intensity
 *   56, 57	Freezing Drizzle: Light and dense intensity
 *   61, 63, 65	Rain: Slight, moderate and heavy intensity
 *   66, 67	Freezing Rain: Light and heavy intensity
 *   80, 81, 82	Rain showers: Slight, moderate, and violent
 *   71, 73, 75	Snow fall: Slight, moderate, and heavy intensity
 *   77	Snow grains
 *   85, 86	Snow showers slight and heavy
 */
export const getWeather = (weatherCode: string) => {
	let weather = "";

	if (weatherCode == "0") {
		weather = "sunny";
	} else if (weatherCode == "1") {
		weather = "sunny";
	} else if (weatherCode == "2") {
	  	weather = "cloudy";
	} else if (weatherCode == "3") {
		weather = "cloudy";
	} else if (weatherCode == "45") {
		weather = "cloudy";
	} else if (weatherCode == "48") {
		weather = "cloudy";
	} else if (weatherCode == "51") {
		weather = "rainy";
	} else if (weatherCode == "53") {
		weather = "rainy";
	} else if (weatherCode == "55") {
		weather = "rainy";
	} else if (weatherCode == "56") {
		weather = "rainy";
	} else if (weatherCode == "57") {
		weather = "rainy";
	} else if (weatherCode == "61") {
		weather = "rainy";
	} else if (weatherCode == "63") {
		weather = "rainy";
	} else if (weatherCode == "65") {
		weather = "rainy";
	} else if (weatherCode == "66") {
		weather = "rainy";
	} else if (weatherCode == "67") {
		weather = "rainy";
	} else if (weatherCode == "80") {
		weather = "rainy";
	} else if (weatherCode == "81") {
		weather = "rainy";
	} else if (weatherCode == "82") {
		weather = "rainy";
	} else if (weatherCode == "71") {
		weather = "snowy";
	} else if (weatherCode == "73") {
		weather = "snowy";
	} else if (weatherCode == "75") {
		weather = "snowy";
	} else if (weatherCode == "77") {
		weather = "snowy";
	} else if (weatherCode == "85") {
		weather = "snowy";
	} else if (weatherCode == "86") {
		weather = "snowy";
	} else {
	  weather = "";
	}

	return weather;
};


/**
 * @description Get WeekDay
 * @param {String} time's format xxxx-xx-xx
 * @return string
 * 
 */
export const getWeekDay = (time: string) => {
	let WeekChars = [ "(日)", "(月)", "(火)", "(水)", "(木)", "(金)", "(土)" ];
	let dayObj = new Date(time);   
	let wDay = dayObj.getDay();
    
	return WeekChars[wDay];
};

/**
 * @description format time
 * @param {String} time's format xxxx-xx-xx
 * @return string
 * 
 */
export const formatTime = (time: string) => {

	    let dayObj = new Date(time);   
        const fotmatMonth = dayObj.getMonth()+1
        const fotmatDay = dayObj.getDate()

        // 轉成字串，如果低於10，前面加上'0'
        const monthString = (fotmatMonth < 10) ? ('0' + fotmatMonth) : ('' + fotmatMonth)
        const dayString = (fotmatDay < 10) ? ('0' + fotmatDay) : ('' + fotmatDay)
        let formatTime = `${monthString}/${dayString}`
        return formatTime
};




