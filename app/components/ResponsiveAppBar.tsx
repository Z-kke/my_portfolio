"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import DownloadIcon from "@mui/icons-material/Download";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import LogoSvg from "./LogoSvg";

interface Props {
  pages: string[];
  logo?: string;
}

function HideOnScroll({ children }: { children: React.ReactElement }) {
  const trigger = useScrollTrigger({
    target: typeof window !== "undefined" ? window : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function ResponsiveAppBar({ pages, logo = "LOGO" }: Props) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <HideOnScroll>
      <AppBar position="sticky" color="primary">
        <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Toolbar
            disableGutters
            sx={{ justifyContent: "space-between", minHeight: "64px" }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#"
                sx={{
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <LogoSvg />
              </Typography>
            </Box>

            <Box sx={{ display: { xs: "flex", sm: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{ color: "#FF6B3D" }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", sm: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography variant="h1" textAlign="center">
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  padding: 0,
                  margin: 0,
                  alignItems: "center",
                }}
              >
                {pages.map((page, index) => (
                  <li key={page} style={{ margin: "0 6px" }}>
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{
                        color: "white",
                        display: "block",
                        px: 0,
                        textTransform: "none",
                        fontSize: "0.75rem",
                        "&:hover": {
                          backgroundColor: "rgba(255, 107, 61, 0.1)",
                        },
                      }}
                    >
                      <span style={{ marginRight: "0.5rem", color: "#FF6B3D" }}>
                        {`0${index + 1}.`}
                      </span>
                      {page}
                    </Button>
                  </li>
                ))}
                <li style={{ margin: "0 8px" }}>
                  <Button
                    variant="outlined"
                    startIcon={<DownloadIcon />}
                    href="/path-to-your-resume.pdf"
                    download
                    sx={{
                      color: "#FF6B3D",
                      borderColor: "#FF6B3D",
                      textTransform: "none",
                      fontSize: "1rem",
                      padding: "6px 16px",
                      "&:hover": {
                        backgroundColor: "rgba(255, 107, 61, 0.1)",
                        borderColor: "#FF6B3D",
                      },
                    }}
                  >
                    Resume
                  </Button>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
}

export default ResponsiveAppBar;
