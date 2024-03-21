import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Navbar from "../layout/navbar";
import Image from "next/image";

function Hero() {
  return (
    <Box className="hero__container">
      <Navbar></Navbar>
      <Image className="hero__image" src="/hero.jpg" fill alt="hero image" />
      <Box className="hero__content">
        <Typography variant="h1" fontSize={50} fontWeight={700}>
          Aman Behavioral Therapy
        </Typography>
        <Typography variant="h3" my={2} fontSize={30} fontWeight={600}>
          Creating quality of life outcomes that last
        </Typography>
        <Typography variant="body1" fontSize={18}>
          Positive Behavior Supports Corporation embraces a specific approach to
          delivery of applied behavior analysis (ABA) therapy: Positive behavior
          support (PBS) which is a research-based approach to supporting people
          of all ages with behavioral challenges in home, school, and community
          settings.
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{
            borderRadius: "50px",
            marginTop: 2,
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