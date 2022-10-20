import { CssBaseline } from "@mui/material";
import { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import { Actors, MovieDetail, Movies, Navbar, Profile } from "./";
import useAlan from "./Alan";
import useStyles from "./styles";

const App = () => {
  const alanBtnContainer = useRef<HTMLDivElement | null>(null);
  useAlan();
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/approved" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/actors/:id" element={<Actors />} />
        </Routes>
      </main>
      <div ref={alanBtnContainer}/>
    </div>
  );
};

export default App;
