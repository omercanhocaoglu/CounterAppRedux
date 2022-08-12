import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value:0
    },
    reducers: {
        increase: (element) => {
            element.value += 1;
        },

        decrease: (element) => {
            element.value -= 1;
        },

        reset: (element) => {
            element.value = 0;
        },
        
        byInput: (element, action) => {
            element.value += Number(action.payload)
        },



    },
});


export default counterSlice.reducer;

export const { increase, decrease, reset, byInput } = counterSlice.actions;

