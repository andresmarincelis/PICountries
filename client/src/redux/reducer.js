import { ORDERBYCONT, ORDERBYAZ, ORDERBYPOP, RESET, SEARCH, ALLCOUNTRIES, GETACTIVITY, ORDERBYACT } from "./actions";

let initialState = {
    allCountries: [],
    allActivities: [],
    filtrados: [],
    search: []
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {

        case GETACTIVITY:
            return {
                ...state,
                allActivities: action.payload,
            }

        case ORDERBYACT:
            return {
                ...state,
                filtrados: state.allCountries.filter((country) => country.actividades.includes(action.payload))
            }

        case ALLCOUNTRIES:
            return {
                ...state,
                allCountries: action.payload, //.sort((a, b) => a.name > b.name ? 1 : -1)
                filtrados: action.payload, //es lo que se va a mostrar
            }

        case ORDERBYAZ:
            let ordenados;
            if (action.payload === "Ascendente")
                ordenados = state.filtrados.sort((a, b) => (a.name > b.name ? 1 : -1));
            else
                ordenados = state.filtrados.sort((a, b) => (b.name > a.name ? 1 : -1));


            return {
                ...state,
                filtrados: [...ordenados],
            };

        case ORDERBYPOP:
            let sorted;
            if (action.payload === "Ascendente")
                sorted = state.filtrados.sort((a, b) => (a.poblacion > b.poblacion ? 1 : -1));
            else
                sorted = state.filtrados.sort((a, b) => (b.poblacion > a.poblacion ? 1 : -1));
            return {
                ...state,
                filtrados: [...sorted]
            };

        case ORDERBYCONT:
            if (action.payload === 'None') return { ...state }
            else
                return {
                    ...state,
                    filtrados: state.allCountries.filter((country) => country.continente === action.payload)
                };

        case SEARCH:
            return {
                ...state,
                filtrados: state.allCountries.filter((country) =>
                    country.name.toLowerCase().includes(action.payload.toLowerCase())
                )
            };

        case RESET:
            return {
                ...state,
                filtrados: state.allCountries,
            }

        default:
            return {
                ...state,
            }

    }
}


