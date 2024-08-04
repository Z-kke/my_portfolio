import { Typography, Box, Slide } from "@mui/material";

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
        <Typography variant="h3" gutterBottom>
          I build things for the web.
        </Typography>
        <Typography variant="body1">
          I'm a software engineer specializing in building and designing great
          digital experiences.
        </Typography>
      </Box>
    </Slide>
  );
}
