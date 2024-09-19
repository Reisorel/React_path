import { createSlice } from "@reduxjs/toolkit";

const initialState  = {
  value: 0
}

export const counter = createSlice({
  initialState,
  name: "counter",
  reducers: {
    increment: (state, action) => {
      state.value ++
    },
    decrement: (state, action) => {
      state.value --
    },
    multiply: (state, action) => {
      state.value = state.value * 10
    },
    divide: (state, action) => {
      state.value = state.value / 10
    }
  }
})

export const {increment, decrement, multiply, divide} = counter.actions
export default counter.reducer
