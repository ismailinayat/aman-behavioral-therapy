"use client";
import React from "react";
import SectionHeading from "../SectionHeading";
import ServiceFetures from "./ServiceFetures";
import { usePathname } from "next/navigation";

interface Data {
  [key: string]: {
    title: string;
    description: string;
    feature1Heading: string;
    feature1Features: string[];
    feature2Heading: string;
    feature2Features: string[];
  };
}
const data: Data = {
  "assessments-and-evaluations": {
    title: "Assessment and Evaluation",
    description:
      "At Aman Behavioral Agency, we understand that a thorough understanding of an individual's behavioral patterns, strengths, and areas of need is crucial for effective intervention. Our comprehensive assessment process is designed to gather in-depth information to guide the development of a personalized treatment plan.",
    feature1Heading: "What We Offer",
    feature1Features: [
      "Initial Behavioral Assessments to understand baseline behaviors.",
      "Functional Behavior Assessments (FBA) to identify the reasons behind behaviors.",
      "Development of Individualized Treatment Plans based on assessment outcomes.",
    ],

    feature2Heading: "Benefits",
    feature2Features: [
      "Tailored intervention strategies.",
      "Enhanced understanding of individual needs.",
      "Foundation for targeted and effective treatment.",
    ],
  },

  "aba-therapy-programs": {
    title: "ABA Therapy Programs",
    description:
      "Applied Behavior Analysis (ABA) is a research-based approach to understanding behavior and learning. Our ABA Therapy Programs are designed to improve social, communication, and learning skills through positive reinforcement.",
    feature1Heading: "Programs Include",
    feature1Features: [
      "Early Intensive Behavioral Intervention (EIBI) for young children.",
      "Focused ABA for targeted behavior improvement.",
      " Behavior Reduction Programs for challenging behaviors",
    ],

    feature2Heading: "Benefits",
    feature2Features: [
      "Evidence-based approach.",
      "Improves adaptability and learning.",
      "Addresses a wide range of behavioral challenges",
    ],
  },

  "skill-development": {
    title: "Skill Development",
    description:
      "Building essential skills is at the core of achieving independence and enhancing quality of life. Our Skill Development programs focus on cultivating abilities that enable individuals to navigate their daily lives and social environments more effectively.",
    feature1Heading: "Key Areas",
    feature1Features: [
      "Social Skills Training for enhanced interaction.",
      "Adaptive Skills Training for daily living activities.",
      "Task Analysis and Chaining for complex skill development.",
    ],

    feature2Heading: "Benefits",
    feature2Features: [
      "Promotes independence.",
      "Enhances interpersonal connections.",
      "Supports successful navigation of daily activities.",
    ],
  },

  "support-services": {
    title: "Support Services",
    description:
      "Navigating the journey of behavioral improvement is a collaborative effort. Aman Behavioral Agency offers Support Services to ensure individuals and their families have the resources and support needed for success.",
    feature1Heading: "Services Offered",
    feature1Features: [
      "Individualized Education Plan (IEP) Consultation and Support.",
      "Coordination with Other Healthcare Providers.",
      "Advocacy and Community Integration Support.",
      "Respite Care Services for families.",
    ],

    feature2Heading: "Benefits",
    feature2Features: [
      "Comprehensive support system.",
      "Facilitates collaboration with educational and healthcare professionals.",
      "Enhances community integration and well-being.",
    ],
  },

  "therapeutic-approaches": {
    title: "Specialized Therapeutic Approaches",
    description:
      "In addition to traditional ABA techniques, we utilize Specialized Therapeutic Approaches tailored to meet the unique needs of each individual. These methods are selected based on their efficacy and alignment with the person's goals.",
    feature1Heading: "Approaches Include",
    feature1Features: [
      "Verbal Behavior Intervention (VBI).",
      "Pivotal Response Training (PRT).",
      "Discrete Trial Training (DTT).",
      "Natural Environment Training (NET).",
    ],

    feature2Heading: "Benefits",
    feature2Features: [
      "Offers a diverse range of intervention strategies.",
      "Tailored to individual learning styles and needs.",
      "Promotes engagement and motivation",
    ],
  },

  "training-and-development": {
    title: "Training and Development",
    description:
      "Education and empowerment are key to fostering a supportive environment for individuals with behavioral challenges. Our Training and Development programs are designed for professionals, families, and educators to build knowledge and skills in ABA and related areas.",
    feature1Heading: "Programs Offered",
    feature1Features: [
      "Professional Development for ABA Therapists.",
      "Workshops and Seminars for Families and Educators.",
      "Community Awareness and Education Initiatives.",
    ],

    feature2Heading: "Benefits",
    feature2Features: [
      "Enhances understanding and skills in ABA.",
      "Supports a community of informed caregivers and professionals.",
      "Promotes awareness and understanding within the community",
    ],
  },
};
const ServiceDetail = () => {
  const path = usePathname();
  const service = path.split("/")[2];

  const serviceData = data[service];
  console.log(service);
  return (
    <div className="section">
      <SectionHeading text={serviceData.title} />

      <div className="service__detail">
        <p>{serviceData.description}</p>
      </div>

      <div className="service__info">
        <div className="feature__columns">
          <ServiceFetures
            featureHeading={serviceData.feature1Heading}
            features={serviceData.feature1Features}
          />
          <ServiceFetures
            featureHeading={serviceData.feature2Heading}
            features={serviceData.feature2Features}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
