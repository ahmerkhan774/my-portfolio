import React from "react";
import { Box, Grid, Typography, Card, CardMedia, CardContent, Button, Container } from "@mui/material";

const certificates = [
  {
    title: "WordPress",
    description: "Issued by XistIt Software Agency",
    image: "/certificates/wordpress_certificate.png",
    link: "/certificates/wordpress_certificate.png",
  },
  // You can add more certificates here
];

const Certifications = () => {
  return (
    <Box id="certifications" sx={{ py: 8, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          align="center"
          fontWeight={600}
          gutterBottom
        >
          Certifications
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {certificates.map((cert, index) => (
            <Grid item xs={12} sm={8} md={6} key={index}>
              <Card sx={{ borderRadius: 2, textAlign: "center" }}>
                <CardMedia
                  component="img"
                  image={cert.image}
                  alt={cert.title}
                  sx={{
                    height: 300,
                    objectFit: "contain",
                    p: 2,
                    mx: "auto", // center horizontally
                  }}
                />
                <CardContent>
                  <Typography variant="h6" fontWeight={600}>
                    {cert.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={2}>
                    {cert.description}
                  </Typography>
                  <Button
                    variant="contained"
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Certifications;
