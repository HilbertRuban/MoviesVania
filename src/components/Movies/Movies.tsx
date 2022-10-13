import {
  Box,
  CircularProgress,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

import { useGetMoviesQuery } from "../../services/TMDB";

const test = process.env.REACT_APP_TEST;

const Movies = () => {
  const { data } = useGetMoviesQuery();

  console.log(test, "test");
  console.log(data);
  return <div>Movies</div>;
};

export default Movies;
