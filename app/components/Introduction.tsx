import { Typography, Box, Slide } from "@mui/material";
import Typewriter from "typewriter-effect";

export default function Introduction() {
  return (
    <Slide direction="up" in={true} timeout={1000}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "start",
          textAlign: "center",
          my: 10, // TODO: move this styling to the parent.
        }}
      >
        <Typography variant="h1" gutterBottom>
          Hi, my name is
        </Typography>
        <Typography my={0} variant="h2" gutterBottom>
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
    </Slide>
  );
}
