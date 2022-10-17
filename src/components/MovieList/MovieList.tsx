import { Grid } from "@mui/material";
import { Movie } from "..";
import { IMovieRecommendations } from "../../Interface/Pages/MovieDetail/MovieRecommendations";
import {
  IMovies,
  IMoviesProps,
} from "../../Interface/Pages/MovieList/MovieList";
import useStyles from "./styles";

const MovieList = ({ movies, numberOfMovies }: IMoviesProps) => {
  // console.log(movies,'movies from movie list')
  const { classes } = useStyles();
  return (
    <Grid container className={classes.moviesContainer}>
      {movies?.results
        ?.slice(0, numberOfMovies)
        .map((movie: IMovies, i: number) => (
          <Movie key={i} movie={movie} i={i} />
        ))}
    </Grid>
  );
};

export default MovieList;
