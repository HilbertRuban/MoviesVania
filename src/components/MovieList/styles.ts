import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    moviesContainer: {
      display: "flex",
      flexWrap: "wrap",
      overflowX: "hidden",
      [theme.breakpoints.down("sm")]: {
        justifyContent: "center",
      },
    },
  };
});

export default useStyles;
