"use client";

import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0a192f",
    },
    secondary: {
      main: "#6c757d",
    },
    background: {
      default: "#0a192f",
    },
    text: {
      primary: "#8892b0",
    },
  },
  typography: {
    fontFamily: "sans-serif",
    h1: {
      fontFamily: "monospace",
      fontWeight: 300,
      fontSize: "1.2rem",
      color: "#ffd700",
    },
    h2: {
      color: "#ccd6f6",
    },
  },
  spacing: 8,
});

export default function MuiThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
