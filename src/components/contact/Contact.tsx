import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ApartmentIcon from "@mui/icons-material/Apartment";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import ContactForm from "./ContactForm";
const Contact = () => {
  return (
    <Box>
      <Grid container spacing={8} maxWidth="1500px" margin="0 auto">
        <Grid item color={"black"} xs={12} md={6}>
          <Typography
            variant="h2"
            fontWeight={400}
            fontSize="48px"
            marginBottom={4}
          >
            Get in Touch with Aman Behavioral Therapy
          </Typography>
          <Stack direction="row">
            <Box>
              <LocalPhoneIcon color={"secondary"} sx={{ fontSize: "20px" }} />
            </Box>
            <Box fontSize={16} marginLeft={1} marginBottom={3}>
              (111) 111-1111
            </Box>
          </Stack>

          <Stack direction="row">
            <Box>
              <ApartmentIcon color={"secondary"} sx={{ fontSize: "20px" }} />
            </Box>
            <Box fontSize={16} marginLeft={1} marginBottom={3}>
              Corporate Office
            </Box>
          </Stack>

          <Typography fontSize={16}>
            1000 South Fremont Avenue, Unit 85 Building A1 Suite 1122 Alhambra,
            CA 91803-8801
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <ContactForm />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
