import { createTheme } from "@mui/material";
const Theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#E71F34",
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
  },
  typography: {
    fontFamily: "Inter",
  },
  overrides: {},
});

export default Theme;
