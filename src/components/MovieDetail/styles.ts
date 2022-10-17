import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    containerSpaceAround: {
      display: "flex",
      justifyContent: "center",
      gap: "30px",
      margin: "10px 0 !important",
      [theme.breakpoints.down("md")]: {},
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        // fontSize: "2px",
      },
    },
    poster: {
      borderRadius: "20px",
      boxShadow: "0.5em 1em 1em rgb(64,64,70)",
      width: "80%",
      [theme.breakpoints.down("md")]: {
        display: "flex",
        margin: "0 auto",
        width: "50%%",
        height: "380px",
      },
      [theme.breakpoints.down("sm")]: {
        margin: "0 auto",
        width: "100%",
        height: "350px",
        marginBottom: "30px",
      },
    },
    movieDetailContainer: {
      [theme.breakpoints.down("md")]: {
        marginTop: "-60px",
      },
      [theme.breakpoints.down("sm")]: {
        marginTop: "-70px",
      },
    },
    buttonFW: {
      [theme.breakpoints.down("md")]: {
        position: "relative",
        top: "220px",
      },
      [theme.breakpoints.down("sm")]: {
        position: "relative",
        top: "320px",
      },
    },
    movieTitle: {
      [theme.breakpoints.down("md")]: {
        fontSize: "40px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "30px",
      },
    },
    genresContainer: {
      margin: "10px 0 !important",
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
    },
    genreImage: {
      filter: theme.palette.mode === "dark" ? "invert(1)" : "light",
      marginRight: "10px",
    },
    overviewCastContainer: {
      [theme.breakpoints.down("md")]: {
        marginTop: "70px",
      },
      [theme.breakpoints.down("sm")]: {
        marginTop: "50px",
      },
    },
    links: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textDecoration: "none",
      [theme.breakpoints.down("sm")]: {
        padding: "0.5rem 1rem",
      },
    },
    castImage: {
      width: "100%",
      maxWidth: "7em",
      height: "8em",
      objectFit: "cover",
      borderRadius: "10px",
    },
    buttonsContainer: {
      display: "flex",
      justifyContent: "center",
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
      },
    },
    buttonFavorite: {
      borderColor: "gray !important",
      color: "#FF0000 !important",
      "&:hover": {
        backgroundColor: "#ffe6e6 !important",
      },
    },
    buttonWebsite: {
      display: "flex",
      gap: "10px",
    },
    watchlist: {
      backgroundColor: "#ff9999 !important",
      "&:hover": {
        opacity: ".8",
      },
    },
    movie: {
      color: "gray !important",
      fontSize: "35px",
      "&:hover": {
        cursor: "pointer",
      },
    },
  };
});

export default useStyles;
