import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export const countSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    inclement: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { inclement, decrement } = countSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export default countSlice.reducer;
