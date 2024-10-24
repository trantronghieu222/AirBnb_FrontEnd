import { configureStore } from "@reduxjs/toolkit";
import roomReducer from "./reducers/roomReducer";
import locationReducer from "./reducers/locationReducer";
import authReducer from "./reducers/authReducer";
import userReducer from "./reducers/userReducer"
import bookingReducer from "./reducers/bookingReducer"

export const store = configureStore ({
    reducer: {
        roomReducer,
        locationReducer,
        authReducer,
        userReducer,
        bookingReducer,
    }
}) 

export type RootState = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch
export type GetStateMethodType = typeof store.getState