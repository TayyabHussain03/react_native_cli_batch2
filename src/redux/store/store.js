// store hmesha ek hee bnega multiple nhi bnte 

// ✅ Importing configureStore from Redux Toolkit
// Redux Toolkit provides a simplified API to create and configure the Redux store
import { configureStore } from '@reduxjs/toolkit';

// ✅ Importing the counter reducer from the slice file
// This reducer contains the logic for increment, decrement, and reset actions
import counterReducer from '../slice/counterSlice'; // Make sure the path is correct

// ✅ Creating and exporting the Redux store
// The store is the centralized place where all application state lives
// We pass an object to `configureStore` with a `reducer` key
// Inside `reducer`, we define all slices of state — here we only have one: `counter`
export const store = configureStore({
    reducer: {
        counter: counterReducer // ✅ This key becomes `state.counter` in the Redux state tree
    }
});