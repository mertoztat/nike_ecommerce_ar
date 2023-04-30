import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface cartState {
  cartList: any[];
  id: number;
}

const initialState = { cartList: [] } as any as cartState;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<cartState>) => {
      const product: any = state.cartList.find(
        (item: any) => item.id === action.payload.id
      );
      if (product) {
        product.quantity++;
      } else {
        state.cartList.push({ ...action.payload, quantity: 1 });
        console.log("Ürün sepete eklendi");
      }
    },
    deleteFromCart: (state, action: PayloadAction<cartState>) => {
      const product = state.cartList.find(
        (item) => item.id === action.payload.id
      );
      if (product && product.quantity === 1) {
        state.cartList = state.cartList.filter(
          (x) => x.id !== action.payload.id
        );
      } else if (product) {
        state.cartList.map((x) => {
          if (x.id === action.payload.id) {
            x.quantity--;
          }
          return x;
        });
      }
    },
  },
});

export const { addToCart, deleteFromCart } = cartSlice.actions;
export const getAllCart = (state: RootState) => state.carts.cartList;
export default cartSlice.reducer;
