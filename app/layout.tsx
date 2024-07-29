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
            <Box component="footer" sx={{ py: 2, mt: 8 }}>
              <Grid container justifyContent="center">
                <Grid item>
                  <Typography variant="h1">
                    © {new Date().getFullYear()} Saku Arho
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </MuiThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
