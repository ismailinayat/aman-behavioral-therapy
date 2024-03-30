"use client";
import React from "react";
import SectionHeading from "../SectionHeading";
import SectionDescription from "../section-description";
import ServiceCard from "./ServiceCard";

const desc =
  "At Aman Behavioral Agency, we are dedicated to providing a comprehensive array of services tailored to meet the unique needs of each individual and their families. We understand the importance of a comfortable and familiar environment for the effectiveness of behavioral therapy. Therefore, we are proud to offer in-home therapy services for our programs, bringing personalized support directly to your doorstep.";

const services = [
  {
    title: "Assessments and Evaluations",
    description:
      "Including initial behavioral assessments, Functional Behavior Assessments (FBA), and development of individualized treatment plans.",
  },

  {
    title: "ABA Therapy Programs",
    description:
      "Tailored interventions including Early Intensive Behavioral Intervention (EIBI), Focused ABA, Behavior Reduction Programs, and more.",
  },

  {
    title: "Skill Development",
    description:
      "Focusing on social skills, adaptive skills for daily living, and complex skills development through task analysis and chaining.",
  },

  {
    title: "Support Services",
    description:
      "Including IEP consultation, coordination with healthcare providers, and advocacy for community integration.",
  },

  {
    title: "Therapeutic Approaches",
    description:
      "Such as Verbal Behavior Intervention (VBI), Pivotal Response Training (PRT), Discrete Trial Training (DTT), and Natural Environment Training (NET).",
  },

  {
    title: "Training and Development",
    description:
      "Offering professional development for therapists, workshops for families, and community awareness initiatives.",
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
          Our suite of services includes:
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
