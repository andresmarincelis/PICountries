import axios from "axios";

export const ORDERBYCONT = "ORDERBYCONT";
export const ORDERBYAZ = "ORDERBYAZ";
export const ORDERBYPOP = "ORDERBYPOP";
export const RESET = "RESET";
export const SEARCH = "SEARCH";
export const ALLCOUNTRIES = "ALLCOUNTRIES";
export const CREATEACTIVITY = "CREATEACTIVITY";
export const GETACTIVITY = "GETACTIVITY";
export const ORDERBYACT = "ORDERBYACT";

export const filterByActivity = (activity) => {
    return {
        type: ORDERBYACT,
        payload: activity
    }
}

export const getActivity = () => {
    const endpoint = "http://localhost:3001/activities"
    return async (dispatch) => {
        axios.get(endpoint)
            .then(({ data }) => {
                return dispatch({
                    type: GETACTIVITY,
                    payload: data
                });
            })
    };
}

export const createActivity = (activity) => {
    const endpoint = 'http://localhost:3001/activities/';
    return (dispatch) => {
        axios.post(endpoint, activity)
            .then(({ data }) => {
                return dispatch({
                    type: CREATEACTIVITY,
                    payload: data,
                });
            }).catch(error => {
                throw new Error(error)});
    };
}

export const orderByContinents = (continent) => {
    return {
        type: ORDERBYCONT,
        payload: continent,
    };
}

export const orderByAZ = (order) => {
    return {
        type: ORDERBYAZ,
        payload: order,
    };
}

export const orderByPopulation = (population) => {
    return {
        type: ORDERBYPOP,
        payload: population,
    };
}

export const resetFilters = () => {
    return {
        type: RESET,
    };
}

export const searchCountry = (name) => {
    return {
        type: SEARCH,
        payload: name,
    }
}

export const getAllCountries = () => {
    const endpoint = 'http://localhost:3001/countries/';
    return (dispatch) => {
        axios.get(endpoint)
            .then(({ data }) => {
                return dispatch({
                    type: ALLCOUNTRIES,
                    payload: data,
                });
            });
    };
}
