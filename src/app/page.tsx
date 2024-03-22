import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import ContactForm from "@/components/contact/ContactForm";
import Hero from "@/components/hero/hero";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <Hero />
      <About />
      <ContactForm />
      {/* <Contact /> */}
    </Box>
  );
}
