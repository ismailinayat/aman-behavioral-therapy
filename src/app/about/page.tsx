import AboutMain from "@/components/about-main/AboutMain";
import ContactForm from "@/components/contact/ContactForm";
import Hero from "@/components/hero/hero";
import Team from "@/components/out-team/OurTeam";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <Hero image="about" />
      <AboutMain />
      <Team />
      <ContactForm />
    </Box>
  );
}
