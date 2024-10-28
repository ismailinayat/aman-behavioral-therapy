import About from "@/components/about/About";
import ContactForm from "@/components/contact/ContactForm";
import Hero from "@/components/hero/hero";
import HowItWorks from "@/components/how-it-works/HowItWorks";
import Team from "@/components/out-team/OurTeam";
import { Box } from "@mui/material";

export default function Home() {
  const data = {
    heroTitle: "Aman Behavioral Agency",
    heroSubTitle: "Building lifelong resilience through compassionate care",
    heroDescription:
      "At Aman Behavioral Agency, we are dedicated to fostering lifelong resilience through compassionate care. Our specialized method in providing applied behavior analysis (ABA) therapy, is evidence-based and tailored to help individuals of all ages overcome behavioral challenges in their homes, schools, and communities",
  };

  const contactData = {
    title: "Contact Us",
    paragraph:
      "We are here to help. Whether you have questions, need more information, or are ready to start the journey with Aman Behavioral Agency, we invite you to reach out to us. Our team is dedicated to providing the support and guidance you need.",
  };
  return (
    <Box>
      <Hero
        image="home"
        title={data.heroTitle}
        subTitle={data.heroSubTitle}
        description={data.heroDescription}
      />
      <About />
      <HowItWorks />

      <ContactForm
        title={contactData.title}
        paragraph={contactData.paragraph}
      />
    </Box>
  );
}
