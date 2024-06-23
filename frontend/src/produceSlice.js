// src/produceSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProduce } from "./services/produceService";

export const fetchProduce = createAsyncThunk(
  "produce/fetchProduce",
  async () => {
    const response = await getAllProduce();
    return response.data;
  }
);

const produceSlice = createSlice({
  name: "produce",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduce.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProduce.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProduce.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default produceSlice.reducer;
