import { Search as SearchIcon } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { searchMovie } from "../../features/currentGenreOrCategory";
import { ISearchProps } from "../../Interface/Pages/Search/Search";
import useStyles from "./styles";
const Search = ({ query, setQuery }: ISearchProps) => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { classes } = useStyles();
  const handleKeyPress = (e: React.KeyboardEvent<HTMLElement>) => {
    // console.log(e.key,'eeeeeeeee');
    if (e.key === "Enter") {
      dispatch(searchMovie(query));
    }
    return;
  };
  if (location.pathname !== "/") return null;
  return (
    <div className={classes.searchContainer}>
      <TextField
        onKeyPress={handleKeyPress}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="standard"
        placeholder="Search Movie"
        InputProps={{
          className: classes.input,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default Search;
