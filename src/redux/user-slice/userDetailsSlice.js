import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



// fetch user details from api and store in redux store using async thunk

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
        // fetch user details from api
        const getUser=response.data.results.data;
        let userDetails={};
        // loop through user details and assign to userDetails object
          getUser.forEach(user=>{
            //  Check if user is the same as user_id
            if(user.user_id===user_id){
                // assign user details to userDetails object
                return userDetails.user=user;
            }
        })
        // return userDetails object
        return userDetails;                  
     } catch (error) {
        //  return error message
         thunkAPI.rejectWithValue("something went wrong");
     }


})
// create slice
const userDetailsSlice = createSlice({
    name: "userDetails",
    initialState: {
        userDetails: null
    },
    reducers: {
        clearUserDetails: (state) => {
            state.userDetails = null;
        }
    },
    extraReducers: {
        [fetchUserDetails.pending]: (state) => {
            state.userDetails = null;
        },
        [fetchUserDetails.fulfilled]: (state, action) => {
            // assign user details to state
            state.userDetails = action.payload;
        },
        [fetchUserDetails.rejected]: (state, action) => {
            state.userDetails = action.payload;
        }
    }
})

// export action
export const { clearUserDetails } = userDetailsSlice.actions;
// export reducer
export default userDetailsSlice.reducer;