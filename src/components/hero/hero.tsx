import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Navbar from "../layout/navbar";
import Link from "next/link";

function Hero({
  image,
  title,
  subTitle,
  description,
}: {
  image: string;
  title: string;
  subTitle: string;
  description: string;
}) {
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
          {title}
        </Typography>
        <Typography
          variant="h3"
          my={2}
          fontSize={30}
          fontWeight={600}
          className="hero__text--secondary"
        >
          {subTitle}
        </Typography>
        <Typography
          variant="body1"
          fontSize={18}
          className="hero__text--paragraph"
        >
          {description}
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
