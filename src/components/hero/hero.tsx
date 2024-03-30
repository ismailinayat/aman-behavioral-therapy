import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Navbar from "../layout/navbar";
import Link from "next/link";

function Hero({ image }: { image: string }) {
  return (
    <Box
      className="hero__container"
      sx={{
        backgroundImage: `linear-gradient(
          to right,
          rgba(0, 0, 0, 0.5),
          rgba(0, 0, 0, 0.5)
        ),
        url(/${image}.webp)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
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
          At Aman Behavioral Therapy, we are dedicated to fostering lifelong
          resilience through compassionate care. Our specialized method in
          providing applied behavior analysis (ABA) therapy, is evidence-based
          and tailored to help individuals of all ages overcome behavioral
          challenges in their homes, schools, and communities
        </Typography>

        <Link href="/contact">
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
        </Link>
      </Box>
    </Box>
  );
}

export default Hero;
