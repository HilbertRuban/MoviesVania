import {
  Box,
  CircularProgress,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { genreIcons } from "../../assets/genres";
import { categories } from "../../constants/constants";
import { ISidebarProps } from "../../Interface/Pages/Sidebar/Sidebar";
import useStyles from "./styles";

import { selectGenreOrCategory } from "../../features/currentGenreOrCategory";

import { useGetGenresQuery } from "../../services/TMDB";

const redLogo =
  "https://fontmeme.com/permalink/221006/be5948abafa4fb7e3f0e91e946763d28.png";

const Sidebar = ({ setMobileOpen }: ISidebarProps) => {
  const { genreIdOrCategoryName } = useAppSelector(
    (state) => state.genreOrCategoryReducer
  );
  const theme = useTheme();
  const { classes } = useStyles();
  const { data, isFetching } = useGetGenresQuery();
  const dispatch = useAppDispatch();
  // console.log(data, 'genres');
  // console.log(genreIdOrCategoryName,'names');
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
            <ListItem
              onClick={() => dispatch(selectGenreOrCategory(value))}
              button
            >
              <ListItemIcon>
                <img
                  src={genreIcons[label.toLocaleLowerCase()]}
                  className={classes.genreImage}
                  width={30}
                  height={30}
                />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />

      <List>
        <ListSubheader>Genres</ListSubheader>
        {isFetching ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        ) : (
          data?.genres?.map(({ id, name }: { id: number; name: string }) => (
            <Link key={name} className={classes.links} to="/">
              <ListItem
                onClick={() => dispatch(selectGenreOrCategory(id))}
                button
              >
                <ListItemIcon>
                  <img
                    src={genreIcons[name.toLocaleLowerCase()]}
                    className={classes.genreImage}
                    width={30}
                    height={30}
                  />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            </Link>
          ))
        )}
      </List>
    </>
  );
};

export default Sidebar;
