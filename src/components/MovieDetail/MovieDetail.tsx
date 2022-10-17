import {
  ArrowBack,
  Favorite,
  FavoriteBorderOutlined,
  Language,
  Movie as MovieIcon,
  PlusOne,
  Remove,
  Theaters,
} from "@mui/icons-material";
import {
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  Grid,
  Modal,
  Rating,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { genreIcons } from "../../assets/genres";
import { selectGenreOrCategory } from "../../features/currentGenreOrCategory";
import {
  ICast,
  IMovieDetailGenre,
} from "../../Interface/Pages/MovieDetail/MovieDetail";
import {
  useGetMovieQuery,
  useGetRecommendationsQuery,
} from "../../services/TMDB";
// import MovieList from "../MovieList/MovieList";
import { MovieList } from "..";
import useStyles from "./styles";

const MovieDetail = (): JSX.Element => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { classes } = useStyles();
  const { data, isFetching, error } = useGetMovieQuery(id);
  const { data: recommendations, isFetching: isRecommendationsFetching } =
    useGetRecommendationsQuery({
      list: "/recommendations",
      movie_id: id,
    });
  const isMovieFavorite = false;
  const isMovieWatchList = false;

  const addToFavorites = () => {};
  const addToWatchList = () => {};
  // console.log(recommendations, "recommend");

  if (isFetching) {
    <Box display="flex" justifyContent="center" alignItems="center">
      <CircularProgress size="8rem" />
    </Box>;
  }
  if (error) {
    <Box display="flex" justifyContent="center" alignItems="center">
      <Link to="/">Something has gone wrong - Go back</Link>
    </Box>;
  }
  // console.log(data, "data from MovieDetail");
  return (
    <>
      <ButtonGroup variant="contained" sx={{ marginBottom: "10px" }}>
        <Button
          endIcon={<ArrowBack />}
          sx={{
            borderColor: "primary.main",
          }}
          // className={classes.buttonFavorite}
        >
          <Typography
            component={Link}
            to="/"
            color="inherit"
            variant="subtitle2"
            style={{ textDecoration: "none" }}
          >
            Back
          </Typography>
        </Button>
      </ButtonGroup>

      <Grid container className={classes.containerSpaceAround}>
        <Grid item sm={12} lg={4}>
          <img
            className={classes.poster}
            src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
            alt={data?.title}
          />
          <ButtonGroup className={classes.buttonFW} sx={{ marginTop: "40px" }}>
            <ButtonGroup>
              <Button
                onClick={addToFavorites}
                endIcon={
                  isMovieFavorite ? <FavoriteBorderOutlined /> : <Favorite />
                }
                className={classes.buttonFavorite}
              >
                {isMovieFavorite ? "Unfavorite" : "Favorite"}
              </Button>
            </ButtonGroup>
            <ButtonGroup variant="contained" sx={{ marginLeft: "20px" }}>
              <Button
                onClick={addToWatchList}
                endIcon={isMovieWatchList ? <Remove /> : <PlusOne />}
                className={classes.watchlist}
              >
                Watchlist
              </Button>
            </ButtonGroup>
          </ButtonGroup>
        </Grid>
        <Grid item container direction="column" lg={7}>
          <Box className={classes.movieDetailContainer}>
            <Typography
              variant="h3"
              className={classes.movieTitle}
              align="center"
            >
              {data?.title} ({data?.release_date.split("-")[0]})
            </Typography>
            <Typography variant="h5" align="center" gutterBottom>
              {data?.tagline}
            </Typography>
            <Grid item className={classes.containerSpaceAround}>
              <Box style={{ display: "flex" }}>
                <Rating readOnly value={data?.vote_average / 2} />
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  style={{ marginLeft: "10px" }}
                >
                  {data?.vote_average.toFixed(1)} / 10
                </Typography>
              </Box>
              <Typography variant="h6" align="center">
                {data?.runtime}min{" "}
                {data?.spoken_languages.length > 0
                  ? ` / ${data?.spoken_languages[0]?.english_name}`
                  : ""}
              </Typography>
              <Tooltip disableTouchListener title="Watch Trailer">
                <MovieIcon
                  onClick={() => console.log("clicked")}
                  className={classes.movie}
                />
              </Tooltip>
            </Grid>
            <Grid item className={classes.genresContainer}>
              {data?.genres?.map((genre: IMovieDetailGenre, i: number) => (
                <Link
                  key={genre.name}
                  className={classes.links}
                  to="/"
                  onClick={() => dispatch(selectGenreOrCategory(genre?.id))}
                >
                  <img
                    src={genreIcons[genre?.name.toLocaleLowerCase()]}
                    className={classes.genreImage}
                    height={30}
                  />
                  <Typography variant="subtitle1" color="textPrimary">
                    {genre?.name}
                  </Typography>
                </Link>
              ))}
            </Grid>
          </Box>
          <Box className={classes.overviewCastContainer}>
            <Box className={classes.buttonWebsite}>
              <Typography variant="h5" style={{ margin: "10px 0" }}>
                Overview
              </Typography>
              <Button
                target="_blank"
                rel="noopener noreferrer"
                href={data?.homepage}
                endIcon={<Language />}
              >
                Website
              </Button>
            </Box>
            <Typography style={{ marginBottom: "2rem" }}>
              {data?.overview}
            </Typography>
            <Typography sx={{ marginBottom: "10px" }} variant="h5">
              Top Cast
            </Typography>
            <Grid item container spacing={2}>
              {data &&
                data.credits?.cast
                  ?.map(
                    (character: ICast, i: number) =>
                      character?.profile_path && (
                        <Grid
                          key={i}
                          item
                          xs={4}
                          md={2}
                          component={Link}
                          to={`/actors/${character?.id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <img
                            className={classes.castImage}
                            src={`https://image.tmdb.org/t/p/w500/${character?.profile_path}`}
                            alt={character?.name}
                          />
                          <Typography color="textPrimary">
                            {character?.name}
                          </Typography>
                          <Typography color="textSecondary">
                            {character?.character}
                          </Typography>
                        </Grid>
                      )
                  )
                  .slice(0, 12)}
            </Grid>
          </Box>
        </Grid>
        <Box marginTop="2rem" width="100%">
          <Typography sx={{ margin: "40px 0" }} variant="h4" align="center">
            You might also like
          </Typography>
          {recommendations ? (
            <MovieList movies={recommendations} numberOfMovies={12} />
          ) : (
            <Box>Sorry nothing was found</Box>
          )}
        </Box>
      </Grid>
    </>
  );
};

export default MovieDetail;
