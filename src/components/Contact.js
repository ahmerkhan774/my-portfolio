import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  TextField,
  Button,
  Stack,
  Link,
  Paper,
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";
import MessageIcon from "@mui/icons-material/Message";

const Contact = () => {
  return (
    <Box id="contact" sx={{ py: 10, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h6"
            component="h2"
            color="text.secondary"
            fontWeight={600}
            gutterBottom
          >
            CONTACT ME
          </Typography>
          <Typography variant="h4" component="h3" fontWeight={700}>
            Get in Touch
          </Typography>
        </Box>

        <Paper elevation={3} sx={{ p: { xs: 3, md: 5 }, borderRadius: 4 }}>
          <Grid container spacing={6} alignItems="stretch">
            {/* Contact Info (Left) */}
            <Grid item xs={12} md={5}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                height="100%"
              >
                <Stack direction="row" alignItems="center" spacing={1} mb={3}>
                  <MessageIcon color="primary" sx={{ fontSize: 30 }} />
                  <Typography variant="h5" fontWeight={600}>
                    Send me a Message
                  </Typography>
                </Stack>

                <Typography variant="body1" color="text.secondary" mb={4}>
                  Whether you want to collaborate, ask a question, or just say hi — feel
                  free to reach out!
                </Typography>

                <Stack direction="row" alignItems="center" spacing={2} mb={2}>
                  <PhoneIcon color="primary" />
                  <Link href="tel:+923259102119" color="inherit" underline="hover">
                    <Typography variant="body1">+92 325 9102119</Typography>
                  </Link>
                </Stack>

                <Stack direction="row" alignItems="center" spacing={2} mb={2}>
                  <EmailIcon color="primary" />
                  <Link
                    href="mailto:khanahmer774@gmail.com"
                    color="inherit"
                    underline="hover"
                  >
                    <Typography variant="body1">khanahmer774@gmail.com</Typography>
                  </Link>
                </Stack>

                <Stack direction="row" alignItems="center" spacing={2}>
                  <LocationOnIcon color="primary" />
                  <Typography variant="body1">Abbottabad, Pakistan</Typography>
                </Stack>
              </Box>
            </Grid>

            {/* Contact Form (Right) */}
            <Grid item xs={12} md={7}>
              <Typography variant="h5" fontWeight={600} mb={3}>
                Contact Form
              </Typography>
              <Stack spacing={3}>
                <TextField
                  label="Name"
                  fullWidth
                  variant="outlined"
                  name="name"
                />
                <TextField
                  label="Email"
                  fullWidth
                  variant="outlined"
                  name="email"
                  type="email"
                />
                <TextField
                  label="Message"
                  fullWidth
                  variant="outlined"
                  name="message"
                  multiline
                  rows={6}
                />
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<SendIcon />}
                  sx={{ alignSelf: "flex-start", py: 1.5, px: 4 }}
                >
                  Send Message
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default Contact;
