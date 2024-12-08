export const CHANGE_CITY = 'CHANGE_CITY';

export const changeCity = city => ({
    type: CHANGE_CITY,
    payload: city
})

export const SET_WEATHER = 'SET_WEATHER';

export const setWeather = (weatherKey, weatherValue) => ({
    type: SET_WEATHER,
    payload: {weatherKey, weatherValue}

})

export const SET_MESSAGE = 'SET_MESSAGE';

export const setMessage = message => ({
    type: SET_MESSAGE,
    payload: message
})