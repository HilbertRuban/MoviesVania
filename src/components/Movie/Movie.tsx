import { Grid, Grow, Rating, Tooltip, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { IMovieProps } from "../../Interface/Pages/Movie/Movie";

import useStyles from "./styles";
const Movie = ({ movie, i }: IMovieProps) => {
  const { classes } = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.movie}>
      <Grow in key={i} timeout={(i + 1) * 250}>
        <div>
          <Link className={classes.links} to={`/movie/${movie.id}`}>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : "https://www.fillmurray.com/200/300"
              }
              className={classes.image}
              alt={movie.title}
            />
          </Link>
          <Typography className={classes.title} variant="h5">
            {movie.title}
          </Typography>
          <Tooltip disableTouchListener title={`${movie?.vote_average} / 10`}>
            <div>
              <Rating
                readOnly
                value={
                  movie?.vote_average
                    ? movie.vote_average / 2
                    : movie.vote_average
                }
                className={classes.rating}
                precision={0.1}
              />
            </div>
          </Tooltip>
        </div>
      </Grow>
    </Grid>
  );
};

export default Movie;
