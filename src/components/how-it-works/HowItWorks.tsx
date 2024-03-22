import React from "react";
import SectionHeading from "../SectionHeading";
import Image from "next/image";
import { title } from "process";
import { text } from "stream/consumers";
import Step from "./Step";

const HowItWorks = () => {
  return (
    <div className="section">
      <SectionHeading text="How it works" />

      <div className="works__content">
        <Step
          number="1"
          title="Submit Request for ABA Therapy:"
          detail="Basic demographic and medical information is collected."
        />

        <Step
          number="2"
          title="A PBS Corp. team member will connect with you:"
          detail="Our team will respond within 2 business days to provide a status update on your ABA Therapy request."
        />

        <Step
          number="3"
          title="The Authorization Process Begins:"
          detail="PBS Corp’s clinical team will work to secure an initial assessment authorization for ABA Therapy through the funding source provided."
        />

        <Step
          number="4"
          title="Your first visit with a team PBS clinician begins:"
          detail="A behavior analyst will work with you and your loved one to conduct an assessment to address behaviors of concern and collaborate with you to create a behavior intervention plan for on-going ABA Therapy."
        />
      </div>
    </div>
  );
};

export default HowItWorks;
