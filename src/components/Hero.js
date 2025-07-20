import React from "react";
import { Box, Typography, Button, Stack, Slide, Fade } from "@mui/material";

const Hero = () => {
  return (
    <Box
      id="hero"
      sx={{
        pt: 10,
        pb: 8,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)"
      }}
    >
      <Fade in timeout={1000}>
        <Typography variant="h3" component="h1" gutterBottom fontWeight={700}>
          Ahmer Khan
        </Typography>
      </Fade>

      <Slide direction="up" in timeout={1200}>
        <Typography variant="h5" component="h2" gutterBottom>
          Software Engineer
        </Typography>
      </Slide>

      <Fade in timeout={1400}>
        <Typography variant="body1" color="inherit" mb={3}>
          Passionate about building web and mobile apps. Experienced with React, Firebase, WordPress and more.
        </Typography>
      </Fade>

      <Slide direction="up" in timeout={1600}>
        <Stack direction="row" spacing={2} flexWrap="wrap" justifyContent="center">
          <Button variant="contained" href="mailto:khanahmer774@gmail.com">
            Email Me
          </Button>
          <Button
            variant="outlined"
            href="https://github.com/AhmerKhan"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "#2196f3", borderColor: "#2196f3" }}
          >
            GitHub
          </Button>
          <Button
            variant="outlined"
            href="https://www.linkedin.com/in/AhmerKhan"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "#2196f3", borderColor: "#2196f3" }}
          >
            LinkedIn
          </Button>
          <Button variant="contained" color="secondary" href="#projects">
            View Projects
          </Button>
        </Stack>
      </Slide>
    </Box>
  );
};

export default Hero;
