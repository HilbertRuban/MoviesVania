import {
  AccountCircle,
  Brightness4,
  Brightness7,
  Menu
} from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  useMediaQuery
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Search, Sidebar } from "..";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Movies } from "../../components";
import { setUser } from "../../features/auth";
import { selectGenreOrCategory } from "../../features/currentGenreOrCategory";
import { IToggleColorMode } from "../../Interface/Pages/ToggleColorMode/ToggleColorMode";
import { createSessionId, fetchToken, moviesApi } from "../../utils";
import { ColorModeContext } from "../../utils/ToggleColorMode";
import useStyles from "./styles";
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");
  const colorMode = useContext(ColorModeContext);
  const { isAuthenticated, user } = useAppSelector(
    (state) => state.userReducer
  );
  // console.log(user, "from navbar user");
  const dispatch = useAppDispatch();
  const { classes } = useStyles();
  const isMobile = useMediaQuery("(max-width: 600px)");
  const theme = useTheme();

  const token = localStorage.getItem("request_token");
  const sessionIdFromLocalStorage = localStorage.getItem("session_id");

  useEffect(() => {
    const logInUser = async () => {
      if (token) {
        if (sessionIdFromLocalStorage) {
          const { data: userData } = await moviesApi.get(
            `/account?session_id=${sessionIdFromLocalStorage}`
          );
          // console.log(userData, "from existing session id");
          dispatch(setUser(userData));
        } else {
          const sessionId = await createSessionId();
          const { data: userData } = await moviesApi.get(
            `/account?session_id=${sessionId}`
          );
          // console.log(userData, "creating new session id");
          dispatch(setUser(userData));
        }
      }
    };
    logInUser();
  }, [token]);
  return (
    <>
      <AppBar className={classes.navbar} position="fixed">
        <Toolbar className={classes.toolbar}>
          {isMobile && (
            <IconButton
              color="inherit"
              style={{ outline: "none", color: "black" }}
              edge="start"
              onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              className={classes.menuButton}
            >
              <Menu />
            </IconButton>
          )}
          <IconButton
            sx={{
              ml: 1,
            }}
            onClick={colorMode!.toggleColorMode}
          >
            {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && <Search query={query} setQuery={setQuery} />}
          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={fetchToken}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to={`/profile/${user?.id}`}
                className={classes.linkButton}
                onClick={() => {}}
              >
                {!isMobile && <>My Movies &nbsp;</>}
                <Avatar
                  style={{
                    width: 30,
                    height: 30,
                  }}
                  alt="Profile"
                  src={`https://www.themoviedb.org/t/p/w64_and_h64_face${user?.avatar?.tmdb?.avatar_path}`}
                />
              </Button>
            )}
          </div>
          {isMobile && <Search query={query} setQuery={setQuery} />}
        </Toolbar>
      </AppBar>
      <div>
        <nav className={classes.drawer}>
          {isMobile ? (
            <Drawer
              open={mobileOpen}
              onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              classes={{ paper: classes.drawerPaper }}
              ModalProps={{ keepMounted: true }}
              className={classes.drawerColor}
            >
              <Sidebar
                query={query}
                setQuery={setQuery}
                setMobileOpen={setMobileOpen}
              />
            </Drawer>
          ) : (
            <Drawer
              className={classes.drawerColor}
              classes={{ paper: classes.drawerPaper }}
              variant="permanent"
              open
            >
              <Sidebar
                query={query}
                setQuery={setQuery}
                setMobileOpen={setMobileOpen}
              />
            </Drawer>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
