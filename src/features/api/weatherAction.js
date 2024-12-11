import {putWeatherInfo} from "../weatherInfo/weatherSlice.js";
import {api_key, base_url} from "../../utils/constants.js";
import {putMessage} from "../message/messageSlice.js";

export const fetchWeather = (city) => {
    return dispatch => {
        dispatch(putWeatherInfo())
        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then(result => result.json())
            .then(data => {
                dispatch(putWeatherInfo({
                    country: data.sys.country,
                    city: data.name,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    sunset: new Date(data.sys.sunset * 1000)
                }))
                dispatch(putMessage(''))})
            .catch(e => {
                console.log(e);
                dispatch(putMessage('Enter correct city name'));
            })
    }
}