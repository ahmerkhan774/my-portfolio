import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from "@mui/material";

const navItems = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <AppBar
      position="sticky"
      elevation={3}
      sx={{
        backgroundColor: "#111",
        zIndex: (theme) => theme.zIndex.drawer + 1, // stays on top
      }}
    >
      <Container>
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            fontWeight={700}
            sx={{ cursor: "pointer" }}
            onClick={() => handleScroll("hero")}
          >
            Ahmer Khan
          </Typography>
          <Box>
            {navItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                color="inherit"
                sx={{
                  ml: 2,
                  textTransform: "none",
                  fontWeight: 500,
                  "&:hover": {
                    color: "secondary.main",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
