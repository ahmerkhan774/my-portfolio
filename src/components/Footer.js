import React from "react";
import {
  Box,
  Typography,
  Container,
  Link,
  Stack,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <Box sx={{ py: 4, backgroundColor: "#111", color: "#fff", mt: 8 }}>
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography variant="body1" gutterBottom>
          <span>Email at: khanahmer774@gmail.com</span>
          <br />
          © {new Date().getFullYear()} Ahmer Khan. All rights reserved.
        </Typography>

        <Typography variant="body2" mb={2}>
          Built with{" "}
          <Link
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
            underline="hover"
          >
            Next.js
          </Link>{" "}
          &{" "}
          <Link
            href="https://mui.com"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
            underline="hover"
          >
            Material UI
          </Link>
        </Typography>

        {/* Social Icons */}
        <Stack direction="row" spacing={2} justifyContent="center">
          <IconButton
            href="https://github.com/ahmerkhan774"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            <GitHubIcon />
          </IconButton>

          <IconButton
            href="https://www.linkedin.com/in/ahmer-khan-669085296"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            <LinkedInIcon />
          </IconButton>

          <IconButton
            href="mailto:khanahmer774@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            <EmailIcon />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
