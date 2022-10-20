import { makeStyles } from "tss-react/mui";

const drawerWidth = 240;

const useStyles = makeStyles()((theme) => {
  return {
    navbar: {
      backgroundColor: theme.palette.mode === "light" ? "#FF9999" : "	#700000 ",
      transition: "all .5s",
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
    drawerColor: {
      transition: "all .5s",
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
