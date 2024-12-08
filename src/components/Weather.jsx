// const Weather = ({weather, message}) => {
//     if(message) {
//         return (
//             <div>{message}</div>
//         )
//     }else {
//         return (
//             <div>
//                 <p>Location: {weather.country}, {weather.city}</p>
//                 <p>Temp: {weather.temp}</p>
//                 <p>Pressure: {weather.pressure}</p>
//                 <p>Sunset: {new Date(weather.sunset*1000).toLocaleTimeString()}</p>
//             </div>
//         )
//     }
// };
//
// export default Weather;


const Weather = ({weather, message}) => {

    return (
        <div className={'infoWeath'}>
            {!message &&
                <>
                        <p>Location: {weather.country}, {weather.city}</p>
                        <p>Temp: {weather.temp}</p>
                        <p>Pressure: {weather.pressure}</p>
                        <p>Sunset: {new Date(weather.sunset * 1000).toLocaleTimeString()}</p>
                </>
            }
            <>{message}</>
        </div>
    )

}

export default Weather;