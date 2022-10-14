import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    movie: {
      padding: "10px",
    },
    links: {
      alignItems: "center",
      fontWeight: "bolder",
      textDecoration: "none",
      [theme.breakpoints.up("xs")]: {
        display: "flex",
        flexDirection: "column",
      },
      "&:hover": {
        cursor: "pointer",
      },
    },
    image: {
      borderRadius: "20px",
      opacity: ".8",
      height: "300px",
      marginBottom: "10px",
      transition: "all 0.5s",
      "&:hover": {
        opacity: "1",
        transform: "scale(1.05)",
      },
    },
    rating: {
      display: "flex",
      justifyContent: "center",
    },
    title: {
      color: theme.palette.text.primary,
      textOverflow: "ellipsis",
      fontSize: "20px",
      width: "230px",
      whiteSpace: "nowrap",
      overflow: "hidden",
      marginTop: "8px",
      marginBottom: "10",
      textAlign: "center",
    },
  };
});

export default useStyles;
