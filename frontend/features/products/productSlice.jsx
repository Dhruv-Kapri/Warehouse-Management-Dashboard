// productSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: {
    cake: 10,
    icecream: 20,
    noodles: 15,
  },
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const { productName, initialQuantity } = action.payload;
      state.products[productName] = initialQuantity;
    },
    // Other reducers for ordering and restocking
    order: (state, action) => {
      const { product, quantity } = action.payload;
      if (state.products[product] > 0 && state.products[product] >= quantity) {
        state.products[product] -= quantity;
      }
    },
    restock: (state, action) => {
      const { product, quantity } = action.payload;
      state.products[product] += quantity;
    },
  },
});

export default productSlice.reducer;
export const { addProduct, order, restock } = productSlice.actions;
