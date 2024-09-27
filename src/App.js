import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import lightTheme from "./theme/lightTheme";
import darkTheme from "./theme/darkTheme";
import "./App.css";

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: "20px",
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  useEffect(() => {
    document.body.style.backgroundColor =
      currentTheme.palette.background.default;
  }, [currentTheme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <div style={{ textAlign: "center", padding: "20px" }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {isDarkMode ? "Dark Theme" : "Light Theme"}
        </Typography>
        <StyledButton onClick={toggleTheme} variant="contained">
          Toggle Theme
        </StyledButton>
      </div>
    </ThemeProvider>
  );
}

export default App;
