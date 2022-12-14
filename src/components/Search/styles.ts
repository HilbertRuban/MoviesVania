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
      color: theme.palette.mode === "light" ? "dark" : "light",
      filter: theme.palette.mode === "light" ? "invert(-1)" : "dark",
      [theme.breakpoints.down("sm")]: {
        marginTop: "-10px",
        marginBottom: "10px",
      },
    },
  };
});

export default useStyles;
