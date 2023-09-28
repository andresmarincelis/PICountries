import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getActivity = createAsyncThunk(
    "get/activity", async () => {
        const endpoint = "http://localhost:3001/activities"
        axios.get(endpoint)
            .then(({ data }) => {
                return data
            })

        //     METODO ASYNC AWAIT (tambien funciona asi el axios)
        // const response = await axios.get(endpoint)
        // const data = response.data
        // return data

    }
)

export const createActivity = createAsyncThunk(
    "post/activity", async () => {
        const endpoint = "http://localhost:3001/activities/"
        axios.get(endpoint)
            .then(({ data }) => {
                return data
            })
    })

// axios de redux antiguo
// const endpoint = "http://localhost:3001/activities"
// return async (dispatch) => {
//     axios.get(endpoint)
//         .then(({ data }) => {
//             return dispatch({
//                 type: GETACTIVITY,
//                 payload: data
//             });
//         })
// };