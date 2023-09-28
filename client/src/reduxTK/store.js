import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "./slices/countriesSlice";
import activitiesReducer from "./slices/activitiesSlice";

const store = configureStore({
    reducer: {
        countries: countriesReducer,
        activities: activitiesReducer,
    }
})

export default store;