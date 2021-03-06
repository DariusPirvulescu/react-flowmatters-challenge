import React from "react";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import "./App.scss";
import NavBar from "./Navigation/Navbar";
import Header from "./Header";
import Links from "./Navigation/Links";
import SideBar from "./Navigation/Sidebar";
import Content from "./Content";
import BottomNav from "./Navigation/Bottom-nav/BottomNav";

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: { main: "#3B5998" },
      secondary: { main: "#f6f7f9" },
    },
    typography: {
      button: {
        textTransform: "none",
        // fontFamily: ["Helvetica Neue", "Arial"],
        fontWeight: 600,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <NavBar />
        <div className="main">
          <SideBar />
          <div className="page">
            <Header />
            <Links />
            <Content />
          </div>
        </div>
        <BottomNav />
      </div>
    </ThemeProvider>
  );
}

export default App;
