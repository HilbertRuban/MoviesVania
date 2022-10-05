import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    navbar: {
      background: "linear-gradient(.25turn,#fff, #dee0f7);",
    },
    toolbar: {
      height: "80px",
      display: "flex",
      justifyContent: "space-between",
      marginLeft: "240px",
      [theme.breakpoints.down("sm")]: {
        marginLeft: 0,
        flexWrap: "wrap",
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
  };
});

export default useStyles;
