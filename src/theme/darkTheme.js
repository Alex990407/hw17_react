import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#bb86fc",
    },
    background: {
      default: "#121212",
      paper: "#1d1d1d",
    },
  },
});

export default darkTheme;
