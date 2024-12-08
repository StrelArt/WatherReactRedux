import {legacy_createStore as createStore} from "redux";
import {weatherReducer} from "../reducers/weatherReducer.js";


const initialState = {
    country: '',
    city: '',
    temp: '',
    pressure: '',
    sunset: '',
    message: ''
}

export const store = createStore(weatherReducer, initialState);