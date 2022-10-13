import { Grid, Grow, Rating, Tooltip, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { IMovieProps } from "../../Interface/Pages/Movie/Movie";

import useStyles from "./styles";
const Movie = ({ movie, i }: IMovieProps) => {
  const { classes } = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.movie}>
      <Typography className={classes.title} variant="h5">
        {movie.title}
      </Typography>
    </Grid>
  );
};

export default Movie;
