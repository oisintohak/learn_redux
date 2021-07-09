import { createSlice } from "@reduxjs/toolkit";

export const arraySlice = createSlice({
  name: "array",
  initialState: {
    value: ["r", "e", "d", "u", "x"],
  },
  reducers: {
    unshift: (state, action) => {
      state.value.unshift(action.payload);
    },
    shift: (state, action) => {
      state.value.shift(action.payload);
    },
    push: (state, action) => {
      state.value.push(action.payload);
    },
    pop: (state, action) => {
      state.value.pop(action.payload);
    },
  },
});

export const { unshift, shift, push, pop } = arraySlice.actions;

export const selectArray = (state) => state.array.value;

export default arraySlice.reducer;
