import Image from "next/image";
import React from "react";

const ContactBanner = ({
  TitleIcon,
  titleText,
  bannerInfo,
}: {
  TitleIcon: any;
  titleText: string;
  bannerInfo: string;
}) => {
  return (
    <div className="contact__banner">
      <div className="title">
        <div className="title__icon">
          <TitleIcon />
        </div>
        <div className="title__text">
          <h3>{titleText}</h3>
        </div>
      </div>

      <div className="info">
        <p>{bannerInfo}</p>
      </div>
    </div>
  );
};

export default ContactBanner;
