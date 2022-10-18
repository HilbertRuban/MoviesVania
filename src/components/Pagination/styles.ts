import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    button: {
      margin: "30px 2px",
    },
    pageNumber: {
      margin: "0 20px !important",
      color: theme.palette.text.primary,
    },
  };
});

export default useStyles;
