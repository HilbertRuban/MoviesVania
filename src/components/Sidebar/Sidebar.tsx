import {
  Box,
  CircularProgress,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { ISidebarProps } from "../../Interface/Pages/Sidebar/Sidebar";
import useStyles from "./styles";
const categories = [
  {
    label: "Popular",
    value: "popular",
  },
  {
    label: "Top Rated",
    value: "top_rated",
  },
  {
    label: "Upcoming",
    value: "upcoming",
  },
];

const demoCategories = [
  {
    label: "Action",
    value: "action",
  },
  {
    label: "Adventure",
    value: "adventure",
  },
  {
    label: "Anime",
    value: "anime",
  },
  {
    label: "Horror",
    value: "horror",
  },
  {
    label: "Comedy",
    value: "comedy",
  },
];

const redLogo =
  "https://fontmeme.com/permalink/221006/be5948abafa4fb7e3f0e91e946763d28.png";
// const blueLogo =
//   "https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png";

const Sidebar = ({ setMobileOpen }: ISidebarProps) => {
  const theme = useTheme();
  const { classes } = useStyles();
  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img className={classes.image} src={redLogo} alt="MoviesVania logo" />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem onClick={() => {}} button>
              {/* <ListItemIcon>
                <img src={redLogo} className={classes.genreImage} width={130} height={30} />
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />

      <List>
        <ListSubheader>Genres</ListSubheader>
        {demoCategories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem onClick={() => {}} button>
              {/* <ListItemIcon>
                <img src={redLogo} className={classes.genreImage} width={130} height={30} />
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
};

export default Sidebar;
