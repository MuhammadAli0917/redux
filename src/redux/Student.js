import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const getStudent = createAsyncThunk("getStudent", async (payload) => {
    return fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res => res.json())
})

const counterSlice = createSlice({
    name: "counter",
    initialState: {value: [{
        id: 1, title: "ewdbchjsxzmn"
        }], status: "loading..."},
    extraReducers: {
        [getStudent.pending]: (state) => {
            state.status = "loading..."
        },
        [getStudent.fulfilled]: (state, {payload}) => {
            state.status = "success"
            state.value = payload
        },
        [getStudent.rejected]: (state) => {
            state.status = "failed"
        }
    },
    reducers: {
        plus: (state, payload) => {
            state.value += 1
        },
        minus: (state, payload) => {
            state.value -= 1
        }
    }
})
export default counterSlice.reducer