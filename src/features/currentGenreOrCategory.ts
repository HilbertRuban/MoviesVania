import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialStateProps } from "../Interface/Pages/CurrentGenreOrCategory/CurrentGenreOrCategory";
export const genreOrCategory = createSlice({
  name: "genreOrCategory",
  initialState: {
    genreIdOrCategoryName: "",
    page: 1,
    searchQuery: "",
  },
  reducers: {
    selectGenreOrCategory: (
      state: InitialStateProps,
      action: PayloadAction<string | number>
    ) => {
      state.genreIdOrCategoryName = action.payload;
      state.searchQuery = "";
    },
    searchMovie: (state: InitialStateProps, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

export default genreOrCategory.reducer;
export const { selectGenreOrCategory, searchMovie } = genreOrCategory.actions;
