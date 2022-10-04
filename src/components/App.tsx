import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import  useStyles  from "./styles";
import { Actors, MovieDetail, Movies, Navbar, Profile } from "./";

const App = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar}/>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/actors/:id" element={<Actors />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
