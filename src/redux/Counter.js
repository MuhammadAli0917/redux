import {createSlice} from "@reduxjs/toolkit";



const counterSlice = createSlice({
    name: "counter",
    initialState: {value: [], status: ""},
    reducers: {
        plus: (state, payload) => {
            state.value += 1
        },
        minus: (state, payload) => {
            state.value -= 1
        }
    }
})
export const {plus, minus} = counterSlice.actions
export default counterSlice.reducer