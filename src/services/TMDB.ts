import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITmdbGetMoviesQueryProps } from "../Interface/Pages/TmdbQuery/TmdbQuery";
const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (builder) => ({
    //* Get Genres
    getGenres: builder.query({
      query: () => `genre/movie/list?api_key=${tmdbApiKey}`,
    }),
    //* get movies by types
    getMovies: builder.query({
      query: ({
        genreIdOrCategoryName,
        page,
        searchQuery,
      }: ITmdbGetMoviesQueryProps) => {
        // * GET MOVIES BY SEARCH
        if (searchQuery) {
          // console.log(searchQuery,'Search Input Term');
          return `/search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbApiKey}`;
        }
        // * GET MOVIES BY CATEGORY
        if (
          genreIdOrCategoryName &&
          typeof genreIdOrCategoryName === "string"
        ) {
          return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`;
        }

        // * GET MOVIES BY GENRE
        if (
          genreIdOrCategoryName &&
          typeof genreIdOrCategoryName === "number"
        ) {
          return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`;
        }
        //* GET  POPULAR MOVIES
        return `movie/popular?page=${page}&api_key=${tmdbApiKey}`;
      },
    }),
    // * GET MOVIE
    getMovie: builder.query({
      query: (id) =>
        `/movie/${id}?append_to_response=videos,credits&api_key=${tmdbApiKey}`,
    }),
  }),
});

export const { useGetGenresQuery, useGetMoviesQuery, useGetMovieQuery } =
  tmdbApi;
