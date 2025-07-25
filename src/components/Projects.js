import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Container,
  Chip,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import ImageIcon from "@mui/icons-material/Image";

const projectList = [
   {
    title: "Vehicle Service Booking System",
    description: "Allows users to book vehicle services online with admin panel controls.",
    tools: ["React", "Vite", "Bootstrap", "Firebase"],
    github: "https://github.com/ahmerkhan774/vehicle-service-system",
    thumbnail: "/images/vehicle_1.png",
    screenshots: ["/images/vehicle_1.png",
      "/images/vehicle_2.png",
      "/images/vehicle_3.png",
      "/images/vehicle_4.png",
      "/images/vehicle_5.png",
      "/images/vehicle_6.png",
      "/images/vehicle_7.png",
      "/images/vehicle_8.png",
      "/images/vehicle_9.png",
      "/images/vehicle_10.png",
      "/images/vehicle_11.png",
      "/images/vehicle_12.png",
      "/images/vehicle_13.png",
      "/images/vehicle_14.png",
      "/images/vehicle_15.png",
      "/images/vehicle_16.png",
      
    ],
  },
  {
    title: "Hotel Booking System",
    description: "Automates hotel room bookings, check-ins, checkouts, and reports.",
    tools: ["React", "Vite", "Firebase", "Material ui"],
    github: "https://github.com/ahmerkhan774/hotel-management-app",
    thumbnail: "/images/hotel_1.png",
    screenshots: ["/images/hotel_1.png",
      "/images/hotel_2.png",
      "/images/hotel_3.png",
      "/images/hotel_4.png",
      "/images/hotel_5.png",
      "/images/hotel_6.png",
      "/images/hotel_7.png",
    ],
  },
  {
    title: "Aust Voice - Flutter Version",
    description: "A social media mobile app for AUST students with Firebase backend.",
    tools: ["Flutter", "Firebase","Dart"],
    github: "https://github.com/yourusername/aust-voice-flutter",
    thumbnail: "/images/aust_flutter_1.jpeg",
    screenshots: [
      "/images/aust_flutter_1.jpeg",
      "/images/aust_flutter_2.jpeg",
      "/images/aust_flutter_3.jpeg",
      "/images/aust_flutter_4.jpeg",
      "/images/aust_flutter_5.jpeg",
      "/images/aust_flutter_6.jpeg",
    ],
  },
  {
    title: "Aust Voice - React Version",
    description: "Web version of the Aust Voice app built using React.js and Firebase.",
    tools: ["React", "Firebase", "CSS"],
    github: "https://github.com/ahmerkhan774/aust-voice-web",
    thumbnail: "/images/aust_react_1.png",
    screenshots: ["/images/aust_react_1.png",
      "/images/aust_react_2.png",
      "/images/aust_react_3.png",
      "/images/aust_react_4.png",
      "/images/aust_react_5.png",
      "/images/aust_react_6.png",
    ],
  },
  {
    title: "Gym Management System",
    description: "A web-based solution to manage gym subscriptions, members, and payments.",
    tools: ["Html", "CSS", "Xampp"],
    github: "https://github.com/ahmerkhan774/gym-management",
    thumbnail: "/images/gym_1.png",
    screenshots: ["/images/gym_1.png",
    "/images/gym_2.png",
      "/images/gym_3.png",
      "/images/gym_4.png",
      "/images/gym_5.png",
      ],
  },
  {
    title: "Grocery E-commerce Website",
    description: "An online grocery store with user authentication and cart features.",
    tools: ["Wordpress,Woocommerce,Plugins"],
    github: "https://github.com/ahmerkhan774/grocery-ecommerce",
    thumbnail: "/images/grocery_1.jpg",
    screenshots: ["/images/grocery_1.jpg",
      "/images/grocery_2.png",
      "/images/grocery_3.png"
    ],
  },
  
 
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  return (
    <Box id="projects" sx={{ py: 8, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          fontWeight={700}
          textAlign="center"
          mb={6}
        >
          My Projects
        </Typography>

        <Grid container spacing={4}>
          {projectList.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 3,
                  boxShadow: 3,
                }}
              >
               <CardMedia
  component="img"
  image={project.thumbnail}
  alt={project.title}
  sx={{
    height: 180,
    objectFit: "cover",
    width: "100%",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  }}
/>

                <CardContent>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={2}>
                    {project.description}
                  </Typography>

                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {project.tools.map((tool, i) => (
                      <Chip
                        key={i}
                        label={tool}
                        size="small"
                        color="primary"
                        variant="outlined"
                      />
                    ))}
                  </Box>
                </CardContent>

                <CardActions sx={{ mt: "auto", px: 2, pb: 2 }}>
                  <Button
                    size="small"
                    variant="outlined"
                    startIcon={<ImageIcon />}
                    onClick={() => handleOpen(project)}
                  >
                    Screenshots
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    endIcon={<GitHubIcon />}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Screenshot Modal */}
        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
          <DialogTitle fontWeight={600}>
            {selectedProject?.title} - Screenshots
          </DialogTitle>
          <DialogContent dividers>
            <Typography variant="body1" color="text.secondary" mb={3}>
              {selectedProject?.description}
            </Typography>
            <Slider {...sliderSettings}>
              {selectedProject?.screenshots?.map((src, idx) => (
                <Box
                  key={idx}
                  component="img"
                  src={src}
                  alt={`Screenshot ${idx + 1}`}
                  sx={{
                    width: "100%",
                    maxHeight: 500,
                    borderRadius: 2,
                    objectFit: "contain",
                    boxShadow: 2,
                  }}
                />
              ))}
            </Slider>
          </DialogContent>
        </Dialog>
      </Container>
    </Box>
  );
};

export default Projects;
