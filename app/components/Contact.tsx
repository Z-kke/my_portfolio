import { Typography, Box, Button, Slide } from "@mui/material";

export default function Contact() {
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
        <Typography variant="h4" gutterBottom sx={{ color: "#ccd6f6" }}>
          Contact
        </Typography>
        <Typography variant="body1" sx={{ color: "#8892b0", marginBottom: 2 }}>
          Get in touch with me for collaborations or job opportunities.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ backgroundColor: "#64ffda" }}
        >
          Say Hello
        </Button>
      </Box>
    </Slide>
  );
}
