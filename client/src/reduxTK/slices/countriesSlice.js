import { createSlice } from '@reduxjs/toolkit';
import { getAllCountries } from './countriesThunk';

const initialState = {
    allCountries: [],
    filtrados: [],
    search: [],
    loading: false,
    error: ""
}

const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        orderByContinents: (state, action) => {
            if (action.payload === 'None') return { ...state }
            else {
                state.filtrados = state.allCountries.filter((country) => country.continente === action.payload)
            }
        },
        orderByAZ: (state, action) => {
            let ordenados;
            if (action.payload === "Ascendente")
                ordenados = state.filtrados.sort((a, b) => (a.name > b.name ? 1 : -1));
            else
                ordenados = state.filtrados.sort((a, b) => (b.name > a.name ? 1 : -1));


            state.filtrados = [...ordenados]
        },
        orderByPopulation: (state, action) => {
            let sorted;
            if (action.payload === "Ascendente")
                sorted = state.filtrados.sort((a, b) => (a.poblacion > b.poblacion ? 1 : -1));
            else
                sorted = state.filtrados.sort((a, b) => (b.poblacion > a.poblacion ? 1 : -1));

            state.filtrados = [...sorted]
        },
        resetFilters: (state) => {

            state.filtrados = state.allCountries
        },
        searchCountry: (state, action) => {
            state.filtrados = state.allCountries.filter((country) =>
                country.name.toLowerCase().includes(action.payload.toLowerCase())
            )
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllCountries.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getAllCountries.fulfilled, (state, action) => {
            state.loading = false;
            state.allCountries = action.payload;
            state.filtrados = action.payload;
            state.error = "";
        });
        builder.addCase(getAllCountries.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export const { orderByContinents, orderByAZ, orderByPopulation, resetFilters, searchCountry } = countriesSlice.actions
export default countriesSlice.reducer;