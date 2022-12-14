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
      opacity: "1",
      height: "300px",
      marginBottom: "10px",
      transition: "all 0.5s",
      "&:hover": {
        transform: "scale(1.05)",
        transition: "all 0.5s",
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
