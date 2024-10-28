import AboutMain from "@/components/about-main/AboutMain";
import ContactForm from "@/components/contact/ContactForm";
import Hero from "@/components/hero/hero";
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
    title: "Get in Touch",
    paragraph:
      "We’re here to assist you. If you have any questions or need more information, or if you're ready to begin your journey with Aman Behavioral Agency, don’t hesitate to reach out. We are committed to providing the support and guidance you need.",
  };
  return (
    <Box>
      <Hero
        image="about"
        title={data.heroTitle}
        subTitle={data.heroSubTitle}
        description={data.heroDescription}
      />
      <AboutMain />
      {/* <Team /> */}
      <ContactForm
        title={contactData.title}
        paragraph={contactData.paragraph}
      />
    </Box>
  );
}
