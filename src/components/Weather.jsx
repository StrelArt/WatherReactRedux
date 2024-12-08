import {useSelector} from "react-redux";

const Weather = () => {

    const {city, country, temp, pressure, sunset, message, } = useSelector(state => state);

    const isInitState = city !== '' && country !== '';

    return (
        <div className={'infoWeath'}>
            {!isInitState ? (<>Enter city name!</>):
                (!message ? (
                <>
                        <p>Location: {country}, {city}</p>
                        <p>Temp: {temp}</p>
                        <p>Pressure: {pressure}</p>
                        <p>Sunset: {sunset? new Date(sunset * 1000).toLocaleTimeString():'N/A'}</p>
                </>
                ):(
            <>{message}</>))}
        </div>
    )

}

export default Weather;