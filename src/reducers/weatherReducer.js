import {CHANGE_CITY, SET_MESSAGE, SET_WEATHER} from "../actions/weatherActions.js";

export const weatherReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_CITY:
            return {...state, city: action.payload};
        case SET_WEATHER:
            return {...state, [action.payload.weatherKey]: action.payload.weatherValue};
        case SET_MESSAGE:
            return {...state, message: action.payload || state.message};
        default:
            return state;

    }
}