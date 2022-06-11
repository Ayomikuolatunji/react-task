import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';



const loginUser=createAsyncThunk('auth-slice/loginUser',async(data,{rejectWithValue})=>{
     try {
       const response=await axios('https://stage.api.sloovi.com/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data:JSON.stringify({
                email:data.email,
                password:data.password
            }),
        })
        return response.data;
     } catch (error) {
         
     }
})



const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        user: null,
        token: null,
        error: null,
        loading: false
    },
    reducers: {
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.token = null;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        }
    },
    extraReducers: {
        [loginUser.pending]: (state, action) => {
            state.loading = true;
        },
        [loginUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        [loginUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})



export const {login,logout, setError,setLoading} = authSlice.actions;

