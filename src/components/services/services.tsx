"use client";
import React from "react";
import SectionHeading from "../SectionHeading";
import SectionDescription from "../section-description";
import ServiceCard from "./ServiceCard";

const desc =
  "At Aman Behavioral Agency, we offer a wide range of services designed to meet the unique needs of individuals and their families. We recognize the importance of comfort and familiarity in effective behavioral therapy, which is why we proudly provide in-home therapy services, bringing personalized care directly to you.";

const services = [
  {
    title: "Assessments and Evaluations",
    description:
      "We conduct comprehensive assessments, including initial behavioral assessments, Functional Behavior Assessments (FBA), and the creation of individualized treatment plans.",
  },

  {
    title: "ABA Therapy Programs",
    description:
      "We offer tailored interventions such as Early Intensive Behavioral Intervention (EIBI), Focused ABA, behavior reduction programs, and more.",
  },

  {
    title: "Skill Development",
    description:
      "Our programs emphasize the development of social skills, adaptive skills for daily living, and complex skill-building using task analysis and chaining techniques.",
  },

  {
    title: "Support Services",
    description:
      "We provide services like IEP consultation, coordination with healthcare providers, and advocacy for successful community integration.",
  },

  {
    title: "Therapeutic Approaches",
    description:
      "Our therapeutic techniques include Verbal Behavior Intervention (VBI), Pivotal Response Training (PRT), Discrete Trial Training (DTT), and Natural Environment Training (NET).",
  },

  {
    title: "Training and Development",
    description:
      "We offer professional development for therapists, family workshops, and initiatives to raise community awareness.",
  },
];
const Services = () => {
  return (
    <div className="section">
      <SectionHeading text="Our Services" />
      <SectionDescription description={desc} />
      <div className="services__includes">
        <h3
          style={{ marginTop: "20px", marginBottom: "20px", fontSize: "20px" }}
        >
          Our services includes:
        </h3>
      </div>
      <div className="services__container">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
