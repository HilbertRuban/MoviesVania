import { ArrowBack } from "@mui/icons-material";
import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetActorsQuery,
  useGetMovieByActorQuery,
} from "../../services/TMDB";
import {MovieList} from '..'
import useStyles from "./styles";

const Actors = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { classes } = useStyles();
  const page = 1;
  const { data, isFetching, error } = useGetActorsQuery(id);
  const { data: actorMovies } = useGetMovieByActorQuery({ id, page });

  if (isFetching) {
    <Box display="flex" justifyContent="center" alignItems="center">
      <CircularProgress size="8rem" />
    </Box>;
  }
  if (error) {
    <Box display="flex" justifyContent="center" alignItems="center">
      <Button
        startIcon={<ArrowBack />}
        onClick={() => navigate(-1)}
        color="primary"
      >
        Go Back
      </Button>
    </Box>;
  }

  return (
    <>
      <Grid container spacing={3}>
        <Grid item lg={5} xl={4}>
          <img
            src={`https://image.tmdb.org/t/p/w780/${data?.profile_path}`}
            className={classes.image}
            alt={data?.name}
          />
        </Grid>
        <Grid
          item
          lg={7}
          xl={8}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h2" gutterBottom>
            {data?.name}
          </Typography>
          <Typography variant="h5" gutterBottom>
            Born: {new Date(data?.birthday).toDateString()}
          </Typography>
          <Typography variant="body1" align="justify" paragraph>
            {data?.biography ||
              `Sorry, no biography is available for ${data?.name}.`}
          </Typography>
          <Box marginTop="2rem" display="flex" justifyContent="space-around">
            <Button
              variant="contained"
              color="primary"
              target="_blank"
              href={`https://www.imdb.com/name/${data?.imdb_id}`}
            >
              IMDB
            </Button>
            <Button
              startIcon={<ArrowBack />}
              onClick={() => navigate(-1)}
              color="primary"
            >
              Back
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box margin="2rem 0">
        <Typography variant="h2" align="center" gutterBottom>
          Movies
        </Typography>
        {actorMovies && <MovieList movies={actorMovies} numberOfMovies={12}/>}
      </Box>
    </>
  );
};

export default Actors;
