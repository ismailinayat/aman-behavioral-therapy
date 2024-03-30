import { stringToSlug } from "@/utils";
import React from "react";

const ServiceCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const slug = stringToSlug(title);
  return (
    <div className="card">
      <div className="card__details">
        <h4 className="card__heading">{title}</h4>
        <p>{description}</p>
      </div>

      <div className="card__cta">
        <a href={`services/${slug}`} className="btn-text">
          More Details
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
