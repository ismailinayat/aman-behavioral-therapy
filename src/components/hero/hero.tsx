import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Navbar from "../layout/navbar";
import Image from "next/image";

function Hero() {
  return (
    <Box className="hero__container">
      <Navbar></Navbar>

      <Box
        className="hero__content"
        // sx={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
      >
        <Typography
          variant="h1"
          fontSize={50}
          fontWeight={700}
          className="hero__text--primary"
        >
          Aman Behavioral Therapy
        </Typography>
        <Typography
          variant="h3"
          my={2}
          fontSize={30}
          fontWeight={600}
          className="hero__text--secondary"
        >
          Building lifelong resilience through compassionate care
        </Typography>
        <Typography
          variant="body1"
          fontSize={18}
          className="hero__text--paragraph"
        >
          Positive Behavior Supports Corporation adopts a specialized method in
          administering applied behavior analysis (ABA) therapy known as
          Positive Behavior Support (PBS). This evidence-based approach is
          dedicated to assisting individuals of various ages who face behavioral
          difficulties across home, school, and community environments.
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{
            borderRadius: "50px",
            marginTop: 4,
            fontSize: 16,
            width: "200px",
            backgroundColor: "primary.main",
            color: "white",
            textTransform: "none",
          }}
        >
          Get In Touch
        </Button>
      </Box>
    </Box>
  );
}

export default Hero;
