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
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          fontWeight={800}
          sx={{ color: "#00f9ff" }}
        >
          Ahmer Khan
        </Typography>
      </Fade>

      <Slide direction="up" in timeout={1200}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          fontWeight={600}
          sx={{ color: "#c5e3ff" }}
        >
          Software Engineer
        </Typography>
      </Slide>

      <Fade in timeout={1400}>
        <Typography variant="h6" color="inherit" mb={2} maxWidth="800px">
          Passionate about building web and mobile apps. Experienced with React, Firebase, WordPress and more.
        </Typography>
      </Fade>

      <Fade in timeout={1600}>
        <Typography
          variant="body1"
          color="inherit"
          maxWidth="800px"
          mb={5}
          sx={{ fontSize: "1.15rem", lineHeight: 1.9 }}
        >
          I&apos;m Ahmer Khan, a passionate Software Engineer and Web Developer with a solid foundation in{" "}
          <Typography component="span" sx={{ color: "#ffcc00", fontWeight: 600 }}>
            HTML
          </Typography>
          ,{" "}
          <Typography component="span" sx={{ color: "#ffcc00", fontWeight: 600 }}>
            CSS
          </Typography>
          ,{" "}
          <Typography component="span" sx={{ color: "#ffcc00", fontWeight: 600 }}>
            JavaScript
          </Typography>{" "}
          and{" "}
          <Typography component="span" sx={{ color: "#61dafb", fontWeight: 600 }}>
            React
          </Typography>
          . I specialize in building clean, responsive, and user-friendly web applications. I love turning ideas into real-world
          solutions through code and continuously strive to learn and grow in the ever-evolving
          tech landscape. Outside of development, I enjoy exploring emerging technologies and
          staying active.
        </Typography>
      </Fade>

      <Slide direction="up" in timeout={1800}>
        <Stack direction="row" spacing={2} flexWrap="wrap" justifyContent="center">
          <Button variant="contained" href="mailto:khanahmer774@gmail.com">
            Email Me
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#24292e",
              color: "#fff",
              "&:hover": { backgroundColor: "#1b1f23" }
            }}
            href="https://github.com/ahmerkhan774/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#0072b1",
              color: "#fff",
              "&:hover": { backgroundColor: "#005885" }
            }}
            href="https://www.linkedin.com/in/ahmer-khan-669085296"
            target="_blank"
            rel="noopener noreferrer"
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
