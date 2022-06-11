import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchUserDetails = createAsyncThunk("userDetails/fetchUserDetails", async (_, thunkAPI) => {
     try {
        const {company_id,token,user_id} = thunkAPI.getState().auth;

        const response=await axios(`https://stage.api.sloovi.com/team?product=outreach&company_id=${company_id}`,{
            method:"GET",
            headers:{  
                "Content-Type":"application/json",
                "Authorization": `Bearer ${token}`,
                "Accept":"application/json"
            }
        });
        const getUser=response.data.results.data;
        let userDetails={};
          getUser.forEach(user=>{
            if(user.user_id===user_id){
                return userDetails=user;
            }
        })
        return userDetails;                  
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
        [fetchUserDetails.pending]: (state) => {
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