import {
  ArrowBack,
  Favorite,
  FavoriteBorderOutlined,
  Language,
  Movie as MovieIcon,
  PlusOne,
  Remove
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
  useMediaQuery
} from "@mui/material";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { genreIcons } from "../../assets/genres";
import { selectGenreOrCategory } from "../../features/currentGenreOrCategory";
import {
  ICast,
  IMovieDetailGenre
} from "../../Interface/Pages/MovieDetail/MovieDetail";
import { IMovies } from "../../Interface/Pages/MovieList/MovieList";
import {
  useGetListQuery,
  useGetMovieQuery,
  useGetRecommendationsQuery
} from "../../services/TMDB";
// import MovieList from "../MovieList/MovieList";
import { useEffect, useState } from "react";
import { MovieList } from "..";
import useStyles from "./styles";

const MovieDetail = (): JSX.Element => {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [isMovieFavorite, setIsMovieFavorite] = useState(false);
  const [isMovieWatchList, setIsMovieWatchList] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { classes } = useStyles();
  const { user } = useAppSelector((state) => state.userReducer);
  const { data, isFetching, error } = useGetMovieQuery(id);
  const { data: recommendations, isFetching: isRecommendationsFetching } =
    useGetRecommendationsQuery({
      list: "/recommendations",
      movie_id: id,
    });
  const { data: favoriteMovies } = useGetListQuery({
    listName: "favorite/movies",
    accountId: user?.id,
    sessionId: localStorage.getItem("session_id"),
    page: 1,
  });
  const { data: watchListMovies } = useGetListQuery({
    listName: "watchlist/movies",
    accountId: user?.id,
    sessionId: localStorage.getItem("session_id"),
    page: 1,
  });

  useEffect(() => {
    setIsMovieFavorite(
      !!favoriteMovies?.results?.find(
        (movie: IMovies) => movie?.id === data?.id
      )
    );
  }, [favoriteMovies, data]);

  useEffect(() => {
    setIsMovieWatchList(
      !!watchListMovies?.results?.find(
        (movie: IMovies) => movie?.id === data?.id
      )
    );
  }, [watchListMovies, data]);

  const addToFavorites = async () => {
    await axios.post(
      `https://api.themoviedb.org/3/account/${user?.id}/favorite?api_key=${
        import.meta.env.VITE_REACT_APP_TMDB_KEY
      }&session_id=${localStorage.getItem("session_id")}`,
      {
        media_type: "movie",
        media_id: id,
        favorite: !isMovieFavorite,
      }
    );

    setIsMovieFavorite((prev) => !prev);
  };
  const addToWatchList = async () => {
    await axios.post(
      `https://api.themoviedb.org/3/account/${user?.id}/watchlist?api_key=${
        import.meta.env.VITE_REACT_APP_TMDB_KEY
      }&session_id=${localStorage.getItem("session_id")}`,
      {
        media_type: "movie",
        media_id: id,
        watchList: !isMovieWatchList,
      }
    );

    setIsMovieWatchList((prev) => !prev);
  };
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
          onClick={() => navigate(-1)}
          endIcon={<ArrowBack />}
          sx={{
            borderColor: "primary.main",
          }}
          // className={classes.buttonFavorite}
        >
          <Typography
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
                className={classes.watchList}
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
                {data?.runtime}min | Language:{" "}
                {data?.spoken_languages[0]?.english_name}
              </Typography>
              <Tooltip disableTouchListener title="Watch Trailer">
                <MovieIcon
                  onClick={() => setOpen(true)}
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
          {recommendations?.results.length ? (
            <MovieList movies={recommendations} numberOfMovies={12} />
          ) : (
            <Box>Sorry nothing was found</Box>
          )}
        </Box>
        {/* {console.log(data?.videos?.results?.[0].key, "data of movie")} */}
        <Modal
          closeAfterTransition
          className={classes.modal}
          open={open}
          onClose={() => setOpen(false)}
        >
          <>
            {data?.videos?.results?.length > 0 && (
              <iframe
                frameBorder="0"
                className={classes.video}
                title="Trailer"
                src={`https://www.youtube.com/embed/${data?.videos?.results?.[0].key}`}
                allow="autoplay"
              />
            )}
          </>
        </Modal>
      </Grid>
    </>
  );
};

export default MovieDetail;
