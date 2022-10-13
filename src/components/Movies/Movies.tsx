import {
  Box,
  CircularProgress,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

import { MovieList } from "..";
import { useGetMoviesQuery } from "../../services/TMDB";

const Movies = () => {
  const { data, error, isFetching } = useGetMoviesQuery();
  let movies = data?.results;
  // console.log(movies,'movies data');

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (!data.results.length) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">
          No movies that match that name.
          <br />
          Please search for something else.
        </Typography>
      </Box>
    );
  }

  if (error) return "An error has occurred.";

  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};

export default Movies;
