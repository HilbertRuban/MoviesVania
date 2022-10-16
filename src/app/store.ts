import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/auth";
import genreOrCategoryReducer from "../features/currentGenreOrCategory";
import { tmdbApi } from "../services/TMDB";

export const store = configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    genreOrCategoryReducer,
    userReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
