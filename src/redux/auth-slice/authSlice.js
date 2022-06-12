import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';



export const loginUser=createAsyncThunk('auth/loginUser',async(data, thunkAPI)=>{
     try {
       const response=await axios('https://stage.api.sloovi.com/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                
            },
            data:JSON.stringify({
                email:data.email,
                password:data.password
            }),
        })
        return response.data;
     } catch (error) {
        return thunkAPI.rejectWithValue('something went wrong');
     }
})



const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        message:null,
        user_id: null,
        user_name:null,
        token: null,
        error: null,
        loading: false,
        company_id: null,
        user_picture: null,
    },
    reducers: {
        logout: (state) => {
            state.isAuthenticated = false;
            state.user_id = null;
            state.token = null;
            state.message = null;
            state.error = null;
            state.loading = false;
            state.company_id = null;
            state.user_picture = null;
            state.user_name=null
        },
         resetMessageState:(state)=>{
            state.message="";
        }
    },
    extraReducers: {
        [loginUser.pending]: (state) => {
            state.loading = true;
        },
        [loginUser.fulfilled]: (state, action) => {
            state.isAuthenticated = true;
            state.loading = false;
            state.message=action.payload.message;
            state.user_id = action.payload.results.user_id;
            state.token = action.payload.results.token;
            state.company_id = action.payload.results.company_id;
            state.user_picture = action.payload.results.icon
            state.user_name=action.payload.results.name
        },
        [loginUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})



export const {logout,resetMessageState} = authSlice.actions;

export default authSlice.reducer;

