import { Typography, Box, Slide, Grid } from "@mui/material";
import Typewriter from "typewriter-effect";

export default function Introduction() {
  return (
    <Slide direction="up" in={true} timeout={1000}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "50vh" }}
      >
        <Grid item xs={12} sm={10} md={8} lg={6} xl={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              textAlign: "left",
            }}
          >
            <Typography variant="h1" gutterBottom>
              Hi, my name is
            </Typography>
            <Typography my={0} variant="h3" gutterBottom>
              Saku Arho
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                fontFamily: "monospace",
                color: "#FF6B3D",
                my: 2,
                padding: 1,
                border: 1,
                borderRadius: 3,
                width: "fit-content",
                maxWidth: "100%",
              }}
            >
              I am&nbsp;
              <Typewriter
                options={{
                  strings: ["a software engineer.", "a full-stack developer."],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Slide>
  );
}
