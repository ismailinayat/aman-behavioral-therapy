import React from "react";

const ServiceFetures = ({
  featureHeading,
  features,
}: {
  featureHeading: string;
  features: string[];
}) => {
  return (
    <div className="service__features">
      <div className="feature__heading">
        <h3>{featureHeading}</h3>
      </div>
      <ul className="list">
        {features.map((featrue, index) => (
          <li className="list__items" key={index}>
            {featrue}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceFetures;
