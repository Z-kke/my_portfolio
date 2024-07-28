import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>
      <Box component="footer" sx={{ bgcolor: "grey.200", py: 2, mt: 8 }}>
        <Grid container justifyContent="center">
          <Grid item>
            <p style={{ textAlign: "center", color: "#4b5563" }}>
              © {new Date().getFullYear()} Saku Arho
            </p>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Layout;
