import { configureStore } from "@reduxjs/toolkit";
import authReducer from './Slices/authSlice';

// let state = {}

export const store = configureStore(
    {
        // preloadedState: state,
        reducer: {
            auth: authReducer
        }
    }
);