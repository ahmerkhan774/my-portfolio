import React from "react";
import { Box, Typography, Container } from "@mui/material";

const About = () => {
  return (
    <Box id="about" sx={{ py: 8, bgcolor: "background.paper" }}>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          component="h2"
          align="center"
          gutterBottom
          fontWeight={700}
        >
          About Me
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          paragraph
          textAlign="center"
        >
          I&apos;m a passionate Software Engineer with hands-on experience in
          building responsive web and mobile applications. My interests lie in
          Web Development, Mobile Apps, and UI/UX design. I specialize in
          React, Firebase, WordPress, and MySQL.
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          paragraph
          textAlign="center"
        >
          I&apos;ve developed and delivered real-world projects across
          industries like education, e-commerce, hospitality, and vehicle
          service management. I&apos;m always eager to learn new technologies
          and improve my skills.
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
