"use client";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import SectionHeading from "../SectionHeading";
import AnimatedDiv from "../AnimatedContainer";

const About = () => {
  // const [isVisible, setIsVisible] = useState(false);
  // const elementRef = useRef(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         setIsVisible(true);
  //         observer.unobserve(entry.target);
  //       }
  //     });
  //   });

  //   if (elementRef.current) {
  //     observer.observe(elementRef.current);
  //   }

  //   return () => {
  //     if (elementRef.current) {
  //       observer.unobserve(elementRef.current);
  //     }
  //   };
  // }, []);

  return (
    <div className="section">
      <SectionHeading text="Welcome to Aman Behavioral Agency" />
      <Grid container gap={8} justifyContent="space-between">
        <Grid item xs={12} md={5.5}>
          <Typography variant="body1" fontSize={22} marginBottom={3}>
            At Aman Behavioral Agency, we are committed to providing exceptional
            care and comprehensive support to individuals with behavioral
            challenges. Our dedicated team of professionals uses evidence-based
            practices to offer a range of services tailored to meet the unique
            needs of each client. We believe in empowering individuals and their
            families through education, skill development, and ongoing support
            to achieve meaningful and lasting changes. Explore our services to
            find out how we can help you or your loved one navigate the path to
            improved behavior and enhanced quality of life.
          </Typography>

          {/* <Typography variant="subtitle1" fontSize={18} lineHeight={"26px"}>
            Following an autism diagnosis, Positive Behavior Supports
            Corporation stands ready to guide your family through the next
            stages. We offer personalized ABA Therapy tailored to individuals
            with autism and related disabilities, spanning children to adults.
            Our aim is to reduce challenging behaviors while enhancing
            appropriate behaviors and addressing skill deficits, empowering
            individuals to achieve their utmost potential. We accept a wide
            range of major insurance providers. Reach out today to connect with
            one of our experienced team members.
          </Typography> */}
        </Grid>
        <Grid item xs={12} md={5.5}>
          <AnimatedDiv>
            <Stack
              direction="row"
              spacing={4}
              marginBottom={8}
              maxWidth={"600px"}
            >
              <Box>
                <Image
                  src="/icons/about-1.png"
                  width={50}
                  height={50}
                  alt="hand icon"
                ></Image>
              </Box>
              <Box>
                <Typography
                  variant="h3"
                  fontSize={19}
                  lineHeight={"24px"}
                  fontWeight={700}
                >
                  Delivering ABA Therapy across home, school, and community
                  environments.
                </Typography>
              </Box>
            </Stack>
          </AnimatedDiv>
          <AnimatedDiv>
            <Stack
              direction="row"
              spacing={4}
              marginBottom={8}
              maxWidth={"600px"}
            >
              <Box>
                <Image
                  src="/icons/about-2.png"
                  width={50}
                  height={50}
                  alt="hand icon"
                ></Image>
              </Box>
              <Box>
                <Typography
                  variant="h3"
                  fontSize={19}
                  lineHeight={"24px"}
                  fontWeight={700}
                >
                  Providing extensive support to families in Northern
                  California.
                </Typography>
              </Box>
            </Stack>
          </AnimatedDiv>
          <AnimatedDiv>
            <Stack direction="row" spacing={4} maxWidth={"600px"}>
              <Box>
                <Image
                  src="/icons/about-3.png"
                  width={50}
                  height={50}
                  alt="hand icon"
                ></Image>
              </Box>
              <Box>
                <Typography
                  variant="h3"
                  fontSize={19}
                  lineHeight={"24px"}
                  fontWeight={700}
                >
                  Accepting various funding sources, including major healthcare
                  providers.
                </Typography>
              </Box>
            </Stack>
          </AnimatedDiv>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
