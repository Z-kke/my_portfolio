import { Typography, Box, Slide } from "@mui/material";

export default function Work() {
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
          Where I have worked.
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas error
          incidunt explicabo tempora, quam tenetur ipsum molestiae nesciunt at
          eligendi, perspiciatis dolore. Quae, tempore. Facere dolor illo
          dignissimos quas deserunt?
        </Typography>
      </Box>
    </Slide>
  );
}
