import {useDispatch, useSelector} from "react-redux";
import {changeCity, setMessage, setWeather} from "../actions/weatherActions.js";
import {api_key, base_url} from "../utils/constants.js";

const Form = () => {

    const {city} = useSelector(state => state);
    const dispatch = useDispatch();


    const getWeather = (city) => {
        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then(result => result.json())
            .then(data => {
                dispatch(setWeather('country', data.sys.country));
                dispatch(setWeather('city', data.name));
                dispatch(setWeather('temp', data.main.temp));
                dispatch(setWeather('pressure', data.main.pressure));
                dispatch(setWeather('sunset', data.sys.sunset));
                // dispatch(setMessage(''));
            })

            .catch(() => {
                dispatch(setMessage("Error! Enter correct city."));
            });

        dispatch(setMessage(''));
    };

    return (
        <form onSubmit={e => {
            e.preventDefault();
            getWeather(city);

        }}>
            <input onChange={e => dispatch(changeCity(e.target.value))}
                   type="text" value={city}/>
            <button type="submit">Get Weather</button>
        </form>
    );
};

export default Form;