"use client";
import React from "react";
import SectionHeading from "../SectionHeading";
import Step from "./Step";
import AnimatedDiv from "../AnimatedContainer";

const HowItWorks = () => {
  return (
    <div className="section">
      <SectionHeading text="Our Approach" />
      <AnimatedDiv>
        <div className="works__content">
          <Step
            number="1"
            title="Individualized Care"
            detail="Every individual is unique, and so are their needs. We begin with a comprehensive assessment to understand the specific challenges and strengths, based on which we develop a personalized treatment plan."
          />

          <Step
            number="2"
            title="Evidence-Based Methods"
            detail="Our services incorporate the latest research and techniques in Applied Behavior Analysis (ABA), ensuring effective and efficient treatment outcomes."
          />

          <Step
            number="3"
            title="Family and Community Engagement"
            detail="We believe in the power of collaboration. Our programs include parent training, school consultation, and community integration support to foster a supportive environment for our clients."
          />

          <Step
            number="4"
            title="Growth and Learning"
            detail="Discover the difference at Aman Behavioral Agency, where we turn challenges into opportunities for growth and learning."
          />
        </div>
      </AnimatedDiv>
    </div>
  );
};

export default HowItWorks;
