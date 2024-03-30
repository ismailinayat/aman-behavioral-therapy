import React from "react";

const SectionDescription = ({ description }: { description: string }) => {
  return (
    <div>
      <p className="description__text">{description}</p>
    </div>
  );
};

export default SectionDescription;
