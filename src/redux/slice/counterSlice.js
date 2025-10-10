// slice hmesha multiple bnaskte hain aur yeh action aur state(dispatch) ka combination hota h

// ✅ Importing createSlice from Redux Toolkit
// Redux Toolkit simplifies Redux logic by allowing us to write reducers and actions together
import { createSlice } from '@reduxjs/toolkit';

// ✅ Creating a slice named 'counter'
// A slice is a collection of reducer logic and actions for a single feature (here: counter)
export const counterSlice = createSlice({
    name: 'counter', // ✅ Name of the slice — used internally by Redux
    initialState: {
        value: 0 // ✅ Initial state of the counter — starts from 0
    },
    reducers: {
        // ✅ increment reducer
        increment: (state) => {
            state.value += 1;
        },

        // ✅ decrement reducer
        decrement: (state) => {
            state.value -= 1;
        },

        // ✅ reset reducer
        reset: (state) => {
            state.value = 0;
        }
    }
});

// ✅ Exporting individual actions
// These can be dispatched from components using useDispatch()
// Example: dispatch(increment()), dispatch(decrement()), dispatch(reset())
export const { increment, decrement, reset } = counterSlice.actions;

// ✅ Exporting the reducer
// This will be added to the Redux store using configureStore()
export default counterSlice.reducer;