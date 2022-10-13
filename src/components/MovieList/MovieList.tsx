import { Grid } from "@mui/material";
import { IMovies, IMoviesProps } from '../../Interface/Pages/MovieList/MovieList'
import { Movie } from "..";
import useStyles from "./styles";
type Movies = string | number | boolean;

const MovieList = ({ movies }: IMoviesProps) => {
  const { classes } = useStyles();
  return (
    <Grid container className={classes.moviesContainer}>
      {movies.map((movie: IMovies, i: number) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </Grid>
  );
};

export default MovieList;
