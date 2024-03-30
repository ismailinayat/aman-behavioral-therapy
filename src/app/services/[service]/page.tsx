import ContactForm from "@/components/contact/ContactForm";
import Hero from "@/components/hero/hero";
import ServiceDetail from "@/components/services/ServiceDetail";
import Services from "@/components/services/services";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <Hero image="services" />
      <ServiceDetail />
      <ContactForm />
    </Box>
  );
}
