import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    emptyList: {
      textAlign: "center",
      padding: "100px",
      letterSpacing: "1px",
      color: "gray",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
  };
});

export default useStyles;
