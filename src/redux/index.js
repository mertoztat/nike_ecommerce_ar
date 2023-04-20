import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  cart: [],

  items: [],
  favorites: [],
};

console.log("initialState :", initialState.items);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },

    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload.item];
      const product = action.payload.item;
      if (product) {
        product.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      const product = action.payload.item;
      if (product && product.quantity === 1) {
        state.cart = state.cart.filter((x) => x.id !== action.payload.id);
      } else if (product) {
        state.cart.map((x) => {
          if (x.id === action.payload.id) {
            x.quantity--;
          }
          return x;
        });
      }
    },

    increaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.count++;
        }
        return item;
      });
    },

    decreaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id && item.count > 1) {
          item.count--;
        }
        return item;
      });
    },

    setIsOpenCart: (state) => {
      state.cart = !state.isCartOpen;
    },
  },
});

export const {
  setItems,
  addToCart,
  removeFromCart,
  increaseCount,
  decreaseCount,
  setIsOpenCart,
} = cartSlice.actions;

export default cartSlice.reducer;
