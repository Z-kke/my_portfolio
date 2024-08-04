import * as React from "react";
import "./globals.css";
import { Box, Grid, Typography } from "@mui/material";
import MuiThemeProvider from "./components/theme-provider";

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>My Portfolio</title>
      </head>
      <body>
        <MuiThemeProvider>
          <Box
            sx={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box component="main" sx={{ flexGrow: 1 }}>
              {children}
            </Box>
          </Box>
        </MuiThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
