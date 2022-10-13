import { makeStyles } from "tss-react/mui";

const drawerWidth = 240;

const useStyles = makeStyles()((theme) => {
  return {
    navbar: {
      // background: "linear-gradient(to right,#fff,#fff, #ffe6e6);",
      backgroundColor: "#ff9999",
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
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    drawerPaper: {
      width: drawerWidth,
    },
    linkButton: {
      "&:hover": {
        color: "white !important",
        textDecoration: "none",
      },
    },
  };
});

export default useStyles;
