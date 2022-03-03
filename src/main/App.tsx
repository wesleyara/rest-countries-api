import React, { useState } from "react";
import Header from "./Components/Header";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import { lightTheme, darkTheme } from "./Styles/themes";
import Router from "./Components/Route";

function App() {
  const [theme, setTheme] = useState("light");

  const themeSelect = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Header function={themeSelect} />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
