import ContactPage from "@/components/ContactPage/ContactPage";
import Hero from "@/components/hero/hero";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <Hero image="hero-6" />
      <ContactPage />
    </Box>
  );
}
