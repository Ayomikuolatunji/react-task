/* eslint-disable import/no-anonymous-default-export */
import { configureStore,combineReducers} from '@reduxjs/toolkit'
import { persistStore, persistReducer,FLUSH, REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER,} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import authSlice from './auth-slice/authSlice';
import taskSlice from './task-slice.js/taskSlice';
import userDetailsSlice from './user-slice/userDetailsSlice';



const persistConfig = {
    key: 'userCredentials',
    storage
}
// first reducer setup for persist storage blacklisting country and companies
const rootReducer= combineReducers({
    auth:authSlice,
    userDetails:userDetailsSlice,
    task:taskSlice
})

// persist store
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store=configureStore({
    // sending reducer state
    reducer:persistedReducer,
    // apply middleware
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})


export default{
    store:store,
    persistStore:persistStore(store)
}