import { Search as SearchIcon } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { searchMovie } from "../../features/currentGenreOrCategory";
import useStyles from "./styles";
const Search = () => {
  const [query, setQuery] = useState("");
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { classes } = useStyles();
  const handleKeyPress = (e: React.KeyboardEventHandler<HTMLDivElement>): void => {
    // console.log(e.key,'eeeeeeeee');
    if(e.key === 'Enter') {
      dispatch(searchMovie(query))
    }
  };
  if (location.pathname !== '/') return null;
  return (
    <div className={classes.searchContainer}>
      <TextField
        onKeyPress={handleKeyPress}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="standard"
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
