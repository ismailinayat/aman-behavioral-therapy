import ContactForm from "@/components/contact/ContactForm";
import Hero from "@/components/hero/hero";
import ServiceDetail from "@/components/services/ServiceDetail";
import Services from "@/components/services/services";
import { Box } from "@mui/material";

export default function Home() {
  const data = {
    heroTitle: "Aman Behavioral Therapy",
    heroSubTitle: "Building lifelong resilience through compassionate care",
    heroDescription:
      "At Aman Behavioral Therapy, we are dedicated to fostering lifelong resilience through compassionate care. Our specialized method in providing applied behavior analysis (ABA) therapy, is evidence-based and tailored to help individuals of all ages overcome behavioral challenges in their homes, schools, and communities",
  };

  const contactData = {
    title: "Get in Touch",
    paragraph:
      "We’re here to assist you. If you have any questions, need more information, or are ready to start your journey with Aman Behavioral Agency, don’t hesitate to reach out. Our team is committed to guiding and supporting you every step of the way.",
  };
  return (
    <Box>
      <Hero
        image="services"
        title={data.heroTitle}
        subTitle={data.heroSubTitle}
        description={data.heroDescription}
      />
      <ServiceDetail />
      <ContactForm
        title={contactData.title}
        paragraph={contactData.paragraph}
      />
    </Box>
  );
}
