import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    featuredCardContainer: {
      marginBottom: "20px",
      display: "flex",
      justifyContent: "center",
      height: "490px",
    },
    card: {
      width: "100%",
      display: "flex",
      justifyContent: "flex-end",
      flexDirection: "column",
    },
    cardRoot: {
      position: "relative",
    },
    cardMedia: {
      position: "absolute",
      top: 0,
      right: 0,
      height: "100%",
      width: "100%",
      backgroundColor: "rgba(0,0,0,0.575)",
      backgroundBlendMode: "darken",
    },
    cardContent: {
      color: "#FFF",
      width: "40%",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
    cardContentRoot: {
      position: "relative",
      backgroundColor: "transparent",
    },
  };
});

export default useStyles;
