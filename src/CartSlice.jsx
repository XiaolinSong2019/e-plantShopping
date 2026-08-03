import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      // action.payload contains the exact plant object you passed into handleAddToCart
      const { name, image, cost } = action.payload;

      // Check if the plant is already in the cart to avoid duplicates
      const existingItem = state.items.find(item => item.name === name);

      if (existingItem) {
        // If it exists, just increase the quantity
        existingItem.quantity++;
      } else {
        // If it's new, push it to the global array and set its initial quantity to 1
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      // We can implement this next!
      state.items = state.items.filter(item => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {
      // We can implement this next!
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
