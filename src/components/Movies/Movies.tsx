import {
  Box,
  CircularProgress,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import { MovieList, Pagination } from "..";
import { useGetMoviesQuery } from "../../services/TMDB";

const Movies = (): JSX.Element => {
  const [page, setPage] = useState(1);
  const { genreIdOrCategoryName, searchQuery } = useAppSelector(
    (state) => state.genreOrCategoryReducer
  );
  const theme = useTheme();
  // console.log(genreIdOrCategoryName,'names');
  const { data, error, isFetching } = useGetMoviesQuery({
    genreIdOrCategoryName,
    page,
    searchQuery,
  });
  // console.log(movies,'movies data');
  const totalPage = data?.total_page;
  const lg = useMediaQuery(theme.breakpoints.only("lg"));
  const numberOfMovies = lg ? 16 : 18;
  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (!data?.results?.length) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="gray"
        mt="20px"
      >
        <Typography variant="h4">
          No movies that match that name.
          <br />
          Please search for something else.
        </Typography>
      </Box>
    );
  }

  if (error) return <>"An error has occurred."</>;

  return (
    <div>
      <MovieList movies={data} numberOfMovies={numberOfMovies} />
      <Pagination currentPage={page} setPage={setPage} totalPage={totalPage} />
    </div>
  );
};

export default Movies;
