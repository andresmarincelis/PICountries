import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllCountries = createAsyncThunk(
    "get/countries", async () => {
        const endpoint = 'http://localhost:3001/countries/';
        
        return axios.get(endpoint)
            .then(({ data }) => {
                return data
            })

        //     METODO ASYNC AWAIT (tambien funciona asi el axios)
        // const response = await axios.get(endpoint)
        // const data = response.data
        // return data


    }
)