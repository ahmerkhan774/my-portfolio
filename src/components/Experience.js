import React from "react";
import { Box, Typography, Container, Grid, Paper, Stack, Chip } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";

const experiences = [
  {
    title: "Web Developer",
    company: "Teleup",
    duration: "Jan 2023 – Jul 2023",
    description: [
      "Contributed to front-end development using HTML, CSS, JavaScript, and React.",
      "Collaborated with cross-functional teams to improve UI/UX and platform responsiveness."
    ],
    tools: ["HTML", "CSS", "JavaScript", "React"]
  },
  {
    title: "Web Developer – Trainee",
    company: "XistIT",
    duration: "Aug 2022 – Sep 2022",
    description: [
      "Completed WordPress training on building responsive, user-friendly websites.",
      "Gained hands-on experience in plugin integration, theme customization, and optimization."
    ],
    tools: ["WordPress", "Elementor", "Plugins"]
  }
];

const Experience = () => {
  return (
    <Box id="experience" sx={{ py: 8, bgcolor: "background.default" }}>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          component="h2"
          fontWeight={700}
          textAlign="center"
          mb={5}
        >
          Professional Experience
        </Typography>

        <Grid container spacing={4}>
          {experiences.map((exp, index) => (
            <Grid item xs={12} key={index}>
              <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
                <Stack direction="row" alignItems="center" spacing={2} mb={1}>
                  <WorkIcon color="primary" />
                  <Typography variant="h6" fontWeight={600}>
                    {exp.title} – {exp.company}
                  </Typography>
                </Stack>

                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  {exp.duration}
                </Typography>

                <ul style={{ marginLeft: "1rem" }}>
                  {exp.description.map((item, idx) => (
                    <li key={idx}>
                      <Typography variant="body2" color="text.secondary">
                        {item}
                      </Typography>
                    </li>
                  ))}
                </ul>

                <Stack direction="row" spacing={1} mt={2} flexWrap="wrap">
                  {exp.tools.map((tool, idx) => (
                    <Chip key={idx} label={tool} variant="outlined" />
                  ))}
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Experience;
