import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Container
} from "@mui/material";

// Icons
import CodeIcon from "@mui/icons-material/Code";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import DesignServicesIcon from "@mui/icons-material/DesignServices";

const services = [
  {
    icon: <CodeIcon fontSize="large" color="primary" />,
    title: "Web Development",
    description: "HTML, CSS, JavaScript, React.js, WordPress, Node.js, MySQL."
  },
  {
    icon: <CodeIcon fontSize="large" color="primary" />,
    title: "Web App Development",
    description: "HTML, CSS, JavaScript, React.js, WordPress, Node.js, MySQL."
  },
  {
    icon: <PhoneIphoneIcon fontSize="large" color="primary" />,
    title: "Mobile App Development",
    description: "Flutter-based mobile applications with clean UI and Firebase integration."
  },
  {
    icon: <DesignServicesIcon fontSize="large" color="primary" />,
    title: "UI/UX Design",
    description: "Using Figma to design modern, user-friendly interfaces."
  }
];

const SkillsAndServices = () => {
  return (
    <Box id="skills" sx={{ py: 8, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          align="center"
          fontWeight={600}
          gutterBottom
          mb={6}
        >
          Skills & interests
        </Typography>

        <Box
          display="grid"
          gridTemplateColumns={{
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)"
          }}
          gap={4}
        >
          {services.map((service, index) => (
            <Card
              key={index}
              elevation={3}
              sx={{ borderRadius: 2 }}
            >
              <CardContent
                sx={{
                  textAlign: "center",
                  minHeight: 200,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                {service.icon}
                <Typography
                  variant="h6"
                  mt={2}
                  gutterBottom
                  fontWeight={600}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default SkillsAndServices;
