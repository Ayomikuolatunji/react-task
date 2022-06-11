import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchUserDetails = createAsyncThunk("userDetails/fetchUserDetails", async (data, thunkAPI) => {
     try {
        const {company_id} = thunkAPI.getState().auth;
        console.log("companyId",company_id);

        const response=await axios(`https://stage.api.sloovi.com/team?product=outreach&company_id=${company_id}`);

        return response.data;
        
     } catch (error) {
         thunkAPI.rejectWithValue("something went wrong");
     }


})
const userDetailsSlice = createSlice({
    name: "userDetails",
    initialState: {
        userDetails: null
    },
    extraReducers: {
        [fetchUserDetails.pending]: (state, action) => {
            state.userDetails = null;
        },
        [fetchUserDetails.fulfilled]: (state, action) => {
            state.userDetails = action.payload;
        },
        [fetchUserDetails.rejected]: (state, action) => {
            state.userDetails = action.payload;
        }
    }
})

export default userDetailsSlice.reducer;