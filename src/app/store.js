import {configureStore} from "@reduxjs/toolkit";
import weather from "../features/weatherInfo/weatherSlice.js";
import message from "../features/message/messageSlice.js";

export const store = configureStore({
    reducer:{
        weather, message
    }
});