"use client";
import React from "react";
import SectionHeading from "../SectionHeading";
import Step from "./Step";
import AnimatedDiv from "../AnimatedContainer";

const HowItWorks = () => {
  return (
    <div className="section">
      <SectionHeading text="How it works" />
      <AnimatedDiv>
        <div className="works__content">
          <Step
            number="1"
            title="Initiate ABA Therapy Request Submission:"
            detail="Essential demographic and medical details are gathered."
          />

          <Step
            number="2"
            title="A team member of ABT will connect with you:"
            detail="Our team will respond within 2 business days to provide a status update on your ABA Therapy request."
          />

          <Step
            number="3"
            title="The Authorization Process Begins:"
            detail="ABT clinical team will work to secure an initial assessment authorization for ABA Therapy through the funding source provided."
          />

          <Step
            number="4"
            title="Your first visit with a team ABT clinician begins:"
            detail="A behavior analyst will work with you and your loved one to conduct an assessment to address behaviors of concern and collaborate with you to create a behavior intervention plan for on-going ABA Therapy."
          />
        </div>
      </AnimatedDiv>
    </div>
  );
};

export default HowItWorks;
