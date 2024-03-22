import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <Box className="about__container" padding="100px 50px">
      <Grid container spacing={8}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" fontSize={22} marginBottom={3}>
            Aman Behavioral Therapy is an agency committed to the principles of
            Positive Behavior Support (an approach based on principles of
            applied behavior analysis, ABA) to improve not only behavior, but
            also quality of life for the individuals we serve, their families,
            and others who support them.
          </Typography>

          <Typography variant="subtitle1" fontSize={18} lineHeight={"26px"}>
            After an autism diagnosis, Positive Behavior Supports Corporation is
            here to help walk your family through the next steps. We provide
            individualized ABA Therapy for those with autism and related
            disabilities, children and adults, to assist with decreasing
            challenging behaviors and increasing appropriate behaviors and skill
            deficits that will allow the individual to reach their full
            potential. We accept nearly all major insurance companies. Call
            today to speak with one of our professional team members.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
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
                Providing ABA Therapy in home, school, and community settings
              </Typography>
            </Box>
          </Stack>

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
                Supporting families Regionally across the United States and
                Canada
              </Typography>
            </Box>
          </Stack>

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
                Accepting a variety of funding sources including a major health
                care providers
              </Typography>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
