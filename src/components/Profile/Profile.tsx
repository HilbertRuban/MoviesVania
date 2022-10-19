import { ExitToApp } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { useEffect } from "react";
import { RatedCards } from "..";
import { useAppSelector } from "../../app/hooks";
import { useGetListQuery } from "../../services/TMDB";
import useStyles from "./styles";
const Profile = () => {
  const { user } = useAppSelector((state) => state.userReducer);
  const { classes } = useStyles();
  const { data: favoriteMovies, refetch: refetchFavorite } = useGetListQuery({
    listName: "favorite/movies",
    accountId: user?.id,
    sessionId: localStorage.getItem("session_id"),
    page: 1,
  });
  const { data: watchListMovies, refetch: refetchWatchList } = useGetListQuery({
    listName: "watchlist/movies",
    accountId: user?.id,
    sessionId: localStorage.getItem("session_id"),
    page: 1,
  });

  useEffect(() => {
    refetchFavorite();
    refetchWatchList();
  }, []);

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>
          My Profile
        </Typography>
        <Button color="inherit" onClick={logout}>
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>
      {!favoriteMovies?.results?.length ? (
        <>
          <p style={{ fontSize: "22px" }}>Favorite Movies</p>
          <Typography variant="h5" className={classes.emptyList}>
            No movies are available in your FavoriteList
          </Typography>
        </>
      ) : (
        <Box>
          <RatedCards title="Favorite Movies" movies={favoriteMovies} />
        </Box>
      )}
      {!watchListMovies?.results?.length ? (
        <>
          <p style={{ fontSize: "22px" }}>Watchlist</p>
          <Typography variant="h5" className={classes.emptyList}>
            No movies are available in your WatchList
          </Typography>
        </>
      ) : (
        <Box>
          <RatedCards title="Watchlist" movies={watchListMovies} />
        </Box>
      )}
    </Box>
  );
};

export default Profile;
