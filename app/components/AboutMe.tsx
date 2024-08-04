import { Typography, Box, Slide } from "@mui/material";

export default function About() {
  return (
    <Slide direction="up" in={true} timeout={1000}>
      <Box
        sx={{
          padding: 4,
          textAlign: "center",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <Typography variant="h4" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
          quisquam placeat natus laboriosam commodi corporis! Nostrum non
          suscipit doloremque asperiores quis veritatis minus deleniti,
          excepturi, a laboriosam saepe dolores voluptas.
        </Typography>
      </Box>
    </Slide>
  );
}
