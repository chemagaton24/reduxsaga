import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  isLoading: false,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state) => {
      state.isLoading = true;
    },
    putProducts: (state, action) => {
      state.list = action.payload;
      state.isLoading = false;
    },
  },
});

export const { getProducts, putProducts } = productSlice.actions;

export default productSlice.reducer;
