import alanBtn from "@alan-ai/alan-sdk-web";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import {
  searchMovie,
  selectGenreOrCategory,
} from "../features/currentGenreOrCategory";
import { IAlanProps, IGenre } from "../Interface/Pages/Alan/Alan";
import { fetchToken } from "../utils";
import { ColorModeContext } from "../utils/ToggleColorMode";
const useAlan = () => {
  const colorMode = useContext(ColorModeContext);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    alanBtn({
      key: "45cd65773dcd58823c340462e17baa6d2e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({
        command,
        genres,
        mode,
        genreOrCategory,
        query,
      }: IAlanProps): void => {
        if (command === "chooseGenre") {
          const foundGenre = genres.find(
            (g: IGenre) =>
              g.name.toLowerCase() === genreOrCategory.toLowerCase()
          );
          if (foundGenre) {
            navigate("/");
            dispatch(selectGenreOrCategory(foundGenre.id));
          } else {
            const category = genreOrCategory.startsWith("top")
              ? "top_rated"
              : genreOrCategory;
            navigate("/");
            dispatch(selectGenreOrCategory(category));
          }
        } else if (command === "changeMode") {
          if (mode === "light") {
            colorMode!.setMode("light");
          } else {
            colorMode!.setMode("dark");
          }
        } else if (command === "login") {
          fetchToken();
        } else if (command === "logout") {
          localStorage.clear();
          window.location.href = "/";
        } else if (command === "search") {
          dispatch(searchMovie(query));
        }
      },
    });
  }, []);
};

export default useAlan;
