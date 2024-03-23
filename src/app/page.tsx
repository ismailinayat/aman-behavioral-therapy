import About from "@/components/about/About";
import ContactForm from "@/components/contact/ContactForm";
import Hero from "@/components/hero/hero";
import HowItWorks from "@/components/how-it-works/HowItWorks";
import Team from "@/components/out-team/OurTeam";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <Hero image="home" />
      <About />
      <HowItWorks />

      <ContactForm />
    </Box>
  );
}
