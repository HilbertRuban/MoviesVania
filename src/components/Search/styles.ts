import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    searchContainer: {
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
      },
    },
    input: {
      color: theme.palette.mode === "light" ? "black" : "light",
      // filter: theme.palette.mode === 'light' ? 'invert(1)' : 'light',
      [theme.breakpoints.down("sm")]: {
        marginTop: "-10px",
        marginBottom: "10px",
      },
    },
  };
});

export default useStyles;
