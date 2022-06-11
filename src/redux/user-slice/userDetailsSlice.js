import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchUserDetails = createAsyncThunk("userDetails/fetchUserDetails", async (data, thunkAPI) => {
     try {
        const response=await axios("")
     } catch (error) {
         
     }


})
const userDetailsSlice = createSlice({
    name: "userDetails",
    initialState: {
        userDetails: []
    },
    extraReducers: {

    }
})