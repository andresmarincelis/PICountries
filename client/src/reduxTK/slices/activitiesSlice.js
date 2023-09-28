import { createSlice } from '@reduxjs/toolkit';
import { getActivity } from './activitiesThunk';

const initialState = {
    allActivities: [],
    loading: false,
    error: ""
}

const activitiesSlice = createSlice({
    name: 'activities',
    initialState,
    reducers: {
        filterByActivity: (state, action) => {
            state.filtrados = state.allActivities.filter((country) => country.actividades.includes(action.payload))
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getActivity.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getActivity.fulfilled, (state, action) => {
            state.loading = false;
            state.allActivities = action.payload;
            state.error = "";
        });
        builder.addCase(getActivity.rejected, (state, action) => {
            state.loading = false, 
            state.error = action.payload;
        })
    }
})

export const { filterByActivity } = activitiesSlice.actions
export default activitiesSlice.reducer;