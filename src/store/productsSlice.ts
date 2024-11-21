import { createSlice } from '@reduxjs/toolkit';

interface Product {
  id: number;
  name: string;
  price: number;
}

const initialState: Product[] = [];

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action) {
      return action.payload;
    },
    addProduct(state, action) {
      state.push(action.payload);
    },
    updateProduct(state, action) {
      const index = state.findIndex(product => product.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteProduct(state, action) {
      return state.filter(product => product.id !== action.payload.id);
    },
  },
});

export const { setProducts, addProduct, updateProduct, deleteProduct } = productsSlice.actions;
export default productsSlice.reducer;
