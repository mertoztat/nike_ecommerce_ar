import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface favoriteState {
  favoriteList: any[];
  id: number;
}

const initialState = {
  favoriteList: [],
} as any as favoriteState;

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite: (state, action: PayloadAction<favoriteState>) => {
      state.favoriteList.push({ ...action.payload, isCheckFavorite: true });
    },
    deleteFromFavorite: (state, action) => {
      state.favoriteList = state.favoriteList.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});
export const getAllFavorite = (state: RootState) =>
  state.favorites.favoriteList;
export const { addToFavorite, deleteFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
