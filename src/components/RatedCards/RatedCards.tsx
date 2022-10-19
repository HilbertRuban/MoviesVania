import { Box, Typography } from "@mui/material";
import { Movie } from "..";
import {
  IRatedMovieProps,
  IRatedMovies,
} from "../../Interface/Pages/RatedCards/RatedCards";
import useStyles from "./styles";

const RatedCards = ({ title, movies }: IRatedMovieProps) => {
  const { classes } = useStyles();
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Box display="flex" flexWrap="wrap" className={classes.container}>
        {movies?.results?.map((movie: IRatedMovies, i: number) => (
          <Movie key={movie.id} movie={movie} i={i} />
        ))}
      </Box>
    </Box>
  );
};

export default RatedCards;
