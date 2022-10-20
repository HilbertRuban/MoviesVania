import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createContext, useEffect, useMemo, useState } from "react";
import {
  IToggleColorMode,
  IToggleColorModeChildrenProps,
} from "../Interface/Pages/ToggleColorMode/ToggleColorMode";
export const ColorModeContext = createContext<IToggleColorMode | null>(null);

const ToggleColorMode = ({ children }: IToggleColorModeChildrenProps) => {
  const [mode, setMode] = useState(
    () => localStorage.getItem("mode") || "light"
  );
  const toggleColorMode = (): void => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );
  return (
    <ColorModeContext.Provider value={{ mode, setMode, toggleColorMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ToggleColorMode;
